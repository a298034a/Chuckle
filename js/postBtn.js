// 點喜歡
let love = document.getElementById('love');

love.addEventListener('click', () => {
    if (love.src.includes('Love-new.svg')) {
        love.src = './images/Love-new-hover.svg';
    } else {
        love.src = './images/Love-new.svg';
    }
});

// 點收藏
let collect = document.getElementById('collect');

collect.addEventListener('click', () => {
    if (collect.src.includes('collect-new.svg')) {
        collect.src = './images/collect-new-hover.svg';
    } else {
        collect.src = './images/collect-new.svg';
    }
});

// 點分享
let share = document.getElementById('share');

share.addEventListener('click', () => {
    if (share.src.includes('share-new.svg')) {
        share.src = './images/share-new-hover.svg';
    } else {
        share.src = './images/share-new.svg';
    }
});