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

// Perfil
const editProfileButton = document.querySelector(".profile__edit-button");
const editProfileModal = document.querySelector("#edit-popup");
const editProfileForm = editProfileModal.querySelector("#edit-profile-form");
const profileTitle = document.querySelector(".profile__title");
const profileDescription = document.querySelector(".profile__description");
const profileNameInput = editProfileModal.querySelector(
  ".popup__input_type_name",
);
const profileDescriptionInput = editProfileModal.querySelector(
  ".popup__input_type_description",
);

// Cartões
const cardTemplate = document
  .querySelector("#card-template")
  .content.querySelector(".card");
const cardsList = document.querySelector(".cards__list");

// Novo local
const addCardButton = document.querySelector(".profile__add-button");
const newCardModal = document.querySelector("#new-card-popup");
const newCardForm = newCardModal.querySelector("#new-card-form");
const cardNameInput = newCardModal.querySelector(
  ".popup__input_type_card-name",
);
const cardLinkInput = newCardModal.querySelector(".popup__input_type_url");

// Imagem
const imageModal = document.querySelector("#image-popup");
const imageModalImage = imageModal.querySelector(".popup__image");
const imageModalCaption = imageModal.querySelector(".popup__caption");

// Todos os botões de fechar
const closeButtons = document.querySelectorAll(".popup__close");

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

function renderCard(cardData, container) {
  const cardElement = getCardElement(cardData);
  container.prepend(cardElement);
}

function handleCardFormSubmit(evt) {
  evt.preventDefault();

  renderCard(
    { name: cardNameInput.value, link: cardLinkInput.value },
    cardsList,
  );

  closeModal(newCardModal);
  newCardForm.reset();
}

editProfileButton.addEventListener("click", handleOpenEditModal);
editProfileForm.addEventListener("submit", handleProfileFormSubmit);

addCardButton.addEventListener("click", function () {
  openModal(newCardModal);
});
newCardForm.addEventListener("submit", handleCardFormSubmit);

closeButtons.forEach((button) => {
  const popup = button.closest(".popup");
  button.addEventListener("click", function () {
    closeModal(popup);
  });
});

initialCards.forEach((card) => {
  renderCard(card, cardsList);
});
