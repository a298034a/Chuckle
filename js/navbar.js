document.addEventListener('DOMContentLoaded', function() {
    var navbarHTML = `
        <header id="navbar">
        <h1 class="logo">
            <a href="./index.html">
                <figure>
                    <img src="./images/logo.png" alt="Chuckle logo">
                </figure>
                <p>CHUCKLE</p>
            </a>
        </h1>
        <nav class="navigation">
            <ul>
                <li class="menu"><a href="./newinfo.html">最新消息</a></li>
                <li class="menu"><a href="#">活動企劃</a></li>
                <li class="menu"><a href="#">文章列表</a></li>
                <li class="icon"><a href="#"><img src="./images/icon-map.png" alt="前往地圖搜尋頁面"></a></li>
                <li class="icon"><a href="#"><img src="./images/icon-search.png" alt="顯示搜尋功能區塊"></a></li>
                <li class="icon"><a href="#"><img src="./images/icon-member.png" alt="顯示會員區塊"></a></li>
            </ul>
        </nav>
    `;
    document.body.insertAdjacentHTML('afterbegin', navbarHTML);
});