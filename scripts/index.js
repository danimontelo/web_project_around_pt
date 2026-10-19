const initialCards = [
  {
    name: "Vale de Yosemite",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_yosemite.jpg",
  },
  {
    name: "Lago Louise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_lake-louise.jpg",
  },
  {
    name: "Montanhas Carecas",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_bald-mountains.jpg",
  },
  {
    name: "Latemar",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_latemar.jpg",
  },
  {
    name: "Parque Nacional Vanoise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_vanoise.jpg",
  },
  {
    name: "Lago di Braies",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_lago.jpg",
  },
];

const editProfileButton = document.querySelector(".profile__edit-button");
const editProfileModal = document.querySelector("#edit-popup");
const editProfileCloseButton = editProfileModal.querySelector(".popup__close");
const profileTitle = document.querySelector(".profile__title");
const profileDescription = document.querySelector(".profile__description");
const profileNameInput = editProfileModal.querySelector(
  ".popup__input_type_name",
);
const profileDescriptionInput = editProfileModal.querySelector(
  ".popup__input_type_description",
);
const editProfileForm = editProfileModal.querySelector("#edit-profile-form");
const cardTemplate = document
  .querySelector("#card-template")
  .content.querySelector(".card");
const cardsList = document.querySelector(".cards__list");
const addCardButton = document.querySelector(".profile__add-button");
const newCardModal = document.querySelector("#new-card-popup");
const newCardCloseButton = newCardModal.querySelector(".popup__close");
const newCardForm = newCardModal.querySelector("#new-card-form");
const cardNameInput = newCardModal.querySelector(
  ".popup__input_type_card-name",
);
const cardLinkInput = newCardModal.querySelector(".popup__input_type_url");
const imageModal = document.querySelector("#image-popup");
const imageModalCloseButton = imageModal.querySelector(".popup__close");
const imageModalImage = imageModal.querySelector(".popup__image");
const imageModalCaption = imageModal.querySelector(".popup__caption");

function openModal(modal) {
  modal.classList.add("popup_is-opened");
}

function closeModal(modal) {
  modal.classList.remove("popup_is-opened");
}

function fillProfileForm() {
  profileNameInput.value = profileTitle.textContent;
  profileDescriptionInput.value = profileDescription.textContent;
}

function handleOpenEditModal() {
  fillProfileForm();
  openModal(editProfileModal);
}

function handleProfileFormSubmit(evt) {
  evt.preventDefault();

  profileTitle.textContent = profileNameInput.value;
  profileDescription.textContent = profileDescriptionInput.value;

  closeModal(editProfileModal);
}

function getCardElement({
  name = "Lugar sem nome",
  link = "./images/placeholder.jpg",
} = {}) {
  const cardElement = cardTemplate.cloneNode(true);
  const cardTitle = cardElement.querySelector(".card__title");
  const cardImage = cardElement.querySelector(".card__image");
  const cardLikeButton = cardElement.querySelector(".card__like-button");
  const cardDeleteButton = cardElement.querySelector(".card__delete-button");

  cardTitle.textContent = name;
  cardImage.src = link;
  cardImage.alt = name;

  cardLikeButton.addEventListener("click", function () {
    handleLikeButtonClick(cardLikeButton);
  });

  cardDeleteButton.addEventListener("click", function () {
    handleDeleteCardClick(cardElement);
  });

  cardImage.addEventListener("click", function () {
    handleCardImageClick(name, link);
  });

  return cardElement;
}

function renderCard(name, link, container) {
  const cardElement = getCardElement({ name, link });
  container.prepend(cardElement);
}

function handleCardFormSubmit(evt) {
  evt.preventDefault();

  renderCard(cardNameInput.value, cardLinkInput.value, cardsList);

  closeModal(newCardModal);
  newCardForm.reset();
}

function handleLikeButtonClick(likeButton) {
  likeButton.classList.toggle("card__like-button_is-active");
}

function handleDeleteCardClick(cardElement) {
  cardElement.remove();
}

function handleCardImageClick(name, link) {
  imageModalImage.src = link;
  imageModalImage.alt = name;
  imageModalCaption.textContent = name;

  openModal(imageModal);
}

editProfileButton.addEventListener("click", handleOpenEditModal);

editProfileCloseButton.addEventListener("click", function () {
  closeModal(editProfileModal);
});

editProfileForm.addEventListener("submit", handleProfileFormSubmit);

addCardButton.addEventListener("click", function () {
  openModal(newCardModal);
});

newCardCloseButton.addEventListener("click", function () {
  closeModal(newCardModal);
});

newCardForm.addEventListener("submit", handleCardFormSubmit);

imageModalCloseButton.addEventListener("click", function () {
  closeModal(imageModal);
});

initialCards.forEach((card) => {
  renderCard(card.name, card.link, cardsList);
});
