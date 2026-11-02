const score = 90;

if (score >= 50) {
    console.log(`合格！`);
} else if (score >= 80) {
    console.log(`もう少し！`);
} else {
    console.log(`不合格`);
}


const age = 22;
const hasLicense = true;

// 18歳以上、かつ運転免許を持っているか？
if (age >= 18 && hasLicense === true) {
    console.log('車の運転が可能です。');
} else {
    console.log('車の運転はできません。');
}

const isMember = true; // 会員フラグ：true または false
const total = 6000; // 購入金額：数値
const btn = document.getElementById('btn');
const message = document.getElementById('message');

let count = 0;

btn.addEventListener('click', () => {
    count++;
    countDisplay.textContent = count;

    if (count >= 30) {
        message.textContent = '30回達成！ゲームクリアです！';
        message.style.color = '#e74c3c';
    } else if (count % 10 === 0) {
        message.textContent = `${count}回達成！あと少し！`;
        message.style.color = '#0066cc';
    } else {
        message.textContent = 'ボタンをクリックしてカウントを増やそう！';
        message.style.color = '#333333';
    }
});

const pageTop = document.getElementById('page-top');

window.addEventListener('scroll', () => {
    if (window.scrollY >= 300) {
        pageTop.classList.add('is-active');
    } else {
        pageTop.classList.remove('is-active');
    }
});

pageTop.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});
