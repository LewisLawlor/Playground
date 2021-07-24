const alphabet = [
    "Aa",
    "Bb",
    "Cc",
    "Dd",
    "Ee",
    "Ff",
    "Gg",
    "Hh",
    "Ii",
    "Jj",
    "Kk",
    "Ll",
    "Mm",
    "Nn",
    "Oo",
    "Pp",
    "Qq",
    "Rr",
    "Ss",
    "Tt",
    "Uu",
    "Vv",
    "Ww",
    "Xx",
    "Yy",
    "Zz",
  ];
  
  const displayAlphabetButton = document.getElementById(
    "display-alphabet-button"
  );
  
  function displayAlphabet() {
    alphabet.map((letter) => {
      const alphabetItem = document.createElement("li");
      const alphabetItemValue = document.createTextNode(letter);
      alphabetItem.appendChild(alphabetItemValue);
      document.getElementById("alphabet-list").appendChild(alphabetItem);
    });
  }
  
  displayAlphabetButton.onclick = displayAlphabet;
  
  // ===============================================
  
  const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  
  const displayNumbersButton = document.getElementById("display-numbers-button");
  
  function displayNumbers() {
      alert(fruits);
  }
  
  displayNumbersButton.onclick = displayNumbers;
  
  // ===============================================
  
  const fruits = ["Apple", "Banana", "Orange"];
  
  
  
  // const languages = ["Arabic", "Japanese", "Spanish"];
  
  // const displayLanguagesButton = document.getElementById(
  //   "display-languages-button"
  // );
  
  // function displayLanguages() {
  //   languages.map((language) => {
  //     const languageItem = document.createElement("li");
  //     const selectedLanguage = document.createTextNode(language);
  //     languageItem.appendChild(selectedLanguage);
  //     document.getElementById("language-list").appendChild(languageItem);
  //   });
  // }
  
  // displayLanguagesButton.onclick = displayLanguages;
  
  // ===============================================
  
  // Input language function via input and/or button
  
  // const enterLanguage = document.querySelector("button");
  // const languageInput = document.querySelector("input");
  
  // function addLanguage() {
  //   //   const languageInput = document.querySelector("input");
  //   let language = document.createElement("li");
  //   let enteredLanguage = document.createTextNode(languageInput.value);
  //   language.appendChild(enteredLanguage);
  //   document.getElementById("languages").appendChild(language);
  // }
  
  // enterLanguage.onclick = addLanguage;
  
  // languageInput.addEventListener("keydown", function (key) {
  //   if (key.code === "Enter") {
  //     addLanguage(key);
  //   }
  // });
  
  // const languages = ["Arabic", "Japanese", "Spanish"];
  
  // const displayLanguagesButton = document.getElementById(
  //   "display-languages-button"
  // );
  
  // function displayLanguages() {
  //   languages.map((language) => {
  //     const languageItem = document.createElement("li");
  //     const selectedLanguage = document.createTextNode(language);
  //     languageItem.appendChild(selectedLanguage);
  //     document.getElementById("language-list").appendChild(languageItem);
  //   });
  // }
  
  // displayLanguagesButton.onclick = displayLanguages;
  
  // alert("I work!");
  
  // let i = 2;
  
  // document.getElementById("add-new").onclick = function () {
  //   let list = document.getElementById("list");
  //   let newEl = document.createElement("li");
  //   newEl.setAttribute("id", "item" + i + "");
  //   newEl.innerHTML = "Item " + i;
  //   newEl.setAttribute("onclick", "remove(this)");
  //   list.appendChild(newEl);
  // };
  
  // function remove(el) {
  //   let element = el;
  //   element.remove();
  // }
  
  // const addLanguage = (document.querySelector("button").onclick = function () {
  //     const userInput = document.querySelector("input");
  
  //     let language = document.createElement("li");
  //     let enteredLanguage = document.createTextNode(userInput.value);
  //     language.appendChild(enteredLanguage);
  //     document.getElementById("languages").appendChild(language);
  //   });
  
  // button.onclick = addStuff;
  
  // function dontPress () {
  //         button.innerHTML = "DO NOT PRESS!!!";
  // }
  
  // function didNotPress () {
  //         button.innerHTML = "Press me...";
  // }
  
  // function pressed () {
  //         button.innerHTML = "WHYYYYY???!!!";
  //         button.
  // }
  
  // button.onmouseenter = dontPress;
  // button.onmouseleave = didNotPress;
  // button.onmousedown = pressed;
  
  // function changeText () {
  //     if (button.onmouseenter === true) {
  //         button.innerHTML = "DO NOT PRESS!!!";
  //     } else {
  //         button.innerHTML = "Press..."
  //     }
  // }
  
  // button.onmouseenter = changeText;
  
  // button.onmouseenter = button.innerHTML = "DO NOT PRESS!!!";
  // button.onmouseleave = button.innerHTML = "Press...";
  
  // function changeText(text)
  //         {
  //             var display = document.getElementById('text-display');
  //             display.innerHTML = "";
  //             display.innerHTML = text;
  //         }
  
  //         function defaultText()
  //         {
  //             var display = document.getElementById('text-display');
  //             display.innerHTML = "";
  //             display.innerHTML = "What would you like to do?";
  //         }
  