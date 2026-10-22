// js/skills.js

const skillTiers = [
    { id: "resistances", name: "Resistances", ruName: "Сопротивления", color: "#a0a0a0" }, 
    { id: "intrinsic", name: "Intrinsic", ruName: "Врожденные", color: "#1e90ff" },      
    { id: "common", name: "Common", ruName: "Обычные", color: "#32cd32" },               
    { id: "extra", name: "Extra", ruName: "Дополнительные", color: "#ffd700" },          
    { id: "unique", name: "Unique", ruName: "Уникальные", color: "#ff8c00" },            
    { id: "ultimate", name: "Ultimate", ruName: "Ультимативные", color: "#ff0000" }      
];

let currentTier = null;
let currentSkillId = null;
let evoDirection = 'horizontal';

// --- УМНЫЙ РЕЗОЛВЕР СВЯЗЕЙ ---
function resolveSkillLinks() {
    if (typeof skillsData === 'undefined') return;
    
    skillsData.forEach(skill => {
        if (!skill.infobox) skill.infobox = {};
        
        if (skill.infobox.next) {
            skill.infobox.next.forEach(nextRef => {
                const target = skillsData.find(s => s.id === nextRef.id);
                if (target) {
                    if (!target.infobox) target.infobox = {};
                    if (!target.infobox.prev) target.infobox.prev = [];
                    if (!target.infobox.prev.some(p => p.id === skill.id)) {
                        target.infobox.prev.push({ 
                            id: skill.id, 
                            ru: skill.ru || skill.id, 
                            tier: skill.tier || 'other' 
                        });
                    }
                }
            });
        }
        
        if (skill.infobox.prev) {
            skill.infobox.prev.forEach(prevRef => {
                const target = skillsData.find(s => s.id === prevRef.id);
                if (target) {
                    if (!target.infobox) target.infobox = {};
                    if (!target.infobox.next) target.infobox.next = [];
                    if (!target.infobox.next.some(n => n.id === skill.id)) {
                        target.infobox.next.push({ 
                            id: skill.id, 
                            ru: skill.ru || skill.id, 
                            tier: skill.tier || 'other' 
                        });
                    }
                }
            });
        }
    });
}

function initTabs() {
    const tabsContainer = document.getElementById('tier-tabs');
    if (!tabsContainer) return;
    tabsContainer.innerHTML = '';
    skillTiers.forEach(tier => {
        const btn = document.createElement('button');
        btn.className = `tab-btn ${tier.id === currentTier ? 'active' : ''}`;
        btn.textContent = currentLang === 'ru' ? tier.ruName : tier.name;
        btn.style.setProperty('--tier-color', tier.color);
        btn.onclick = () => {
            currentTier = tier.id;
            updateTabs();
            renderSkills();
        };
        tabsContainer.appendChild(btn);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    if (!document.getElementById('skills-container')) return;
    
    resolveSkillLinks();

    const pageTitle = document.querySelector('#skills-list-view h2');
    if (pageTitle) pageTitle.textContent = t('skill_list_title');

    initTabs();
    renderSkills();

    const urlParams = new URLSearchParams(window.location.search);
    const skillParam = urlParams.get('skill');
    if (skillParam) {
        const skill = skillsData.find(s => s.id === skillParam);
        if (skill) {
            currentTier = skill.tier; 
            updateTabs();
            renderSkills();
            showDetail(skillParam, true);
        }
    }
});

window.addEventListener('languageChanged', () => {
    if (document.getElementById('skills-container')) {
        resolveSkillLinks();

        const pageTitle = document.querySelector('#skills-list-view h2');
        if (pageTitle) pageTitle.textContent = t('skill_list_title');

        initTabs();
        renderSkills();
        
        if (currentSkillId) {
            showDetail(currentSkillId, true);
        }
    }
});

window.addEventListener('popstate', () => {
    if (!document.getElementById('skills-container')) return;
    const urlParams = new URLSearchParams(window.location.search);
    const skillParam = urlParams.get('skill');
    if (skillParam) {
        showDetail(skillParam, true);
    } else {
        showListView(true);
    }
});

function updateTabs() {
    const buttons = document.querySelectorAll('.tab-btn');
    buttons.forEach((btn, index) => {
        if (skillTiers[index].id === currentTier) btn.classList.add('active');
        else btn.classList.remove('active');
    });
}

function getIconHTML(iconString) {
    if (!iconString) return '✨';
    if (iconString.includes('.') || iconString.includes('/')) return `<img src="${iconString}" alt="icon">`;
    return iconString;
}

function renderSkills() {
    const container = document.getElementById('skills-container');
    if (!container) return;
    container.innerHTML = ''; 

    if (!currentTier) {
        container.innerHTML = `<p style="text-align:center; color:var(--text-muted); grid-column: 1/-1; font-size: 20px; margin-top: 50px;">${t('choose_tier')}</p>`;
        return;
    }

    const filteredSkills = skillsData.filter(skill => skill.tier === currentTier);
    if (filteredSkills.length === 0) {
        container.innerHTML = `<p style="text-align:center; color:gray; grid-column: 1/-1;">${t('no_skills')}</p>`;
        return;
    }

    const groupedByMod = {};
    filteredSkills.forEach(skill => {
        const modName = skill.mod || "Tensura: Reincarnated";
        if (!groupedByMod[modName]) groupedByMod[modName] = [];
        groupedByMod[modName].push(skill);
    });

    const sortedMods = Object.keys(groupedByMod).sort((a, b) => a.localeCompare(b));

    sortedMods.forEach(mod => {
        const modHeader = document.createElement('h3');
        modHeader.className = 'mod-header';
        modHeader.textContent = mod;
        container.appendChild(modHeader);

        const grid = document.createElement('div');
        grid.className = 'skills-grid';

        const sortedSkills = groupedByMod[mod].sort((a, b) => {
            return getLocalized(a, 'ru').localeCompare(getLocalized(b, 'ru'));
        });

        sortedSkills.forEach(skill => {
            const card = document.createElement('div');
            card.className = `skill-card ${skill.tier}`;
            card.onclick = () => showDetail(skill.id);
            
            const displayName = currentLang === 'en' ? (skill.en || skill.id) : (skill.ru || skill.en || skill.id); 

            card.innerHTML = `
                <div class="skill-icon">${getIconHTML(skill.icon)}</div>
                <div class="skill-info">
                    <span class="skill-ru">${displayName}</span>
                    ${currentLang === 'ru' && skill.en ? `<span class="skill-en">${skill.en}</span>` : ''}
                </div>
            `;
            grid.appendChild(card);
        });
        container.appendChild(grid);
    });
}

function buildSkillGraph(currentSkill) {
    let levelsMap = new Map();
    let processedNodes = new Map();
    
    let rootNode = { ...currentSkill, level: 0 };
    levelsMap.set(0, [rootNode]);
    processedNodes.set(currentSkill.id, rootNode);
    
    let queue = [{ node: rootNode, dir: 2 }, { node: rootNode, dir: -2 }];
    
    while (queue.length > 0) {
        let { node, dir } = queue.shift();
        let links = dir > 0 ? (node.infobox?.next || []) : (node.infobox?.prev || []);
        
        for (let link of links) {
            if (!link || !link.id) continue;
            
            let fullNode = skillsData.find(s => s.id === link.id);
            if (!fullNode) fullNode = link; 
            
            let targetNode = processedNodes.get(fullNode.id);
            
            if (!targetNode) {
                let newLevel = node.level + dir;
                targetNode = { ...fullNode, ...link, level: newLevel };
                processedNodes.set(fullNode.id, targetNode);
                if (!levelsMap.has(newLevel)) levelsMap.set(newLevel, []);
                levelsMap.get(newLevel).push(targetNode);
                queue.push({ node: targetNode, dir: dir });
            }
        }
    }
    
    processedNodes.forEach(node => { node.targets = []; });

    processedNodes.forEach(node => {
        if (node.infobox && node.infobox.next) {
            node.infobox.next.forEach(n => {
                if (n && n.id && processedNodes.has(n.id)) {
                    let targetId = `node-${n.id}`;
                    if (!node.targets.includes(targetId)) node.targets.push(targetId);
                }
            });
        }
        if (node.infobox && node.infobox.prev) {
            node.infobox.prev.forEach(n => {
                if (n && n.id) {
                    let prevNode = processedNodes.get(n.id);
                    if (prevNode) {
                        let targetId = `node-${node.id}`;
                        if (!prevNode.targets.includes(targetId)) prevNode.targets.push(targetId);
                    }
                }
            });
        }
    });
    
    return levelsMap;
}

function renderEvolutionGraph(currentSkill) {
    if (!currentSkill.infobox || (!currentSkill.infobox.prev && !currentSkill.infobox.next)) return '';

    let levelsMap = buildSkillGraph(currentSkill);
    let sortedLevels = Array.from(levelsMap.keys()).sort((a, b) => a - b);

    let html = `
        <div class="evo-section">
            <div class="evo-header-controls">
                <h3>${t('evo_scheme')}</h3>
                <div class="evo-toggle">
                    <button onclick="setEvoDir('horizontal', this)" class="${evoDirection === 'horizontal' ? 'active' : ''}">${t('evo_horizontal')}</button>
                    <button onclick="setEvoDir('vertical', this)" class="${evoDirection === 'vertical' ? 'active' : ''}">${t('evo_vertical')}</button>
                </div>
            </div>
            <div class="evo-graph-wrapper ${evoDirection}" id="evo-graph-${currentSkill.id}">
    `;

    sortedLevels.forEach(level => {
        html += `<div class="evo-level">`;
        levelsMap.get(level).forEach(node => {
            const isCurrent = node.id === currentSkill.id;
            const cls = isCurrent ? 'evo-current' : '';
            const targetsAttr = node.targets.length > 0 ? `data-target="${node.targets.join(',')}"` : '';
            
            const displayName = currentLang === 'en' ? (node.en || node.id) : (node.ru || node.en || node.id);
            
            let iconHTML = '';
            if (node.icon && (node.icon.includes('.') || node.icon.includes('/'))) {
                iconHTML = `<img src="${node.icon}" style="width:20px;height:20px;vertical-align:middle;margin-right:5px;object-fit:cover;border-radius:4px;">`;
            } else if (node.icon) {
                iconHTML = `<span style="margin-right:5px;">${node.icon}</span>`;
            }

            html += `
                <div class="evo-node-wrapper" id="node-${node.id}" ${targetsAttr}>
                    <div class="evo-node ${node.tier || 'other'} ${cls}" onclick="${isCurrent ? '' : `goToSkill(event, '${node.id}')`}">
                        ${iconHTML}${displayName}
                    </div>
                </div>
            `;
        });
        html += `</div>`;
    });

    html += `</div></div>`;
    setTimeout(() => drawSVGLines(currentSkill.id), 100);
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
    setTimeout(() => drawSVGLines(currentId), 100);
}

function drawSVGLines(currentId) {
    const wrapper = document.getElementById(`evo-graph-${currentId}`);
    if (!wrapper || wrapper.scrollWidth === 0) return;
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
        const targetsAttr = wrapperNode.getAttribute('data-target');
        if (!targetsAttr) return;
        const targetIds = targetsAttr.split(',').filter(Boolean);

        targetIds.forEach(targetId => {
            const targetEl = wrapper.querySelector(`#${targetId}`);
            if (targetEl) {
                const startRect = wrapperNode.getBoundingClientRect();
                const endRect = targetEl.getBoundingClientRect();
                let x1, y1, x2, y2;
                let pathD = '';

                if (evoDirection === 'horizontal') {
                    x1 = startRect.right - wrapperRect.left + scrollLeft;
                    y1 = startRect.top + startRect.height / 2 - wrapperRect.top + scrollTop;
                    x2 = endRect.left - wrapperRect.left + scrollLeft;
                    y2 = endRect.top + endRect.height / 2 - wrapperRect.top + scrollTop;
                    
                    let midX = (x1 + x2) / 2;
                    pathD = `M ${x1} ${y1} C ${midX} ${y1}, ${midX} ${y2}, ${x2} ${y2}`;
                } else {
                    x1 = startRect.left + startRect.width / 2 - wrapperRect.left + scrollLeft;
                    y1 = startRect.bottom - wrapperRect.top + scrollTop;
                    x2 = endRect.left + endRect.width / 2 - wrapperRect.left + scrollLeft;
                    y2 = endRect.top - wrapperRect.top + scrollTop;
                    
                    let midY = (y1 + y2) / 2;
                    pathD = `M ${x1} ${y1} C ${x1} ${midY}, ${x2} ${midY}, ${x2} ${y2}`;
                }
                
                const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
                path.setAttribute('d', pathD);
                path.setAttribute('fill', 'none');
                path.setAttribute('stroke', '#888');
                path.setAttribute('stroke-width', '2');
                path.setAttribute('marker-end', 'url(#arrowhead)');
                svg.appendChild(path);
            }
        });
    });
    wrapper.insertBefore(svg, wrapper.firstChild);
}

function replaceWikiLinks(html) {
    if (!html) return '';
    html = html.replace(/<h2[^>]*>.*?Evolution.*?<\/h2>/gi, '');
    html = html.replace(/src="\/(?!\/)/gi, 'src="https://tensura.wiki.gg/');
    
    const regex = /<a href="(?:https?:\/\/tensura\.wiki\.gg)?\/wiki\/([^"]+)"[^>]*>([\s\S]*?)<\/a>/gi;
    
    return html.replace(regex, (match, urlPath, linkText) => {
        let parts = urlPath.split('/');
        let rawName = parts[parts.length - 1];
        let skillId = rawName.toLowerCase().replace(/ /g, '_').replace(/%20/g, '_');
        
        let cleanLinkText = linkText.replace(/<img[^>]*>/gi, '').replace(/<[^>]+>/g, '').trim();
        cleanLinkText = cleanLinkText.replace(/[a-zA-Z0-9_\s]+\.png:.*/gi, '').trim();
        
        let compareText = cleanLinkText.toLowerCase().replace(/[^a-zа-яё0-9]/g, '');
        
        let foundSkill = (typeof skillsData !== 'undefined') ? skillsData.find(s => {
            if (!s) return false;
            const sId = s.id ? s.id.toLowerCase() : '';
            const sEn = s.en ? s.en.toLowerCase().replace(/[^a-zа-яё0-9]/g, '') : '';
            const sRu = s.ru ? s.ru.toLowerCase().replace(/[^a-zа-яё0-9]/g, '') : '';
            const urlSlug = urlPath.toLowerCase().replace(/[^a-zа-яё0-9]/g, '');
            return sId === skillId || sEn === compareText || sRu === compareText || sId === urlSlug;
        }) : null;

        let foundRace = null;
        if (!foundSkill && typeof racesData !== 'undefined') {
            foundRace = racesData.find(r => 
                r.id === skillId || 
                r.id === urlPath.toLowerCase() || 
                (r.en && r.en.toLowerCase() === compareText) || 
                (r.ru && r.ru.toLowerCase().replace(/[^a-zа-яё0-9]/g, '') === compareText)
            );
        }

        let targetId = skillId;
        let targetType = 'wiki';
        let iconHTML = '';
        let finalText = cleanLinkText;
        let tooltipHTML = '';

        if (foundSkill) {
            targetId = foundSkill.id;
            targetType = 'skill';
            if (!finalText) finalText = currentLang === 'en' ? (foundSkill.en || foundSkill.id) : (foundSkill.ru || foundSkill.id);
            
            let iconPath = foundSkill.icon;
            if (iconPath && (iconPath.includes('.') || iconPath.includes('/'))) {
                iconHTML = `<img src="${iconPath}" style="width:18px;height:18px;object-fit:cover;border-radius:3px;vertical-align:text-bottom;margin-right:4px;display:inline-block;border:1px solid #2a2a3a;">`;
            } else if (iconPath) {
                iconHTML = `<span style="margin-right:4px;font-size:16px;vertical-align:middle;">${iconPath}</span>`;
            }

            let shortDesc = currentLang === 'en' ? (foundSkill.desc_en || foundSkill.desc) : foundSkill.desc;
            shortDesc = shortDesc ? shortDesc.replace(/<[^>]+>/g, '').substring(0, 80) + '...' : '';
            let tooltipIcon = iconPath && (iconPath.includes('.') || iconPath.includes('/')) ? `<img src="${iconPath}">` : `<span>${iconPath || '✨'}</span>`;
            
            tooltipHTML = `
                <div class="tooltip-card">
                    <div class="tooltip-title">${tooltipIcon} ${currentLang === 'en' ? (foundSkill.en || foundSkill.id) : (foundSkill.ru || foundSkill.id)}</div>
                    <span class="tooltip-type">${foundSkill.tier || 'Skill'}</span>
                    <p class="tooltip-desc">${shortDesc}</p>
                </div>
            `;

        } else if (foundRace) {
            targetId = foundRace.id;
            targetType = 'race';
            if (!finalText) finalText = currentLang === 'en' ? (foundRace.en || foundRace.id) : (foundRace.ru || foundRace.id);
            
            let iconPath = foundRace.icon || foundRace.icon_path;
            if (iconPath && (iconPath.includes('.') || iconPath.includes('/'))) {
                iconHTML = `<img src="${iconPath}" style="width:18px;height:18px;object-fit:cover;border-radius:3px;vertical-align:text-bottom;margin-right:4px;display:inline-block;border:1px solid #2a2a3a;">`;
            } else if (iconPath) {
                iconHTML = `<span style="margin-right:4px;font-size:16px;vertical-align:middle;">${iconPath}</span>`;
            }

            let tooltipIcon = iconPath && (iconPath.includes('.') || iconPath.includes('/')) ? `<img src="${iconPath}">` : `<span>${iconPath || '🧬'}</span>`;
            tooltipHTML = `
                <div class="tooltip-card">
                    <div class="tooltip-title">${tooltipIcon} ${currentLang === 'en' ? (foundRace.en || foundRace.id) : (foundRace.ru || foundRace.id)}</div>
                    <span class="tooltip-type">Раса</span>
                    <p class="tooltip-desc">HP: ${foundRace.infobox?.hp || '?'} | EP: ${foundRace.infobox?.ep || '?'}</p>
                </div>
            `;
        } else {
            if (!finalText && linkText.includes('<img')) {
                let imgMatch = linkText.match(/<img[^>]*src="([^"]+)"[^>]*>/i);
                if (imgMatch) {
                    let src = imgMatch[1];
                    if (src.startsWith('/')) src = 'https://tensura.wiki.gg' + src;
                    return `<a href="https://tensura.wiki.gg/wiki/${urlPath}" target="_blank" style="display:inline-block;vertical-align:middle;"><img src="${src}" style="width:24px;height:24px;object-fit:contain;"></a>`;
                }
            }
        }
        
        return `<span class="tooltip-container">
            <a href="#" onclick="handleWikiLinkClick(event, '${targetId}', '${urlPath}', '${targetType}')" style="display:inline;color:#4da6ff;text-decoration:none;cursor:pointer;" onmouseover="this.style.textDecoration='underline'" onmouseout="this.style.textDecoration='none'">${iconHTML}${finalText || cleanLinkText}</a>
            ${tooltipHTML}
        </span>`;
    });
}

function handleWikiLinkClick(event, targetId, originalPath, targetType) {
    event.preventDefault();
    
    if (targetType === 'skill' && typeof skillsData !== 'undefined' && skillsData.some(s => s.id === targetId)) {
        showDetail(targetId);
    } else if (targetType === 'race' && typeof racesData !== 'undefined' && racesData.some(r => r.id === targetId)) {
        window.location.href = `races.html?race=${targetId}&lang=${currentLang}`;
    } else if (targetType === 'boss' && typeof bossesData !== 'undefined' && bossesData.some(b => b.id === targetId)) {
        window.location.href = `bosses.html?boss=${targetId}&lang=${currentLang}`;
    } else {
        window.open(`https://tensura.wiki.gg/wiki/${originalPath}`, '_blank');
    }
}

function showDetail(skillId, keepScroll = false) {
    const skill = skillsData.find(s => s.id === skillId);
    if (!skill) return;

    currentSkillId = skillId;
    const listView = document.getElementById('skills-list-view');
    const detailView = document.getElementById('skill-detail-view');
    const detailContent = document.getElementById('skill-detail-content');

    if (!listView || !detailView) return;

    const backBtn = document.querySelector('#skill-detail-view > .back-btn');
    if (backBtn) backBtn.textContent = t('back_skills');

    const color = getTierColor(skill.tier);
    const displayDesc = currentLang === 'en' ? (skill.desc_en || skill.desc || '') : (skill.desc || '');
    let processedDesc = replaceWikiLinks(displayDesc);
    
    // ИСПРАВЛЕНИЕ: Сначала ищем ссылку в данных (wiki_url), иначе ведем на тенсура вики
    let externalWikiUrl = skill.wiki_url || `https://tensura.wiki.gg/wiki/${(skill.en || skill.ru || skill.id).replace(/ /g, '_')}`;
    const displayRu = currentLang === 'en' ? (skill.en || skill.id) : (skill.ru || skill.en || skill.id); 

    let mainHTML = `
        <div class="skill-main-content">
            <div class="skill-header-flex">
                <h1>${displayRu}</h1>
                <a href="${externalWikiUrl}" target="_blank" class="wiki-btn">${t('wiki_btn')}</a>
            </div>
            ${currentLang === 'ru' && skill.en ? `<p style="color: var(--text-muted); margin-bottom: 20px;"><em>${skill.en}</em></p>` : ''}
            <div class="skill-detail-description">
                ${processedDesc}
            </div>
            ${renderEvolutionGraph(skill)}
        </div>
    `;

    let infoboxHTML = '';
    if (skill.infobox) {
        const skillIcon = skill.icon || '✨';
        
        infoboxHTML = `
            <div class="skill-infobox" style="border-color: ${color};">
                <div class="infobox-header" style="background-color: ${color}22; border-color: ${color};">${skill.en || skill.ru || skill.id}</div>
                <div class="infobox-image-container" style="border-color: ${color};">
                    ${skillIcon.includes('.') || skillIcon.includes('/') 
                        ? `<img src="${skillIcon}" alt="${displayRu}">` 
                        : `<span class="emoji-fallback">${skillIcon}</span>`}
                </div>
                
                <div class="infobox-section-title" style="background-color: ${color}44; border-color: ${color};">${t('info')}</div>
                ${skill.infobox.type ? `<div class="infobox-row"><div class="infobox-label">${t('type')}</div><div class="infobox-value">${getLocalized(skill.infobox, 'type')}</div></div>` : ''}
                ${skill.infobox.cost ? `<div class="infobox-row"><div class="infobox-label">${t('cost')}</div><div class="infobox-value">${skill.infobox.cost}</div></div>` : ''}
                ${skill.infobox.points ? `<div class="infobox-row"><div class="infobox-label">${t('points')}</div><div class="infobox-value">${skill.infobox.points}</div></div>` : ''}
                ${skill.infobox.passive ? `<div class="infobox-row"><div class="infobox-label">${t('passive')}</div><div class="infobox-value">${getLocalized(skill.infobox, 'passive')}</div></div>` : ''}
                
                ${skill.infobox.obtain ? `
                <div class="infobox-section-title" style="background-color: ${color}44; border-color: ${color};">${t('obtaining')}</div>
                <div class="infobox-row"><div class="infobox-label">${t('method')}</div><div class="infobox-value">${getLocalized(skill.infobox, 'obtain')}</div></div>
                ` : ''}
            </div>
        `;
    }

    detailContent.innerHTML = `
        <div class="skill-detail-layout">
            ${mainHTML}
            ${infoboxHTML}
        </div>
    `;

    listView.classList.add('hidden');
    detailView.classList.remove('hidden');
    
    if (!keepScroll) {
        window.history.pushState({}, document.title, `skills.html?skill=${skillId}&lang=${currentLang}`);
        window.scrollTo(0, 0);
    }
}

function goToSkill(event, skillId) {
    if(event) event.preventDefault();
    showDetail(skillId);
}

function showListView(keepHistory = false) {
    currentSkillId = null;
    const listView = document.getElementById('skills-list-view');
    const detailView = document.getElementById('skill-detail-view');
    if (!listView || !detailView) return;
    
    detailView.classList.add('hidden');
    listView.classList.remove('hidden');
    
    if (!keepHistory) {
        window.history.pushState({}, document.title, `skills.html?lang=${currentLang}`);
        window.scrollTo(0, 0);
    }
}

function getTierColor(tierId) {
    const tier = skillTiers.find(t => t.id === tierId);
    return tier ? tier.color : "#9d00ff";
}