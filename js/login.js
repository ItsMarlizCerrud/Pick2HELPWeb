const loginBtn = document.getElementById("loginBtn");

loginBtn.addEventListener("click", function () {

    const email = document.getElementById("loginEmail").value.trim();
    const password = document.getElementById("loginPassword").value;

    const user = JSON.parse(localStorage.getItem("user"));

    if (!user) {
        alert("No account found. Please register first.");
        return;
    }

    if (email === user.email && password === user.password) {

        localStorage.setItem("loggedIn", "true");

        window.location.href = "profile.html";

    } else {

        alert("Incorrect email or password.");

    }

});