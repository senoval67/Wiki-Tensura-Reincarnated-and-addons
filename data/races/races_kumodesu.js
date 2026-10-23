const racesDataKumodesu = [
    // --- СТАРТОВАЯ РАСА (Starter) ---
    {
        "id": "small_lesser_taratect",
        "ru": "Малый Низший Таратект",
        "en": "Small Lesser Taratect",
        "mod": "Tensura: KumoDesu",
        "wiki_url": "https://www.curseforge.com/minecraft/mc-mods/tensura-kumodesu",
        "tier": "common",
        "starter": true,
        "icon": "img/races/kumodesu/small_lesser.png",
        "infobox": {
            "type": "Раса",
            "hp": "12",
            "shp": "12",
            "ep": "100 - 250 MP / 500 - 1000 AP",
            "size": "0.5 м",
            "speed": "Неизвестно",
            "prev": [],
            "next": [
                { "id": "lesser_taratect", "ru": "Низший Таратект", "tier": "common" },
                { "id": "small_taratect", "ru": "Малый Таратект", "tier": "common" }
            ],
            "obtain": "Начальная раса"
        },
        "desc": "<p>Самый слабый вид пауков.</p>",
        "desc_en": "<p>The weakest type of spider.</p>"
    },

    // --- ВЕТКА ЯДА ---
    {
        "id": "lesser_taratect",
        "ru": "Низший Таратект",
        "en": "Lesser Taratect",
        "mod": "Tensura: KumoDesu",
        "wiki_url": "https://www.curseforge.com/minecraft/mc-mods/tensura-kumodesu",
        "tier": "common",
        "icon": "img/races/kumodesu/lesser.png",
        "infobox": {
            "type": "Раса", "hp": "20", "shp": "20", "ep": "6600 MP / 13400 AP", "size": "1 м", "speed": "Неизвестно",
            "prev": [{ "id": "small_lesser_taratect", "ru": "Малый Низший Таратект", "tier": "common" }],
            "next": [{ "id": "lesser_poison_taratect", "ru": "Низший Ядовитый Таратект", "tier": "common" }],
            "obtain": "Пункт 1, 3"
        },
        "desc": "<p>Чуть более крупный паук.</p>", "desc_en": "<p>Slightly larger spider.</p>"
    },
    {
        "id": "lesser_poison_taratect",
        "ru": "Низший Ядовитый Таратект",
        "en": "Lesser Poison Taratect",
        "mod": "Tensura: KumoDesu",
        "wiki_url": "https://www.curseforge.com/minecraft/mc-mods/tensura-kumodesu",
        "tier": "common",
        "icon": "img/races/kumodesu/lesser-poison.png",
        "infobox": {
            "type": "Раса", "hp": "150", "shp": "150", "ep": "50000 MP / 100000 AP", "size": "1.2 м", "speed": "Неизвестно",
            "prev": [{ "id": "lesser_taratect", "ru": "Низший Таратект", "tier": "common" }],
            "next": [{ "id": "poison_taratect", "ru": "Ядовитый Таратект", "tier": "common" }],
            "obtain": "Пункт 3, 4"
        },
        "desc": "<p>Ядовитый паук.</p>", "desc_en": "<p>Poisonous spider.</p>"
    },
    {
        "id": "poison_taratect",
        "ru": "Ядовитый Таратект",
        "en": "Poison Taratect",
        "mod": "Tensura: KumoDesu",
        "wiki_url": "https://www.curseforge.com/minecraft/mc-mods/tensura-kumodesu",
        "tier": "common",
        "icon": "img/races/kumodesu/poison.png",
        "infobox": {
            "type": "Раса", "hp": "150", "shp": "2800", "ep": "150000 MP / 600000 AP", "size": "1.5 м", "speed": "Неизвестно",
            "prev": [
                { "id": "lesser_poison_taratect", "ru": "Низший Ядовитый Таратект", "tier": "common" },
                { "id": "small_poison_taratect", "ru": "Малый Ядовитый Таратект", "tier": "common" }
            ],
            "next": [
                { "id": "great_poison_taratect", "ru": "Великий Ядовитый Таратект", "tier": "ultimate" },
                { "id": "orthocadinaht", "ru": "Ортокадинат", "tier": "ultimate" }
            ],
            "obtain": "Пункты 4, 5, 6, 8, 21, 22"
        },
        "desc": "<p>Специализируется на ядах.</p>", "desc_en": "<p>Specializes in poisons.</p>"
    },
    {
        "id": "great_poison_taratect",
        "ru": "Великий Ядовитый Таратект",
        "en": "Great Poison Taratect",
        "mod": "Tensura: KumoDesu",
        "wiki_url": "https://www.curseforge.com/minecraft/mc-mods/tensura-kumodesu",
        "tier": "ultimate",
        "icon": "img/races/kumodesu/great-poison.png",
        "infobox": {
            "type": "Раса", "hp": "6000", "shp": "6000", "ep": "1000000 MP / 2800000 AP", "size": "4 м", "speed": "Неизвестно",
            "prev": [{ "id": "poison_taratect", "ru": "Ядовитый Таратект", "tier": "common" }],
            "next": [], // Тупик по твоему списку (пункт 5)
            "obtain": "Пункт 5"
        },
        "desc": "<p>Мастер ядов.</p>", "desc_en": "<p>Master of poisons.</p>"
    },
    {
        "id": "orthocadinaht",
        "ru": "Ортокадинат",
        "en": "Orthocadinaht",
        "mod": "Tensura: KumoDesu",
        "wiki_url": "https://www.curseforge.com/minecraft/mc-mods/tensura-kumodesu",
        "tier": "ultimate",
        "icon": "img/races/kumodesu/orthocadinaht.png",
        "infobox": {
            "type": "Раса", "hp": "6200", "shp": "6200", "ep": "2800000 MP / 1000000 AP", "size": "2 м", "speed": "Неизвестно",
            "prev": [
                { "id": "poison_taratect", "ru": "Ядовитый Таратект", "tier": "common" },
                { "id": "zoa_ele", "ru": "Зоа Эле", "tier": "unique" }
            ],
            "next": [], // Тупик по твоему списку (пункты 6, 11, 22)
            "obtain": "Пункты 6, 11, 22"
        },
        "desc": "<p>Скрытая эволюция.</p>", "desc_en": "<p>Hidden evolution.</p>"
    },

    // --- ВЕТКА МОНСТРОВ ---
    {
        "id": "small_taratect",
        "ru": "Малый Таратект",
        "en": "Small Taratect",
        "mod": "Tensura: KumoDesu",
        "wiki_url": "https://www.curseforge.com/minecraft/mc-mods/tensura-kumodesu",
        "tier": "common",
        "icon": "img/races/kumodesu/small.png",
        "infobox": {
            "type": "Раса", "hp": "18", "shp": "18", "ep": "6600 MP / 13400 AP", "size": "0.8 м", "speed": "Неизвестно",
            "prev": [{ "id": "small_lesser_taratect", "ru": "Малый Низший Таратект", "tier": "common" }],
            "next": [
                { "id": "small_poison_taratect", "ru": "Малый Ядовитый Таратект", "tier": "common" },
                { "id": "taratect", "ru": "Таратект", "tier": "common" }
            ],
            "obtain": "Пункты 2, 7, 16"
        },
        "desc": "<p>Маленький паук.</p>", "desc_en": "<p>Small spider.</p>"
    },
    {
        "id": "taratect",
        "ru": "Таратект",
        "en": "Taratect",
        "mod": "Tensura: KumoDesu",
        "wiki_url": "https://www.curseforge.com/minecraft/mc-mods/tensura-kumodesu",
        "tier": "common",
        "icon": "img/races/kumodesu/taratect.png",
        "infobox": {
            "type": "Раса", "hp": "200", "shp": "200", "ep": "33000 MP / 67000 AP", "size": "2 м", "speed": "Неизвестно",
            "prev": [{ "id": "small_taratect", "ru": "Малый Таратект", "tier": "common" }],
            "next": [{ "id": "great_taratect", "ru": "Великий Таратект", "tier": "common" }],
            "obtain": "Пункты 16, 17"
        },
        "desc": "<p>Стандартный боевой паук.</p>", "desc_en": "<p>Standard combat spider.</p>"
    },
    {
        "id": "great_taratect",
        "ru": "Великий Таратект",
        "en": "Great Taratect",
        "mod": "Tensura: KumoDesu",
        "wiki_url": "https://www.curseforge.com/minecraft/mc-mods/tensura-kumodesu",
        "tier": "common",
        "icon": "img/races/kumodesu/great.png",
        "infobox": {
            "type": "Раса", "hp": "700", "shp": "700", "ep": "150000 MP / 250000 AP", "size": "2.5 м", "speed": "Неизвестно",
            "prev": [{ "id": "taratect", "ru": "Таратект", "tier": "common" }],
            "next": [{ "id": "greater_taratect", "ru": "Высший Таратект", "tier": "unique" }],
            "obtain": "Пункты 17, 18"
        },
        "desc": "<p>Крупный паук.</p>", "desc_en": "<p>Large spider.</p>"
    },
    {
        "id": "greater_taratect",
        "ru": "Высший Таратект",
        "en": "Greater Taratect",
        "mod": "Tensura: KumoDesu",
        "wiki_url": "https://www.curseforge.com/minecraft/mc-mods/tensura-kumodesu",
        "tier": "unique",
        "icon": "img/races/kumodesu/greater.png",
        "infobox": {
            "type": "Раса", "hp": "900", "shp": "900", "ep": "350000 MP / 450000 AP", "size": "3 м", "speed": "Неизвестно",
            "prev": [
                { "id": "great_taratect", "ru": "Великий Таратект", "tier": "common" },
                { "id": "zoa_ele", "ru": "Зоа Эле", "tier": "unique" }
            ],
            "next": [{ "id": "arch_taratect", "ru": "Арх-Таратект", "tier": "unique" }],
            "obtain": "Пункты 12, 18, 19"
        },
        "desc": "<p>Огромный паук-монстр.</p>", "desc_en": "<p>Huge spider monster.</p>"
    },
    {
        "id": "arch_taratect",
        "ru": "Арх-Таратект",
        "en": "Arch Taratect",
        "mod": "Tensura: KumoDesu",
        "wiki_url": "https://www.curseforge.com/minecraft/mc-mods/tensura-kumodesu",
        "tier": "unique",
        "icon": "img/races/kumodesu/arch.png",
        "infobox": {
            "type": "Раса", "hp": "150", "shp": "4700", "ep": "1000000 MP / 1500000 AP", "size": "3 м", "speed": "Неизвестно",
            "prev": [{ "id": "greater_taratect", "ru": "Высший Таратект", "tier": "unique" }],
            "next": [{ "id": "queen_taratect", "ru": "Королева Таратектов", "tier": "ultimate" }],
            "obtain": "Пункты 19, 20"
        },
        "desc": "<p>Элитный паук-страж.</p>", "desc_en": "<p>Elite spider guardian.</p>"
    },

    // --- ВЕТКА SPEC ---
    {
        "id": "small_poison_taratect",
        "ru": "Малый Ядовитый Таратект",
        "en": "Small Poison Taratect",
        "mod": "Tensura: KumoDesu",
        "wiki_url": "https://www.curseforge.com/minecraft/mc-mods/tensura-kumodesu",
        "tier": "common",
        "icon": "img/races/kumodesu/small-poison.png",
        "infobox": {
            "type": "Раса", "hp": "150", "shp": "215", "ep": "67000 MP / 33000 AP", "size": "1 м", "speed": "Неизвестно",
            "prev": [{ "id": "small_taratect", "ru": "Малый Таратект", "tier": "common" }],
            "next": [
                { "id": "poison_taratect", "ru": "Ядовитый Таратект", "tier": "common" },
                { "id": "zoa_ele", "ru": "Зоа Эле", "tier": "unique" }
            ],
            "obtain": "Пункты 7, 8, 9, 21"
        },
        "desc": "<p>Небольшой ядовитый паук.</p>", "desc_en": "<p>Small venomous spider.</p>"
    },
    {
        "id": "zoa_ele",
        "ru": "Зоа Эле",
        "en": "Zoa Ele",
        "mod": "Tensura: KumoDesu",
        "wiki_url": "https://www.curseforge.com/minecraft/mc-mods/tensura-kumodesu",
        "tier": "unique",
        "icon": "img/races/kumodesu/zoa-ele.png",
        "infobox": {
            "type": "Раса", "hp": "660", "shp": "660", "ep": "250000 MP / 150000 AP", "size": "2 м", "speed": "Неизвестно",
            "prev": [{ "id": "small_poison_taratect", "ru": "Малый Ядовитый Таратект", "tier": "common" }],
            "next": [
                { "id": "orthocadinaht", "ru": "Ортокадинат", "tier": "ultimate" },
                { "id": "ede_saine", "ru": "Эде Сейн", "tier": "unique" },
                { "id": "greater_taratect", "ru": "Высший Таратект", "tier": "unique" }
            ],
            "obtain": "Пункты 9, 10, 11, 12"
        },
        "desc": "<p>Тёмный паук-убийца.</p>", "desc_en": "<p>Dark assassin spider.</p>"
    },
    {
        "id": "ede_saine",
        "ru": "Эде Сейн",
        "en": "Ede Saine",
        "mod": "Tensura: KumoDesu",
        "wiki_url": "https://www.curseforge.com/minecraft/mc-mods/tensura-kumodesu",
        "tier": "unique",
        "icon": "img/races/kumodesu/ede-saine.png",
        "infobox": {
            "type": "Раса", "hp": "840", "shp": "840", "ep": "350000 MP / 250000 AP", "size": "2 м", "speed": "Неизвестно",
            "prev": [{ "id": "zoa_ele", "ru": "Зоа Эле", "tier": "unique" }],
            "next": [
                { "id": "zana_horowa", "ru": "Зана Хорова", "tier": "unique" },
                { "id": "queen_taratect", "ru": "Королева Таратектов", "tier": "ultimate" }
            ],
            "obtain": "Пункты 10, 13, 14"
        },
        "desc": "<p>Кроваво-красный паук.</p>", "desc_en": "<p>Blood-red spider.</p>"
    },
    {
        "id": "zana_horowa",
        "ru": "Зана Хорова",
        "en": "Zana Horowa",
        "mod": "Tensura: KumoDesu",
        "wiki_url": "https://www.curseforge.com/minecraft/mc-mods/tensura-kumodesu",
        "tier": "unique",
        "icon": "img/races/kumodesu/zana-horowa.png",
        "infobox": {
            "type": "Раса", "hp": "5360", "shp": "5360", "ep": "700000 MP / 300000 AP", "size": "3 м", "speed": "Неизвестно",
            "prev": [{ "id": "ede_saine", "ru": "Эде Сейн", "tier": "unique" }],
            "next": [{ "id": "arachne", "ru": "Арахна", "tier": "ultimate" }],
            "obtain": "Пункты 13, 15"
        },
        "desc": "<p>Белоснежный паук.</p>", "desc_en": "<p>Snow-white spider.</p>"
    },

    // --- ФИНАЛЬНЫЕ РАСЫ ---
    {
        "id": "queen_taratect",
        "ru": "Королева Таратектов",
        "en": "Queen Taratect",
        "mod": "Tensura: KumoDesu",
        "wiki_url": "https://www.curseforge.com/minecraft/mc-mods/tensura-kumodesu",
        "tier": "ultimate",
        "icon": "img/races/kumodesu/queen.png",
        "infobox": {
            "type": "Раса", "hp": "91", "shp": "9100", "ep": "1000000 MP / 2500000 AP", "size": "5 м", "speed": "Неизвестно",
            "prev": [
                { "id": "arch_taratect", "ru": "Арх-Таратект", "tier": "unique" },
                { "id": "ede_saine", "ru": "Эде Сейн", "tier": "unique" }
            ],
            "next": [], // Тупик по твоему списку (пункты 14, 20)
            "obtain": "Пункты 14, 20"
        },
        "desc": "<p>Правитель пауков.</p>", "desc_en": "<p>Ruler of spiders.</p>"
    },
    {
        "id": "arachne",
        "ru": "Арахна",
        "en": "Arachne",
        "mod": "Tensura: KumoDesu",
        "wiki_url": "https://www.curseforge.com/minecraft/mc-mods/tensura-kumodesu",
        "tier": "ultimate",
        "icon": "img/races/kumodesu/arachne.png",
        "infobox": {
            "type": "Раса", "hp": "10360", "shp": "10360", "ep": "3000000 MP / 500000 AP", "size": "2 м", "speed": "Неизвестно",
            "prev": [{ "id": "zana_horowa", "ru": "Зана Хорова", "tier": "unique" }],
            "next": [], // Тупик по твоему списку (пункт 15)
            "obtain": "Пункт 15"
        },
        "desc": "<p>Высшая форма паука.</p>", "desc_en": "<p>The ultimate spider form.</p>"
    }
];