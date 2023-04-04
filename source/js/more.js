export const moreButton = document.querySelector('.about__button');
const extraDescription = document.querySelector('.about__description--hidden');
const originalTextContent = moreButton.textContent;

export const onClickMoreButton = () => {
  extraDescription.classList.toggle('about__description--show');
  moreButton.textContent = moreButton.textContent === originalTextContent
    ? 'Скрыть'
    : originalTextContent;
};
