'use strict';

var getRandomNumber = function (min, max) {
  var randomNumber = Math.round(Math.random() * (max - min) + min);
  return randomNumber;
}

var getRandomArrayElement = function (arr) {
  var randomElementIndex = getRandomNumber(0, arr.length - 1);
  return arr[randomElementIndex];
};
/*
var getUniqueArrayElement = function (arr) {
  var uniqueArrayElement = getRandomArrayElement(arr);
  arr.slice
}
console.log(getUniqueArrayElement(offerTitles));*/

var getRandomArray = function() {

};

var getShuffledArray = function {

};


var NUMBER_OF_ADVERTS = 8;
var OFFER_TITLES = ['Большая уютная квартира', 'Маленькая неуютная квартира', 'Огромный прекрасный дворец', 'Маленький ужасный дворец', 'Красивый гостевой домик', 'Некрасивый негостеприимный домик', 'Уютное бунгало далеко от моря', 'Неуютное бунгало по колено в воде']; //Значения не должны повторяться.
var OFFER_TYPES = ['palace', 'flat', 'house', 'bungalo'];
var OFFER_CHECKS = ['12:00', '13:00', '14:00'];
//var offerCheckOuts = ['12:00', '13:00', '14:00'];
var OFFER_FEATURES = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner']; //массив строк случайной длины из предложенных
var OFFER_PHOTOS = ['http://o0.github.io/assets/images/tokyo/hotel1.jpg', 'http://o0.github.io/assets/images/tokyo/hotel2.jpg', 'http://o0.github.io/assets/images/tokyo/hotel3.jpg'];

var getSimilarOffer = function() {
  var locationX = getRandomNumber(300, 900);
  var locationY = getRandomNumber(130, 630);
  var advert = {
    author: {
      avatar: 'img/avatars/user' + '0' + getRandomNumber(0, 8) + '.png'
    },
    offer: {
    //  title: getUniqueArrayElement(OFFER_TITLES),
      address: locationX + ', ' + locationY,
      price: getRandomNumber(1000, 1000000),
      type: getRandomArrayElement(OFFER_TYPES),
      rooms: getRandomNumber(1, 5),
      guests: getRandomNumber(1, 10),
      checkin: getRandomArrayElement(OFFER_CHECKS),
      checkout: getRandomArrayElement(OFFER_CHECKS),
    //  features: getRandomArray(OFFER_FEATURES),
      description: '',
    //  photos: getShuffledArray(OFFER_PHOTOS)
    },
    location: {
      x: locationX,
      y: locationY
    }
  };
  return advert;
};
console.log(getSimilarOffer());
//Создайте массив, состоящий из 8 сгенерированных JS объектов, которые будут описывать похожие объявления неподалёку.
/*

/*function generateArrayRandomNumber (min, max) {
02
    var totalNumbers        = max - min + 1,
03
        arrayTotalNumbers   = [],
04
        arrayRandomNumbers  = [],
05
        tempRandomNumber;
06

07
    while (totalNumbers--) {
08
        arrayTotalNumbers.push(totalNumbers + min);
09
    }
10

11
    while (arrayTotalNumbers.length) {
12
        tempRandomNumber = Math.round(Math.random() * (arrayTotalNumbers.length - 1));
13
        arrayRandomNumbers.push(arrayTotalNumbers[tempRandomNumber]);
14
        arrayTotalNumbers.splice(tempRandomNumber, 1);
15
    }
16

17
    return arrayRandomNumbers;
18
}
19

20
//  Нужно учесть что в диапазоне участвуют и минимальное и максимальное число
21
//  тоесть если задать (0, 100) то на выходе получим массив из 101-го числа
22
//  от 1 до 100 и плюс число 0
23

24
alert(generateArrayRandomNumber(45, 67));
 */
/*var getSimilarOffer = function (arrAvatars, arrTitles, arrTypes, arrRooms, arrGuests, arrCheckIns, arrChecks, arrFeatures, arrPhotos) {
  var randomName = getRandomArrayElement(arrNames) + ' ' + getRandomArrayElement(arrSurnames);
  var randomCoat = getRandomArrayElement(arrCoats);
  var randomEyes = getRandomArrayElement(arrEyes);
  var wizardsImage = {};

  wizardsImage.name = randomName;
  wizardsImage.coatColor = randomCoat;
  wizardsImage.eyesColor = randomEyes;
  return wizardsImage;
};

var getWizardsGroup = function (arrNames, arrSurnames, arrCoats, arrEyes) {
  var wizardsImages = [];
  for (var i = 0; i <= 3; i++) {
    wizardsImages[i] = getWizardsImage(arrNames, arrSurnames, arrCoats, arrEyes);
  }
  return wizardsImages;
};

/*
var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];

var WIZARD_SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];

var WIZARD_COATS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];

var WIZARD_EYES = ['black', 'red', 'blue', 'yellow', 'green'];

var userDialog = document.querySelector('.setup');
userDialog.classList.remove('hidden');

var similarListElement = userDialog.querySelector('.setup-similar-list');

var similarWizardTemplate = document.querySelector('#similar-wizard-template')
    .content
    .querySelector('.setup-similar-item');


var getRandomArrayElement = function (arr) {
  var randomElementIndex = Math.floor(Math.random() * arr.length);
  return arr[randomElementIndex];
};

var getWizardsImage = function (arrNames, arrSurnames, arrCoats, arrEyes) {
  var randomName = getRandomArrayElement(arrNames) + ' ' + getRandomArrayElement(arrSurnames);
  var randomCoat = getRandomArrayElement(arrCoats);
  var randomEyes = getRandomArrayElement(arrEyes);
  var wizardsImage = {};

  wizardsImage.name = randomName;
  wizardsImage.coatColor = randomCoat;
  wizardsImage.eyesColor = randomEyes;
  return wizardsImage;
};

var getWizardsGroup = function (arrNames, arrSurnames, arrCoats, arrEyes) {
  var wizardsImages = [];
  for (var i = 0; i <= 3; i++) {
    wizardsImages[i] = getWizardsImage(arrNames, arrSurnames, arrCoats, arrEyes);
  }
  return wizardsImages;
};

var wizards = getWizardsGroup(WIZARD_NAMES, WIZARD_SURNAMES, WIZARD_COATS, WIZARD_EYES);

var renderWizard = function (wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

  return wizardElement;
};

var fragment = document.createDocumentFragment();
for (var i = 0; i < wizards.length; i++) {
  fragment.appendChild(renderWizard(wizards[i]));
}
similarListElement.appendChild(fragment);

userDialog.querySelector('.setup-similar').classList.remove('hidden');*/
