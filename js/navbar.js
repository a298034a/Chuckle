document.addEventListener('DOMContentLoaded', function () {
    var navbarHTML = `
        <header id="navbar">
        <h1 class="logo">
            <a href="./index.html">
                <figure>
                    <img src="./images/navbar/logo.png" alt="Chuckle logo">
                </figure>
                <p class="contrast-text">CHUCKLE</p>
            </a>
        </h1>
        <nav class="navigation">
            <ul class="nav-list">
                <li class="menu"><a class="contrast-text" href="./news.html">最新消息</a></li>
                <li class="menu">
                    <a class="contrast-text" href="#">活動企劃</a>
                    <ul class="dropdown-menu">
                        <li><a href="./themeSeason.html">主題季</a></li>
                        <hr>
                        <li><a href="./officialEvent.html">官方活動</a></li>
                    </ul>
                </li>
                <li class="menu"><a class="contrast-text" href="./articleList.html">文章列表</a></li>
                <li class="icon"><a href="#"><img class="icon-map" src="./images/navbar/icon-map.png" alt="前往地圖搜尋頁面"></a></li>
                <li class="icon">
                    <label for="search-modal-switch" class="modal-switch">
                        <input type="checkbox" id="search-modal-switch">
                        <img class="icon-search" src="./images/navbar/icon-search.png" alt="顯示搜尋功能區塊">
                    </label>
                </li>
                <li class="icon">
                    <label for="member-modal-switch" class="modal-switch">
                        <input type="checkbox" id="member-modal-switch">
                        <img class="icon-member" src="./images/navbar/icon-member.png" alt="顯示會員區塊">
                    </label>
                </li>
            </ul>
        </nav>
        <section id="member-modal" style="display:none">
            <div class="radio-container">
                <input id="radio-login" name="chlid-selected" type="radio" value="登入" checked>
                <label for="radio-login">登入</label>

                <input id="radio-signup" name="chlid-selected" type="radio" value="註冊">
                <label for="radio-signup">註冊</label>
            </div>

            <form action="" id="form-login">
                <label for="uid">
                    <span>帳號</span>
                    <input type="text" id="uid">
                </label>

                <label for="pw">
                    <span>密碼</span>
                    <input type="text" id="pw">
                </label>

                <div class="action-container">
                    <label for="remember">
                        <input type="checkbox" id="remember" />
                        <span>記住我</span>
                    </label>

                    <label for="keep-login">
                        <input type="checkbox" id="keep-login" />
                        <span>保持登入</span>
                    </label>

                    <a href="#">忘記密碼</a>
                </div>
                <input type="button" value="登入">

                <div class="sns-login">
                    <a href="#"><img src="./images/member/google.png" alt="以google帳號登入"></a>
                    <a href="#"><img src="./images/member/line.png" alt="以line帳號登入"></a>
                    <a href="#"><img src="./images/member/facebook.png" alt="以facebook帳號登入"></a>
                </div>
            </form>

            <form action="" id="form-signup" style="display: none;">
                <label for="signup-uid">
                    <span>帳號</span>
                    <input type="text" id="signup-uid">
                </label>

                <label for="signup-pw">
                    <span>密碼</span>
                    <input type="text" id="signup-pw">
                </label>

                <input type="button" value="註冊">

                <div class="sns-login">
                    <a href="#"><img src="./images/member/google.png" alt="以google帳號登入"></a>
                    <a href="#"><img src="./images/member/line.png" alt="以line帳號登入"></a>
                    <a href="#"><img src="./images/member/facebook.png" alt="以facebook帳號登入"></a>
                </div>
            </form>
        </section>
        <section id="search-modal" style="display:none">
            <form class="search-container">
                <input type="text" id="search-bar" placeholder="想去哪玩？">
                <a href="./articleList.html"><img class="search-icon" src="./images/search/search-icon.png"></a>
            </form>
            <div class="negative-margin">
                <div class="search-tags">
                    <p>熱門地區</p>
                    <div class="tags-container">
                        <a class="tag" href="#">台北市</a>
                        <a class="tag" href="#">新北市</a>
                        <a class="tag" href="#">嘉義市</a>
                        <a class="tag" href="#">台南市</a>
                        <a class="tag" href="#">玉井區</a>
                        <a class="tag" href="#">高雄市</a>
                    </div>
                </div>
                <div class="search-tags">
                    <p>熱門分類</p>
                    <div class="tags-container">
                        <a class="tag" href="#">復古拍貼機</a>
                        <a class="tag" href="#">中秋煙火</a>
                        <a class="tag" href="#">期間限定美術展</a>
                        <a class="tag" href="#">日本當代藝文展</a>
                        <a class="tag" href="#">台北拉麵</a>
                        <a class="tag" href="#">深夜咖啡</a>
                    </div>
                </div>
            </div>
        </section>
    </header>
    `;
    document.body.insertAdjacentHTML('afterbegin', navbarHTML);

    const navbarUtility = document.createElement('script');
    navbarUtility.src = "./js/navbarUtility.js";
    navbarUtility.async = true;

    document.body.appendChild(navbarUtility);
});