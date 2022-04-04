//Модуль, отвечающий за загрузку изображения
import {isEscapePressed} from './util.js';
import {hashtagInput, textarea, formUploadImage, pristine} from './form-validation.js';
import {body} from './render-big-pictures.js';

const imageEditor = document.querySelector('.img-upload__overlay');
const uploadFile = document.querySelector('#upload-file');
const uploadCancel = document.querySelector('#upload-cancel');

const cleanUploadFile = function () {
  formUploadImage.reset();
  uploadFile.value = '';
  pristine.reset();
};

const onCloseImageEditorEscape = (evt) => {
  if (isEscapePressed(evt) && evt.target !== hashtagInput && evt.target !== textarea) {
    evt.preventDefault();
    onCloseImageEditor();
  }
};

function onCloseImageEditor() {
  imageEditor.classList.add('hidden');
  body.classList.remove('modal-open');
  cleanUploadFile();

  document.removeEventListener('keydown', onCloseImageEditorEscape);
}

const openImageEditor = function () {
  imageEditor.classList.remove('hidden');
  body.classList.add('modal-open');

  document.addEventListener('keydown', onCloseImageEditorEscape);
};

uploadFile.addEventListener('change', () => {
  openImageEditor();
});

uploadCancel.addEventListener('click', () => {
  onCloseImageEditor();
});

export {cleanUploadFile, openImageEditor, onCloseImageEditor, imageEditor};