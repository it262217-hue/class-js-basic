const MAX_HP = 100;
const DAMAGE = 25;
let currentHP = MAX_HP;

const BEFORE_IMG = 'https://picsum.photos/id/1025/400/250';
const AFTER_IMG = 'https://picsum.photos/id/1062/400/250';

const enemyImg = document.getElementById('enemy-img');
const hpDisplay = document.getElementById('hp-display');
const battleMessage = document.getElementById('battle-message');
const attackBtn = document.getElementById('attack-btn');
const resetBtn = document.getElementById('reset-btn');

// 攻撃
attackBtn = addEventListener('click', () => {
    currentHP -= DAMAGE;

    if (currentHP < 0) {
        currentHP = 0;
    }

    hpDisplay.textContent = `HP: ${currentHP} / ${MAX_HP}`;

    if (currentHP <= 0) {
        battleMessage.textContent = 'モンスターをたおした！ゲームクリア！';
        hpDisplay.style.color = '#e74c3c';
        enemyImg.setAttribute('src', AFTER_IMG);
        enemyImg.setAttribute('alt', '倒れたモンスター');
        attackBtn.setAttribute('disabled', 'true');
    } else if (currentHP <= 50) {
        battleMessage.textContent = '相手はふらふらだ！あと少し！';
        hpDisplay.style.color = '#e67e22';
    } else {
        battleMessage.textContent = '効果的なダメージを与えた！';
        hpDisplay.style.color = '#333333';

    }
});

// もう一度
