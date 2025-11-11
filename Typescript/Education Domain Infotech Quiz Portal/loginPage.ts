import { clickResponse } from "./submitModule";

class login implements clickResponse {
    submit(): void {
        let name = (<HTMLInputElement>document.getElementById("name")).value.trim();
        let pass = (<HTMLInputElement>document.getElementById("password")).value.trim();

        let nameError = document.getElementById("nameError");
        let passError = document.getElementById("passError");

        nameError.innerHTML = "";
        passError.innerHTML = "";

        if (name !== "admin") {
            nameError.innerHTML = "Invalid username. Use 'admin'";
        }

        if (pass !== "asd@123") {
            passError.innerHTML = "Invalid password. Use 'asd@123'";
        }

        if (name === "admin" && pass === "asd@123") {
            window.location.href = "quizPage.html";
        }
    }
}

namespace objectCreate {
    export var loginObject = new login();
}

function invokeSubmit() {
    objectCreate.loginObject.submit();
}
