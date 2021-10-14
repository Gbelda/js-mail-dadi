/* 

Strumenti:
Loop
If / Else If / Else
math.random
eventListener
Array

*/
//Elementi da utilizzare
var login = document.getElementById("login_btn")

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
    const userEmail = document.getElementById("email").value
    const accessOk = emails.includes(userEmail.tolowercase)

    if (accessOk == true) {
        alert("access ok")
    } else {
        alert("access denied")
    }
})


//Far confrontare email input dalle email del array
//Se non e uguale, far uscire un Alert che l'email e invalido
//Se e uguale ad uno delle email del array allora far accedere al gioco
//Assegnare al bottone ROLL DICE una formula Math.random a elemento User e elemento PC
//Far confrontare i due valori
//Se User > di PC mostrare CONGRATULATIONS YOU WIN!
//Se PC > User mostrare YOU LOST...
