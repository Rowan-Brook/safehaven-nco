const CONTACT_EMAIL = "safehaven.nco@gmail.com";

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
    projSubtitle: "Breaking systemic poverty through free applied IT education, psychological resilience, and an ethical self-sustaining model.",
    projHook: "Talent is universal, yet opportunity is not. Safe Haven removes financial, housing, and psychological barriers for motivated individuals facing severe socio-economic hardship—transforming them from vulnerable survivors into independent digital professionals who pay opportunity forward.",
    pillar1Title: "100% Barrier-Free Entry", pillar1Desc: "Zero upfront tuition. Covers living stipends, safe housing, meals, and certified psychological support.",
    pillar2Title: "The \"6 + 2\" Acceleration Track", pillar2Desc: "6 months of intensive applied IT, followed by 2 months building real commercial software products with mentorship.",
    pillar3Title: "Ethical Recyclable ISA", pillar3Desc: "Graduates contribute 10% of salary ONLY after securing employment above $450/month with hardship freeze.",
    pillar4Title: "Intimate Mini-Cohorts", pillar4Desc: "Compact 10–12 student hubs targeting 80%+ placement with verified Behavioral & Hard-Skills Profiles.",
    ctaSectionTitle: "Build Safe Haven With Us",
    btnSponsor: "Become a Sponsor", btnSponsorSub: "CSR, grants & equipment partners",
    btnDonate: "Make a Donation", btnDonateSub: "Fund housing, meals & laptops",
    btnJoin: "Join the Team", btnJoinSub: "Mentors, educators & psychologists",
    copyEmail: "Copy Email", copied: "Copied!", openMailApp: "Open Mail App",
    tplSponsor: "Hello Safe Haven Team,\n\nI would like to explore sponsoring Safe Haven and supporting its students.",
    tplDonate: "Hello Safe Haven Team,\n\nI would like to make a donation to support student housing, meals, and equipment.",
    tplJoin: "Hello Safe Haven Team,\n\nI would love to join the Safe Haven team as a mentor, educator, or specialist."
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
    projSubtitle: "Преодоление системной бедности через бесплатное прикладное IT-образование, психологическую опору и этичную самоокупаемую модель.",
    projHook: "Талант есть у каждого, но возможности доступны не всем. Safe Haven снимает финансовые, жилищные и психологические барьеры для мотивированных людей в трудной жизненной ситуации, помогая им стать самостоятельными специалистами и передавать возможность дальше.",
    pillar1Title: "100% бесплатный вход", pillar1Desc: "Никакой платы за обучение. Покрывает жильё, питание, стипендию и работу с психологом.",
    pillar2Title: "Акселератор «6 + 2»", pillar2Desc: "6 месяцев интенсивного прикладного IT, затем 2 месяца создания реальных коммерческих продуктов.",
    pillar3Title: "Этичный возвратный ISA", pillar3Desc: "Выпускники отчисляют 10% дохода ТОЛЬКО после трудоустройства с зарплатой выше $450/мес.",
    pillar4Title: "Камерные мини-группы", pillar4Desc: "Компактные хабы по 10–12 студентов с целью 80%+ трудоустройства.",
    ctaSectionTitle: "Развивайте Safe Haven вместе с нами",
    btnSponsor: "Стать спонсором", btnSponsorSub: "КСО, гранты и техническое партнёрство",
    btnDonate: "Сделать пожертвование", btnDonateSub: "Оплата жилья, питания и ноутбуков",
    btnJoin: "Вступить в команду", btnJoinSub: "Менторы, преподаватели и психологи",
    copyEmail: "Копировать Email", copied: "Скопировано!", openMailApp: "Открыть почту",
    tplSponsor: "Здравствуйте, команда Safe Haven!\n\nХотел(а) бы обсудить спонсорство и партнёрство с проектом Safe Haven.",
    tplDonate: "Здравствуйте, команда Safe Haven!\n\nХотел(а) бы сделать пожертвование на жильё, питание и оборудование для студентов.",
    tplJoin: "Здравствуйте, команда Safe Haven!\n\nХотел(а) бы присоединиться к команде проекта в качестве ментора, преподавателя или специалиста."
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
    projSubtitle: "Bepul amaliy IT ta’limi va psixologik tayanch orqali tizimli qashshoqlikni yengish.",
    projHook: "Iste’dod hammada bor, ammo imkoniyatlar teng emas. Safe Haven og‘ir vaziyatdagi insonlar uchun moliyaviy, uy-joy va psixologik to‘siqlarni olib tashlaydi.",
    pillar1Title: "100% to‘siqsiz kirish", pillar1Desc: "Boshlang‘ich to‘lovlarsiz ta’lim. Turar-joy, ovqatlanish va stipendiya qoplanadi.",
    pillar2Title: "«6 + 2» tezlashtirilgan dasturi", pillar2Desc: "6 oy amaliy IT, so‘ng 2 oy mentorlar bilan real mahsulotlar yaratish.",
    pillar3Title: "Axloqiy aylanma ISA modeli", pillar3Desc: "Bitiruvchilar $450/oydan yuqori ishga joylashgach daromadining 10% ini qaytaradi.",
    pillar4Title: "Ixcham mini-guruhlar", pillar4Desc: "80%+ ishga joylashish maqsadiga ega 10–12 talabalik markazlar.",
    ctaSectionTitle: "Safe Haven loyihasini birga rivojlantiramiz",
    btnSponsor: "Homiy bo‘lish", btnSponsorSub: "KSM, grantlar va texnik hamkorlar",
    btnDonate: "Xayriya qilish", btnDonateSub: "Turar-joy, ovqat va noutbuklar uchun",
    btnJoin: "Jamoaga qo‘shilish", btnJoinSub: "Mentorlar, o‘qituvchilar va psixologlar",
    copyEmail: "Emailni nusxalash", copied: "Nusxalandi!", openMailApp: "Pochta ilovasini ochish",
    tplSponsor: "Assalomu alaykum, Safe Haven jamoasi!\n\nSafe Haven loyihasiga homiylik va hamkorlik qilish imkoniyatlarini muhokama qilmoqchiman.",
    tplDonate: "Assalomu alaykum, Safe Haven jamoasi!\n\nTalabalar uchun turar-joy, ovqatlanish va jihozlarga xayriya qilmoqchiman.",
    tplJoin: "Assalomu alaykum, Safe Haven jamoasi!\n\nLoyiha jamoasiga mentor, o‘qituvchi yoki mutaxassis sifatida qo‘shilmoqchiman."
  }
};

let currentLang = "en";
let currentTheme = "dark";
let activeTab = "about";
let activeModalAction = "sponsor";
let copyResetTimer = null;

function getDict(langCode = currentLang) {
  return TRANSLATIONS[langCode] || TRANSLATIONS.en;
}

function getTemplateForAction(actionType, langCode = currentLang) {
  const dict = getDict(langCode);
  if (actionType === "donate") return dict.tplDonate;
  if (actionType === "join") return dict.tplJoin;
  return dict.tplSponsor;
}

function getTitleForAction(actionType, langCode = currentLang) {
  const dict = getDict(langCode);
  if (actionType === "donate") return dict.btnDonate;
  if (actionType === "join") return dict.btnJoin;
  return dict.btnSponsor;
}

function syncMailtoLink() {
  const openMailtoLink = document.getElementById("openMailtoLink");
  const modalTemplate = document.getElementById("modalTemplate");
  const modalTitle = document.getElementById("modalTitle");
  if (!openMailtoLink || !modalTemplate) return;
  const subject = encodeURIComponent(`${modalTitle ? modalTitle.textContent.trim() : "Safe Haven"} — Safe Haven`);
  const body = encodeURIComponent(modalTemplate.value);
  openMailtoLink.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
}

function renderLanguageOptions() {
  const langMenu = document.getElementById("langMenu");
  if (!langMenu) return;
  langMenu.innerHTML = LANGUAGES.map(lang => `
    <button type="button" data-lang="${lang.code}" class="lang-option w-full text-start px-3 py-2 rounded-xl text-xs font-medium flex items-center justify-between gap-2 cursor-pointer ${lang.code === currentLang ? "font-semibold" : ""}" style="${lang.code === currentLang ? "background: var(--accent-soft); color: var(--accent);" : ""}">
      <span>${lang.label}</span>
      ${lang.code === currentLang ? '<span>✓</span>' : ""}
    </button>
  `).join("");
}

function updateLocalizedDate() {
  const liveDateEl = document.getElementById("liveDate");
  if (!liveDateEl) return;
  const langObj = LANGUAGES.find(l => l.code === currentLang) || LANGUAGES[0];
  const now = new Date();
  try {
    const weekday = new Intl.DateTimeFormat(langObj.locale, { weekday: "long" }).format(now);
    const monthDay = new Intl.DateTimeFormat(langObj.locale, { month: "long", day: "numeric" }).format(now);
    liveDateEl.textContent = `${weekday.charAt(0).toUpperCase() + weekday.slice(1)},\n${monthDay.charAt(0).toUpperCase() + monthDay.slice(1)}`;
  } catch (e) {
    liveDateEl.textContent = "Friday,\nNovember 20";
  }
}

/* Position the sliding pill inside both Desktop and Mobile nav capsules */
function updateNavGlider() {
  document.querySelectorAll(".nav-capsule").forEach(capsule => {
    const glider = capsule.querySelector(".nav-glider");
    const activeBtn = capsule.querySelector(`.tab-btn[data-tab="${activeTab}"]`);
    if (!glider || !activeBtn) return;
    if (activeBtn.offsetWidth === 0) return;
    glider.style.width = `${activeBtn.offsetWidth}px`;
    glider.style.transform = `translateX(${activeBtn.offsetLeft - 4}px)`;
  });
}

function setLanguage(langCode) {
  if (!TRANSLATIONS[langCode]) langCode = "en";
  currentLang = langCode;
  const langObj = LANGUAGES.find(l => l.code === langCode) || LANGUAGES[0];
  const dict = getDict(langCode);

  document.documentElement.setAttribute("lang", langCode);
  document.documentElement.setAttribute("dir", langObj.dir);
  const currentLangCode = document.getElementById("currentLangCode");
  if (currentLangCode) currentLangCode.textContent = langCode.toUpperCase();

  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (dict[key]) el.textContent = dict[key];
  });

  const expDetailsBody = document.getElementById("expDetailsBody");
  const expDetailsLabel = document.getElementById("expDetailsLabel");
  if (expDetailsBody && expDetailsLabel) {
    const isDetailsOpen = expDetailsBody.classList.contains("open");
    expDetailsLabel.textContent = isDetailsOpen ? dict.hideDetails : dict.showDetails;
  }

  const connectModal = document.getElementById("connectModal");
  if (connectModal && connectModal.classList.contains("open")) {
    const modalTitle = document.getElementById("modalTitle");
    const modalTemplate = document.getElementById("modalTemplate");
    if (modalTitle) modalTitle.textContent = getTitleForAction(activeModalAction, langCode);
    if (modalTemplate) modalTemplate.value = getTemplateForAction(activeModalAction, langCode);
    syncMailtoLink();
  }

  setTheme(currentTheme);
  updateLocalizedDate();
  renderLanguageOptions();
  requestAnimationFrame(updateNavGlider);
}

function setTheme(theme) {
  currentTheme = theme;
  document.documentElement.setAttribute("data-theme", theme);
  const dict = getDict(currentLang);
  const currentThemeIcon = document.getElementById("currentThemeIcon");
  const currentThemeLabel = document.getElementById("currentThemeLabel");
  if (theme === "dark") {
    if (currentThemeIcon) currentThemeIcon.textContent = "🌙";
    if (currentThemeLabel) currentThemeLabel.textContent = dict.themeDark;
  } else {
    if (currentThemeIcon) currentThemeIcon.textContent = "☀️";
    if (currentThemeLabel) currentThemeLabel.textContent = dict.themeLight;
  }
}

function switchTab(tabName) {
  if (!tabName || tabName === activeTab) return;
  activeTab = tabName;

  document.querySelectorAll(".tab-btn").forEach(btn => {
    const isTarget = btn.getAttribute("data-tab") === tabName;
    btn.classList.toggle("nav-pill-active", isTarget);
    btn.classList.toggle("nav-pill-inactive", !isTarget);
  });
  updateNavGlider();

  const aboutView = document.getElementById("view-about");
  const projectView = document.getElementById("view-project");
  const incomingView = tabName === "about" ? aboutView : projectView;
  const outgoingView = tabName === "about" ? projectView : aboutView;

  if (outgoingView && incomingView) {
    outgoingView.classList.remove("tab-view-active");
    outgoingView.classList.add("tab-view-entering");

    setTimeout(() => {
      outgoingView.classList.add("hidden");
      outgoingView.classList.remove("tab-view-entering");

      incomingView.classList.remove("hidden");
      incomingView.classList.add("tab-view-entering");
      void incomingView.offsetWidth;

      requestAnimationFrame(() => {
        incomingView.classList.remove("tab-view-entering");
        incomingView.classList.add("tab-view-active");
        triggerScrollReveals();
      });
    }, 240);
  }

  window.scrollTo({ top: 0, behavior: "smooth" });
}

function closeAllDropdowns() {
  const langMenu = document.getElementById("langMenu");
  const langChevron = document.getElementById("langChevron");
  const themeMenu = document.getElementById("themeMenu");
  const themeChevron = document.getElementById("themeChevron");

  if (langMenu) {
    langMenu.classList.remove("dropdown-visible");
    langMenu.classList.add("dropdown-hidden");
  }
  if (langChevron) langChevron.style.transform = "rotate(0deg)";

  if (themeMenu) {
    themeMenu.classList.remove("dropdown-visible");
    themeMenu.classList.add("dropdown-hidden");
  }
  if (themeChevron) themeChevron.style.transform = "rotate(0deg)";
}

async function copyTextToClipboard(text) {
  if (navigator.clipboard && window.isSecureContext) {
    await navigator.clipboard.writeText(text);
    return true;
  }
  const helper = document.createElement("textarea");
  helper.value = text;
  helper.setAttribute("readonly", "");
  helper.style.position = "fixed";
  helper.style.opacity = "0";
  document.body.appendChild(helper);
  helper.select();
  const ok = document.execCommand("copy");
  document.body.removeChild(helper);
  if (!ok) throw new Error("Copy failed");
  return true;
}

function openActionModal(actionType) {
  activeModalAction = actionType || "sponsor";
  const connectModal = document.getElementById("connectModal");
  const modalTitle = document.getElementById("modalTitle");
  const modalTemplate = document.getElementById("modalTemplate");
  const copyBtnText = document.getElementById("copyBtnText");

  if (modalTitle) modalTitle.textContent = getTitleForAction(activeModalAction, currentLang);
  if (modalTemplate) modalTemplate.value = getTemplateForAction(activeModalAction, currentLang);
  if (copyBtnText) copyBtnText.textContent = getDict(currentLang).copyEmail;
  syncMailtoLink();

  if (connectModal) {
    connectModal.classList.add("open");
  }
}

function closeActionModal() {
  const connectModal = document.getElementById("connectModal");
  if (connectModal) {
    connectModal.classList.remove("open");
  }
}

/* IntersectionObserver for silky scroll reveals */
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("is-visible");
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12, rootMargin: "0px 0px -30px 0px" });

function triggerScrollReveals() {
  document.querySelectorAll(".reveal-scroll").forEach(el => {
    revealObserver.observe(el);
  });
}

document.addEventListener("click", async (e) => {
  const target = e.target;

  // Language toggle
  if (target.closest("#langToggleBtn")) {
    e.stopPropagation();
    const langMenu = document.getElementById("langMenu");
    const langChevron = document.getElementById("langChevron");
    const isOpen = langMenu && langMenu.classList.contains("dropdown-visible");
    closeAllDropdowns();
    if (!isOpen && langMenu) {
      langMenu.classList.remove("dropdown-hidden");
      langMenu.classList.add("dropdown-visible");
      if (langChevron) langChevron.style.transform = "rotate(180deg)";
    }
    return;
  }

  // Language option select
  const langOption = target.closest(".lang-option");
  if (langOption) {
    setLanguage(langOption.getAttribute("data-lang"));
    closeAllDropdowns();
    return;
  }

  // Theme toggle
  if (target.closest("#themeToggleBtn")) {
    e.stopPropagation();
    const themeMenu = document.getElementById("themeMenu");
    const themeChevron = document.getElementById("themeChevron");
    const isOpen = themeMenu && themeMenu.classList.contains("dropdown-visible");
    closeAllDropdowns();
    if (!isOpen && themeMenu) {
      themeMenu.classList.remove("dropdown-hidden");
      themeMenu.classList.add("dropdown-visible");
      if (themeChevron) themeChevron.style.transform = "rotate(180deg)";
    }
    return;
  }

  // Theme option select
  const themeOption = target.closest(".theme-option");
  if (themeOption) {
    setTheme(themeOption.getAttribute("data-set-theme"));
    closeAllDropdowns();
    return;
  }

  // Tab switch
  const tabBtn = target.closest(".tab-btn");
  if (tabBtn) {
    switchTab(tabBtn.getAttribute("data-tab"));
    return;
  }

  // Experience details accordion
  const expToggle = target.closest("#expDetailsToggle");
  if (expToggle) {
    const expDetailsBody = document.getElementById("expDetailsBody");
    const expDetailsChevron = document.getElementById("expDetailsChevron");
    const expDetailsLabel = document.getElementById("expDetailsLabel");
    if (expDetailsBody) {
      const isOpen = expDetailsBody.classList.toggle("open");
      expToggle.setAttribute("aria-expanded", String(isOpen));
      if (expDetailsChevron) expDetailsChevron.style.transform = isOpen ? "rotate(180deg)" : "rotate(0deg)";
      const dict = getDict(currentLang);
      if (expDetailsLabel) expDetailsLabel.textContent = isOpen ? dict.hideDetails : dict.showDetails;
    }
    return;
  }

  // CTA Modal open
  const actionBtn = target.closest(".action-cta-btn");
  if (actionBtn) {
    openActionModal(actionBtn.getAttribute("data-action"));
    return;
  }

  // Copy email inside modal
  if (target.closest("#copyEmailBtn")) {
    const modalEmailText = document.getElementById("modalEmailText");
    const copyBtnText = document.getElementById("copyBtnText");
    const emailToCopy = (modalEmailText && modalEmailText.textContent.trim()) || CONTACT_EMAIL;
    const dict = getDict(currentLang);
    try {
      await copyTextToClipboard(emailToCopy);
      if (copyBtnText) copyBtnText.textContent = dict.copied;
      if (copyResetTimer) clearTimeout(copyResetTimer);
      copyResetTimer = setTimeout(() => {
        if (copyBtnText) copyBtnText.textContent = getDict(currentLang).copyEmail;
      }, 2000);
    } catch (err) {
      if (modalEmailText) {
        const range = document.createRange();
        range.selectNodeContents(modalEmailText);
        const selection = window.getSelection();
        selection.removeAllRanges();
        selection.addRange(range);
      }
    }
    return;
  }

  // Close modal
  if (target.closest("#closeModalBtn") || target.id === "connectModal") {
    closeActionModal();
    return;
  }

  // Click outside dropdowns
  if (!target.closest("#langDropdownWrap") && !target.closest("#themeDropdownWrap")) {
    closeAllDropdowns();
  }
});

document.addEventListener("input", (e) => {
  if (e.target && e.target.id === "modalTemplate") {
    syncMailtoLink();
  }
});

document.addEventListener("keydown", (e) => {
  const connectModal = document.getElementById("connectModal");
  if (e.key === "Escape" && connectModal && connectModal.classList.contains("open")) {
    closeActionModal();
  }
});

window.addEventListener("resize", updateNavGlider);

setLanguage("en");
setTheme("dark");
triggerScrollReveals();
window.addEventListener("load", updateNavGlider);
