const h1 = document.querySelector('h1');
const langBtn = document.querySelectorAll('.lang__link');
const gridItem = document.querySelectorAll('.grid-item');
const gridTitle = document.querySelectorAll('.grid-item__subtitle');
const backgroundPopup = document.querySelector('.bakground-popup');
const popup = document.querySelector('.popup');
const popupSliderRightBtn =document.querySelector('.right');
const popupSliderLeftBtn =document.querySelector('.left');
const popupImg = document.querySelector('.popup__img');
const popupTitle = document.querySelector('.popup__title');
const popupDescr = document.querySelector('.popup__descr');
const popupNextBtn = document.querySelector('.popup__next');
const popupPrevBtn = document.querySelector('.popup__prev');
const popupCloseBtn = document.querySelector('.popup__close');
const burgerBtn = document.querySelector('.header__burger');
const burgerMenu = document.querySelector('.burger__menu');
const burgerLinks = document.querySelectorAll('.burger__link');
const html = document.querySelector('html');



let count;
let num;

gridItem.forEach((elem, index) => {
    elem.addEventListener('click', () => {
        count = index;
        makePopup(count);
    })
})

gridTitle.forEach((elem, index) => {
    elem.addEventListener('click', (e) => {
        count = index;
        makePopup(count);
    })
})

const makePopup = (count) => {
    num = 0;
    backgroundPopup.classList.add('active');
    popup.classList.add('active');
    popupImg.src = items[count].img[num];
    popupTitle.innerHTML = items[count].title;
    popupDescr.innerHTML = items[count].descr;
    html.classList.add("overflow-h");
}

const closeBackgroundPopup = () => {
    backgroundPopup.classList.remove('active');
    popup.classList.remove('active');
    burgerBtn.classList.remove('header__burger_transform');
    burgerMenu.classList.remove('burger__menu_active');
    html.classList.remove("overflow-h");
}

const genBurgerMenu = () => {
    burgerBtn.classList.toggle('header__burger_transform');
    burgerMenu.classList.toggle('burger__menu_active');
    backgroundPopup.classList.toggle('active');
    html.classList.toggle("overflow-h");
};
 
backgroundPopup.addEventListener('click', closeBackgroundPopup);

popupNextBtn.addEventListener('click', ()=> {
    ++count;
    if (count >=6 ){
        count = 0;
    }
    makePopup(count);
});
popupPrevBtn.addEventListener('click', ()=> {
    --count;
    if (count <= -1){
        count = 5;
    }
    makePopup(count);
});

popupCloseBtn.addEventListener('click', closeBackgroundPopup);

burgerBtn.addEventListener('click', genBurgerMenu);

burgerLinks.forEach((elem) => {
    elem.addEventListener('click', genBurgerMenu);
})


popupSliderRightBtn.addEventListener('click', ()=> {
    if (num < items[count].img.length -1) {
        ++num;
    }  
    popupImg.src = items[count].img[num];
})

popupSliderLeftBtn.addEventListener('click', ()=> {
    if (num > 0) {
        --num;
    }  
    popupImg.src = items[count].img[num];
})