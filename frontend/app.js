document.addEventListener('DOMContentLoaded', () => {
    const tg = window.Telegram.WebApp;
    tg.expand();
    tg.showAlert('t', () => { alert('t'); });
    tg.close();
});