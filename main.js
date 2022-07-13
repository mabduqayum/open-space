"use strict";

const password = document.getElementById('password-field');
const checkButtons = document.querySelectorAll('.check-buttons > input');
const leverButtons = document.querySelectorAll('.levers > input');
const launchButton = document.getElementsByClassName('launch-rocket')[0];
const rocket = document.getElementById('rocket');

function onSubmitPassword(self, event) {
    const passwordValue = password.value;
    event.preventDefault();
    password.value = '';
    if (passwordValue !== 'TrustNo1') {
        return;
    }
    const items = [...checkButtons, ...leverButtons, password, self];
    for (const item of items) {
        item.toggleAttribute('disabled')
    }
}


function getLaunchStatus() {
    let launchStatus = true;
    for (const checkButton of checkButtons) {
        if (!checkButton.checked) {
            launchStatus = false;
            break;
        }
    }
    for (const leverButton of leverButtons) {
        if (leverButton.value < 100) {
            launchStatus = false;
            break;
        }
    }
    if (launchStatus) {
        launchButton.removeAttribute('disabled');
    } else {
        launchButton.setAttribute('disabled', '');
    }
}

launchButton.addEventListener('click', event => {
    let rocketBottom = rocket.clientTop + rocket.clientHeight;
    let rocketLeft = rocket.offsetLeft;
    rocket.style.bottom = rocketBottom + 1500 + 'px';
    rocket.style.left = ++rocketLeft + 1500 + 'px';
})
