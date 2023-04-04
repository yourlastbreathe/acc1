export const sectionsButton = document.querySelector('.footer__sections-button');
export const adressButton = document.querySelector('.footer__adress-button');
const sectionsList = document.querySelector('.footer__sections-list');
const adressList = document.querySelector('.footer__adress-list');
const sectionsButtonOriginalText = sectionsButton.textContent;
const adressButtonOriginalText = adressButton.textContent;

export const onClickSectionsButton = () => {
  sectionsList.classList.toggle('footer__sections-list--show');
  sectionsButton.textContent = sectionsButton.textContent === sectionsButtonOriginalText
    ? '-'
    : sectionsButtonOriginalText;
};

export const onClickAdressButton = () => {
  adressList.classList.toggle('footer__adress-list--show');
  adressButton.textContent = adressButton.textContent === adressButtonOriginalText
    ? '-'
    : adressButtonOriginalText;
};
