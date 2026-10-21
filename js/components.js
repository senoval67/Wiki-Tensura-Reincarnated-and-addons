// js/components.js
const translations = {
    ru: {
        nav_guide: "ГАЙД", nav_skills: "НАВЫКИ", nav_races: "РАСЫ", nav_bosses: "БОССЫ",
        search_placeholder: "Поиск (RU/EN)...",
        info: "Информация", type: "Тип", cost: "Стоимость", points: "Очки Мастерства", passive: "Пассивный",
        obtaining: "Получение", method: "Способ", summon: "Призыв / Появление", drops: "Дроп", items: "Предметы", location: "Где найти",
        hp: "HP", ep: "EP",
        evo_scheme: "Схема Эволюции", evo_horizontal: "Горизонтально", evo_vertical: "Вертикально",
        back_skills: "← Назад к навыкам", back_bosses: "← Назад к боссам", back_races: "← Назад к расам",
        wiki_btn: "НА ВИКИ ↗",
        no_skills: "В этой категории пока нет навыков.", choose_tier: "Выберите тип навыка выше, чтобы просмотреть список.",
        lang_btn: "EN", skill_list_title: "Список Навыков", boss_list_title: "Список Боссов", race_list_title: "Список Рас",
        // Новые ключи для рас:
        stats_title: "Характеристики",
        intrinsics_title: "Врождённые навыки",
        evo_details_title: "Пути эволюции",
        stat_hp: "Здоровье (HP)", stat_shp: "Духовное HP (SHP)", stat_size: "Размер",
        stat_mp_range: "Запас Магикул (MP)", stat_ap_range: "Запас Ауры (AP)",
        stat_attack_dmg: "Урон атаки", stat_attack_speed: "Скорость атаки",
        stat_knockback_resist: "Устойчивость к откид.", stat_jump_boost: "Сила прыжка",
        stat_movement_speed: "Скорость ходьбы", stat_sprint_speed: "Скорость бега",
        stat_spiritual: "Духовная форма", stat_divine: "Божественная",
        evo_previous: "Предыдущая раса", evo_next: "Следующая раса",
        evo_named: "При получении имени", evo_harvest_festival: "Фестиваль Урожая", evo_awakening: "Пробуждение",
        val_yes: "Да", val_no: "Нет", all_races: "Все"
    },
    en: {
        nav_guide: "GUIDE", nav_skills: "SKILLS", nav_races: "RACES", nav_bosses: "BOSSES",
        search_placeholder: "Search (RU/EN)...",
        info: "Information", type: "Type", cost: "Cost", points: "Points to Master", passive: "Passive",
        obtaining: "Obtaining", method: "Method", summon: "Summon / Spawn", drops: "Drops", items: "Items", location: "Location",
        hp: "HP", ep: "EP",
        evo_scheme: "Evolution Scheme", evo_horizontal: "Horizontal", evo_vertical: "Vertical",
        back_skills: "← Back to skills", back_bosses: "← Back to bosses", back_races: "← Back to races",
        wiki_btn: "TO WIKI ↗",
        no_skills: "There are no skills in this category yet.", choose_tier: "Select a skill type above to view the list.",
        lang_btn: "RU", skill_list_title: "Skill List", boss_list_title: "Boss List", race_list_title: "Race List",
        // New keys for races:
        stats_title: "Base Stats",
        intrinsics_title: "Intrinsic Skills",
        evo_details_title: "Evolution Details",
        stat_hp: "Health (HP)", stat_shp: "Spiritual HP (SHP)", stat_size: "Size",
        stat_mp_range: "Magicule Range (MP)", stat_ap_range: "Aura Range (AP)",
        stat_attack_dmg: "Attack Damage", stat_attack_speed: "Attack Speed",
        stat_knockback_resist: "Knockback Resist", stat_jump_boost: "Jump Boost",
        stat_movement_speed: "Movement Speed", stat_sprint_speed: "Sprint Speed",
        stat_spiritual: "Spiritual", stat_divine: "Divine",
        evo_previous: "Previous", evo_next: "Next",
        evo_named: "Named", evo_harvest_festival: "Harvest Festival", evo_awakening: "Awakening",
        val_yes: "Yes", val_no: "No", all_races: "All"
    }
};

const urlParams = new URLSearchParams(window.location.search);
let currentLang = urlParams.get('lang') || localStorage.getItem('tensura_lang') || 'ru';

function t(key) {
    return translations[currentLang][key] || key;
}

function toggleLanguage() {
    currentLang = currentLang === 'ru' ? 'en' : 'ru';
    localStorage.setItem('tensura_lang', currentLang);
    
    // Меняем URL без перезагрузки страницы (чтобы при F5 язык сохранялся)
    const newUrl = new URL(window.location.href);
    newUrl.searchParams.set('lang', currentLang);
    window.history.pushState({}, '', newUrl);
    
    // Обновляем меню и отправляем сигнал странице
    renderLayout();
    window.dispatchEvent(new Event('languageChanged')); 
}

function getLocalized(obj, field) {
    if (currentLang === 'en' && obj[field + '_en']) return obj[field + '_en'];
    return obj[field];
}

function renderLayout() {
    const langParam = `?lang=${currentLang}`;

    const headerHTML = `
        <header>
            <div class="nav-container">
                <div class="nav-links">
                    <a href="index.html${langParam}" id="nav-guide">${t('nav_guide')}</a>
                    <a href="skills.html${langParam}" id="nav-skills">${t('nav_skills')}</a>
                    <a href="races.html${langParam}" id="nav-races">${t('nav_races')}</a>
                    <a href="bosses.html${langParam}" id="nav-bosses">${t('nav_bosses')}</a>
                </div>
                <div class="search-container">
                    <input type="text" id="searchInput" placeholder="${t('search_placeholder')}" autocomplete="off">
                    <div id="searchResults" class="search-results hidden"></div>
                </div>
                <button class="lang-btn" onclick="toggleLanguage()">${t('lang_btn')}</button>
            </div>
        </header>
    `;
    
    const footerHTML = `
        <footer>
            &copy; 2026 Tensura Wiki. <br>
            <a href="https://tensura.wiki.gg/" target="_blank">Official Wiki</a>
        </footer>
    `;

    const headerPlaceholder = document.getElementById('header-placeholder');
    const footerPlaceholder = document.getElementById('footer-placeholder');

    if (headerPlaceholder) headerPlaceholder.innerHTML = headerHTML;
    if (footerPlaceholder) footerPlaceholder.innerHTML = footerHTML;

    highlightActiveNav();
}

function highlightActiveNav() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    if (currentPage === 'index.html') document.getElementById('nav-guide')?.classList.add('active');
    if (currentPage === 'skills.html') document.getElementById('nav-skills')?.classList.add('active');
    if (currentPage === 'races.html') document.getElementById('nav-races')?.classList.add('active');
    if (currentPage === 'bosses.html') document.getElementById('nav-bosses')?.classList.add('active');
}

document.addEventListener('DOMContentLoaded', renderLayout);