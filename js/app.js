
const btn = document.getElementById("btn");
const body = document.getElementById("body");
const colorCode = document.getElementById("color-code");


const getColor = () => {

    const randomNumber = Math.floor(Math.random() * 16777215);
    //console.log(randomNumber); // random number
    const randomCode = "#" + randomNumber.toString(16);
    //console.log(randomCode); // random code for color
    body.style.backgroundColor = randomCode;
    colorCode.innerHTML = randomCode;
    //copy to clipboard
    navigator.clipboard.writeText(randomCode);


}

btn.addEventListener("click", getColor)

getColor() // initial call