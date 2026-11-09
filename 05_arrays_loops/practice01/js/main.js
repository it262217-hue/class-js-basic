// [] 角かっこ、ブランケット
const fruits = ['りんご', 'ばなな', 'みかん'];
fruits[3] = 'いちご';
fruits.push('ぶどう');
console.log(fruits.length - 1);
// 変数の値自体を変更するとエラー
// fruits = ['いちご'];


const stepIndicator = document.getElementById('step-indictor');
const stepMessage = document.getElementById('step-message');
const nextBtn = document.getElementById('next-btn');

const steps = [
    'ようこそ！まずはアカウント登録を始めましょう。',
    'お名前とメールアドレスを入力してください。',
    '入力内容を確認し、利用規約に同意してください。',
    '登録が完了しました！サービスをお楽しみください🎉'
];

let currentIndex = 0;

// 初期表示の反映
stepIndicator.textContent = `STEP ${currentIndex + 1} / ${steps.length}`;
stepMessage.textContent = steps[currentIndex];

// ボタンクリックで次のメッセージへ進める
nextBtn.addEventListener('click', () => {
    // 1. インデックスを1つ進める
    currentIndex++;

    // 2. 最後まで行ったら最初（0）に戻す
    if (currentIndex >= steps.length) {
        currentIndex = 0;
    }

    // 3. 画面のテキストを更新（人間向けの表示番号は +1 する）
    stepIndicator.textContent = `STEP ${currentIndex + 1} / ${steps.length}`;
    stepMessage.textContent = steps[currentIndex];
});


const newStepInput = document.getElementById('new-step-input');
const addBtn = document.getElementById('add-btn');

addBtn.addEventListener('click', () => {
    const newStepText = newStepInput.value;

    if (newStepText !== '') {
        steps.push(newStepText);
        stepIndicator.textContent = `STEP ${currentIndex + 1} / ${steps.length}`;

        newStepInput.value = '';
    }
});

const removeBtn = document.getElementById('remove-btn');
removeBtn.addEventListener('click', () => {
    steps.pop();
    stepIndicator.textContent = `STEP ${currentIndex + 1} / ${steps.length}`;
});

for (let i = 0; i < 10; i++) {
    if (i === 0) {
        console.log(i);
    }
}

for (let i = 0; i < 10; i++) {
    total += i;
}
console.log(`１〜１０の合計は${total}です`);

for (let i = 0; i < fruits.length; i++) {
    console.log(`${i}番目:${fruits[i]}`);
}

const menuId = document.getElementById(`menu-id`);

const menus = ['ホーム', 'サービス紹介', '制作実績', '会社概要', 'お問い合わせ'];

let text = '';

for (let i = 0; i < menus.length; i++) {
    text += `<li>${menus[i]}</li>`;
}

menuId.innerHTML = text;
