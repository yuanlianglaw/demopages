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
balls.forEach(ball => {
    // 添加鼠标悬停事件
    ball.addEventListener('mouseover', function() {
        handleHoverEffect(ball);
    });

    // 添加触摸事件，模拟鼠标悬停效果
    ball.addEventListener('touchstart', function(event) {
        event.preventDefault(); // 防止触摸事件的默认行为
        handleHoverEffect(ball);
    });

    // 添加鼠标离开事件
    ball.addEventListener('mouseleave', function() {
        handleLeaveEffect(ball);
    });

    // 添加触摸事件，模拟鼠标离开效果
    ball.addEventListener('touchend', function(event) {
        event.preventDefault(); // 防止触摸事件的默认行为
        handleLeaveEffect(ball);
    });
});

function handleHoverEffect(ball) {
    ball.style.transform = 'scale(2)';
    ball.style.animation = 'pulse 1s infinite'; // 添加脉动效果
    ball.textContent = getNewText(ball.id);
}

function handleLeaveEffect(ball) {
    ball.style.transform = 'scale(1)';
    ball.style.animation = 'none';
    ball.textContent = getOriginalText(ball.id);
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