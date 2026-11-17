function triggerChaos() {
    const body = document.body;
    body.style.transform = `rotate(${Math.random() * 2 - 1}deg) scale(${1 + (Math.random() * 0.02 - 0.01)})`;
    setTimeout(() => {
        body.style.transform = 'none';
    }, 300);
}
