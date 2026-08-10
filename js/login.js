const loginBtn = document.getElementById("loginBtn");

if (loginBtn) {
    loginBtn.addEventListener("click", function (event) {
        event.preventDefault();

        const emailInput = document.getElementById("loginEmail").value.trim();
        const passwordInput = document.getElementById("loginPassword").value;

        const user = JSON.parse(localStorage.getItem("user"));

        if (!user) {
            alert("No account found. Please register first.");
            return;
        }

        const isEmailMatch = emailInput.toLowerCase() === user.email.toLowerCase();
        const isNameMatch = emailInput.toLowerCase() === user.name.toLowerCase();

        if ((isEmailMatch || isNameMatch) && passwordInput === user.password) {
            localStorage.setItem("loggedIn", "true");
            localStorage.setItem("currentUser", user.email);
            window.location.href = "index.html";
        } else {
            alert("Incorrect email/username or password.");
        }
    });
}
