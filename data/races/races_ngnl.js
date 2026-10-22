const racesDataNGNL = [
    {
        "id": "flugel",
        "ru": "Флюгель",
        "en": "Flügel",
        "mod": "Tensura: No Game No Life",
        "tier": "common",
        "icon": "🧬",
        "starter": true,
        "infobox": {
            "type": "Раса",
            "hp": "20",
            "shp": "80",
            "ep": "350 - 600 MP / 800 - 1600 AP",
            "size": "2 Meters",
            "speed": "0.0 (0.2 Swim)",
            "prev": [],
            "next": [
                { "id": "higher_flugel", "ru": "Высший Флюгель", "tier": "common" }
            ],
            "obtain": "Начальная раса (Эволюция: Именование / Фестиваль Урожая)"
        },
        "desc": "<p>Небесные существа, известные как Флюгели. Они мастера магии и полета. Их физическая сила невелика, но их магический потенциал и запас ауры впечатляют.</p><h2>Характеристики</h2><ul><li><b>Атака:</b> 1.0</li><li><b>Скорость атаки:</b> 4.0</li><li><b>Сопротивление отбрасыванию:</b> 0.1</li></ul>",
        "desc_en": "<p>Heavenly beings known as Flügel. They are masters of magic and flight. Their physical strength is low, but their magical potential and aura reserves are impressive.</p><h2>Stats</h2><ul><li><b>Attack:</b> 1.0</li><li><b>Attack Speed:</b> 4.0</li><li><b>Knockback Resist:</b> 0.1</li></ul>"
    },
    {
        "id": "higher_flugel",
        "ru": "Высший Флюгель",
        "en": "Higher Flugel",
        "mod": "Tensura: No Game No Life",
        "tier": "common",
        "icon": "🧬",
        "infobox": {
            "type": "Раса",
            "hp": "180",
            "shp": "400",
            "ep": "800 - 1200 MP / 1800 - 2600 AP",
            "size": "2 Meters",
            "speed": "0.11 (0.3 Swim)",
            "prev": [
                { "id": "flugel", "ru": "Флюгель", "tier": "common" }
            ],
            "next": [
                { "id": "jibril", "ru": "Джибрил", "tier": "unique" }
            ],
            "obtain": "Эволюция Флюгеля (Именование / Фестиваль Урожая)"
        },
        "desc": "<p>Улучшенная версия Флюгеля. Они обрели большую мощь и выносливость. В их жилах течет еще больше магии.</p><h2>Характеристики</h2><ul><li><b>Атака:</b> 2.5</li><li><b>Скорость атаки:</b> 4.1</li><li><b>Сопротивление отбрасыванию:</b> 0.2</li></ul>",
        "desc_en": "<p>An upgraded version of the Flügel. They have gained greater power and endurance. More magic flows through their veins.</p><h2>Stats</h2><ul><li><b>Attack:</b> 2.5</li><li><b>Attack Speed:</b> 4.1</li><li><b>Knockback Resist:</b> 0.2</li></ul>"
    },
    {
        "id": "jibril",
        "ru": "Джибрил",
        "en": "Jibril",
        "mod": "Tensura: No Game No Life",
        "tier": "unique",
        "icon": "🧬",
        "infobox": {
            "type": "Раса",
            "hp": "430",
            "shp": "1000",
            "ep": "1300 - 1800 MP / 1200 - 2000 AP",
            "size": "2 Meters",
            "speed": "0.12 (0.5 Swim)",
            "prev": [
                { "id": "higher_flugel", "ru": "Высший Флюгель", "tier": "common" }
            ],
            "next": [
                { "id": "flugel_raphael", "ru": "Рафаэль (Раса)", "tier": "unique" }
            ],
            "obtain": "Эволюция Высшего Флюгеля (Именование / Фестиваль Урожая)"
        },
        "desc": "<p>Джибрил — невероятно сильный Флюгель, известный своей гениальностью и жаждой знаний. Обладает огромным духовным здоровьем и магической силой.</p><h2>Характеристики</h2><ul><li><b>Атака:</b> 4.5</li><li><b>Скорость атаки:</b> 4.2</li><li><b>Сопротивление отбрасыванию:</b> 0.3</li></ul>",
        "desc_en": "<p>Jibril is an incredibly powerful Flügel known for her genius and thirst for knowledge. She possesses immense spiritual health and magical power.</p><h2>Stats</h2><ul><li><b>Attack:</b> 4.5</li><li><b>Attack Speed:</b> 4.2</li><li><b>Knockback Resist:</b> 0.3</li></ul>"
    },
    {
        "id": "flugel_raphael",
        "ru": "Рафаэль (Раса)",
        "en": "Raphael (Race)",
        "mod": "Tensura: No Game No Life",
        "tier": "unique",
        "icon": "🧬",
        "infobox": {
            "type": "Раса",
            "hp": "330",
            "shp": "800",
            "ep": "1200 - 1700 MP / 2800 - 4200 AP",
            "size": "2 Meters",
            "speed": "0.13 (0.4 Swim)",
            "prev": [
                { "id": "jibril", "ru": "Джибрил", "tier": "unique" }
            ],
            "next": [
                { "id": "azril", "ru": "Азриль", "tier": "ultimate" }
            ],
            "obtain": "Эволюция Джибрил (Именование / Фестиваль Урожая)"
        },
        "desc": "<p>Раса, названная в честь великого мудреца. У них невероятный запас ауры, но физическое здоровье немного ниже, чем у Джибрил. Они полагаются на магию и способности.</p><h2>Характеристики</h2><ul><li><b>Атака:</b> 4.0</li><li><b>Скорость атаки:</b> 4.25</li><li><b>Сопротивление отбрасыванию:</b> 0.25</li></ul>",
        "desc_en": "<p>A race named after the great sage. They have an incredible aura pool, but their physical health is slightly lower than Jibril's. They rely on magic and abilities.</p><h2>Stats</h2><ul><li><b>Attack:</b> 4.0</li><li><b>Attack Speed:</b> 4.25</li><li><b>Knockback Resist:</b> 0.25</li></ul>"
    },
    {
        "id": "azril",
        "ru": "Азриль",
        "en": "Azril",
        "mod": "Tensura: No Game No Life",
        "tier": "ultimate",
        "icon": "🧬",
        "infobox": {
            "type": "Раса",
            "hp": "580",
            "shp": "1800",
            "ep": "2500 - 3500 MP / 5000 - 7000 AP",
            "size": "2 Meters",
            "speed": "0.14 (0.7 Swim)",
            "prev": [
                { "id": "flugel_raphael", "ru": "Рафаэль (Раса)", "tier": "unique" }
            ],
            "next": [
                { "id": "arutoshu", "ru": "Артошу", "tier": "ultimate" }
            ],
            "obtain": "Эволюция Рафаэля (Раса)"
        },
        "desc": "<p>Высшее существо среди Флюгелей. Азриль обладает колоссальной духовной силой и мастерством в магии, превосходя большинство известных рас.</p><h2>Характеристики</h2><ul><li><b>Атака:</b> 6.0</li><li><b>Скорость атаки:</b> 4.4</li><li><b>Сопротивление отбрасыванию:</b> 0.3</li></ul>",
        "desc_en": "<p>The supreme being among the Flügel. Azril possesses colossal spiritual power and mastery over magic, surpassing most known races.</p><h2>Stats</h2><ul><li><b>Attack:</b> 6.0</li><li><b>Attack Speed:</b> 4.4</li><li><b>Knockback Resist:</b> 0.3</li></ul>"
    },
    {
        "id": "arutoshu",
        "ru": "Артошу",
        "en": "Arutoshu",
        "mod": "Tensura: No Game No Life",
        "tier": "ultimate",
        "icon": "🧬",
        "infobox": {
            "type": "Раса",
            "hp": "980",
            "shp": "4000",
            "ep": "5000 - 8000 MP / 10000 - 15000 AP",
            "size": "2 Meters",
            "speed": "0.15 (1.2 Swim)",
            "prev": [
                { "id": "azril", "ru": "Азриль", "tier": "ultimate" }
            ],
            "next": [],
            "obtain": "Эволюция Азриля"
        },
        "desc": "<p>Легендарный战神 (Бог Войны) Флюгелей. Артошу — абсолютная вершина эволюции этой расы. Огромное здоровье, невероятная скорость и разрушительная атака делают его идеальной боевой машиной.</p><h2>Характеристики</h2><ul><li><b>Атака:</b> 10.0</li><li><b>Скорость атаки:</b> 4.5</li><li><b>Сопротивление отбрасыванию:</b> 0.3</li></ul>",
        "desc_en": "<p>The legendary God of War of the Flügel. Arutoshu is the absolute pinnacle of this race's evolution. Massive health, incredible speed, and devastating attack make him the perfect combat machine.</p><h2>Stats</h2><ul><li><b>Attack:</b> 10.0</li><li><b>Attack Speed:</b> 4.5</li><li><b>Knockback Resist:</b> 0.3</li></ul>"
    }
];