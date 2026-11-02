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

stepMessage.textContent = steps[currentIndex];
stepIndicator.textContent = `STEP ${currentIndex + 1} / ${steps.length}`;

nextBtn.addEventListener('click', () => {

    currentIndex++;

    if (currentIndex >= steps.length) {
        currentIndex = 0;
    }

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
