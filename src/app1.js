const button = document.getElementById("change-color");
const title = document.getElementById("title");
const text = document.getElementById("text");
const link = document.getElementById("link")

function changeColor() {
    button.style.color = ('darkseagreen');
    button.style.backgroundColor = ('deeppink');
    button.innerHTML = ("Colour Changed!");

    title.style.color = ('purple');
    title.style.backgroundcolor = ('lime');
    title.innerHTML = ("i am a title");

    text.style.color = ('amber');
    text.style.backgroundcolor = ('cyan');
    text.style.fontSize = ("300px");
    text.innerHTML = ("i am a text");

    link.style.color = ('tomato');
    link.style.backgroundColor = ('crimson');
    link.innerHTML = ("you can't see me");
}

button.onclick = changeColor;