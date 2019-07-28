const form = document.querySelector('form');
const usersNumber = document.getElementsByClassName('people');
const usersList = document.getElementsByClassName('users');
const formContent = [...document.getElementsByTagName('input')];

// usersNumber.addEventListener('change', () => {
//     const value = usersNumber.value * 1;

// })

form.addEventListener('submit', (event) => {
    console.log(formContent);

    event.preventDefault();
    // formContent.forEach(content => content.classList.add('hidden'))
})