const inputs = Array.from(document.getElementsByTagName("input"));
const spans = Array.from(document.getElementsByTagName("span"));
const pwdRules = Array.from(document.querySelectorAll("span ~ p"));
const pwd1 = document.getElementById("pwd");
const pwd2 = document.getElementById("pwd2");

pwd1.addEventListener("focus", showRules);
pwd1.addEventListener("blur", removeRules);

function showRules() {
    pwdRules.forEach((rule) => {
        rule.style.display = "block";
    });
}

function removeRules(){
    pwdRules.forEach((rule) => {
        rule.style.display = "none";
    });
}

inputs.forEach((input) => {
    input.addEventListener("blur", (e) => {
        setIcons(e);
        setOutlines(e);
    });
});

inputs.forEach((input) => {
    input.addEventListener("focus", (e) => {
        removeIcons(e);
        removeOutlines(e);
    });
});

function removeIcons(e){
    e.target.nextElementSibling.className = "";
}

function setIcons(e){
   e.target.nextElementSibling.className = "icon";
}

function setOutlines(e){
    e.target.checkValidity() ? e.target.style.outline = "3px solid green" : e.target.style.outline = "3px solid red";
}

function removeOutlines(e){
    e.target.style.outline = "3px solid #1515d8";
}

function setPasswordValidity(e){
    pwd1.value !== pwd2.value ? e.target.setCustomValidity("Passwords don't match.") : e.target.setCustomValidity("");
}

pwd2.addEventListener("keyup", setPasswordValidity);
