const gridItem = document.querySelectorAll('.grid-item');
const gridTitle = document.querySelectorAll('.grid-item__subtitle');
const backgroundPopup = document.querySelector('.bakground-popup');
const popup = document.querySelector('.popup');
const popupImg = document.querySelector('.popup__img');
const popupTitle = document.querySelector('.popup__title');
const popupDescr = document.querySelector('.popup__descr');
const popupNextBtn = document.querySelector('.popup__next');
const popupPrevBtn = document.querySelector('.popup__prev');

let count;

gridItem.forEach((elem, index) => {
    elem.addEventListener('click', () => {
        count = index;
        makePopup(count);
    })
})

gridTitle.forEach((elem, index) => {
    elem.addEventListener('click', () => {
        count = index;
        makePopup(count);
    })
})

const makePopup = (count) => {
    backgroundPopup.classList.add('active');
    popup.classList.add('active');
    popupImg.src = items[count].img;
    popupTitle.innerHTML = items[count].title;
    popupDescr.innerHTML = items[count].descr;
}

const delPopup = () => {
    backgroundPopup.classList.remove('active');
    popup.classList.remove('active');
}

backgroundPopup.addEventListener('click', delPopup);
popupNextBtn.addEventListener('click', ()=> {
    ++count;
    if (count >=6 ){
        count = 0;
    }
    makePopup(count);
})
popupPrevBtn.addEventListener('click', ()=> {
    --count;
    if (count <= -1){
        count = 5;
    }
    makePopup(count);
})

