const baseUrl = "http://localhost:3001/";

async function apiRequest(endpoint, method, body) {
    const response = await fetch(`${baseUrl}${endpoint}`, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
    });
    return response;
}

async function signIn() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    if (!email || !password) {
        alert("Email and password are required.");
        return;
    }

    const credentials = { email, password };

    try {
        const response = await apiRequest("signin", "POST", credentials);
        if (response.ok) {
            const data = await response.json();
            console.log("Sign In Successful:", data);
            alert("Welcome back!");
        } else {
            console.error("Sign In Failed:", response.statusText);
            alert("Failed to sign in: " + response.statusText);
        }
    } catch (error) {
        console.error("Error during Sign In:", error);
        alert("An error occurred. Please try again.");
    }
}

async function signUp() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    if (!name || !email || !password) {
        alert("All fields are required.");
        return;
    }

    const userDetails = { name, email, password };

    try {
        const response = await apiRequest("signup", "POST", userDetails);
        if (response.ok) {
            const data = await response.json();
            console.log("Sign Up Successful:", data);
            alert("Account created successfully!");
        } else {
            console.error("Sign Up Failed:", response.statusText);
            alert("Failed to sign up: " + response.statusText);
        }
    } catch (error) {
        console.error("Error during Sign Up:", error);
        alert("An error occurred. Please try again.");
    }
}
