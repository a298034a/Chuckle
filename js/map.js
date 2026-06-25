document.addEventListener('DOMContentLoaded', function () {

    const logo        = document.getElementById('mapIcon');
    const list        = document.getElementById('list');
    const shadow      = document.querySelector('#shadow');
    const newpage     = document.querySelector('.popup-content');
    const closeButton = document.querySelector('.close-btn');
    const posts       = document.querySelectorAll('.addressPosts');
    const collects    = document.querySelectorAll('.collect');
    const shares      = document.querySelectorAll('.share');
    const searchBar         = document.getElementById('search-bar');
    const keywordsContainer = document.getElementById('keywords-container');
    const searchContainer   = document.querySelector('.search-container');

    /* ── 開關側邊欄 ─────────────────────────────── */
    function Open() {
        if (!list) return;
        list.classList.add('slide-in');
        list.classList.remove('slide-out');
        list.style.opacity = 1;
        if (logo) logo.src = './images/map/logo_bg_white.svg';
    }

    function Close() {
        if (!list) return;
        list.style.opacity = 0;
        list.classList.add('slide-out');
        list.classList.remove('slide-in');
        if (logo) logo.src = './images/map/logo_bg.svg';
    }

    // 讓 initMap.js 的 marker click 也能呼叫
    window.Open  = Open;
    window.Close = Close;

    /* ── Logo：hover 換圖 + click 開關側邊欄 ────── */
    if (logo) {
        logo.addEventListener('mouseover', function () {
            this.src = './images/map/logo_bg_hover.svg';
        });
        logo.addEventListener('mouseout', function () {
            // 側邊欄開啟時保持白底版
            if (list && list.style.opacity == 1) return;
            this.src = './images/map/logo_bg.svg';
        });
        logo.addEventListener('click', function () {
            if (list && list.style.opacity == 1) {
                Close();
            } else {
                Open();
            }
        });
    }

    /* ── 文章彈窗 (.addressPosts) ────────────────── */
    posts.forEach(function (post) {
        post.addEventListener('click', function () {
            if (!newpage) return;
            if (newpage.style.display === 'block') {
                newpage.style.display = 'none';
                post.style.backgroundColor = 'var(--white)';
                if (shadow) shadow.style.display = 'none';
            } else {
                newpage.style.display = 'block';
                post.style.backgroundColor = 'var(--hover-yellow)';
                if (shadow) shadow.style.display = 'block';
            }
        });
    });

    // 關閉彈窗：只綁一次，修正原本在 forEach 裡重複綁定的 bug
    if (closeButton) {
        closeButton.addEventListener('click', function () {
            if (newpage) newpage.style.display = 'none';
            if (shadow) shadow.style.display = 'none';
            posts.forEach(function (post) {
                post.style.backgroundColor = 'var(--white)';
            });
        });
    }

    /* ── 收藏按鈕 ────────────────────────────────── */
    collects.forEach(function (collect) {
        collect.addEventListener('click', function () {
            if (collect.src.includes('collect-new-noframe.svg')) {
                collect.src = './images/collect-new-hover.svg';
            } else {
                collect.src = './images/collect-new-noframe.svg';
            }
        });
    });

    /* ── 分享按鈕 ────────────────────────────────── */
    shares.forEach(function (share) {
        share.addEventListener('click', function () {
            if (share.src.includes('share-new-noframe.svg')) {
                share.src = './images/share-new-hover.svg';
            } else {
                share.src = './images/share-new-noframe.svg';
            }
        });
    });

    /* ── 搜尋欄位 ────────────────────────────────── */
    if (searchBar && keywordsContainer) {
        searchBar.addEventListener('focus', function () {
            keywordsContainer.classList.remove('hidden');
            keywordsContainer.classList.add('visible');
        });
    }

    if (searchContainer && keywordsContainer) {
        document.addEventListener('click', function (e) {
            if (!searchContainer.contains(e.target)) {
                keywordsContainer.classList.add('hidden');
                keywordsContainer.classList.remove('visible');
            }
        });
    }

});
