const registerBtn = document.getElementById("registerBtn");

registerBtn.addEventListener("click", function () {

    const name = document.getElementById("name").value.trim();
    const lastname = document.getElementById("phone").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;
    
    if (!name || !lastname || !email || !password) {
        alert("Please complete all fields.");
        return;
    }

    const user = {
        name: name,
        lastname: lastname,
        email: email,
        password: password,
        userType: userType
    };

    localStorage.setItem("user", JSON.stringify(user));

    alert("Account created successfully!");

    window.location.href = "login.html";
});