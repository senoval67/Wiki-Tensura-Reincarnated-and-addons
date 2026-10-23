const racesDataNGNL = [
    // --- ФЛЮГЕЛИ (FLÜGEL) ---
    {
        "id": "flugel",
        "ru": "Флюгель",
        "en": "Flügel",
        "mod": "Tensura: No Game No Life",
        "wiki_url": "https://www.curseforge.com/minecraft/mc-mods/tensura-no-game-no-life",
        "tier": "common",
        "starter": true,
        "icon": "🧬",
        "infobox": {
            "type": "Раса",
            "hp": "20",
            "shp": "80",
            "ep": "350 - 600 MP / 800 - 1600 AP",
            "size": "2 м",
            "speed": "0.0 (0.2 Swim)",
            "prev": [],
            "next": [{ "id": "higher_flugel", "ru": "Высший Флюгель", "tier": "common" }],
            "obtain": "Начальная раса"
        },
        "desc": "<p>Небесные существа. Физически слабы, но обладают хорошим магическим потенциалом и полетом.</p><h2>Характеристики</h2><ul><li><b>Атака:</b> 1.0</li><li><b>Скорость атаки:</b> 4.0</li><li><b>Сопротивление отбрасыванию:</b> 0.1</li></ul>",
        "desc_en": "<p>Heavenly beings. Physically weak, but possess good magical potential and flight.</p><h2>Stats</h2><ul><li><b>Attack:</b> 1.0</li><li><b>Attack Speed:</b> 4.0</li><li><b>Knockback Resist:</b> 0.1</li></ul>"
    },
    {
        "id": "higher_flugel",
        "ru": "Высший Флюгель",
        "en": "Higher Flugel",
        "mod": "Tensura: No Game No Life",
        "wiki_url": "https://www.curseforge.com/minecraft/mc-mods/tensura-no-game-no-life",
        "tier": "common",
        "icon": "🧬",
        "infobox": {
            "type": "Раса",
            "hp": "180",
            "shp": "400",
            "ep": "800 - 1200 MP / 1800 - 2600 AP",
            "size": "2 м",
            "speed": "0.11 (0.3 Swim)",
            "prev": [{ "id": "flugel", "ru": "Флюгель", "tier": "common" }],
            "next": [{ "id": "jibril", "ru": "Джибрил", "tier": "unique" }],
            "obtain": "Эволюция Флюгеля"
        },
        "desc": "<p>Улучшенная версия Флюгеля. Они обрели большую мощь и выносливость.</p><h2>Характеристики</h2><ul><li><b>Атака:</b> 2.5</li><li><b>Скорость атаки:</b> 4.1</li><li><b>Сопротивление отбрасыванию:</b> 0.2</li></ul>",
        "desc_en": "<p>An upgraded version of the Flügel. They have gained greater power and endurance.</p><h2>Stats</h2><ul><li><b>Attack:</b> 2.5</li><li><b>Attack Speed:</b> 4.1</li><li><b>Knockback Resist:</b> 0.2</li></ul>"
    },
    {
        "id": "jibril",
        "ru": "Джибрил",
        "en": "Jibril",
        "mod": "Tensura: No Game No Life",
        "wiki_url": "https://www.curseforge.com/minecraft/mc-mods/tensura-no-game-no-life",
        "tier": "unique",
        "icon": "🧬",
        "infobox": {
            "type": "Раса",
            "hp": "430",
            "shp": "1000",
            "ep": "1300 - 1800 MP / 1200 - 2000 AP",
            "size": "2 м",
            "speed": "0.12 (0.5 Swim)",
            "prev": [{ "id": "higher_flugel", "ru": "Высший Флюгель", "tier": "common" }],
            "next": [{ "id": "flugel_raphael", "ru": "Рафаэль (Раса)", "tier": "unique" }],
            "obtain": "Эволюция Высшего Флюгеля"
        },
        "desc": "<p>Невероятно сильный Флюгель, известный своей гениальностью и жаждой знаний.</p><h2>Характеристики</h2><ul><li><b>Атака:</b> 4.5</li><li><b>Скорость атаки:</b> 4.2</li><li><b>Сопротивление отбрасыванию:</b> 0.3</li></ul>",
        "desc_en": "<p>An incredibly powerful Flügel known for her genius and thirst for knowledge.</p><h2>Stats</h2><ul><li><b>Attack:</b> 4.5</li><li><b>Attack Speed:</b> 4.2</li><li><b>Knockback Resist:</b> 0.3</li></ul>"
    },
    {
        "id": "flugel_raphael",
        "ru": "Рафаэль (Раса)",
        "en": "Raphael (Race)",
        "mod": "Tensura: No Game No Life",
        "wiki_url": "https://www.curseforge.com/minecraft/mc-mods/tensura-no-game-no-life",
        "tier": "unique",
        "icon": "🧬",
        "infobox": {
            "type": "Раса",
            "hp": "330",
            "shp": "800",
            "ep": "1200 - 1700 MP / 2800 - 4200 AP",
            "size": "2 м",
            "speed": "0.13 (0.4 Swim)",
            "prev": [{ "id": "jibril", "ru": "Джибрил", "tier": "unique" }],
            "next": [{ "id": "azril", "ru": "Азриль", "tier": "ultimate" }],
            "obtain": "Эволюция Джибрил"
        },
        "desc": "<p>Раса, названная в честь великого мудреца. Огромный запас ауры, но меньше физ. здоровья.</p><h2>Характеристики</h2><ul><li><b>Атака:</b> 4.0</li><li><b>Скорость атаки:</b> 4.25</li><li><b>Сопротивление отбрасыванию:</b> 0.25</li></ul>",
        "desc_en": "<p>A race named after the great sage. Incredible aura pool, but lower physical health.</p><h2>Stats</h2><ul><li><b>Attack:</b> 4.0</li><li><b>Attack Speed:</b> 4.25</li><li><b>Knockback Resist:</b> 0.25</li></ul>"
    },
    {
        "id": "azril",
        "ru": "Азриль",
        "en": "Azril",
        "mod": "Tensura: No Game No Life",
        "wiki_url": "https://www.curseforge.com/minecraft/mc-mods/tensura-no-game-no-life",
        "tier": "ultimate",
        "icon": "🧬",
        "infobox": {
            "type": "Раса",
            "hp": "580",
            "shp": "1800",
            "ep": "2500 - 3500 MP / 5000 - 7000 AP",
            "size": "2 м",
            "speed": "0.14 (0.7 Swim)",
            "prev": [{ "id": "flugel_raphael", "ru": "Рафаэль (Раса)", "tier": "unique" }],
            "next": [{ "id": "arutoshu", "ru": "Артошу", "tier": "ultimate" }],
            "obtain": "Эволюция Рафаэля (Раса)"
        },
        "desc": "<p>Высшее существо среди Флюгелей. Огромная духовная сила и мастерство в магии.</p><h2>Характеристики</h2><ul><li><b>Атака:</b> 6.0</li><li><b>Скорость атаки:</b> 4.4</li><li><b>Сопротивление отбрасыванию:</b> 0.3</li></ul>",
        "desc_en": "<p>The supreme being among the Flügel. Colossal spiritual power and mastery over magic.</p><h2>Stats</h2><ul><li><b>Attack:</b> 6.0</li><li><b>Attack Speed:</b> 4.4</li><li><b>Knockback Resist:</b> 0.3</li></ul>"
    },
    {
        "id": "arutoshu",
        "ru": "Артошу",
        "en": "Arutoshu",
        "mod": "Tensura: No Game No Life",
        "wiki_url": "https://www.curseforge.com/minecraft/mc-mods/tensura-no-game-no-life",
        "tier": "ultimate",
        "icon": "🧬",
        "infobox": {
            "type": "Раса",
            "hp": "980",
            "shp": "4000",
            "ep": "5000 - 8000 MP / 10000 - 15000 AP",
            "size": "2 м",
            "speed": "0.15 (1.2 Swim)",
            "prev": [{ "id": "azril", "ru": "Азриль", "tier": "ultimate" }],
            "next": [],
            "obtain": "Эволюция Азриля"
        },
        "desc": "<p>Легендарный Бог Войны Флюгелей. Абсолютная вершина эволюции.</p><h2>Характеристики</h2><ul><li><b>Атака:</b> 10.0</li><li><b>Скорость атаки:</b> 4.5</li><li><b>Сопротивление отбрасыванию:</b> 0.3</li></ul>",
        "desc_en": "<p>The legendary God of War of the Flügel. Absolute pinnacle of evolution.</p><h2>Stats</h2><ul><li><b>Attack:</b> 10.0</li><li><b>Attack Speed:</b> 4.5</li><li><b>Knockback Resist:</b> 0.3</li></ul>"
    },

    // --- ДРАКОНИЯ (DRAGONIA) ---
    {
        "id": "dragonia",
        "ru": "Дракония",
        "en": "Dragonia",
        "mod": "Tensura: No Game No Life",
        "wiki_url": "https://www.curseforge.com/minecraft/mc-mods/tensura-no-game-no-life",
        "tier": "common",
        "starter": true,
        "icon": "🐉",
        "infobox": {
            "type": "Раса",
            "hp": "20",
            "shp": "60",
            "ep": "400 - 700 MP / 1000 - 1800 AP",
            "size": "2 м",
            "speed": "0.0 (0.1 Swim)",
            "prev": [],
            "next": [{ "id": "lesser_dragonia", "ru": "Низший Дракония", "tier": "common" }],
            "obtain": "Начальная раса"
        },
        "desc": "<p>Раса драконов. Обладают крепкой чешуей и потенциалом к росту.</p><h2>Характеристики</h2><ul><li><b>Атака:</b> 1.5</li><li><b>Скорость атаки:</b> 4.0</li><li><b>Сопротивление отбрасыванию:</b> 0.3</li></ul>",
        "desc_en": "<p>Dragon race. Possess tough scales and growth potential.</p><h2>Stats</h2><ul><li><b>Attack:</b> 1.5</li><li><b>Attack Speed:</b> 4.0</li><li><b>Knockback Resist:</b> 0.3</li></ul>"
    },
    {
        "id": "lesser_dragonia",
        "ru": "Низший Дракония",
        "en": "Lesser Dragonia",
        "mod": "Tensura: No Game No Life",
        "wiki_url": "https://www.curseforge.com/minecraft/mc-mods/tensura-no-game-no-life",
        "tier": "common",
        "icon": "🐉",
        "infobox": {
            "type": "Раса",
            "hp": "80",
            "shp": "150",
            "ep": "600 - 1000 MP / 1500 - 2500 AP",
            "size": "2 м",
            "speed": "0.0 (0.2 Swim)",
            "prev": [{ "id": "dragonia", "ru": "Дракония", "tier": "common" }],
            "next": [{ "id": "middle_dragonia", "ru": "Средний Дракония", "tier": "common" }],
            "obtain": "Эволюция Драконии"
        },
        "desc": "<p>Драконы, вставшие на путь силы.</p><h2>Характеристики</h2><ul><li><b>Атака:</b> 3.0</li><li><b>Скорость атаки:</b> 4.05</li><li><b>Сопротивление отбрасыванию:</b> 0.3</li></ul>",
        "desc_en": "<p>Dragons that have stepped onto the path of power.</p><h2>Stats</h2><ul><li><b>Attack:</b> 3.0</li><li><b>Attack Speed:</b> 4.05</li><li><b>Knockback Resist:</b> 0.3</li></ul>"
    },
    {
        "id": "middle_dragonia",
        "ru": "Средний Дракония",
        "en": "Middle Dragonia",
        "mod": "Tensura: No Game No Life",
        "wiki_url": "https://www.curseforge.com/minecraft/mc-mods/tensura-no-game-no-life",
        "tier": "unique",
        "icon": "🐉",
        "infobox": {
            "type": "Раса",
            "hp": "180",
            "shp": "350",
            "ep": "1000 - 1500 MP / 2500 - 3500 AP",
            "size": "2 м",
            "speed": "0.11 (0.3 Swim)",
            "prev": [{ "id": "lesser_dragonia", "ru": "Низший Дракония", "tier": "common" }],
            "next": [{ "id": "higher_dragonia", "ru": "Высший Дракония", "tier": "unique" }],
            "obtain": "Эволюция Низшего Драконии"
        },
        "desc": "<p>Опытные драконы, обладающие устрашающей силой.</p><h2>Характеристики</h2><ul><li><b>Атака:</b> 5.0</li><li><b>Скорость атаки:</b> 4.15</li><li><b>Сопротивление отбрасыванию:</b> 0.3</li></ul>",
        "desc_en": "<p>Experienced dragons possessing formidable power.</p><h2>Stats</h2><ul><li><b>Attack:</b> 5.0</li><li><b>Attack Speed:</b> 4.15</li><li><b>Knockback Resist:</b> 0.3</li></ul>"
    },
    {
        "id": "higher_dragonia",
        "ru": "Высший Дракония",
        "en": "Higher Dragonia",
        "mod": "Tensura: No Game No Life",
        "wiki_url": "https://www.curseforge.com/minecraft/mc-mods/tensura-no-game-no-life",
        "tier": "unique",
        "icon": "🐉",
        "infobox": {
            "type": "Раса",
            "hp": "330",
            "shp": "700",
            "ep": "1800 - 2500 MP / 4000 - 5500 AP",
            "size": "2 м",
            "speed": "0.12 (0.5 Swim)",
            "prev": [{ "id": "middle_dragonia", "ru": "Средний Дракония", "tier": "unique" }],
            "next": [
                { "id": "aranreivu", "ru": "Аранрейву", "tier": "ultimate" },
                { "id": "hartyleif", "ru": "Хартайлейф", "tier": "ultimate" },
                { "id": "reginreivu", "ru": "Регинрейву", "tier": "ultimate" }
            ],
            "obtain": "Эволюция Среднего Драконии"
        },
        "desc": "<p>Элитные драконы. Способны выбрать один из трех путей развития.</p><h2>Характеристики</h2><ul><li><b>Атака:</b> 7.0</li><li><b>Скорость атаки:</b> 4.2</li><li><b>Сопротивление отбрасыванию:</b> 0.3</li></ul>",
        "desc_en": "<p>Elite dragons. Capable of choosing one of three evolutionary paths.</p><h2>Stats</h2><ul><li><b>Attack:</b> 7.0</li><li><b>Attack Speed:</b> 4.2</li><li><b>Knockback Resist:</b> 0.3</li></ul>"
    },
    {
        "id": "aranreivu",
        "ru": "Аранрейву (Багровый)",
        "en": "Aranreivu",
        "mod": "Tensura: No Game No Life",
        "wiki_url": "https://www.curseforge.com/minecraft/mc-mods/tensura-no-game-no-life",
        "tier": "ultimate",
        "icon": "🐉",
        "infobox": {
            "type": "Раса",
            "hp": "530",
            "shp": "1000",
            "ep": "3000 - 4000 MP / 6000 - 8000 AP",
            "size": "2 м",
            "speed": "0.13 (0.6 Swim)",
            "prev": [{ "id": "higher_dragonia", "ru": "Высший Дракония", "tier": "unique" }],
            "next": [],
            "obtain": "Эволюция Высшего Драконии"
        },
        "desc": "<p>Один из трех путей Высшего Дракона. Сбалансированный боец.</p><h2>Характеристики</h2><ul><li><b>Атака:</b> 8.0</li><li><b>Скорость атаки:</b> 4.25</li><li><b>Сопротивление отбрасыванию:</b> 0.3</li></ul>",
        "desc_en": "<p>One of the three paths of Higher Dragonia. Balanced fighter.</p><h2>Stats</h2><ul><li><b>Attack:</b> 8.0</li><li><b>Attack Speed:</b> 4.25</li><li><b>Knockback Resist:</b> 0.3</li></ul>"
    },
    {
        "id": "hartyleif",
        "ru": "Хартайлейф (Погибель)",
        "en": "Hartyleif",
        "mod": "Tensura: No Game No Life",
        "wiki_url": "https://www.curseforge.com/minecraft/mc-mods/tensura-no-game-no-life",
        "tier": "ultimate",
        "icon": "🐉",
        "infobox": {
            "type": "Раса",
            "hp": "680",
            "shp": "1500",
            "ep": "3500 - 4500 MP / 7000 - 9000 AP",
            "size": "2 м",
            "speed": "0.0 (0.9 Swim)",
            "prev": [{ "id": "higher_dragonia", "ru": "Высший Дракония", "tier": "unique" }],
            "next": [],
            "obtain": "Эволюция Высшего Драконии"
        },
        "desc": "<p>Один из трех путей Высшего Дракона. Мастер атак.</p><h2>Характеристики</h2><ul><li><b>Атака:</b> 10.0</li><li><b>Скорость атаки:</b> 4.35</li><li><b>Сопротивление отбрасыванию:</b> 0.3</li></ul>",
        "desc_en": "<p>One of the three paths of Higher Dragonia. Master of attacks.</p><h2>Stats</h2><ul><li><b>Attack:</b> 10.0</li><li><b>Attack Speed:</b> 4.35</li><li><b>Knockback Resist:</b> 0.3</li></ul>"
    },
    {
        "id": "reginreivu",
        "ru": "Регинрейву (Мудрый)",
        "en": "Reginreivu",
        "mod": "Tensura: No Game No Life",
        "wiki_url": "https://www.curseforge.com/minecraft/mc-mods/tensura-no-game-no-life",
        "tier": "ultimate",
        "icon": "🐉",
        "infobox": {
            "type": "Раса",
            "hp": "630",
            "shp": "1300",
            "ep": "3200 - 4200 MP / 6500 - 8500 AP",
            "size": "2 м",
            "speed": "0.14 (0.8 Swim)",
            "prev": [{ "id": "higher_dragonia", "ru": "Высший Дракония", "tier": "unique" }],
            "next": [],
            "obtain": "Эволюция Высшего Драконии"
        },
        "desc": "<p>Один из трех путей Высшего Дракона. Быстрый и смертоносный.</p><h2>Характеристики</h2><ul><li><b>Атака:</b> 9.0</li><li><b>Скорость атаки:</b> 4.3</li><li><b>Сопротивление отбрасыванию:</b> 0.3</li></ul>",
        "desc_en": "<p>One of the three paths of Higher Dragonia. Fast and deadly.</p><h2>Stats</h2><ul><li><b>Attack:</b> 9.0</li><li><b>Attack Speed:</b> 4.3</li><li><b>Knockback Resist:</b> 0.3</li></ul>"
    },

    // --- ГНОМЫ (DWARF) ---
    {
        "id": "dwarf_ngnl",
        "ru": "Гном",
        "en": "Dwarf",
        "mod": "Tensura: No Game No Life",
        "wiki_url": "https://www.curseforge.com/minecraft/mc-mods/tensura-no-game-no-life",
        "tier": "common",
        "starter": true,
        "icon": "⚒️",
        "infobox": {
            "type": "Раса",
            "hp": "0",
            "shp": "60",
            "ep": "50 - 150 MP / 500 - 1000 AP",
            "size": "2 м (-0.3)",
            "speed": "0.0 (-0.1 Swim)",
            "prev": [],
            "next": [{ "id": "nii_tiruvirugu", "ru": "Нии Тирувиругу", "tier": "common" }],
            "obtain": "Начальная раса"
        },
        "desc": "<p>Мастера кузнечного дела и подземелий.</p><h2>Характеристики</h2><ul><li><b>Атака:</b> 1.0</li><li><b>Скорость атаки:</b> 4.0</li><li><b>Сопротивление отбрасыванию:</b> 0.1</li></ul>",
        "desc_en": "<p>Masters of blacksmithing and dungeons.</p><h2>Stats</h2><ul><li><b>Attack:</b> 1.0</li><li><b>Attack Speed:</b> 4.0</li><li><b>Knockback Resist:</b> 0.1</li></ul>"
    },
    {
        "id": "nii_tiruvirugu",
        "ru": "Нии Тирувиругу",
        "en": "Nii Tiruvirugu",
        "mod": "Tensura: No Game No Life",
        "wiki_url": "https://www.curseforge.com/minecraft/mc-mods/tensura-no-game-no-life",
        "tier": "common",
        "icon": "⚒️",
        "infobox": {
            "type": "Раса",
            "hp": "30",
            "shp": "80",
            "ep": "200 - 400 MP / 1000 - 1800 AP",
            "size": "2 м (-0.25)",
            "speed": "0.0 (0.0 Swim)",
            "prev": [{ "id": "dwarf_ngnl", "ru": "Гном", "tier": "common" }],
            "next": [{ "id": "veigu_dorauvuniru", "ru": "Вейгу Дораувуниру", "tier": "common" }],
            "obtain": "Эволюция Гнома"
        },
        "desc": "<p>Улучшенный гном.</p><h2>Характеристики</h2><ul><li><b>Атака:</b> 1.5</li><li><b>Скорость атаки:</b> 4.05</li><li><b>Сопротивление отбрасыванию:</b> 0.2</li></ul>",
        "desc_en": "<p>Upgraded dwarf.</p><h2>Stats</h2><ul><li><b>Attack:</b> 1.5</li><li><b>Attack Speed:</b> 4.05</li><li><b>Knockback Resist:</b> 0.2</li></ul>"
    },
    {
        "id": "veigu_dorauvuniru",
        "ru": "Вейгу Дораувуниру",
        "en": "Veigu Dorauvuniru",
        "mod": "Tensura: No Game No Life",
        "wiki_url": "https://www.curseforge.com/minecraft/mc-mods/tensura-no-game-no-life",
        "tier": "unique",
        "icon": "⚒️",
        "infobox": {
            "type": "Раса",
            "hp": "80",
            "shp": "200",
            "ep": "400 - 700 MP / 1800 - 2800 AP",
            "size": "2 м (-0.2)",
            "speed": "0.0 (0.1 Swim)",
            "prev": [{ "id": "nii_tiruvirugu", "ru": "Нии Тирувиругу", "tier": "common" }],
            "next": [{ "id": "roni_dorauvuniru", "ru": "Рони Дораувуниру", "tier": "unique" }],
            "obtain": "Эволюция Нии Тирувиругу"
        },
        "desc": "<p>Стойкий воин подземелий.</p><h2>Характеристики</h2><ul><li><b>Атака:</b> 3.0</li><li><b>Скорость атаки:</b> 4.15</li><li><b>Сопротивление отбрасыванию:</b> 0.3</li></ul>",
        "desc_en": "<p>Sturdy dungeon warrior.</p><h2>Stats</h2><ul><li><b>Attack:</b> 3.0</li><li><b>Attack Speed:</b> 4.15</li><li><b>Knockback Resist:</b> 0.3</li></ul>"
    },
    {
        "id": "roni_dorauvuniru",
        "ru": "Рони Дораувуниру",
        "en": "Roni Dorauvuniru",
        "mod": "Tensura: No Game No Life",
        "wiki_url": "https://www.curseforge.com/minecraft/mc-mods/tensura-no-game-no-life",
        "tier": "unique",
        "icon": "⚒️",
        "infobox": {
            "type": "Раса",
            "hp": "160",
            "shp": "450",
            "ep": "600 - 1000 MP / 2500 - 3500 AP",
            "size": "2 м (-0.15)",
            "speed": "0.0 (0.2 Swim)",
            "prev": [{ "id": "veigu_dorauvuniru", "ru": "Вейгу Дораувуниру", "tier": "unique" }],
            "next": [{ "id": "ocain", "ru": "Окейн", "tier": "ultimate" }],
            "obtain": "Эволюция Вейгу Дораувуниру"
        },
        "desc": "<p>Мастер боя.</p><h2>Характеристики</h2><ul><li><b>Атака:</b> 5.0</li><li><b>Скорость атаки:</b> 4.2</li><li><b>Сопротивление отбрасыванию:</b> 0.3</li></ul>",
        "desc_en": "<p>Combat master.</p><h2>Stats</h2><ul><li><b>Attack:</b> 5.0</li><li><b>Attack Speed:</b> 4.2</li><li><b>Knockback Resist:</b> 0.3</li></ul>"
    },
    {
        "id": "ocain",
        "ru": "Окейн",
        "en": "Ocain",
        "mod": "Tensura: No Game No Life",
        "wiki_url": "https://www.curseforge.com/minecraft/mc-mods/tensura-no-game-no-life",
        "tier": "ultimate",
        "icon": "⚒️",
        "infobox": {
            "type": "Раса",
            "hp": "280",
            "shp": "900",
            "ep": "1200 - 1800 MP / 4000 - 5500 AP",
            "size": "2 м (-0.1)",
            "speed": "0.0 (0.3 Swim)",
            "prev": [{ "id": "roni_dorauvuniru", "ru": "Рони Дораувуниру", "tier": "unique" }],
            "next": [],
            "obtain": "Эволюция Рони Дораувуниру"
        },
        "desc": "<p>Легендарный гном-воин.</p><h2>Характеристики</h2><ul><li><b>Атака:</b> 7.0</li><li><b>Скорость атаки:</b> 4.25</li><li><b>Сопротивление отбрасыванию:</b> 0.3</li></ul>",
        "desc_en": "<p>Legendary dwarf warrior.</p><h2>Stats</h2><ul><li><b>Attack:</b> 7.0</li><li><b>Attack Speed:</b> 4.25</li><li><b>Knockback Resist:</b> 0.3</li></ul>"
    },

    // --- ЭКС-МАХИНА (MACHINE) ---
    {
        "id": "machine",
        "ru": "Машина",
        "en": "Machine",
        "mod": "Tensura: No Game No Life",
        "wiki_url": "https://www.curseforge.com/minecraft/mc-mods/tensura-no-game-no-life",
        "tier": "common",
        "starter": true,
        "icon": "🤖",
        "infobox": {
            "type": "Раса",
            "hp": "40",
            "shp": "60",
            "ep": "100 - 200 MP / 700 - 1500 AP",
            "size": "2 м",
            "speed": "0.0 (0.1 Swim)",
            "prev": [],
            "next": [
                { "id": "kampf", "ru": "Боевая единица (Combat)", "tier": "common" },
                { "id": "befehler", "ru": "Командир (Commander)", "tier": "common" },
                { "id": "zeichen", "ru": "Проектировщик (Design)", "tier": "common" },
                { "id": "seher", "ru": "Наблюдатель (Observer)", "tier": "common" },
                { "id": "puraiya", "ru": "Анализатор (Analyzer)", "tier": "common" }
            ],
            "obtain": "Начальная раса"
        },
        "desc": "<p>Механические создания, обладающие искусственным интеллектом.</p><h2>Характеристики</h2><ul><li><b>Атака:</b> 1.0</li><li><b>Скорость атаки:</b> 4.0</li><li><b>Сопротивление отбрасыванию:</b> 0.1</li></ul>",
        "desc_en": "<p>Mechanical beings possessing artificial intelligence.</p><h2>Stats</h2><ul><li><b>Attack:</b> 1.0</li><li><b>Attack Speed:</b> 4.0</li><li><b>Knockback Resist:</b> 0.1</li></ul>"
    },
    {
        "id": "kampf",
        "ru": "Боевая единица (Combat)",
        "en": "Combat Machine",
        "mod": "Tensura: No Game No Life",
        "wiki_url": "https://www.curseforge.com/minecraft/mc-mods/tensura-no-game-no-life",
        "tier": "common",
        "icon": "⚔️",
        "infobox": {
            "type": "Раса",
            "hp": "130",
            "shp": "180",
            "ep": "350 - 550 MP / 1300 - 2100 AP",
            "size": "2 м",
            "speed": "0.0 (0.3 Swim)",
            "prev": [{ "id": "machine", "ru": "Машина", "tier": "common" }],
            "next": [],
            "obtain": "Эволюция Машины"
        },
        "desc": "<p>Машина, созданная для уничтожения врагов.</p><h2>Характеристики</h2><ul><li><b>Атака:</b> 2.5</li><li><b>Скорость атаки:</b> 4.1</li><li><b>Сопротивление отбрасыванию:</b> 0.3</li></ul>",
        "desc_en": "<p>Machine created to destroy enemies.</p><h2>Stats</h2><ul><li><b>Attack:</b> 2.5</li><li><b>Attack Speed:</b> 4.1</li><li><b>Knockback Resist:</b> 0.3</li></ul>"
    },
    {
        "id": "befehler",
        "ru": "Командир (Commander)",
        "en": "Commander Machine",
        "mod": "Tensura: No Game No Life",
        "wiki_url": "https://www.curseforge.com/minecraft/mc-mods/tensura-no-game-no-life",
        "tier": "unique",
        "icon": "📢",
        "infobox": {
            "type": "Раса",
            "hp": "100",
            "shp": "150",
            "ep": "300 - 500 MP / 1200 - 2000 AP",
            "size": "2 м",
            "speed": "0.0 (0.2 Swim)",
            "prev": [{ "id": "machine", "ru": "Машина", "tier": "common" }],
            "next": [
                { "id": "einzeig", "ru": "Айнзайг", "tier": "unique" },
                { "id": "emir_eins", "ru": "Эмир Айнс", "tier": "unique" }
            ],
            "obtain": "Эволюция Машины"
        },
        "desc": "<p>Тактический командир, управляющий другими машинами.</p><h2>Характеристики</h2><ul><li><b>Атака:</b> 1.5</li><li><b>Скорость атаки:</b> 4.05</li><li><b>Сопротивление отбрасыванию:</b> 0.2</li></ul>",
        "desc_en": "<p>Tactical commander controlling other machines.</p><h2>Stats</h2><ul><li><b>Attack:</b> 1.5</li><li><b>Attack Speed:</b> 4.05</li><li><b>Knockback Resist:</b> 0.2</li></ul>"
    },
    {
        "id": "zeichen",
        "ru": "Проектировщик (Design)",
        "en": "Design Machine",
        "mod": "Tensura: No Game No Life",
        "wiki_url": "https://www.curseforge.com/minecraft/mc-mods/tensura-no-game-no-life",
        "tier": "common",
        "icon": "📐",
        "infobox": {
            "type": "Раса",
            "hp": "80",
            "shp": "100",
            "ep": "280 - 480 MP / 1100 - 1900 AP",
            "size": "2 м",
            "speed": "0.0 (0.2 Swim)",
            "prev": [{ "id": "machine", "ru": "Машина", "tier": "common" }],
            "next": [],
            "obtain": "Эволюция Машины"
        },
        "desc": "<p>Создает чертежи и анализирует конструкции.</p><h2>Характеристики</h2><ul><li><b>Атака:</b> 1.0</li><li><b>Скорость атаки:</b> 4.05</li><li><b>Сопротивление отбрасыванию:</b> 0.15</li></ul>",
        "desc_en": "<p>Creates blueprints and analyzes structures.</p><h2>Stats</h2><ul><li><b>Attack:</b> 1.0</li><li><b>Attack Speed:</b> 4.05</li><li><b>Knockback Resist:</b> 0.15</li></ul>"
    },
    {
        "id": "seher",
        "ru": "Наблюдатель (Observer)",
        "en": "Observer Machine",
        "mod": "Tensura: No Game No Life",
        "wiki_url": "https://www.curseforge.com/minecraft/mc-mods/tensura-no-game-no-life",
        "tier": "common",
        "icon": "👁️",
        "infobox": {
            "type": "Раса",
            "hp": "80",
            "shp": "100",
            "ep": "290 - 490 MP / 1150 - 1950 AP",
            "size": "2 м",
            "speed": "0.0 (0.2 Swim)",
            "prev": [{ "id": "machine", "ru": "Машина", "tier": "common" }],
            "next": [],
            "obtain": "Эволюция Машины"
        },
        "desc": "<p>Сборщик информации.</p><h2>Характеристики</h2><ul><li><b>Атака:</b> 1.0</li><li><b>Скорость атаки:</b> 4.05</li><li><b>Сопротивление отбрасыванию:</b> 0.15</li></ul>",
        "desc_en": "<p>Information gatherer.</p><h2>Stats</h2><ul><li><b>Attack:</b> 1.0</li><li><b>Attack Speed:</b> 4.05</li><li><b>Knockback Resist:</b> 0.15</li></ul>"
    },
    {
        "id": "puraiya",
        "ru": "Анализатор (Analyzer)",
        "en": "Analyzer Machine",
        "mod": "Tensura: No Game No Life",
        "wiki_url": "https://www.curseforge.com/minecraft/mc-mods/tensura-no-game-no-life",
        "tier": "unique",
        "icon": "🧠",
        "infobox": {
            "type": "Раса",
            "hp": "380",
            "shp": "850",
            "ep": "1200 - 1800 MP / 3500 - 5000 AP",
            "size": "2 м",
            "speed": "0.0 (0.5 Swim)",
            "prev": [{ "id": "machine", "ru": "Машина", "tier": "common" }],
            "next": [{ "id": "hubie_dora", "ru": "Хьюби Дора", "tier": "unique" }],
            "obtain": "Эволюция Машины"
        },
        "desc": "<p>Анализирует данные и вычисляет вероятности.</p><h2>Характеристики</h2><ul><li><b>Атака:</b> 4.0</li><li><b>Скорость атаки:</b> 4.2</li><li><b>Сопротивление отбрасыванию:</b> 0.35</li></ul>",
        "desc_en": "<p>Analyzes data and calculates probabilities.</p><h2>Stats</h2><ul><li><b>Attack:</b> 4.0</li><li><b>Attack Speed:</b> 4.2</li><li><b>Knockback Resist:</b> 0.35</li></ul>"
    },
    {
        "id": "einzeig",
        "ru": "Айнзайг",
        "en": "Einzeig",
        "mod": "Tensura: No Game No Life",
        "wiki_url": "https://www.curseforge.com/minecraft/mc-mods/tensura-no-game-no-life",
        "tier": "unique",
        "icon": "🤖",
        "infobox": {
            "type": "Раса",
            "hp": "480",
            "shp": "1000",
            "ep": "1500 - 2500 MP / 4000 - 6000 AP",
            "size": "2 м",
            "speed": "0.0 (0.6 Swim)",
            "prev": [{ "id": "befehler", "ru": "Командир", "tier": "unique" }],
            "next": [{ "id": "horou", "ru": "Хороу", "tier": "ultimate" }],
            "obtain": "Эволюция Командира"
        },
        "desc": "<p>Продвинутая боевая машина.</p><h2>Характеристики</h2><ul><li><b>Атака:</b> 5.0</li><li><b>Скорость атаки:</b> 4.3</li><li><b>Сопротивление отбрасыванию:</b> 0.3</li></ul>",
        "desc_en": "<p>Advanced combat machine.</p><h2>Stats</h2><ul><li><b>Attack:</b> 5.0</li><li><b>Attack Speed:</b> 4.3</li><li><b>Knockback Resist:</b> 0.3</li></ul>"
    },
    {
        "id": "emir_eins",
        "ru": "Эмир Айнс",
        "en": "Emir Eins",
        "mod": "Tensura: No Game No Life",
        "wiki_url": "https://www.curseforge.com/minecraft/mc-mods/tensura-no-game-no-life",
        "tier": "unique",
        "icon": "🤖",
        "infobox": {
            "type": "Раса",
            "hp": "530",
            "shp": "1200",
            "ep": "1600 - 2600 MP / 4200 - 6200 AP",
            "size": "2 м",
            "speed": "0.0 (0.7 Swim)",
            "prev": [{ "id": "befehler", "ru": "Командир", "tier": "unique" }],
            "next": [{ "id": "horou", "ru": "Хороу", "tier": "ultimate" }],
            "obtain": "Эволюция Командира"
        },
        "desc": "<p>Улучшенная версия командира.</p><h2>Характеристики</h2><ul><li><b>Атака:</b> 5.5</li><li><b>Скорость атаки:</b> 4.4</li><li><b>Сопротивление отбрасыванию:</b> 0.3</li></ul>",
        "desc_en": "<p>Improved version of the commander.</p><h2>Stats</h2><ul><li><b>Attack:</b> 5.5</li><li><b>Attack Speed:</b> 4.4</li><li><b>Knockback Resist:</b> 0.3</li></ul>"
    },
    {
        "id": "hubie_dora",
        "ru": "Хьюби Дора",
        "en": "Hubie Dora",
        "mod": "Tensura: No Game No Life",
        "wiki_url": "https://www.curseforge.com/minecraft/mc-mods/tensura-no-game-no-life",
        "tier": "unique",
        "icon": "🤖",
        "infobox": {
            "type": "Раса",
            "hp": "330",
            "shp": "700",
            "ep": "1000 - 1500 MP / 3000 - 4500 AP",
            "size": "2 м",
            "speed": "0.0 (0.4 Swim)",
            "prev": [{ "id": "puraiya", "ru": "Анализатор", "tier": "unique" }],
            "next": [
                { "id": "horou", "ru": "Хороу", "tier": "ultimate" },
                { "id": "losen", "ru": "Лёзен", "tier": "ultimate" }
            ],
            "obtain": "Эволюция Анализатора"
        },
        "desc": "<p>Машина поддержки.</p><h2>Характеристики</h2><ul><li><b>Атака:</b> 3.5</li><li><b>Скорость атаки:</b> 4.2</li><li><b>Сопротивление отбрасыванию:</b> 0.3</li></ul>",
        "desc_en": "<p>Support machine.</p><h2>Stats</h2><ul><li><b>Attack:</b> 3.5</li><li><b>Attack Speed:</b> 4.2</li><li><b>Knockback Resist:</b> 0.3</li></ul>"
    },
    {
        "id": "horou",
        "ru": "Хороу, Бог Сомнений",
        "en": "Horou, God of Doubt",
        "mod": "Tensura: No Game No Life",
        "wiki_url": "https://www.curseforge.com/minecraft/mc-mods/tensura-no-game-no-life",
        "tier": "ultimate",
        "icon": "👁️‍🗨️",
        "infobox": {
            "type": "Раса",
            "hp": "1180",
            "shp": "5000",
            "ep": "8000 - 12000 MP / 15000 - 20000 AP",
            "size": "2 м",
            "speed": "0.15 (1.0 Swim)",
            "prev": [
                { "id": "einzeig", "ru": "Айнзайг", "tier": "unique" },
                { "id": "emir_eins", "ru": "Эмир Айнс", "tier": "unique" },
                { "id": "hubie_dora", "ru": "Хьюби Дора", "tier": "unique" }
            ],
            "next": [],
            "obtain": "Эволюция машин (Айнзайг, Эмир Айнс, Хьюби Дора)"
        },
        "desc": "<p>Абсолютная боевая машина, достигшая божественного уровня.</p><h2>Характеристики</h2><ul><li><b>Атака:</b> 10.0</li><li><b>Скорость атаки:</b> 4.5</li><li><b>Сопротивление отбрасыванию:</b> 0.3</li></ul>",
        "desc_en": "<p>Absolute combat machine that reached a divine level.</p><h2>Stats</h2><ul><li><b>Attack:</b> 10.0</li><li><b>Attack Speed:</b> 4.5</li><li><b>Knockback Resist:</b> 0.3</li></ul>"
    },
    {
        "id": "losen",
        "ru": "Лёзен",
        "en": "Lösen",
        "mod": "Tensura: No Game No Life",
        "wiki_url": "https://www.curseforge.com/minecraft/mc-mods/tensura-no-game-no-life",
        "tier": "ultimate",
        "icon": "⚙️",
        "infobox": {
            "type": "Раса",
            "hp": "?",
            "shp": "?",
            "ep": "?",
            "size": "2 м",
            "speed": "?",
            "prev": [{ "id": "hubie_dora", "ru": "Хьюби Дора", "tier": "unique" }],
            "next": [],
            "obtain": "Эволюция Хьюби Дора (данные отсутствуют)"
        },
        "desc": "<p>Загадочная форма машины. Данные о характеристиках не найдены в файлах.</p>",
        "desc_en": "<p>Mysterious machine form. Stats not found in files.</p>"
    }
];