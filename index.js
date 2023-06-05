import { add } from "../functions.js";



const appSettings = {
    databaseURL: "https://playground-e4c0c-default-rtdb.europe-west1.firebasedatabase.app/"
}

const inputElement = document.getElementById('input-field');
const buttonElement = document.getElementById('add-button');

buttonElement.addEventListener('click', function() {
    console.log(inputElement.value);
    console.log(add(2, 3));
});