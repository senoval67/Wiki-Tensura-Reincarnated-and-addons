// js/main.js

function levenshtein(a, b) {
    if (a.length === 0) return b.length;
    if (b.length === 0) return a.length;
    const matrix = [];
    for (let i = 0; i <= b.length; i++) matrix[i] = [i];
    for (let j = 0; j <= a.length; j++) matrix[0][j] = j;
    for (let i = 1; i <= b.length; i++) {
        for (let j = 1; j <= a.length; j++) {
            if (b.charAt(i - 1) === a.charAt(j - 1)) {
                matrix[i][j] = matrix[i - 1][j - 1];
            } else {
                matrix[i][j] = Math.min(
                    matrix[i - 1][j - 1] + 1,
                    Math.min(matrix[i][j - 1] + 1, matrix[i - 1][j] + 1)
                );
            }
        }
    }
    return matrix[b.length][a.length];
}

function isFuzzyMatch(query, targetString) {
    if (!targetString) return false;
    const cleanQuery = query.toLowerCase().replace(/[^a-zа-яё0-9]/g, '');
    const cleanTarget = targetString.toLowerCase();
    if (cleanTarget.includes(cleanQuery)) return true;

    const words = cleanTarget.split(/[^a-zа-яё0-9]+/);
    for (let word of words) {
        if (word.length === 0) continue;
        const maxErrors = cleanQuery.length <= 3 ? 1 : 2;
        const subWord = word.substring(0, cleanQuery.length + 1); 
        if (levenshtein(cleanQuery, subWord) <= maxErrors) return true;
        if (levenshtein(cleanQuery, word) <= maxErrors) return true;
    }
    return false;
}

function getIconHTMLSearch(item) {
    const iconString = item.icon || item.icon_path || '👤';
    if (iconString.includes('.') || iconString.includes('/')) {
        return `<img src="${iconString}" alt="icon">`;
    }
    return iconString; 
}

function highlightMatch(text, query) {
    if (!query || !text) return text;
    const safeQuery = query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const regex = new RegExp(`(${safeQuery})`, 'gi');
    return text.replace(regex, '<mark style="background-color: var(--accent); color: white; padding: 0 2px; border-radius: 3px;">$1</mark>');
}

// ДЕЛЕГИРОВАНИЕ СОБЫТИЙ: Работает даже если шапка загрузилась позже
document.addEventListener('input', (e) => {
    if (e.target && e.target.id === 'searchInput') {
        const query = e.target.value.trim();
        const searchResults = document.getElementById('searchResults');
        
        if (!searchResults) return;

        if (query.length === 0) {
            searchResults.classList.add('hidden');
            return;
        }

        // Проверяем, загрузились ли данные вообще
        if (typeof skillsData === 'undefined' && typeof racesData === 'undefined' && typeof bossesData === 'undefined') {
            searchResults.innerHTML = `<div class="search-result-item" style="color: red;">Ошибка: Данные не загружены. Проверьте консоль (F12).</div>`;
            searchResults.classList.remove('hidden');
            return;
        }

        const allData = [
            ...(typeof skillsData !== 'undefined' ? skillsData.map(x => ({ ...x, _type: 'skill' })) : []), 
            ...(typeof racesData !== 'undefined' ? racesData.map(x => ({ ...x, _type: 'race' })) : []),
            ...(typeof bossesData !== 'undefined' ? bossesData.map(x => ({ ...x, _type: 'boss' })) : [])
        ];

        const matches = allData.filter(item => 
            isFuzzyMatch(query, item.ru) || 
            isFuzzyMatch(query, item.en) ||
            isFuzzyMatch(query, item.ru_en)
        );

        if (matches.length > 0) {
            searchResults.innerHTML = '';
            matches.slice(0, 6).forEach(match => {
                const div = document.createElement('div');
                div.className = 'search-result-item';
                div.onclick = () => {
                    const langParam = typeof currentLang !== 'undefined' ? `&lang=${currentLang}` : '';
                    if (match._type === 'skill') {
                        if (document.getElementById('skill-detail-view') && typeof showDetail === 'function') {
                            showDetail(match.id);
                        } else {
                            window.location.href = `skills.html?skill=${match.id}${langParam}`;
                        }
                    } else if (match._type === 'boss') {
                        if (document.getElementById('boss-detail-view') && typeof showBossDetail === 'function') {
                            showBossDetail(match.id);
                        } else {
                            window.location.href = `bosses.html?boss=${match.id}${langParam}`;
                        }
                    } else if (match._type === 'race') {
                        if (document.getElementById('race-detail-view') && typeof showRaceDetail === 'function') {
                            showRaceDetail(match.id);
                        } else {
                            window.location.href = `races.html?race=${match.id}${langParam}`;
                        }
                    }
                    e.target.value = ''; 
                    searchResults.classList.add('hidden');
                };
                
                const displayName = currentLang === 'en' ? match.en : match.ru;
                const displayEn = match.en;

                const highlightedRu = highlightMatch(displayName, query);
                const highlightedEn = currentLang === 'ru' ? highlightMatch(displayEn, query) : '';

                div.innerHTML = `
                    <div class="search-icon">${getIconHTMLSearch(match)}</div>
                    <div class="search-names">
                        <span class="search-ru">${highlightedRu}</span>
                        ${currentLang === 'ru' ? `<span class="search-en">${highlightedEn}</span>` : ''}
                    </div>
                `;
                searchResults.appendChild(div);
            });
            searchResults.classList.remove('hidden');
        } else {
            searchResults.classList.add('hidden');
        }
    }
});

// Скрываем поиск при клике вне его области
document.addEventListener('click', (e) => {
    const searchInput = document.getElementById('searchInput');
    const searchResults = document.getElementById('searchResults');
    
    if (searchInput && searchResults) {
        if (!searchInput.contains(e.target) && !searchResults.contains(e.target)) {
            searchResults.classList.add('hidden');
        }
    }
});