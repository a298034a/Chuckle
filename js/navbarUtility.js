//取得背景顏色
const bodyStyle = getComputedStyle(document.body);
const backgroundColor = bodyStyle.backgroundColor;

// 取得根元素（:root）的樣式
const rootStyle = getComputedStyle(document.documentElement);
const black = rootStyle.getPropertyValue('--black');
const white = rootStyle.getPropertyValue('--white');

//取得需要變色的文字 contrast-text
const contrastTexts = document.querySelectorAll(".contrast-text");

//取得需要變色的文字 contrast-text
const texts = document.querySelectorAll(".navigation .menu>a");

// 根據背景顏色改變導覽列顏色
if (backgroundColor == black) {
    updateTextColor(contrastTexts, white);
}

window.addEventListener('scroll', function () {
    if (window.scrollY > 0) {
        document.documentElement.style.setProperty('--navbg-width', `590px`);

        if (backgroundColor == black) {      
            document.documentElement.style.setProperty('--border-color', black);
            updateTextColor(texts, black);
        }
    }
    else if (window.scrollY == 0) {
        document.documentElement.style.setProperty('--navbg-width', 0);

        if (backgroundColor == black) {
            document.documentElement.style.setProperty('--border-color', white);
            updateTextColor(texts, white);
        }
    }
});

function updateTextColor(texts, color) {
    texts.forEach(text => {
        text.style.color = color;
    });
}

//開關會員視窗
const memberModal = document.getElementById("member-modal");
const memberModalCheckbox = document.getElementById("member-modal-switch");

memberModal.style.display = "none";

memberModalCheckbox.addEventListener('change',()=>{
    if(memberModalCheckbox.checked){
        memberModal.style.display = "flex";
    }
    else{
        memberModal.style.display = "none";
    }
});

//開關搜尋列
const searchModal = document.getElementById("search-modal");
const searchModalCheckbox = document.getElementById("search-modal-switch");

searchModal.style.display = "none";

searchModalCheckbox.addEventListener('change',()=>{
    if(searchModalCheckbox.checked){
        searchModal.style.display = "block";
    }
    else{
        searchModal.style.display = "none";
    }
});

const searchIcon = document.querySelector(`.icon-search`);

searchIcon.addEventListener('mouseover', function() {
    this.src = './images/navbar/icon-search-hover.png';
});

searchIcon.addEventListener('mouseout', function() {
    this.src = './images/navbar/icon-search.png';
});

const memberIcon = document.querySelector(`.icon-member`);

memberIcon.addEventListener('mouseover', function() {
    this.src = './images/navbar/icon-member-hover.png';
});

memberIcon.addEventListener('mouseout', function() {
    this.src = './images/navbar/icon-member.png';
});