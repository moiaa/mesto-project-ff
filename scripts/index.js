const cardTemplate = document.querySelector('#card-template').content;
const content = document.querySelector('.content');
const cards = content.querySelector('.places__list');

function addCard(el, delBut) {
    const cardElement = cardTemplate.cloneNode(true);
    const cardList = cardElement.querySelector('.card');
    const title = cardList.querySelector('.card__title');
    const src = cardList.querySelector('.card__image');
    const deleteBut = cardElement.querySelector('.card__delete-button');
    title.textContent = el.name;
    src.src = el.link;
    src.alt = el.name;
    deleteBut.addEventListener('click', delBut);
    return cardElement;
}
function delBut(evt) {
    evt.target.closest('.card').remove();
}

initialCards.forEach((el) => {cards.append(addCard(el, delBut))});
