/* 

Strumenti:
Loop
If / Else If / Else
math.random
eventListener
Array

*/
//Elementi da utilizzare
const emailForm = document.querySelector(".login_container")
const login = document.getElementById("login_btn");
const reset = document.getElementById("reset");
const granted = `<h1 class="text_light success">ACCESS GRANTED</h1>`;
const denied = `<h1 class="text_red fail">ACCESS DENIED</h1>`;


//Generare un array di email
const emails = [
    'boolean1@gmail.com',
    'boolean2@gmail.com',
    'boolean3@gmail.com',
    'boolean4@gmail.com',
    'boolean5@gmail.com',
]


//Assegnare al bottone login un eventListener

login.addEventListener('click', function () {

    //Far confrontare email input dalle email del array
    let userEmail = document.getElementById("email").value
    const access = emails.includes(userEmail);

    //Se non e uguale, far uscire un Alert che l'email e invalido
    //Se e uguale ad uno delle email far uscire un Alert che l'email e valido
    access ? emailForm.insertAdjacentHTML("beforebegin", granted) : emailForm.insertAdjacentHTML("beforebegin", denied)


})


reset.addEventListener('click', function () {
    const result = document.querySelector('h1');
    result.remove();

})

//Assegnare al bottone ROLL DICE una formula Math.random a elemento User e elemento PC
const diceRoll = document.getElementById("roll_btn");
diceRoll.addEventListener('click', function () {
    document.getElementById("user_number").innerHTML = `User rolls:` +
        (Math.floor(Math.random() * 6) + 1);
    document.getElementById("pc_number").innerHTML = `PC rolls:` +
        (Math.floor(Math.random() * 6) + 1);

})
//Far confrontare i due valori
//Se User > di PC mostrare CONGRATULATIONS YOU WIN!
//Se PC > User mostrare YOU LOST...
