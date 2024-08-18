document.addEventListener('scroll', function () {
    var shopSign = document.querySelector('.shop-sign-left');
    var shopSignTop = shopSign.getBoundingClientRect().top;

    if (shopSignTop <= 0) {
        shopSign.style.position = 'fixed';
        shopSign.style.top = '0';
    }

    var banner = document.querySelector('.banner');

    var bannerRect = banner.getBoundingClientRect();
    var shopSignRect = shopSign.getBoundingClientRect();

    var verticalDistance = shopSignRect.top - bannerRect.bottom;
    
    if (verticalDistance < -15) {
        shopSign.style.position = 'absolute';
        shopSign.style.top = `${400*(window.innerWidth/1980)}px`;//'355px';
        console.log(shopSign.style.top+" "+window.innerWidth);
    }
});

//todo:resize
