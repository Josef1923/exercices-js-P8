
const listener = document.getElementById('myButton');

listener.addEventListener('click', () => {
    const message = document.createElement('p');
    message.textContent = 'Bonjour, vous avez cliqué sur le bouton !';
    document.body.appendChild(message);
});


