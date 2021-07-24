const button = document.getElementById("change-color");
const title = document.getElementById("title");

function changeColor() {
    button.style.color = ('darkseagreen');
    button.style.backgroundColor = ('deeppink');

    title.style.color = ('purple');
    title.style.backgroundColor = ('lime');
}

button.onclick = changeColor;