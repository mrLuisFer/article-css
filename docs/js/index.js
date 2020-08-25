'use strict';

const shareBtn = document.querySelector('#share-btn');
const avatarState = document.querySelector('#avatar-state');
const avatarDefault = document.querySelector('#avatar-default');
const shareContain = document.querySelector('#share-container');
const stateMobile = document.querySelector('#stateMobile');
const shareBack = document.querySelector('#icon-back');

shareBtn.addEventListener('click', () => {
	if (screen.width <= 601 || screen.width < 600) {
		avatarDefault.classList.add('hidde');
		stateMobile.classList.remove('hidde');
		setTimeout(() => {
			avatarDefault.classList.remove('hidde');
			stateMobile.classList.add('hidde');
		}, 7500);
	} else if (screen.width >= 600) {
		avatarState.classList.toggle('hidde');
	}
});

shareBack.addEventListener('click', () => {
	if (screen.width <= 601) {
		avatarDefault.classList.remove('hidde');
		stateMobile.classList.add('hidde');
	}
});

const avatar = document.querySelector('#avatar-michelle');

avatar.addEventListener('click', () => {
	console.log('Thanks for testing my app');
});
