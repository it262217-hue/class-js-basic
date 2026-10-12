// // // console.log('success!')

// // // const mainTitle = document.getElementById('main-title');
// // // console.log(mainTitle);

// // // const title = document.querySelector('#main-title');
// // // console.log(title);

// // // const list = document.querySelector('li');
// // // console.log(list);

// // // document.log(document.body);
// // // document.log(document.documentElement);

// // // const introText = document.getElementById('intro');
// // // console.log(introText);

// // // const changBtn = document.quearySelector('#cahnge-btn');
// // // console.log(changBtn);

// // const mainTitle = document.getElementById('main-titile');
// // console.log(mainTitle);

// // const day = 12;
// // const week = '月曜日';
// // mainTitle.textContent = '今日は${day}日の${week}です。';

// // const introText = document.querySelector('#intro');
// // console.log(mainTitle.innerHTML);

// // introText.innerHTML = 'あんたはギィ。<strong>JS</strong>ただのしがない黒人だ。';

// // console.log(document.body.textContent);
// // console.log(document.body.innerHTML);

// // introText.textContent = 'あんたはギィ。<strong>JS</strong>ただのしがない黒人だ。';

// const mainTitle = document.getElementById('main-title');
// mainTitle.textContent = '平山晴翔'

// const introText = document.querySelector('intro');
// introText.innerHTML = '途中で<br>改行がある文章です。';

// const changeBtn = document.querySelector('changeBtn');
// changeBtn.innerHTML = '<strong>内容を変更する</strong>';

// changeBtn.addEventListener('click', () => {
// mainTitle.style.background - '#ff3366';
// mainTitle.style.backgroundColor = '#333333';

// introText.style.letterSpancing = '1em';
// introText.style.marginBottom = '50px';
// introText.style.fontStyle = 'italic';
// });

// let newSize = 50;
// mainTitle.style.fontsize = '$(newSize)px';

// changeBtn.addEventListener('click, ()=>{}')

// 課題
const themeTitle = document.getElementById('theme-title');
console.log(themeTitle);

const btnLight = document.getElementById('btn-light');
const btnDark = document.getElementById('btn-dark');
const btnNeon = document.getElementById('btn-neon');
console.log(btnLight, btnDark, btnNeon);

// ライトモード
btnLight.addEventListener('click', function () {
    themeTitle.textContent = '今のテーマ：☀️ ライトモード';
    document.body.style.backgroundColor = '#f0f4f8';
    document.body.style.color = '#333333';
});

// ダークモード
btnDark.addEventListener('click', function () {
    themeTitle.textContent = '今のテーマ：🌙 ダークモード';
    document.body.style.backgroundColor = '#1a1a2e';
    document.body.style.color = '#e0e0e0';
});

// ネオンモード
btnNeon.addEventListener('click', function () {
    themeTitle.textContent = '今のテーマ：💡 ネオンモード';
    document.body.style.backgroundColor = '#00FFD5';
    document.body.style.color = '#FF6A00';
})
