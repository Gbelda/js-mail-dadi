/* 

Strumenti:
Loop
If / Else If / Else
math.random
eventListener
Array

*/



//Generare gli elementi da utilizzare

//Generare un array di email
const emails = [
    'boolean1@gmail.com',
    'boolean2@gmail.com',
    'boolean3@gmail.com',
    'boolean4@gmail.com',
    'boolean5@gmail.com',
]

for (let n = 0; n < emails.length; n++) {
    const userEmail = emails[n];
    console.log(userEmail);
}



//Assegnare al bottone login un eventListener
//Far confrontare email input dalle email del array
//Se non e uguale, far uscire un Alert che l'email e invalido
//Se e uguale ad uno delle email del array allora far accedere al gioco
//Assegnare al bottone ROLL DICE una formula Math.random a elemento User e elemento PC
//Far confrontare i due valori
//Se User > di PC mostrare CONGRATULATIONS YOU WIN!
//Se PC > User mostrare YOU LOST...
