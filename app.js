document.addEventListener("DOMContentLoaded", function () {
    console.log("Elight Pay Started");

    const buttons = document.querySelectorAll("button");

    buttons.forEach(button => {
        button.addEventListener("click", function () {
            console.log(button.innerText + " clicked");
        });
    });
});
