const btn = document.getElementById('btn');
const mainTitle = document.querySelector('#main-title');

btn.addEventListener('click', () => {
    mainTitle.textContent = 'クリックされました';
    mainTitle.style.color = '#ff0000';
});

window.addEventListener('scroll', () => {
    console.log(`現在のスクロール量: ${window.scrollY}px`);
    btn.style.transform = `rotate(${window.scrollY}deg)`;
    document.body.style.backgroundImage = `linear-gradient(${window.scrollY}deg, #ff9a9e, #fad0c4)`;
});

window.addEventListener('load', () => {
    btn.style.transform = `rotate(${window.scrollY}deg)`;
    document.body.style.backgroundImage = `linear-gradient(${window.scrollY}deg, #ff9a9e, #fad0c4)`;
});

const windowWidth = document.getElementById('window-width');
const windowHeight = document.getElementById('window-height');

windowWidth.textContent = window.innerWidth;
windowHeight.textContent = window.innerHeight;

window.addEventListener('resize', () => {
    windowWidth.textContent = window.innerWidth;
    windowHeight.textContent = window.innerHeight;
});

btn.classList.add('is-active', 'is-open');
btn.classList.remove('is-active', 'is-open');

btn.addEventListener('click', () => {
    btn.classList.toggle('is-active');

    if (btn.classList.contains('is-active')) {
        btn.textContent = 'ボタンはアクティブ状態です';
    } else {
        btn.textContent = 'ボタンは通常状態です';
    }
})
