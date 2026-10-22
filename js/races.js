// js/races.js

let currentRaceId = null;
let raceEvoDirection = 'vertical';

const STARTER_IDS = [
    "human", "slime", "ogre", "goblin", "orc",
    "lizardman", "elf", "dwarf", "merfolk",
    "beastfolk", "beastman", "harpy", "ghoul",
    "wight", "giant", "lesser_daemon", "lesser_demon",
    "flugel"
];

function resolveRaceLinks() {
    if (typeof racesData === 'undefined') return;
    
    racesData.forEach(race => {
        if (!race.infobox) race.infobox = {};
        
        if (race.infobox.next) {
            race.infobox.next.forEach(nextRef => {
                const target = racesData.find(s => s.id === nextRef.id);
                if (target) {
                    if (!target.infobox) target.infobox = {};
                    if (!target.infobox.prev) target.infobox.prev = [];
                    if (!target.infobox.prev.some(p => p.id === race.id)) {
                        target.infobox.prev.push({ id: race.id, ru: race.ru || race.id, tier: race.tier || 'other' });
                    }
                }
            });
        }
        
        if (race.infobox.prev) {
            race.infobox.prev.forEach(prevRef => {
                const target = racesData.find(s => s.id === prevRef.id);
                if (target) {
                    if (!target.infobox) target.infobox = {};
                    if (!target.infobox.next) target.infobox.next = [];
                    if (!target.infobox.next.some(n => n.id === race.id)) {
                        target.infobox.next.push({ id: race.id, ru: race.ru || race.id, tier: race.tier || 'other' });
                    }
                }
            });
        }
    });
}

document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('races-container');
    if (!container) return;

    resolveRaceLinks();

    const pageTitle = document.querySelector('#races-list-view h2');
    if (pageTitle) pageTitle.textContent = t('race_list_title');

    renderRaces();

    const urlParams = new URLSearchParams(window.location.search);
    const raceParam = urlParams.get('race');
    if (raceParam) {
        showRaceDetail(raceParam, true);
    }
});

window.addEventListener('languageChanged', () => {
    if (document.getElementById('races-container')) {
        resolveRaceLinks();

        const pageTitle = document.querySelector('#races-list-view h2');
        if (pageTitle) pageTitle.textContent = t('race_list_title');

        renderRaces();
        if (currentRaceId) {
            showRaceDetail(currentRaceId, true);
        }
    }
});

window.addEventListener('popstate', () => {
    if (!document.getElementById('races-container')) return;
    const urlParams = new URLSearchParams(window.location.search);
    const raceParam = urlParams.get('race');
    if (raceParam) {
        showRaceDetail(raceParam, true);
    } else {
        showRaceListView(true);
    }
});

function getRaceIconHTML(race) {
    if (!race) return '🧬';
    const iconStr = (race.icon || race.icon_path || '').trim();
    if (iconStr && (iconStr.includes('.') || iconStr.includes('/'))) {
        const name = currentLang === 'en' ? (race.en || race.id) : (race.ru || race.en || race.id);
        return `<img src="${iconStr}" alt="${name}">`;
    }
    return iconStr || '🧬';
}

function renderRaces() {
    const container = document.getElementById('races-container');
    if (!container || typeof racesData === 'undefined') return;
    
    container.classList.remove('skills-grid');
    container.innerHTML = '';

    let list = racesData.filter(r => r.starter || STARTER_IDS.includes(r.id.toLowerCase()));
    if (list.length === 0) list = racesData;

    const groupedByMod = {};
    list.forEach(race => {
        const modName = race.mod || "Tensura: Reincarnated";
        if (!groupedByMod[modName]) groupedByMod[modName] = [];
        groupedByMod[modName].push(race);
    });

    const sortedMods = Object.keys(groupedByMod).sort((a, b) => a.localeCompare(b));

    sortedMods.forEach(mod => {
        const modHeader = document.createElement('h3');
        modHeader.className = 'mod-header';
        modHeader.textContent = mod;
        container.appendChild(modHeader);

        const grid = document.createElement('div');
        grid.className = 'skills-grid';

        const sortedRaces = groupedByMod[mod].sort((a, b) => {
            const nameA = currentLang === 'en' ? (a.en || '') : (a.ru || a.en || '');
            const nameB = currentLang === 'en' ? (b.en || '') : (b.ru || b.en || '');
            return nameA.localeCompare(nameB);
        });

        sortedRaces.forEach(race => {
            const card = document.createElement('div');
            card.className = `skill-card ${race.tier || 'other'}`;
            card.onclick = () => showRaceDetail(race.id);

            const displayName = currentLang === 'en' ? (race.en || race.id) : (race.ru || race.en || race.id);

            card.innerHTML = `
                <div class="skill-icon">${getRaceIconHTML(race)}</div>
                <div class="skill-info">
                    <span class="skill-ru">${displayName}</span>
                    ${currentLang === 'ru' && race.en ? `<span class="skill-en">${race.en}</span>` : ''}
                </div>
            `;
            grid.appendChild(card);
        });
        container.appendChild(grid);
    });
}

function findRace(ref) {
    if (!ref || typeof racesData === 'undefined') return null;
    const clean = String(ref).trim().toLowerCase();
    if (!clean || clean === 'none' || clean === '-') return null;
    const slug = clean.split(' ').filter(Boolean).join('_');

    return racesData.find(r =>
        r.id.toLowerCase() === clean ||
        r.id.toLowerCase() === slug ||
        (r.en && r.en.toLowerCase() === clean) ||
        (r.ru && r.ru.toLowerCase() === clean)
    ) || null;
}

function getRaceLinks(race) {
    let prev = [];
    let next = [];
    
    if (race.infobox) {
        prev = race.infobox.prev || [];
        next = race.infobox.next || [];
    }
    
    if (race.evolution_details) {
        const ed = race.evolution_details;
        const splitNames = (str) => {
            if (!str || str === 'None' || str === '-') return [];
            return String(str).replaceAll('·', ',').replaceAll('/', ',').replaceAll(';', ',').split(',').map(s => s.trim()).filter(Boolean);
        };
        
        splitNames(ed.previous).forEach(name => {
            const found = findRace(name);
            const nodeObj = found || { id: name.toLowerCase().split(' ').join('_'), ru: name, en: name, tier: 'other' };
            if (nodeObj.id !== race.id && !prev.some(n => n.id === nodeObj.id)) prev.push(nodeObj);
        });
        
        const nextNames = [
            ...splitNames(ed.next),
            ...splitNames(ed.named),
            ...splitNames(ed.harvest_festival),
            ...splitNames(ed.awakening)
        ];
        
        nextNames.forEach(name => {
            const found = findRace(name);
            const nodeObj = found || { id: name.toLowerCase().split(' ').join('_'), ru: name, en: name, tier: 'other' };
            if (nodeObj.id !== race.id && !next.some(n => n.id === nodeObj.id)) {
                next.push(nodeObj);
            }
        });
    }
    
    return { 
        prev: prev.filter(n => n.id !== race.id), 
        next: next.filter(n => n.id !== race.id) 
    };
}

function getRequirementText(fromRace, toRace) {
    if (!fromRace || !toRace) return '';

    if (fromRace.requirements && fromRace.requirements[toRace.id]) {
        const req = fromRace.requirements[toRace.id];
        return currentLang === 'en' ? (req.en || req) : (req.ru || req);
    }

    const obtain = fromRace.infobox?.obtain;
    if (obtain) {
        const targetNames = [toRace.en, toRace.ru, toRace.id]
            .filter(Boolean).map(n => String(n).toLowerCase());

        const methodMap = {
            'named': { ru: 'Именование', en: 'Named' },
            'harvest festival': { ru: 'Фестиваль Урожая', en: 'Harvest Festival' },
            'awakening': { ru: 'Пробуждение', en: 'Awakening' }
        };

        const parts = String(obtain).split('/').map(s => s.trim());
        const methods = [];
        for (const part of parts) {
            const lowerPart = part.toLowerCase();
            if (targetNames.some(name => lowerPart.includes(name))) {
                const m = part.match(/^([^:]+):/);
                if (m) {
                    const key = m[1].trim().toLowerCase();
                    const localized = methodMap[key]?.[currentLang] || m[1].trim();
                    if (!methods.includes(localized)) methods.push(localized);
                }
            }
        }
        if (methods.length > 0) return methods.join(' / ');
    }

    const ed = fromRace.evolution_details;
    if (ed) {
        const methods = [];
        const targetEn = (toRace.en || toRace.id || '').toLowerCase();
        if (ed.named && ed.named.toLowerCase().includes(targetEn)) {
            methods.push(currentLang === 'en' ? 'Named' : 'Именование');
        }
        if (ed.harvest_festival && ed.harvest_festival.toLowerCase().includes(targetEn)) {
            methods.push(currentLang === 'en' ? 'Harvest Festival' : 'Фестиваль Урожая');
        }
        if (ed.awakening && ed.awakening.toLowerCase().includes(targetEn)) {
            methods.push(currentLang === 'en' ? 'Awakening' : 'Пробуждение');
        }
        if (methods.length > 0) return methods.join(' / ');
    }

    return currentLang === 'en' ? 'Evolution' : 'Эволюция';
}

function extractAbilities(race) {
    let rawDesc = currentLang === 'en' ? (race.desc_en || race.desc) : race.desc;
    if (!rawDesc) return [];
    
    let skills = [];
    const globalLinkRegex = /handleRaceSkillLink\(event,\s*'([^']+)'\)/gi;
    let gMatch;
    while ((gMatch = globalLinkRegex.exec(rawDesc)) !== null) {
        skills.push(...gMatch[1].split(/[·,]/).map(s => s.trim()));
    }
    return [...new Set(skills.filter(Boolean))];
}

function cleanRaceDesc(html) {
    if (!html) return '';
    let cleaned = html;
    cleaned = cleaned.replace(/<h2[^>]*>\s*(Информация|Information)\s*<\/h2>\s*<ul>[\s\S]*?<\/ul>/gi, '');
    cleaned = cleaned.replace(/<h2[^>]*>\s*(Эволюция|Evolution)\s*<\/h2>\s*<ul>[\s\S]*?<\/ul>/gi, '');
    cleaned = cleaned.replace(/<h2[^>]*>\s*(Способности|Abilities)\s*<\/h2>\s*<ul>[\s\S]*?<\/ul>/gi, '');
    return cleaned.trim();
}

function buildRaceGraph(currentRace) {
    let nodesMap = new Map(); 
    let edges = []; 
    
    let queue = [{ id: currentRace.id, dir: 2, level: 0 }, { id: currentRace.id, dir: -2, level: 0 }];
    let visited = new Set([currentRace.id]);
    
    nodesMap.set(currentRace.id, { race: currentRace, level: 0 });
    
    while (queue.length > 0) {
        let { id, dir, level } = queue.shift();
        let race = nodesMap.get(id)?.race || findRace(id);
        if (!race) continue;
        
        let links = dir > 0 ? getRaceLinks(race).next : getRaceLinks(race).prev;
        
        for (let link of links) {
            let fullNode = findRace(link.id) || link;
            if (!nodesMap.has(fullNode.id)) {
                nodesMap.set(fullNode.id, { race: fullNode, level: level + dir });
            }
            
            let edgeSource = dir > 0 ? id : fullNode.id;
            let edgeTarget = dir > 0 ? fullNode.id : id;
            
            if (!edges.some(e => e.source === edgeSource && e.target === edgeTarget)) {
                edges.push({ source: edgeSource, target: edgeTarget });
            }
            
            if (!visited.has(fullNode.id)) {
                visited.add(fullNode.id);
                queue.push({ id: fullNode.id, dir: dir, level: level + dir });
            }
        }
    }
    
    let changed = true;
    let iters = 0;
    while (changed && iters < 100) {
        changed = false;
        iters++;
        for (let edge of edges) {
            let s = nodesMap.get(edge.source);
            let t = nodesMap.get(edge.target);
            if (s && t && t.level <= s.level) {
                t.level = s.level + 2; 
                changed = true;
            }
        }
    }
    
    let levelsMap = new Map();
    
    nodesMap.forEach((item, id) => {
        let l = item.level;
        if (!levelsMap.has(l)) levelsMap.set(l, []);
        levelsMap.get(l).push({ ...item.race, id, type: 'node', targets: [] });
    });
    
    edges.forEach(edge => {
        let s = nodesMap.get(edge.source);
        let t = nodesMap.get(edge.target);
        if (!s || !t) return;
        
        let reqLevel = (s.level + t.level) / 2; 
        let reqId = `req-${edge.source}-${edge.target}`;
        
        if (!levelsMap.has(reqLevel)) levelsMap.set(reqLevel, []);
        
        let reqText = getRequirementText(s.race, t.race);
        levelsMap.get(reqLevel).push({
            id: reqId,
            type: 'req',
            text: reqText,
            targets: [`node-${edge.target}`]
        });
        
        let sourceNode = levelsMap.get(s.level).find(n => n.id === edge.source);
        if (sourceNode) {
            sourceNode.targets.push(reqId);
        }
    });
    
    return levelsMap;
}

function renderRaceEvolutionGraph(currentRace) {
    if (!currentRace.infobox && !currentRace.evolution_details) return '';

    let levelsMap = buildRaceGraph(currentRace);
    let sortedLevels = Array.from(levelsMap.keys()).sort((a, b) => a - b);

    let html = `
        <div class="evo-section">
            <div class="evo-header-controls">
                <h3>${t('evo_scheme')}</h3>
                <div class="evo-toggle">
                    <button onclick="setRaceEvoDir('vertical', this)" class="${raceEvoDirection === 'vertical' ? 'active' : ''}">${t('evo_vertical')}</button>
                    <button onclick="setRaceEvoDir('horizontal', this)" class="${raceEvoDirection === 'horizontal' ? 'active' : ''}">${t('evo_horizontal')}</button>
                </div>
            </div>
            <div class="evo-graph-wrapper ${raceEvoDirection}" id="evo-graph-${currentRace.id}">
    `;

    sortedLevels.forEach(level => {
        html += `<div class="evo-level">`;
        levelsMap.get(level).forEach(item => {
            if (item.type === 'node') {
                const isCurrent = item.id === currentRace.id;
                const cls = isCurrent ? 'evo-current' : '';
                const targetsAttr = item.targets.length > 0 ? `data-target="${item.targets.join(',')}"` : '';
                
                const displayName = currentLang === 'en' ? (item.en || item.id) : (item.ru || item.id);
                
                let iconHTML = '';
                if (item.icon || item.icon_path) {
                    const i = item.icon || item.icon_path;
                    if (i.includes('.') || i.includes('/')) {
                        iconHTML = `<img src="${i}" style="width:20px;height:20px;vertical-align:middle;margin-right:5px;object-fit:cover;border-radius:4px;">`;
                    } else {
                        iconHTML = `<span style="margin-right:5px;">${i}</span>`;
                    }
                }

                html += `
                    <div class="evo-node-wrapper" id="node-${item.id}" ${targetsAttr}>
                        <div class="evo-node ${item.tier || 'other'} ${cls}" onclick="${isCurrent ? '' : `goToRace(event, '${item.id}')`}">
                            ${iconHTML}${displayName}
                        </div>
                    </div>
                `;
            } else if (item.type === 'req') {
                const targetsAttr = item.targets.length > 0 ? `data-target="${item.targets.join(',')}"` : '';
                html += `
                    <div class="evo-node-wrapper" id="${item.id}" ${targetsAttr}>
                        <div class="evo-node evo-req">${item.text}</div>
                    </div>
                `;
            }
        });
        html += `</div>`;
    });

    html += `</div></div>`;
    setTimeout(() => drawRaceSVGLines(currentRace.id), 100);
    return html;
}

function setRaceEvoDir(dir, btn) {
    raceEvoDirection = dir;
    document.querySelectorAll('.evo-toggle button').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const wrapper = document.querySelector('.evo-graph-wrapper');
    if (!wrapper) return;
    wrapper.classList.remove('horizontal', 'vertical');
    wrapper.classList.add(dir);
    const currentId = wrapper.id.replace('evo-graph-', '');
    setTimeout(() => drawRaceSVGLines(currentId), 100);
}

function drawRaceSVGLines(currentId) {
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
                let x1, y1, x2, y2, pathD;

                if (raceEvoDirection === 'horizontal') {
                    x1 = startRect.right - wrapperRect.left + scrollLeft;
                    y1 = startRect.top + startRect.height / 2 - wrapperRect.top + scrollTop;
                    x2 = endRect.left - wrapperRect.left + scrollLeft;
                    y2 = endRect.top + endRect.height / 2 - wrapperRect.top + scrollTop;
                    
                    let midX = x1 + 25;
                    if (x2 < x1) midX = x1 + 40;

                    pathD = `M ${x1} ${y1} L ${midX} ${y1} L ${midX} ${y2} L ${x2} ${y2}`;
                } else {
                    x1 = startRect.left + startRect.width / 2 - wrapperRect.left + scrollLeft;
                    y1 = startRect.bottom - wrapperRect.top + scrollTop;
                    x2 = endRect.left + endRect.width / 2 - wrapperRect.left + scrollLeft;
                    y2 = endRect.top - wrapperRect.top + scrollTop;
                    
                    let midY = y1 + 25;
                    if (y2 < y1) midY = y1 + 40;

                    pathD = `M ${x1} ${y1} L ${x1} ${midY} L ${x2} ${midY} L ${x2} ${y2}`;
                }
                
                const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
                path.setAttribute('d', pathD);
                path.setAttribute('fill', 'none');
                path.setAttribute('stroke', '#777');
                path.setAttribute('stroke-width', '2');
                path.setAttribute('stroke-linejoin', 'round');
                
                if (Math.abs(y2 - y1) > 80 && raceEvoDirection === 'horizontal' || Math.abs(x2 - x1) > 80 && raceEvoDirection === 'vertical') {
                    path.setAttribute('stroke-dasharray', '6, 4');
                }

                path.setAttribute('marker-end', 'url(#arrowhead)');
                svg.appendChild(path);
            }
        });
    });

    wrapper.insertBefore(svg, wrapper.firstChild);
}

function renderIntrinsicsHTML(race) {
    if (!race.skills || !race.skills.intrinsics) return '';
    const rawSkills = String(race.skills.intrinsics).replaceAll('·', ',').split(',').map(s => s.trim()).filter(Boolean);
    if (rawSkills.length === 0) return '';

    const tags = rawSkills.map(skillName => {
        const clean = skillName.toLowerCase();
        const slug = clean.split(' ').filter(Boolean).join('_');
        const matched = (typeof skillsData !== 'undefined') ? skillsData.find(s =>
            s.en.toLowerCase() === clean || s.ru.toLowerCase() === clean || s.id.toLowerCase() === slug
        ) : null;

        if (matched) {
            const label = currentLang === 'en' ? matched.en : matched.ru;
            const icon = (matched.icon && (matched.icon.includes('.') || matched.icon.includes('/')))
                ? `<img src="${matched.icon}" alt="${label}">` : '';
            return `<a href="skills.html?skill=${matched.id}&lang=${currentLang}" class="race-skill-tag">${icon}${label}</a>`;
        }
        return `<span class="race-skill-tag">${skillName}</span>`;
    }).join('');

    return `<h2>${t('intrinsics_title')}</h2><div class="race-skills-list">${tags}</div>`;
}

function showRaceDetail(raceId, keepScroll = false) {
    if (typeof racesData === 'undefined') return;
    const race = findRace(raceId);
    if (!race) return;

    currentRaceId = race.id;
    const listView = document.getElementById('races-list-view');
    const detailView = document.getElementById('race-detail-view');
    const detailContent = document.getElementById('race-detail-content');
    if (!listView || !detailView || !detailContent) return;

    const backBtn = document.querySelector('#race-detail-view > .back-btn');
    if (backBtn) backBtn.textContent = t('back_races');

    const color = "#1e90ff";
    const displayRu = currentLang === 'en' ? (race.en || race.id) : (race.ru || race.en || race.id);
    const info = race.infobox || {};

    const rawDesc = currentLang === 'en' ? (race.desc_en || race.desc) : race.desc;
    const cleanDesc = cleanRaceDesc(rawDesc);
    const abilities = extractAbilities(race);

    const statLabels = {
        hp: 'HP',
        shp: t('stat_shp'),
        ep: 'EP',
        size: t('stat_size'),
        speed: currentLang === 'en' ? 'Speed' : 'Скорость'
    };

    let infoboxRowsHTML = '';
    ['hp', 'shp', 'ep', 'size', 'speed'].forEach(key => {
        if (info[key]) {
            infoboxRowsHTML += `
                <div class="infobox-row">
                    <div class="infobox-label">${statLabels[key]}</div>
                    <div class="infobox-value">${info[key]}</div>
                </div>`;
        }
    });

    let abilitiesHTML = '';
    if (abilities.length > 0) {
        const tags = abilities.map(name => {
            const clean = name.toLowerCase();
            const slug = clean.replace(/\s+/g, '_');
            const matched = (typeof skillsData !== 'undefined') ? skillsData.find(s =>
                (s.ru && s.ru.toLowerCase() === clean) ||
                (s.en && s.en.toLowerCase() === clean) ||
                (s.id && s.id.toLowerCase() === slug)
            ) : null;

            let iconHTML = `<span style="display:inline-block; width:24px; text-align:center; font-size:18px; flex-shrink:0;">✨</span>`;
            let tooltipHTML = '';

            if (matched && matched.icon) {
                let iconPath = matched.icon;
                if (iconPath.includes('.') || iconPath.includes('/')) {
                    iconHTML = `<img src="${iconPath}" style="width:24px; height:24px; object-fit:cover; border-radius:4px; border:1px solid #2a2a3a; flex-shrink:0;">`;
                } else {
                    iconHTML = `<span style="display:inline-block; width:24px; text-align:center; font-size:20px; flex-shrink:0;">${iconPath}</span>`;
                }

                let shortDesc = currentLang === 'en' ? (matched.desc_en || matched.desc) : matched.desc;
                shortDesc = shortDesc ? shortDesc.replace(/<[^>]+>/g, '').substring(0, 80) + '...' : '';
                let tooltipIcon = iconPath && (iconPath.includes('.') || iconPath.includes('/')) ? `<img src="${iconPath}">` : `<span>${iconPath || '✨'}</span>`;

                tooltipHTML = `
                    <div class="tooltip-card" style="bottom: auto; top: 120%;">
                        <div class="tooltip-title">${tooltipIcon} ${currentLang === 'en' ? (matched.en || matched.id) : (matched.ru || matched.id)}</div>
                        <span class="tooltip-type">${matched.tier || 'Skill'}</span>
                        <p class="tooltip-desc">${shortDesc}</p>
                    </div>
                `;
            }

            if (matched) {
                const label = currentLang === 'en' ? (matched.en || matched.id) : (matched.ru || matched.id);
                return `<span class="tooltip-container" style="display:block; width:100%;">
                    <a href="skills.html?skill=${matched.id}&lang=${currentLang}" style="display:flex; align-items:center; gap:10px; padding: 6px 0; color: #4da6ff; text-decoration: none; border-bottom: 1px dashed #2a2a3a; transition: color 0.2s;" onmouseover="this.style.color='#80bfff'" onmouseout="this.style.color='#4da6ff'">
                        ${iconHTML}
                        <span style="line-height: 1.2;">${label}</span>
                    </a>
                    ${tooltipHTML}
                </span>`;
            }
            return `<span style="display:flex; align-items:center; gap:10px; padding: 6px 0; color: #aaa; border-bottom: 1px dashed #2a2a3a;">
                ${iconHTML}
                <span style="line-height: 1.2;">${name}</span>
            </span>`;
        }).join('');

        abilitiesHTML = `
            <div class="infobox-section-title" style="background-color: ${color}44; border-color: ${color};">${currentLang === 'en' ? 'Abilities' : 'Способности'}</div>
            <div style="padding: 10px 15px;">
                ${tags}
            </div>
        `;
    }

    const infoboxHTML = `
        <div class="skill-infobox" style="border-color: ${color};">
            <div class="infobox-header" style="background-color: ${color}22; border-color: ${color};">${race.en || race.ru || race.id}</div>
            <div class="infobox-image-container" style="border-color: ${color};">
                ${getRaceIconHTML(race)}
            </div>
            <div class="infobox-section-title" style="background-color: ${color}44; border-color: ${color};">${t('info')}</div>
            <div class="infobox-row"><div class="infobox-label">${t('type')}</div><div class="infobox-value">${info.type || race.tier || 'other'}</div></div>
            ${infoboxRowsHTML ? `<div class="infobox-section-title" style="background-color: ${color}44; border-color:${color};">${t('stats_title')}</div>${infoboxRowsHTML}` : ''}
            ${abilitiesHTML}
            ${info.obtain ? `
                <div class="infobox-section-title" style="background-color: ${color}44; border-color:${color};">${t('obtaining')}</div>
                <div class="infobox-row"><div class="infobox-label">${t('method')}</div><div class="infobox-value">${getLocalized(info, 'obtain') || info.obtain}</div></div>
            ` : ''}
        </div>
    `;

    const mainHTML = `
        <div class="skill-main-content">
            <div class="skill-header-flex">
                <h1>${displayRu}</h1>
                <a href="https://tensura.wiki.gg/wiki/${encodeURIComponent((race.en || race.id).split(' ').join('_'))}" target="_blank" class="wiki-btn">${t('wiki_btn')}</a>
            </div>
            ${currentLang === 'ru' && race.en ? `<p style="color: var(--text-muted); margin-bottom: 20px;"><em>${race.en}</em></p>` : ''}
            
            <div class="skill-detail-description">
                ${cleanDesc || ''}
            </div>
            
            ${renderIntrinsicsHTML(race)}
            ${renderRaceEvolutionGraph(race)}
        </div>
    `;

    detailContent.innerHTML = `<div class="skill-detail-layout">${mainHTML}${infoboxHTML}</div>`;
    listView.classList.add('hidden');
    detailView.classList.remove('hidden');

    if (!keepScroll) {
        window.history.pushState({}, document.title, `races.html?race=${raceId}&lang=${currentLang}`);
        window.scrollTo(0, 0);
    }
}

function goToRace(event, raceId) {
    if (event) event.preventDefault();
    showRaceDetail(raceId);
}

function showRaceListView(keepHistory = false) {
    currentRaceId = null;
    document.getElementById('race-detail-view')?.classList.add('hidden');
    document.getElementById('races-list-view')?.classList.remove('hidden');
    
    if (!keepHistory) {
        window.history.pushState({}, document.title, `races.html?lang=${currentLang}`);
        window.scrollTo(0, 0);
    }
}