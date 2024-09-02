// 點地點讓他消失或顯示
let typeTitle1 = document.getElementById('type-title1');
let containerBody = document.getElementById('container-body');

typeTitle1.addEventListener('click', () => {
if (containerBody.style.display === 'block') {
  containerBody.style.display = 'none';
} else {
  containerBody.style.display = 'block';
}
});

// 點分類讓他消失或顯示
let typeTitle2 = document.getElementById('type-title2');
let typeBody = document.getElementById('type-body');

typeTitle2.addEventListener('click', () => {
if (typeBody.style.display === 'block') {
  typeBody.style.display = 'none';
} else {
  typeBody.style.display = 'block';
}
});


// 讓台北市打開信義區中山區
let container1 = document.getElementById('container-1');
let inOder1 = document.getElementById('inOder-1');

container1.addEventListener('click', () => {
if (inOder1.style.display === 'block') {
  inOder1.style.display = 'none';
} else {
  inOder1.style.display = 'block';
}
});