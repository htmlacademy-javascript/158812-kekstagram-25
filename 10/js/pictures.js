// Модуль, отвечающий за отрисовку миниатюр
import {MAX_ITEM_ID} from './constants.js';
import {createRandomPhoto} from './data.js';
import {renderBigPicture} from './render-big-pictures.js';

const pictureTemplate = document.querySelector('#picture')
  .content
  .querySelector('.picture');

const createPicturesFragment = function (picturesData) {
  const pictureFragment = document.createDocumentFragment();

  picturesData.forEach((pictureData) => {
    const pictureElement = pictureTemplate.cloneNode(true);

    pictureElement.querySelector('.picture__comments').textContent = pictureData.comments.length;
    pictureElement.querySelector('.picture__likes').textContent = pictureData.likes;
    pictureElement.querySelector('.picture__img').src = pictureData.url;

    pictureFragment.appendChild(pictureElement);

    pictureElement.addEventListener('click', () => {
      renderBigPicture(pictureData);
    });
  });
  return pictureFragment;
};

// eslint-disable-next-line no-unused-vars
let imagesData = [];

const getImagesData = (value) => {
  imagesData = value;
};

const createData = createRandomPhoto(MAX_ITEM_ID);

const containerPictures = document.querySelector('.pictures');
containerPictures.appendChild(
  createPicturesFragment(createData),
);

export {createPicturesFragment, createData, containerPictures, getImagesData};