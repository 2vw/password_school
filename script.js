function generatePassword() {
    let password = "";
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-=[]{}|;:',./<>?";
    for (let i = 0; i < 13; i++) {
        password += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    document.getElementById("generated").value = password;
    rateGenerated()
}

document.getElementById("password").addEventListener("input", ratePassword);

function ratePassword() {
    const password = document.getElementById("password").value;
    const reasons = [];
    let rating = 0;
    if (password.length <= 7) reasons.push("Password is too short (less than 8 characters)");
    else if (password.length >= 12) rating += 2;
    else rating++;
    if (!/[A-Z]/.test(password)) reasons.push("Password does not contain an uppercase letter");
    else rating += 2;
    if (!/[0-9]/.test(password)) reasons.push("Password does not contain a number");
    else rating += 2;
    if (!/[!@#$%^&*]/.test(password)) reasons.push("Password does not contain a special character");
    else rating += 2;
    if (!/[a-z]/.test(password)) reasons.push("Password does not contain a lowercase letter");
    else rating++;
    if (!/[^a-zA-Z0-9]/.test(password)) reasons.push("Password does not contain a special (!@#$%^&*) character");
    else rating++;
    if (["password", "qwerty", "123456", "letmein", "dragonball"].some(word => password.toLowerCase().includes(word))) {
        reasons.push("Password contains a common word");
        rating--;
    }
    if (password.length <= 12 && /(.)\1/.test(password)) {
        reasons.push("Password contains duplicate characters side by side");
        rating--;
    }
    document.getElementById("rating").innerHTML = rating + "/10" + (reasons.length ? "<br><small>" + reasons.join("<br>") + "</small>" : "");

    if (rating >= 7) {
        document.getElementById("submit").disabled = false;
    } else {
        document.getElementById("submit").disabled = true;
    }
}

function rateGenerated() {
    const password = document.getElementById("generated").value;
    const reasons = [];
    let rating = 0;
    if (password.length <= 7) reasons.push("Password is too short (less than 8 characters)");
    else if (password.length >= 12) rating += 2;
    else rating++;
    if (!/[A-Z]/.test(password)) reasons.push("Password does not contain an uppercase letter");
    else rating += 2;
    if (!/[0-9]/.test(password)) reasons.push("Password does not contain a number");
    else rating += 2;
    if (!/[!@#$%^&*]/.test(password)) reasons.push("Password does not contain a special character");
    else rating += 2;
    if (!/[a-z]/.test(password)) reasons.push("Password does not contain a lowercase letter");
    else rating++;
    if (!/[^a-zA-Z0-9]/.test(password)) reasons.push("Password does not contain a special (!@#$%^&*) character");
    else rating++;
    if (["password", "qwerty", "123456", "letmein", "dragonball"].some(word => password.toLowerCase().includes(word))) {
        reasons.push("Password contains a common word");
        rating--;
    }
    if (password.length <= 12 && /(.)\1/.test(password)) {
        reasons.push("Password contains duplicate characters side by side");
        rating--;
    }
    document.getElementById("grating").innerHTML = rating + "/10" + (reasons.length ? "<br><small>" + reasons.join("<br>") + "</small>" : "");

    if (rating >= 7) {
        document.getElementById("submit").disabled = false;
    } else {
        document.getElementById("submit").disabled = true;
    }
}

function copyPassword() {
    document.getElementById("password").value = document.getElementById("generated").value;
}
