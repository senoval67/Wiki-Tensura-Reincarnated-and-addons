// js/bosses.js

let currentBossId = null; // <--- ЗАПОМИНАЕМ ОТКРЫТОГО БОССА
let evoDirection = 'horizontal';

document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('bosses-container');
    if (!container) return;

    const pageTitle = document.querySelector('#bosses-list-view h2');
    if (pageTitle) pageTitle.textContent = t('boss_list_title');

    renderBosses();

    const urlParams = new URLSearchParams(window.location.search);
    const bossParam = urlParams.get('boss');
    if (bossParam) {
        showBossDetail(bossParam);
    }
});

window.addEventListener('languageChanged', () => {
    if (document.getElementById('bosses-container')) {
        const pageTitle = document.querySelector('#bosses-list-view h2');
        if (pageTitle) pageTitle.textContent = t('boss_list_title');

        renderBosses();
        
        // Если открыт босс, перерисовываем его на месте
        if (currentBossId) {
            showBossDetail(currentBossId, true); 
        }
    }
});

function renderBosses() {
    const container = document.getElementById('bosses-container');
    container.innerHTML = '';
    bossesData.forEach(boss => {
        const card = document.createElement('div');
        card.className = `skill-card ${boss.tier}`;
        card.onclick = () => showBossDetail(boss.id);
        
        const displayName = currentLang === 'en' ? boss.en : boss.ru;

        card.innerHTML = `
            <div class="skill-icon">${boss.icon.includes('.') || boss.icon.includes('/') 
                ? `<img src="${boss.icon}" alt="${displayName}">` 
                : boss.icon}</div>
            <div class="skill-info">
                <span class="skill-ru">${displayName}</span>
                ${currentLang === 'ru' ? `<span class="skill-en">${boss.en}</span>` : ''}
            </div>
        `;
        container.appendChild(card);
    });
}

function handleBossSkillLink(event, skillName) {
    event.preventDefault();
    const skill = skillsData.find(s => 
        s.ru.toLowerCase() === skillName.toLowerCase() || 
        s.en.toLowerCase() === skillName.toLowerCase() || 
        s.id.toLowerCase() === skillName.toLowerCase()
    );
    if (skill) {
        window.location.href = `skills.html?skill=${skill.id}`;
    } else {
        const wikiUrl = `https://tensura.wiki.gg/wiki/Abilities/Skills/${encodeURIComponent(skillName.replace(/ /g, '_'))}`;
        window.open(wikiUrl, '_blank');
    }
}

function goToBoss(event, bossId) {
    if(event) event.preventDefault();
    showBossDetail(bossId);
}

function renderEvolutionGraph(currentBoss) {
    if (!currentBoss.infobox || (!currentBoss.infobox.prev && !currentBoss.infobox.next)) return '';

    let leftNodes = currentBoss.infobox.prev || [];
    let rightNodes = currentBoss.infobox.next || [];
    let middleNode = { id: currentBoss.id, ru: currentLang === 'en' ? currentBoss.en : currentBoss.ru, tier: currentBoss.tier };

    if (leftNodes.length === 0 && rightNodes.length > 0) {
        let nextTarget = bossesData.find(s => s.id === rightNodes[0].id);
        if (nextTarget && nextTarget.infobox && nextTarget.infobox.prev && nextTarget.infobox.prev.length > 1) leftNodes = nextTarget.infobox.prev;
    }
    if (rightNodes.length === 0 && leftNodes.length > 0) {
        let prevTarget = bossesData.find(s => s.id === leftNodes[0].id);
        if (prevTarget && prevTarget.infobox && prevTarget.infobox.next && prevTarget.infobox.next.length > 1) rightNodes = prevTarget.infobox.next;
    }
    if (leftNodes.some(n => n.id === currentBoss.id) && rightNodes.length > 0) {
        middleNode = rightNodes[0];
        let middleBossData = bossesData.find(s => s.id === middleNode.id);
        rightNodes = (middleBossData && middleBossData.infobox && middleBossData.infobox.next) ? middleBossData.infobox.next : [];
    }
    if (leftNodes.length === 0 && rightNodes.length === 0) return '';

    let html = `
        <div class="evo-section">
            <div class="evo-header-controls">
                <h3>${t('evo_scheme')}</h3>
                <div class="evo-toggle">
                    <button onclick="setEvoDir('horizontal', this)" class="${evoDirection === 'horizontal' ? 'active' : ''}">${t('evo_horizontal')}</button>
                    <button onclick="setEvoDir('vertical', this)" class="${evoDirection === 'vertical' ? 'active' : ''}">${t('evo_vertical')}</button>
                </div>
            </div>
            <div class="evo-graph-wrapper ${evoDirection}" id="evo-graph-${currentBoss.id}">
    `;

    if (leftNodes.length > 0) {
        html += `<div class="evo-level">`;
        leftNodes.forEach(node => {
            const isCurrent = node.id === currentBoss.id;
            const cls = isCurrent ? 'evo-current' : '';
            html += `<div class="evo-node-wrapper" id="node-${node.id}"><div class="evo-node ${node.tier} ${cls}" onclick="${isCurrent ? '' : `goToBoss(event, '${node.id}')`}">${node.ru}</div></div>`;
        });
        html += `</div>`;
    }

    html += `<div class="evo-level">`;
    const isCurrent = middleNode.id === currentBoss.id;
    const cls = isCurrent ? 'evo-current' : '';
    html += `<div class="evo-node-wrapper" id="node-${middleNode.id}"><div class="evo-node ${middleNode.tier} ${cls}" onclick="${isCurrent ? '' : `goToBoss(event, '${middleNode.id}')`}">${middleNode.ru}</div></div>`;
    html += `</div>`;

    if (rightNodes.length > 0) {
        html += `<div class="evo-level">`;
        rightNodes.forEach(node => {
            const isCurrent = node.id === currentBoss.id;
            const cls = isCurrent ? 'evo-current' : '';
            html += `<div class="evo-node-wrapper" id="node-${node.id}"><div class="evo-node ${node.tier} ${cls}" onclick="${isCurrent ? '' : `goToBoss(event, '${node.id}')`}">${node.ru}</div></div>`;
        });
        html += `</div>`;
    }
    html += `</div></div>`;
    setTimeout(() => drawBossSVGLines(currentBoss.id), 10);
    return html;
}

function setEvoDir(dir, btn) {
    evoDirection = dir;
    document.querySelectorAll('.evo-toggle button').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const wrapper = document.querySelector('.evo-graph-wrapper');
    if (!wrapper) return;
    wrapper.classList.remove('horizontal', 'vertical');
    wrapper.classList.add(dir);
    const currentId = wrapper.id.replace('evo-graph-', '');
    setTimeout(() => drawBossSVGLines(currentId), 10);
}

function drawBossSVGLines(currentId) {
    const wrapper = document.getElementById(`evo-graph-${currentId}`);
    if (!wrapper) return;
    const oldSvg = wrapper.querySelector('svg');
    if (oldSvg) oldSvg.remove();

    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.style.position = 'absolute'; svg.style.top = '0'; svg.style.left = '0';
    svg.style.width = wrapper.scrollWidth + 'px'; svg.style.height = wrapper.scrollHeight + 'px';
    svg.style.pointerEvents = 'none'; svg.style.zIndex = '1';

    const defs = document.createElementNS('http://www.w3.org/2000/svg', 'defs');
    const marker = document.createElementNS('http://www.w3.org/2000/svg', 'marker');
    marker.setAttribute('id', 'arrowhead'); marker.setAttribute('markerWidth', '10'); marker.setAttribute('markerHeight', '7');
    marker.setAttribute('refX', '9'); marker.setAttribute('refY', '3.5'); marker.setAttribute('orient', 'auto');
    const poly = document.createElementNS('http://www.w3.org/2000/svg', 'polygon');
    poly.setAttribute('points', '0 0, 10 3.5, 0 7'); poly.setAttribute('fill', '#888');
    marker.appendChild(poly); defs.appendChild(marker); svg.appendChild(defs);

    const wrapperRect = wrapper.getBoundingClientRect();
    const scrollLeft = wrapper.scrollLeft; const scrollTop = wrapper.scrollTop;
    const allNodes = wrapper.querySelectorAll('.evo-node-wrapper');

    allNodes.forEach(wrapperNode => {
        const nodeId = wrapperNode.id.replace('node-', '');
        const boss = bossesData.find(s => s.id === nodeId);
        if (boss && boss.infobox && boss.infobox.next) {
            boss.infobox.next.forEach(nextData => {
                const targetEl = wrapper.querySelector(`#node-${nextData.id}`);
                if (targetEl) {
                    const startRect = wrapperNode.getBoundingClientRect();
                    const endRect = targetEl.getBoundingClientRect();
                    let x1, y1, x2, y2;
                    if (evoDirection === 'horizontal') {
                        x1 = startRect.right - wrapperRect.left + scrollLeft;
                        y1 = startRect.top + startRect.height / 2 - wrapperRect.top + scrollTop;
                        x2 = endRect.left - wrapperRect.left + scrollLeft;
                        y2 = endRect.top + endRect.height / 2 - wrapperRect.top + scrollTop;
                    } else {
                        x1 = startRect.left + startRect.width / 2 - wrapperRect.left + scrollLeft;
                        y1 = startRect.bottom - wrapperRect.top + scrollTop;
                        x2 = endRect.left + endRect.width / 2 - wrapperRect.left + scrollLeft;
                        y2 = endRect.top - wrapperRect.top + scrollTop;
                    }
                    const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
                    line.setAttribute('x1', x1); line.setAttribute('y1', y1); line.setAttribute('x2', x2); line.setAttribute('y2', y2);
                    line.setAttribute('stroke', '#888'); line.setAttribute('stroke-width', '2'); line.setAttribute('marker-end', 'url(#arrowhead)');
                    svg.appendChild(line);
                }
            });
        }
    });
    wrapper.insertBefore(svg, wrapper.firstChild);
}

// ФУНКЦИЯ ОТОБРАЖЕНИЯ БОССА
function showBossDetail(bossId, keepScroll = false) {
    const boss = bossesData.find(b => b.id === bossId);
    if (!boss) return;

    currentBossId = bossId; // Запоминаем
    const listView = document.getElementById('bosses-list-view');
    const detailView = document.getElementById('boss-detail-view');
    const detailContent = document.getElementById('boss-detail-content');

    const backBtn = document.querySelector('#boss-detail-view > .back-btn');
    if (backBtn) backBtn.textContent = t('back_bosses');

    const color = "#ff0055"; 
    let externalWikiUrl = `https://tensura.wiki.gg/wiki/Mobs/${boss.en.replace(/ /g, '_')}`;
    const displayRu = currentLang === 'en' ? boss.en : boss.ru;

    let infoboxHTML = '';
    if (boss.infobox) {
        infoboxHTML = `
            <div class="skill-infobox" style="border-color: ${color};">
                <div class="infobox-header" style="background-color: ${color}22; border-color: ${color};">${boss.en}</div>
                <div class="infobox-image-container" style="border-color: ${color};">
                    ${boss.icon.includes('.') || boss.icon.includes('/') 
                        ? `<img src="${boss.icon}" alt="${displayRu}">` 
                        : `<span class="emoji-fallback">${boss.icon}</span>`}
                </div>
                
                <div class="infobox-section-title" style="background-color: ${color}44; border-color: ${color};">${t('info')}</div>
                ${boss.infobox.type ? `<div class="infobox-row"><div class="infobox-label">${t('type')}</div><div class="infobox-value">${getLocalized(boss.infobox, 'type')}</div></div>` : ''}
                ${boss.infobox.hp ? `<div class="infobox-row"><div class="infobox-label">${t('hp')}</div><div class="infobox-value">${boss.infobox.hp}</div></div>` : ''}
                ${boss.infobox.ep ? `<div class="infobox-row"><div class="infobox-label">${t('ep')}</div><div class="infobox-value">${boss.infobox.ep}</div></div>` : ''}
                ${boss.infobox.location ? `<div class="infobox-row"><div class="infobox-label">${t('location')}</div><div class="infobox-value">${getLocalized(boss.infobox, 'location')}</div></div>` : ''}
                
                ${boss.infobox.obtain ? `
                <div class="infobox-section-title" style="background-color: ${color}44; border-color: ${color};">${t('summon')}</div>
                <div class="infobox-row"><div class="infobox-label">${t('method')}</div><div class="infobox-value">${getLocalized(boss.infobox, 'obtain')}</div></div>
                ` : ''}
                
                ${boss.infobox.drops ? `
                <div class="infobox-section-title" style="background-color: ${color}44; border-color: ${color};">${t('drops')}</div>
                <div class="infobox-row"><div class="infobox-label">${t('items')}</div><div class="infobox-value">${getLocalized(boss.infobox, 'drops')}</div></div>
                ` : ''}
            </div>
        `;
    }

    const displayDesc = currentLang === 'en' ? (boss.desc_en || boss.desc) : boss.desc;

    detailContent.innerHTML = `
        <div class="skill-detail-layout">
            <div class="skill-main-content">
                <div class="skill-header-flex">
                    <h1>${displayRu}</h1>
                    <a href="${externalWikiUrl}" target="_blank" class="wiki-btn">${t('wiki_btn')}</a>
                </div>
                ${currentLang === 'ru' ? `<p style="color: var(--text-muted); margin-bottom: 20px;"><em>${boss.en}</em></p>` : ''}
                <div class="skill-detail-description">
                    ${displayDesc}
                </div>
                ${renderEvolutionGraph(boss)}
            </div>
            ${infoboxHTML}
        </div>
    `;

    listView.classList.add('hidden');
    detailView.classList.remove('hidden');
    
    if (!keepScroll && !document.querySelector('.evo-graph-wrapper')) {
        window.scrollTo(0, 0);
    }
}

function showBossListView() {
    currentBossId = null; // Сбрасываем при возврате к списку
    const listView = document.getElementById('bosses-list-view');
    const detailView = document.getElementById('boss-detail-view');
    detailView.classList.add('hidden');
    listView.classList.remove('hidden');
    window.history.pushState({}, document.title, window.location.pathname);
    window.scrollTo(0, 0);
}