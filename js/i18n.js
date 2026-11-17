const locales = {
    en: 'en-US', ru: 'ru-RU', uz: 'uz-UZ', es: 'es-ES',
    fr: 'fr-FR', de: 'de-DE', it: 'it-IT', zh: 'zh-CN',
    ar: 'ar-SA', tr: 'tr-TR'
};

function updateDate(lang) {
    const options = { weekday: 'long', day: 'numeric', month: 'long' };
    const locale = locales[lang] || 'en-US';
    let dateStr = new Date().toLocaleDateString(locale, options);
    dateStr = dateStr.charAt(0).toUpperCase() + dateStr.slice(1);
    document.getElementById('currentDate').textContent = dateStr;
}

const translations = {
    en: {
        nav_about: "About", nav_project: "Project",
        theme_light: "Light", theme_dark: "Dark",
        hero_title: "Hi, I'm Nodirjon!",
        hero_sub: "Student at Westminster International University in Tashkent (WIUT)",
        hero_p1: "Interested in logic, patterns, and systemic relationships.",
        hero_p2: "My curiosity spans analytical systems, quantitative methods, business administration, and operational compliance.",
        hero_p3: "Dedicated to structured problem-solving and continuous professional growth.",
        exp_heading: "Professional Experience",
        exp_title: "Road Transport Health and Safety Manager",
        exp_sub: "Safety & Fleet Department (US Logistics)",
        btn_show: "Show details", btn_hide: "Hide details",
        exp_li1: "Monitored and audited driver Hours of Service (HOS) logs via Electronic Logging Device (ELD) systems to ensure 100% compliance with FMCSA and DOT regulations.",
        exp_li2: "Conducted daily operational control of shifts, tracked target performance metrics, and managed active task statuses.",
        exp_li3: "Prepared comprehensive shift-handover reports for management, ensuring complete business continuity and transparency.",
        exp_li4: "Onboarded new employees on operational workflows, compliance SOPs, and ELD troubleshooting.",
        edu_heading: "Education & Training",
        edu_wiut_title: "Westminster International University in Tashkent",
        edu_wiut_sub: "Certificate of International Foundation Studies (CIFS)",
        edu_wiut_text: "Academic Communication Skills, Quantitative Methods, Critical Thinking, Professional Skills, Understanding Finance, Introduction to Business and Economics.",
        edu_lyc_title: "Academic Lyceum of WIUT",
        edu_lyc_sub: "Exact Sciences (GPA: 4.0 / 5.0)",
        edu_lyc_text: "Specialized in advanced Mathematics, Algebra, Geometry, Statistics, and English.",
        skills_heading: "Skills & Competencies",
        skills_analyt_title: "Analytical & Operational",
        skills_analyt_sub: "Data Analysis, Finance Basics & Compliance",
        skills_analyt_text: "Quantitative Data Analysis, Finance Basics, SOP Compliance, Staff Onboarding, Shift-to-Shift Reporting, ELD Web Tracking.",
        skills_lang_title: "Languages", skills_lang_sub: "Russian & English",
        skills_lang_text: "Russian (Native), English (B2 - IELTS certified).",
        footer_email: "Email"
    },
    ru: {
        nav_about: "О себе", nav_project: "Проект",
        theme_light: "Светлая", theme_dark: "Тёмная",
        hero_title: "Привет, я Нодиржон!",
        hero_sub: "Студент Международного Вестминстерского университета в Ташкенте (WIUT)",
        hero_p1: "Увлечен логикой, паттернами и системными взаимосвязями.",
        hero_p2: "Мои интересы охватывают аналитические системы, количественные методы, бизнес-администрирование и операционный комплаенс.",
        hero_p3: "Стремлюсь к структурированному решению задач и непрерывному профессиональному росту.",
        exp_heading: "Профессиональный опыт",
        exp_title: "Менеджер по безопасности дорожного транспорта",
        exp_sub: "Отдел безопасности и автопарка (Логистика США)",
        btn_show: "Подробнее", btn_hide: "Скрыть",
        exp_li1: "Мониторинг и аудит журналов рабочего времени водителей (HOS) через системы ELD для обеспечения 100% соответствия правилам FMCSA и DOT.",
        exp_li2: "Ведение ежедневного операционного контроля смен, отслеживание целевых показателей и управление статусами задач.",
        exp_li3: "Подготовка комплексных отчетов о сдаче смен для руководства, обеспечение непрерывности и прозрачности бизнеса.",
        exp_li4: "Онбординг новых сотрудников по рабочим процессам, регламентам SOP и устранению неполадок ELD.",
        edu_heading: "Образование и тренинги",
        edu_wiut_title: "Международный Вестминстерский университет в Ташкенте",
        edu_wiut_sub: "Сертификат международного фонда (CIFS)",
        edu_wiut_text: "Академические коммуникативные навыки, Количественные методы, Критическое мышление, Профессиональные навыки, Основы финансов, Введение в бизнес и экономику.",
        edu_lyc_title: "Академический лицей при WIUT",
        edu_lyc_sub: "Точные науки (GPA: 4.0 / 5.0)",
        edu_lyc_text: "Углубленное изучение математики, алгебры, геометрии, статистики и английского языка.",
        skills_heading: "Навыки и компетенции",
        skills_analyt_title: "Аналитика и операции",
        skills_analyt_sub: "Анализ данных, основы финансов и комплаенс",
        skills_analyt_text: "Количественный анализ данных, основы финансов, соблюдение SOP, онбординг персонала, отчетность по сменам, веб-трекинг ELD.",
        skills_lang_title: "Языки", skills_lang_sub: "Русский и английский",
        skills_lang_text: "Русский (родной), английский (B2 — сертификат IELTS).",
        footer_email: "Почта"
    },
    uz: {
        nav_about: "Men haqimda", nav_project: "Loyiha",
        theme_light: "Yorug'", theme_dark: "Qorong'i",
        hero_title: "Salom, men Nodirjon!",
        hero_sub: "Toshkentdagi Xalqaro Vestminster Universiteti (WIUT) talabasi",
        hero_p1: "Mantiq, naqshlar va tizimli aloqalar bilan qiziqaman.",
        hero_p2: "Qiziqishlarim tahliliy tizimlar, miqdoriy usullar, biznesni boshqarish va operatsion muvofiqlikni o'z ichiga oladi.",
        hero_p3: "Tuzilmali muammolarni hal qilish va doimiy professional o'sishga intilaman.",
        exp_heading: "Kasbiy tajriba",
        exp_title: "Yo'l transporti salomatligi va xavfsizligi menejeri",
        exp_sub: "Xavfsizlik va avtopark bo'limi (AQSh logistikasi)",
        btn_show: "Batafsil", btn_hide: "Yashirish",
        exp_li1: "FMCSA va DOT qoidalariga 100% rioya etilishini ta'minlash uchun ELD tizimlari orqali haydovchilarning xizmat ko'rsatish soatlari (HOS) jurnallarini kuzatdim va tekshirdim.",
        exp_li2: "Kunlik operatsion smenalarni nazorat qildim, maqsadli ko'rsatkichlarni kuzatib bordim va faol vazifa statuslarini boshqardim.",
        exp_li3: "Biznesning uzluksizligi va shaffofligini ta'minlash uchun rahbariyatga har tomonlama smena topshirish hisobotlarini tayyorladim.",
        exp_li4: "Yangi xodimlarni ish jarayonlari, muvofiqlik qoidalari va ELD nosozliklarini bartaraf etish bo'yicha o'qitdim.",
        edu_heading: "Ta'lim va treninglar",
        edu_wiut_title: "Toshkent shahridagi Xalqaro Vestminster Universiteti",
        edu_wiut_sub: "Xalqaro poydevor ta'limi sertifikati (CIFS)",
        edu_wiut_text: "Akademik muloqot ko'nikmalari, Miqdoriy usullar, Tanqidiy fikrlash, Professional ko'nikmalar, Moliyani tushunish, Biznes va iqtisodiyotga kirish.",
        edu_lyc_title: "WIUT akademik litseyi",
        edu_lyc_sub: "Aniq fanlar (GPA: 4.0 / 5.0)",
        edu_lyc_text: "Chuqurlashtirilgan matematika, algebra, geometriya, statistika va ingliz tili.",
        skills_heading: "Ko'nikmalar va malakalar",
        skills_analyt_title: "Tahliliy va operatsion",
        skills_analyt_sub: "Ma'lumotlar tahlili, Moliya asoslari va Muvofiqlik",
        skills_analyt_text: "Miqdoriy ma'lumotlar tahlili, Moliya asoslari, SOP qoidalariga rioya qilish, Xodimlarni ishga tushirish, Smena hisobotlari, ELD veb-kuzatuvi.",
        skills_lang_title: "Tillar", skills_lang_sub: "Rus va ingliz tillari",
        skills_lang_text: "Rus tili (ona tili), Ingliz tili (B2 - IELTS sertifikati).",
        footer_email: "Elektron pochta"
    }
};

let currentLang = 'en';

function setLanguage(lang) {
    currentLang = lang;
    document.getElementById('activeLangText').textContent = lang.toUpperCase();
    localStorage.setItem('portfolio_lang', lang);
    updateDate(lang);

    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            el.textContent = translations[lang][key];
        }
    });
}
