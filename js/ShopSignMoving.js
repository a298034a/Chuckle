document.addEventListener('scroll', function () {
    updatePositionByDistance();
});

window.addEventListener('resize', () => {
    updatePositionByDistance();
});

function updatePositionByDistance() {
    var shopSignLeft = document.querySelector('.shop-sign-left');
    var shopSignRight = document.querySelector('.shop-sign-right');
    var shopSignTop = shopSignLeft.getBoundingClientRect().top;

    if (shopSignTop <= 0) {        
        shopSignLeft.style.position = 'fixed';
        shopSignLeft.style.top = '0';

        shopSignRight.style.position = 'fixed';
        shopSignRight.style.top = '0';
    }

    var banner = document.querySelector('.banner');

    var bannerRect = banner.getBoundingClientRect();
    var shopSignRect = shopSignLeft.getBoundingClientRect();

    var verticalDistance = shopSignRect.top - bannerRect.bottom;

    if (verticalDistance < -15) {
        shopSignLeft.style.position = 'absolute';
        shopSignLeft.style.top = `${400 * (window.innerWidth / 1980)}px`;

        shopSignRight.style.position = 'absolute';
        shopSignRight.style.top = `${400 * (window.innerWidth / 1980)}px`;
    }
}
