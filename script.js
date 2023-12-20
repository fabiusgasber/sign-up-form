const inputs = Array.from(document.getElementsByTagName("input"));
const spans = Array.from(document.getElementsByTagName("span"));
const pwd1 = document.getElementById("pwd");
const pwd2 = document.getElementById("pwd2");

inputs.forEach((input) => {
    input.addEventListener("blur", (e) => {
        e.target.nextElementSibling.classList.add("icon");
    });
});