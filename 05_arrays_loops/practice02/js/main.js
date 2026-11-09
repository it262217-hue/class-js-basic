const colorPreview = document.getElementById('color-preview');
const colorBtns = document.querySelectorAll('.color-btn');
const colorCodes = ['#e74c3c', '#27ae60', '#2980b9', '#8e44ad'];

for (let i = 0; i < colorBtns.length; i++) {
    colorBtns[i].addEventListener('click', () => {
        const colorName = colorBtns[i].textContent;
        const colorcode = colorCodes[i];

        colorPreview.style.backgroundColor = colorCode;
        colorPreview.style.color = '#ffffff';
        colorPreview.textContent = `${colorName}（${colorCode}）`;
    });
}

const externalLink = document.querySelectorAll('a[href^="http"]');

for (let i = 0; i < externalLink.length; i++) {
    externalLink[i].setAttribute('target', '_blank');
    externalLink[i].setAttribute('rel', 'noopener noreferrer')
    externalLink[i].textContent += ' ↗';
}

const tabBtns = document.querySelectorAll('.tab-btn');
const tabPanels = document.querySelectorAll('.tab-panel');

for (let i = 0; i < tabBtns.length; i++) {
    tabBtns[i].addEventListener('click', () => {
        for (let j = 0; j < tabBtns.length; j++) {
            tabBtns[j].classList.remove('is-active');
            tabPanels[j].classList.remove('is-active');
        }

        tabBtns[i].classList.add('is-active');
        tabPanels[i].classList.add('is-active');
    });
}
