const items = document.querySelectorAll('.carousel-item');
const indicators = document.querySelectorAll('.carousel-indicators span');
let currentIndex = 0;

function showItem(index) {
    items.forEach((item, i) => {
        item.style.transform = `translateX(-${index * 114}%)`;
        indicators[i].classList.toggle('active', i === index);
    });
}

document.querySelector('.prev').addEventListener('click', () => {
    currentIndex = (currentIndex === 0) ? items.length - 1 : currentIndex - 1;
    showItem(currentIndex);
});

document.querySelector('.next').addEventListener('click', () => {
    currentIndex = (currentIndex === items.length - 1) ? 0 : currentIndex + 1;
    showItem(currentIndex);
});

indicators.forEach((indicator, index) => {
    indicator.addEventListener('click', () => {
        showItem(index);
        currentIndex = index;
    });
});


