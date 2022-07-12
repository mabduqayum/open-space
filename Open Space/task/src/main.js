"use strict";

const password = document.getElementById('password-field');
const checkButtons = document.getElementsByClassName('check-buttons')[0];
const leverButtons = document.getElementsByClassName('levers')[0];
const launchButton = document.getElementsByClassName('launch-rocket')[0];


function onSubmitPassword(self, event) {
    const passwordValue = password.value;
    event.preventDefault();
    password.value = '';
    if (passwordValue !== 'TrustNo1') {
        return;
    }
    const items = [...checkButtons.children, ...leverButtons.children, launchButton, password, self];
    for (const item of items) {
        item.toggleAttribute('disabled')
    }
}

