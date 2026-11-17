function toggleDropdown(dropdownId) {
    const dropdown = document.getElementById(dropdownId);
    const isOpen = dropdown.classList.contains('show');
    
    document.querySelectorAll('.dropdown').forEach(d => d.classList.remove('show'));
    
    if (!isOpen) {
        dropdown.classList.add('show');
    }
}

window.onclick = function(event) {
    if (!event.target.matches('.dropbtn') && !event.target.matches('.dropbtn *')) {
        document.querySelectorAll('.dropdown').forEach(d => d.classList.remove('show'));
    }
}

function switchTab(tab) {
    const aboutBtn = document.getElementById('navAbout');
    const projectBtn = document.getElementById('navProject');
    const aboutSec = document.getElementById('aboutSection');
    const projectSec = document.getElementById('projectSection');

    if (tab === 'about') {
        aboutBtn.classList.add('active');
        projectBtn.classList.remove('active');
        aboutSec.classList.add('active');
        projectSec.classList.remove('active');
    } else {
        projectBtn.classList.add('active');
        aboutBtn.classList.remove('active');
        projectSec.classList.add('active');
        aboutSec.classList.remove('active');
    }
}

function setTheme(theme) {
    document.body.setAttribute('data-theme', theme);
    document.getElementById('currentThemeLabel').innerText = theme === 'light' ? '☀️ Light' : '🌙 Dark';
}
