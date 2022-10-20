const animated = document.querySelectorAll('.input');
const button = document.querySelector('.button')

const focusIn = ({ target }) => {
    const span = target.previousElementSibling;
    span.classList.add('span-active');
}

const focusOut = ({ target }) => {

    if (target.value === '') {
        const span = target.previousElementSibling;
        span.classList.remove('span-active');
    }
}

const focusChange = () => {
    const [username, password] = animated;

    if (username.value && password.value.length >= 8) {
        button.removeAttribute('disabled');
    } else {
        button.setAttribute('disabled', '');
    }
}

animated.forEach((input) => input.addEventListener('focus', focusIn));
animated.forEach((input) => input.addEventListener('focusout', focusOut));
animated.forEach((input) => input.addEventListener('input', focusChange));