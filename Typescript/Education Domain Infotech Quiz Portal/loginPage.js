"use strict";

// Define the login class
var login = /** @class */ (function () {
    function login() { }

    login.prototype.submit = function () {
        var name = document.getElementById("name")?.value.trim();
        var pass = document.getElementById("password")?.value.trim();
        var nameError = document.getElementById("nameError");
        var passError = document.getElementById("passError");

        nameError.innerHTML = "";
        passError.innerHTML = "";

        if (name !== "admin") {
            nameError.innerHTML = "Invalid username. Use 'admin'";
        }
        if (pass !== "asd@123") {
            passError.innerHTML = "Invalid password. Use 'asd@123'";
        }

        if (name === "admin" && pass === "asd@123") {
            alert("Login successful! Redirecting to quiz...");
            window.location.href = "QuizPage.html";
        }
    };

    return login;
}());

// ✅ Make objectCreate globally available via window
window.objectCreate = {
    loginObject: new login()
};

// ✅ Attach submit function to button
function invokeSubmit() {
    window.objectCreate.loginObject.submit();
}
