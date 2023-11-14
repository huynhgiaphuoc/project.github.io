document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();


    const password = document.getElementById('password').value;
    const email = document.getElementById('email').value;


    fetch('../js/users.json')
        .then(response => response.json())
        .then(users => {
            const user = users.find(user => user.email === email && user.password === password);
            const message = document.getElementById('message');

            if (user) {
                message.textContent = 'Login successful!';
                message.style.color = 'green';
                window.location="http://localhost:1000/TECHWIZ4/web/home.html";
            } else {
                message.textContent = 'Login failed. Please check your username and password.';
                message.style.color = 'red';
            }
        })
        .catch(error => {
            console.error('Error:', error);
        });
});   