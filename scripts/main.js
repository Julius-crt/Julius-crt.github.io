//const myheading = document.querySelector("h1");
//myheading.textContent = "Hello Worlds!";

//variable definieren
//let var1 = "Julius";

//operatoren sind mathe symbole +-*/ = === !==

//conditionals
/*if (var1 === "Julius") {
    alert("Hallo Julius")
} else {
    alert("Awwww, but chocolate is my favorite…");
}
*/

//funktions 
/*function multiply(num1, num2) {
    let result = num1 * num2;
    return result;
}
*/

//event handlers, Functionen, die auf events horchen
//bsp feuert ein Browser einn click event, das aber auch gehört werden muss
//der eventhandler, wird an das gewünschte element attached
//click ist die Event bezeichnung, auf die wir hören
//und die function gibt an, welche funktion ausgeführt werden soll.

/* document.querySelector("body").addEventListener("click", () => {
    alert("Lieber Mensch, die Website ist nun dynamisch. Klick den Link an und schau dir etwas schönes über Bäume an.");
});
*/

//--------------------------------------------------------------------------
//warum brauche ich hier keine while schleife?
//holt sich zuerst eine referenz auf das htlm element
const myImage = document.querySelector("img");

//onlick ist eine event handlerproperty
myImage.onclick = () => {
    //speichert zuerst den src path 
    const mySrc = myImage.getAttribute("src");
    if(mySrc === "ein-baum.png") {
        myImage.setAttribute("src", "ein-baum.svg");
    } else {
        myImage.setAttribute("src", "ein-baum.png");
    }
};

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h3");

function setUserName() {
    const myName = prompt("Please enter your name.");
    //das ist eine api. es speichert ein datenitem und nennt es "name"
    if (myName === null) {
        setUserName();
    }
    else{
    localStorage.setItem("name", myName);
    myHeading.textContent = `Hallo ${myName}, schön dass du dich für Bäume interessierst`;
    }
}

//check ob die daten namens "name" existieren
/*if (!localStorage.getItem("name")) {
    setUserName(); //falls nicht erfrage daten
  } else {
    // sonst hat der user es in einem früheren setting angegeben
    const storedName = localStorage.getItem("name");
    myHeading.textContent = `Hallo ${storedName}, schön dass du dich für Bäume interessierst`;
};
*/

myButton.onclick = () => {
    setUserName();
};