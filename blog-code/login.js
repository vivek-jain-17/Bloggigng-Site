document.getElementById('registerForm').addEventListener('submit', async function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    try {
        const response = await fetch('/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ username, email, password })
        });

        if (!response.ok) {
            const data = await response.json();
            alert(data.message);
        } else {
            alert('Registration successful!');
            // Optionally, redirect to login page or handle next steps
        }
    } catch (error) {
        console.error('Error during registration:', error);
        alert('Error during registration. Please try again later.');
    }
});

document.getElementById('loginForm').addEventListener('submit', async function(event) {
    event.preventDefault();

    const username = document.getElementById('loginUsername').value;
    const password = document.getElementById('loginPassword').value;

    try {
        const response = await fetch('/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ username, password })
        });

        if (!response.ok) {
            const data = await response.json();
            alert(data.message);
        } else {
            alert('Login successful!');
            // Optionally, redirect to user dashboard or handle next steps
        }
    } catch (error) {
        console.error('Error during login:', error);
        alert('Error during login. Please try again later.');
    }
});
