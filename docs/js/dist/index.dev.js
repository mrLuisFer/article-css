'use strict';

var shareBtn = document.querySelector('#share-btn');
var avatarState = document.querySelector('#avatar-state');
var avatarDefault = document.querySelector('#avatar-default');
var shareContain = document.querySelector('#share-container');
var stateMobile = document.querySelector('#stateMobile');
var shareBack = document.querySelector('#icon-back');
shareBtn.addEventListener('click', function () {
  if (screen.width <= 601 || screen.width < 600) {
    avatarDefault.classList.add('hidde');
    stateMobile.classList.remove('hidde');
    setTimeout(function () {
      avatarDefault.classList.remove('hidde');
      stateMobile.classList.add('hidde');
    }, 7500);
  } else if (screen.width >= 600) {
    avatarState.classList.toggle('hidde');
  }
});
shareBack.addEventListener('click', function () {
  if (screen.width <= 601) {
    avatarDefault.classList.remove('hidde');
    stateMobile.classList.add('hidde');
  }
});