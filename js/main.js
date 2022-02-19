// Функция с сайта MDN: https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/random
const minNumber = 1;
const maxNumber = 10;

const getRandomInt = function(min, max) {
  if(min >= 0 && max >= 0) {
    return Math.random() * (max - min) + min;
  }

  return 'число меньше нуля';
};

const userComment = 'Комментарий пользователя';
const maxLengthString = 140;

const getLengthString = function(string, maxLength) {
  if(string.length <= maxLength) {
    return true;
  }

  return false;
};

getRandomInt (minNumber, maxNumber);
getLengthString(userComment, maxLengthString);
