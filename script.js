const balls = document.querySelectorAll('.ball');

balls.forEach(ball => {
    ball.addEventListener('mouseover', function() {
        ball.style.transform = 'scale(2)';
        ball.style.animation = 'shake 0.5s infinite';
        ball.textContent = getNewText(ball.id);
    });

    ball.addEventListener('mouseleave', function() {
        ball.style.transform = 'scale(1)';
        ball.style.animation = 'none';
        ball.textContent = getOriginalText(ball.id);
    });
});

function getNewText(ballId) {
    switch(ballId) {
        case 'ball1':
            return '蝶莱雅泉';
        case 'ball2':
            return '城北文澜';
        case 'ball3':
            return '西溪紫金港';
        case 'ball4':
            return '家里';
        default:
            return '';
    }
}

function getOriginalText(ballId) {
    switch(ballId) {
        case 'ball1':
            return '空气质量低于60';
        case 'ball2':
            return '空气质量标明是61~100';
        case 'ball3':
            return '空气质量是101~150';
        case 'ball4':
            return '空气质量151以上';
        default:
            return '';
    }
}