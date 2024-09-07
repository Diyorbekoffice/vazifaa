const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const commentInput = document.getElementById('comment');
const outputContainer = document.getElementById('output-container');
const submitBtn = document.getElementById('submitBtn');

submitBtn.addEventListener('click', function() {
    const name = nameInput.value;
    const email = emailInput.value;
    const comment = commentInput.value;

    if (name === '' || email === '' || comment === '') {
        alert('Iltimos, barcha maydonlarni toldiring!');
        return; 
    }

    const newDiv = document.createElement('div');
    newDiv.classList.add('output-item');
    newDiv.innerHTML = `
        <h3>Kiritilgan ma'lumotlar:</h3>
        <p><strong>F.I.SH:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Izoh:</strong> ${comment}</p>
    `;

    outputContainer.appendChild(newDiv);

    nameInput.value = '';
    emailInput.value = '';
    commentInput.value = '';
});
