const form = document.querySelector('form');
const formContent = [...form.children]

form.addEventListener('submit', (event) => {
    event.preventDefault();
    formContent.forEach(content => content.classList.add('hidden'))
})