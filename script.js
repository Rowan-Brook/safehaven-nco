const LANGUAGES = [
  { code: "en", label: "English (EN)", locale: "en-US", dir: "ltr" },
  { code: "ru", label: "Русский (RU)", locale: "ru-RU", dir: "ltr" },
  { code: "uz", label: "O'zbekcha (UZ)", locale: "uz-UZ", dir: "ltr" },
  { code: "es", label: "Español (ES)", locale: "es-ES", dir: "ltr" },
  { code: "fr", label: "Français (FR)", locale: "fr-FR", dir: "ltr" },
  { code: "de", label: "Deutsch (DE)", locale: "de-DE", dir: "ltr" },
  { code: "it", label: "Italiano (IT)", locale: "it-IT", dir: "ltr" },
  { code: "zh", label: "中文 (ZH)", locale: "zh-CN", dir: "ltr" },
  { code: "ar", label: "العربية (AR)", locale: "ar-SA", dir: "rtl" },
  { code: "tr", label: "Türkçe (TR)", locale: "tr-TR", dir: "ltr" }
];

const TRANSLATIONS = {
  en: {
    navAbout: "About", navProject: "Project", themeLight: "Light", themeDark: "Dark",
    heroTitle: "Hi, I'm Nodirjon!", heroSubtitle: "Student at Westminster International University in Tashkent (WIUT)",
    heroLine1: "Interested in logic, patterns, and systemic relationships.",
    heroLine2: "My curiosity spans analytical systems, quantitative methods, business administration, and operational compliance.",
    heroLine3: "Dedicated to structured problem-solving and continuous professional growth.",
    expSectionTitle: "Professional Experience",
    expRoleTitle: "Road Transport Health and Safety Manager",
    expRoleSub: "Safety & Fleet Department (US Logistics)",
    expDateRange: "Apr 2026 – Nov 2026",
    showDetails: "Show details", hideDetails: "Hide details",
    expBullet1: "Oversaw DOT & FMCSA regulatory compliance, driver safety audits, and electronic logging device (ELD) analytics across interstate fleet operations.",
    expBullet2: "Designed structured risk-mitigation workflows and incident prevention protocols, reducing operational violations and improving fleet reliability.",
    expBullet3: "Coordinated cross-functional safety reporting and quantitative performance tracking for dispatch and leadership teams.",
    eduBadge: "Education", eduUniTitle: "Westminster International University in Tashkent (WIUT)",
    eduDegree: "Business Administration & Analytical Systems",
    eduNote: "Focus on quantitative modeling, organizational logic, and socio-economic systems.",
    focusBadge: "Core Focus", focusTitle: "Logic, Compliance & Social Architecture",
    focusDesc: "Bridging quantitative rigor with human-centered institutional design.",
    tag1: "Quantitative Methods", tag2: "Operational Compliance", tag3: "Social Impact",
    projTagline: "Social Elevator & Educational Hub",
    projSubtitle: "Breaking systemic poverty through free applied IT education, psychological resilience, and an ethical self-sustaining model.",
    projHook: "Talent is universal, yet opportunity is not. Safe Haven removes financial, housing, and psychological barriers for motivated individuals facing severe socio-economic hardship.",
    pillar1Title: "100% Barrier-Free Entry", pillar1Desc: "Zero upfront tuition. Covers living stipends, safe housing, meals, and certified psychological support.",
    pillar2Title: "The \"6 + 2\" Acceleration Track", pillar2Desc: "6 months of intensive applied IT, followed by 2 months building real commercial software products with mentorship.",
    pillar3Title: "Ethical Recyclable ISA", pillar3Desc: "Graduates contribute 10% of salary ONLY after securing employment above $450/month with hardship freeze.",
    pillar4Title: "Intimate Mini-Cohorts", pillar4Desc: "Compact 10–12 student hubs targeting 80%+ placement with verified Behavioral & Hard-Skills Profiles.",
    btnSponsor: "Become a Sponsor", btnSponsorSub: "CSR, grants & equipment partners",
    btnDonate: "Make a Donation", btnDonateSub: "Fund housing, meals & laptops",
    btnJoin: "Join the Team", btnJoinSub: "Mentors, educators & psychologists",
    copyEmail: "Copy Email", copied: "Copied!", copyMessage: "Copy Message"
  },
  ru: {
    navAbout: "Обо мне", navProject: "Проект", themeLight: "Светлая", themeDark: "Тёмная",
    heroTitle: "Привет, я Нодиржон!", heroSubtitle: "Студент Международного Вестминстерского университета в Ташкенте (WIUT)",
    heroLine1: "Увлечён логикой, закономерностями и системными взаимосвязями.",
    heroLine2: "Мои интересы охватывают аналитические системы, количественные методы, бизнес-администрирование и операционный комплаенс.",
    heroLine3: "Стремлюсь к структурированному решению задач и постоянному профессиональному росту.",
    expSectionTitle: "Профессиональный опыт",
    expRoleTitle: "Менеджер по безопасности дорожного транспорта",
    expRoleSub: "Департамент безопасности и автопарка (Логистика США)",
    expDateRange: "Апр 2026 – Ноя 2026",
    showDetails: "Подробнее", hideDetails: "Скрыть",
    expBullet1: "Контроль соблюдения стандартов DOT и FMCSA, аудит безопасности водителей и аналитика электронных журналов (ELD).",
    expBullet2: "Разработка структурированных процессов снижения рисков и протоколов предотвращения инцидентов.",
    expBullet3: "Координация кросс-функциональной отчётности по безопасности и количественного трекинга эффективности.",
    eduBadge: "Образование", eduUniTitle: "Международный Вестминстерский университет в Ташкенте (WIUT)",
    eduDegree: "Бизнес-администрирование и аналитические системы",
    eduNote: "Фокус на количественном моделировании, организационной логике и социально-экономических системах.",
    focusBadge: "Ключевой фокус", focusTitle: "Логика, комплаенс и социальная архитектура",
    focusDesc: "Соединение количественной точности с человекоцентричным институциональным дизайном.",
    tag1: "Количественные методы", tag2: "Операционный комплаенс", tag3: "Социальный эффект",
    projTagline: "Социальный лифт и образовательный хаб",
    projSubtitle: "Преодоление системной бедности через бесплатное прикладное IT-образование, психологическую опору и этичную самоокупаемую модель.",
    projHook: "Талант есть у каждого, но возможности доступны не всем. Safe Haven снимает барьеры для мотивированных людей в трудной жизненной ситуации.",
    pillar1Title: "100% бесплатный вход", pillar1Desc: "Никакой платы за обучение. Покрывает жильё, питание, стипендию и работу с психологом.",
    pillar2Title: "Акселератор «6 + 2»", pillar2Desc: "6 месяцев интенсивного прикладного IT, затем 2 месяца создания реальных коммерческих продуктов.",
    pillar3Title: "Этичный возвратный ISA", pillar3Desc: "Выпускники отчисляют 10% дохода ТОЛЬКО после трудоустройства с зарплатой выше $450/мес.",
    pillar4Title: "Камерные мини-группы", pillar4Desc: "Компактные хабы по 10–12 студентов с целью 80%+ трудоустройства.",
    btnSponsor: "Стать спонсором", btnSponsorSub: "КСО, гранты и техническое партнёрство",
    btnDonate: "Сделать пожертвование", btnDonateSub: "Оплата жилья, питания и ноутбуков",
    btnJoin: "Вступить в команду", btnJoinSub: "Менторы, преподаватели и психологи",
    copyEmail: "Копировать Email", copied: "Скопировано!", copyMessage: "Копировать текст"
  },
  uz: {
    navAbout: "Men haqimda", navProject: "Loyiha", themeLight: "Yorug‘", themeDark: "Qorong‘i",
    heroTitle: "Salom, men Nodirjonman!", heroSubtitle: "Toshkentdagi Xalqaro Vestminster Universiteti (WIUT) talabasi",
    heroLine1: "Mantiq, qonuniyatlar va tizimli bog‘liqliklarga qiziqaman.",
    heroLine2: "Qiziqishlarim tahliliy tizimlar, miqdoriy usullar, biznes boshqaruvi va operatsion muvofiqlikni qamrab oladi.",
    heroLine3: "Tizimli muammolarni hal qilish va uzluksiz kasbiy o‘sishga intilaman.",
    expSectionTitle: "Kasbiy tajriba",
    expRoleTitle: "Avtotransport xavfsizligi va mehnat muhofazasi menejeri",
    expRoleSub: "Xavfsizlik va avtopark bo‘limi (AQSh logistikasi)",
    expDateRange: "Apr 2026 – Noy 2026",
    showDetails: "Batafsil", hideDetails: "Yashirish",
    expBullet1: "Shtatlararo yuk tashishda DOT va FMCSA talablariga rioya etilishini va ELD tahlillarini nazorat qildim.",
    expBullet2: "Xavflarni kamaytirish va hodisalarning oldini olish protokollarini ishlab chiqdim.",
    expBullet3: "Dispetcherlik va rahbariyat jamoalari uchun xavfsizlik hisobotlarini muvofiqlashtirdim.",
    eduBadge: "Ta’lim", eduUniTitle: "Toshkentdagi Xalqaro Vestminster Universiteti (WIUT)",
    eduDegree: "Biznes boshqaruvi va tahliliy tizimlar",
    eduNote: "Miqdoriy modellashtirish, tashkiliy mantiq va ijtimoiy-iqtisodiy tizimlarga e’tibor.",
    focusBadge: "Asosiy yo‘nalish", focusTitle: "Mantiq, komplayens va ijtimoiy arxitektura",
    focusDesc: "Miqdoriy aniqlikni insonga yo‘naltirilgan institutsional dizayn bilan birlashtirish.",
    tag1: "Miqdoriy usullar", tag2: "Operatsion komplayens", tag3: "Ijtimoiy ta’sir",
    projTagline: "Ijtimoiy lift va ta’lim markazi",
    projSubtitle: "Bepul amaliy IT ta’limi va psixologik tayanch orqali tizimli qashshoqlikni yengish.",
    projHook: "Iste’dod hammada bor, ammo imkoniyatlar teng emas. Safe Haven og‘ir vaziyatdagi insonlar uchun to‘siqlarni olib tashlaydi.",
    pillar1Title: "100% to‘siqsiz kirish", pillar1Desc: "Boshlang‘ich to‘lovlarsiz ta’lim. Turar-joy, ovqatlanish va stipendiya qoplanadi.",
    pillar2Title: "«6 + 2» tezlashtirilgan dasturi", pillar2Desc: "6 oy amaliy IT, so‘ng 2 oy mentorlar bilan real mahsulotlar yaratish.",
    pillar3Title: "Axloqiy aylanma ISA modeli", pillar3Desc: "Bitiruvchilar $450/oydan yuqori ishga joylashgach daromadining 10% ini qaytaradi.",
    pillar4Title: "Ixcham mini-guruhlar", pillar4Desc: "80%+ ishga joylashish maqsadiga ega 10–12 talabalik markazlar.",
    btnSponsor: "Homiy bo‘lish", btnSponsorSub: "KSM, grantlar va texnik hamkorlar",
    btnDonate: "Xayriya qilish", btnDonateSub: "Turar-joy, ovqat va noutbuklar uchun",
    btnJoin: "Jamoaga qo‘shilish", btnJoinSub: "Mentorlar, o‘qituvchilar va psixologlar",
    copyEmail: "Emailni nusxalash", copied: "Nusxalandi!", copyMessage: "Matnni nusxalash"
  }
};

let currentLang = "en";
let currentTheme = "dark";
let activeTab = "about";
let chaosActive = false;

const htmlEl = document.documentElement;
const bodyEl = document.body;
const liveDateEl = document.getElementById("liveDate");
const langMenu = document.getElementById("langMenu");
const langToggleBtn = document.getElementById("langToggleBtn");
const langChevron = document.getElementById("langChevron");
const currentLangCode = document.getElementById("currentLangCode");
const themeMenu = document.getElementById("themeMenu");
const themeToggleBtn = document.getElementById("themeToggleBtn");
const themeChevron = document.getElementById("themeChevron");
const currentThemeIcon = document.getElementById("currentThemeIcon");
const currentThemeLabel = document.getElementById("currentThemeLabel");
const chaosToggleBtn = document.getElementById("chaosToggleBtn");

function renderLanguageOptions() {
  langMenu.innerHTML = LANGUAGES.map(lang => `
    <button type="button" data-lang="${lang.code}" class="lang-option w-full text-start px-3 py-2 rounded-xl text-xs font-medium transition-colors cursor-pointer flex items-center justify-between ${lang.code === currentLang ? "bg-emerald-500/20 font-semibold" : "hover:bg-emerald-500/10"}">
      <span>${lang.label}</span>
      ${lang.code === currentLang ? '<span style="color: var(--accent);">✓</span>' : ""}
    </button>
  `).join("");

  langMenu.querySelectorAll(".lang-option").forEach(btn => {
    btn.addEventListener("click", () => {
      setLanguage(btn.getAttribute("data-lang"));
      closeAllDropdowns();
    });
  });
}

function updateLocalizedDate() {
  const langObj = LANGUAGES.find(l => l.code === currentLang) || LANGUAGES[0];
  const now = new Date();
  try {
    const weekday = new Intl.DateTimeFormat(langObj.locale, { weekday: "long" }).format(now);
    const monthDay = new Intl.DateTimeFormat(langObj.locale, { month: "long", day: "numeric" }).format(now);
    liveDateEl.textContent = `${weekday.charAt(0).toUpperCase() + weekday.slice(1)},\n${monthDay.charAt(0).toUpperCase() + monthDay.slice(1)}`;
  } catch (e) {
    liveDateEl.textContent = "Wednesday,\nNovember 18";
  }
}

function setLanguage(langCode) {
  if (!TRANSLATIONS[langCode]) langCode = "en";
  currentLang = langCode;
  const langObj = LANGUAGES.find(l => l.code === langCode) || LANGUAGES[0];
  const dict = TRANSLATIONS[langCode] || TRANSLATIONS.en;

  htmlEl.setAttribute("lang", langCode);
  htmlEl.setAttribute("dir", langObj.dir);
  currentLangCode.textContent = langCode.toUpperCase();

  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (dict[key]) el.textContent = dict[key];
  });

  document.querySelectorAll('.tab-btn[data-tab="about"]').forEach(b => b.textContent = dict.navAbout);
  document.querySelectorAll('.tab-btn[data-tab="project"]').forEach(b => b.textContent = dict.navProject);

  updateLocalizedDate();
  renderLanguageOptions();
}

function setTheme(theme) {
  currentTheme = theme;
  htmlEl.setAttribute("data-theme", theme);
  const dict = TRANSLATIONS[currentLang] || TRANSLATIONS.en;
  if (theme === "dark") {
    currentThemeIcon.textContent = "🌙";
    currentThemeLabel.textContent = dict.themeDark;
  } else {
    currentThemeIcon.textContent = "☀️";
    currentThemeLabel.textContent = dict.themeLight;
  }
}

function switchTab(tabName) {
  activeTab = tabName;
  const aboutView = document.getElementById("view-about");
  const projectView = document.getElementById("view-project");

  if (tabName === "about") {
    aboutView.classList.remove("hidden");
    projectView.classList.add("hidden");
  } else {
    aboutView.classList.add("hidden");
    projectView.classList.remove("hidden");
  }

  document.querySelectorAll(".tab-btn").forEach(btn => {
    const isTarget = btn.getAttribute("data-tab") === tabName;
    btn.classList.toggle("nav-pill-active", isTarget);
    btn.classList.toggle("nav-pill-inactive", !isTarget);
  });
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function closeAllDropdowns() {
  langMenu.classList.remove("dropdown-visible");
  langMenu.classList.add("dropdown-hidden");
  langChevron.style.transform = "rotate(0deg)";

  themeMenu.classList.remove("dropdown-visible");
  themeMenu.classList.add("dropdown-hidden");
  themeChevron.style.transform = "rotate(0deg)";
}

langToggleBtn.addEventListener("click", (e) => {
  e.stopPropagation();
  const isOpen = langMenu.classList.contains("dropdown-visible");
  closeAllDropdowns();
  if (!isOpen) {
    langMenu.classList.remove("dropdown-hidden");
    langMenu.classList.add("dropdown-visible");
    langChevron.style.transform = "rotate(180deg)";
  }
});

themeToggleBtn.addEventListener("click", (e) => {
  e.stopPropagation();
  const isOpen = themeMenu.classList.contains("dropdown-visible");
  closeAllDropdowns();
  if (!isOpen) {
    themeMenu.classList.remove("dropdown-hidden");
    themeMenu.classList.add("dropdown-visible");
    themeChevron.style.transform = "rotate(180deg)";
  }
});

document.querySelectorAll(".theme-option").forEach(btn => {
  btn.addEventListener("click", () => {
    setTheme(btn.getAttribute("data-set-theme"));
    closeAllDropdowns();
  });
});

document.addEventListener("click", () => closeAllDropdowns());

document.querySelectorAll(".tab-btn, .tab-footer-link").forEach(btn => {
  btn.addEventListener("click", () => switchTab(btn.getAttribute("data-tab")));
});

const expDetailsToggle = document.getElementById("expDetailsToggle");
const expDetailsBody = document.getElementById("expDetailsBody");
const expDetailsChevron = document.getElementById("expDetailsChevron");

if (expDetailsToggle) {
  expDetailsToggle.addEventListener("click", () => {
    const isOpen = expDetailsBody.classList.toggle("open");
    expDetailsChevron.style.transform = isOpen ? "rotate(180deg)" : "rotate(0deg)";
    const dict = TRANSLATIONS[currentLang] || TRANSLATIONS.en;
    document.getElementById("expDetailsLabel").textContent = isOpen ? dict.hideDetails : dict.showDetails;
  });
}

chaosToggleBtn.addEventListener("click", () => {
  chaosActive = !chaosActive;
  bodyEl.classList.toggle("chaos-active", chaosActive);
  chaosToggleBtn.setAttribute("aria-pressed", String(chaosActive));
});

// Modal logic
const connectModal = document.getElementById("connectModal");
const closeModalBtn = document.getElementById("closeModalBtn");
const modalTitle = document.getElementById("modalTitle");
const modalTemplate = document.getElementById("modalTemplate");
const openMailtoLink = document.getElementById("openMailtoLink");

function openActionModal(actionType) {
  const dict = TRANSLATIONS[currentLang] || TRANSLATIONS.en;
  if (actionType === "donate") {
    modalTitle.textContent = dict.btnDonate;
    modalTemplate.value = "Hello Safe Haven Team,\n\nI would like to make a donation...";
  } else if (actionType === "join") {
    modalTitle.textContent = dict.btnJoin;
    modalTemplate.value = "Hello Safe Haven Team,\n\nI would love to join the team...";
  } else {
    modalTitle.textContent = dict.btnSponsor;
    modalTemplate.value = "Hello Safe Haven Team,\n\nI would like to explore sponsoring...";
  }
  connectModal.classList.remove("hidden");
  connectModal.classList.add("flex");
}

document.querySelectorAll(".action-cta-btn").forEach(btn => {
  btn.addEventListener("click", () => openActionModal(btn.getAttribute("data-action")));
});

closeModalBtn.addEventListener("click", () => {
  connectModal.classList.add("hidden");
  connectModal.classList.remove("flex");
});

setLanguage("en");
setTheme("dark");
