const registerBtn = document.getElementById("registerBtn");

if (registerBtn) {
    registerBtn.addEventListener("click", function (event) {
        event.preventDefault();

        const name = document.getElementById("name")?.value.trim() || "Guest User";
        const phone = document.getElementById("phone")?.value.trim() || "0000000000";
        const email = document.getElementById("email")?.value.trim() || "guest@example.com";
        const password = document.getElementById("password")?.value || "";

        if (!name || !phone || !email || !password) {
            alert("Please complete all fields.");
            return;
        }

        const userType = window.location.pathname.includes("registerEmpy.html") ? "employer" : "jobseeker";

        const user = {
            name: name,
            phone: phone,
            email: email,
            password: password,
            userType: userType,
            createdAt: new Date().toISOString()
        };

        localStorage.setItem("user", JSON.stringify(user));
        localStorage.setItem("loggedIn", "true");
        localStorage.setItem("currentUser", user.email);

        alert("Account created successfully!");
        window.location.href = "index.html";
    });
}
