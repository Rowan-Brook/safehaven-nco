const navTabs = document.querySelectorAll('.nav-tab');
const aboutSection = document.getElementById('section-about');
const projectSection = document.getElementById('section-project');

navTabs.forEach(tab => {
    tab.addEventListener('click', () => {
        navTabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');

        const target = tab.getAttribute('data-target');
        if (target === 'about') {
            aboutSection.style.display = 'block';
            projectSection.style.display = 'none';
        } else if (target === 'project') {
            aboutSection.style.display = 'none';
            projectSection.style.display = 'block';
        }
    });
});

function toggleDetails(btn) {
    const content = btn.nextElementSibling;
    const textSpan = btn.querySelector('span');
    const isExpanded = content.classList.toggle('expanded');
    btn.classList.toggle('open', isExpanded);
    textSpan.textContent = isExpanded ? (translations[currentLang]?.btn_hide || 'Hide details') : (translations[currentLang]?.btn_show || 'Show details');
}

function setTheme(mode) {
    document.body.classList.remove('theme-dark');
    if (mode === 'dark') document.body.classList.add('theme-dark');
    document.getElementById('activeThemeIcon').textContent = mode === 'dark' ? '🌙' : '☀️';
    document.getElementById('activeThemeName').textContent = mode === 'dark' ? 'Dark' : 'Light';
    localStorage.setItem('portfolio_theme', mode);
    closeAllMenus();
}

function toggleLangMenu() {
    document.getElementById('langMenu').classList.toggle('show');
}
function toggleThemeMenu() {
    document.getElementById('themeMenu').classList.toggle('show');
}
function closeAllMenus() {
    document.getElementById('langMenu').classList.remove('show');
    document.getElementById('themeMenu').classList.remove('show');
}

window.addEventListener('DOMContentLoaded', () => {
    setLanguage(localStorage.getItem('portfolio_lang') || 'en');
    setTheme(localStorage.getItem('portfolio_theme') || 'light');
});
