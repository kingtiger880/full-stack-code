<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Login Page</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      height: 100vh;
      margin: 0;
      background-color: #f4f4f9;
    }
    form {
      background-color: white;
      padding: 20px;
      border: 1px solid #ddd;
      border-radius: 5px;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
      width: 100%;
      max-width: 300px;
    }
    label {
      margin-bottom: 5px;
      display: block;
    }
    input {
      width: 100%;
      padding: 8px;
      margin-bottom: 15px;
      border: 1px solid #ddd;
      border-radius: 4px;
    }
    button {
      width: 100%;
      padding: 10px;
      background-color: #007BFF;
      color: white;
      border: none;
      border-radius: 4px;
      cursor: pointer;
      font-size: 16px;
    }
    button:hover {
      background-color: #0056b3;
    }
    #response {
      margin-top: 20px;
      color: red;
      text-align: center;
    }
  </style>
</head>
<body>
  <form id="loginForm">
    <h2>Login</h2>
    <label for="email">Email:</label>
    <input type="email" id="email" name="email" placeholder="Enter your email" required>
    
    <label for="password">Password:</label>
    <input type="password" id="password" name="password" placeholder="Enter your password" required>
    
    <button type="submit">Login</button>
  </form>

  <p id="response"></p>

  <script>
    document.getElementById('loginForm').addEventListener('submit', async function (event) {
      event.preventDefault();

      const email = document.getElementById('email').value;
      const password = document.getElementById('password').value;

      try {
        const response = await fetch('http://localhost:3001/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email, password }),
        });

        if (response.ok) {
          const result = await response.json();
          document.getElementById('response').textContent = `Login successful: ${result.message}`;
          document.getElementById('response').style.color = 'green';
        } else {
          const error = await response.json();
          document.getElementById('response').textContent = `Error: ${error.message || 'Login failed'}`;
        }
      } catch (error) {
        document.getElementById('response').textContent = `Error: ${error.message}`;
      }
    });
  </script>
</body>
</html>
