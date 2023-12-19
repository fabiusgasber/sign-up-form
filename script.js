const inputs = Array.from(document.getElementsByTagName("input"));
const spans = Array.from(document.getElementsByTagName("span"));

inputs.forEach((input) => {
    input.addEventListener("blur", (e) => {
        e.target.nextElementSibling.classList.add("icon");
    });
});