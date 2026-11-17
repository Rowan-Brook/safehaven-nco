const glitchSteps = [3, 5, 7, 11, 13, 17, 19];
let stepIndex = 0;
let isGlitchMasterOn = true;

function scheduleNextGlitch() {
    if (!isGlitchMasterOn) return;
    
    const currentSec = glitchSteps[stepIndex];
    let count = 1;
    if (currentSec === 11 || currentSec === 13) count = 2;
    if (currentSec >= 17) count = 3;

    stepIndex = (stepIndex + 1) % glitchSteps.length;

    setTimeout(() => {
        if (isGlitchMasterOn) triggerMultipleChaos(count);
        scheduleNextGlitch();
    }, currentSec * 1000);
}

function triggerMultipleChaos(count) {
    const targets = document.querySelectorAll('.card-block, h1, h2, p, .hero-subtitle');
    if (targets.length === 0) return;

    for (let i = 0; i < count; i++) {
        const randomTarget = targets[Math.floor(Math.random() * targets.length)];
        randomTarget.classList.add('element-glitch');
        setTimeout(() => {
            randomTarget.classList.remove('element-glitch');
        }, 2000);
    }
}

function toggleGlitchMaster() {
    isGlitchMasterOn = !isGlitchMasterOn;
    const iconSpan = document.getElementById('glitchIcon');
    const textSpan = document.getElementById('glitchStatusText');

    if (isGlitchMasterOn) {
        iconSpan.textContent = '⚡';
        textSpan.textContent = 'Chaos Active';
        scheduleNextGlitch();
    } else {
        iconSpan.textContent = '⚡⛔';
        textSpan.textContent = 'Chaos Stopped';
    }
}

window.addEventListener('DOMContentLoaded', () => {
    scheduleNextGlitch();
});
