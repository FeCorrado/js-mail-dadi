
/* Email check */

// Lista e-mail
const allEmail = [`corrado@gmail.com`, `ferra@gmail.com`, `corrado@gmail.com`, `emailbellissima@gmail.com`, `corradoferra@gmail.com`];
let emailPresente = false;

// Richiesta e-mail
const emailUtente = prompt(`Inserisci la tua e-mail`);

// controllo e-mail
for (let i = 0; i < allEmail.length; i++) {
    if(emailUtente.toLowerCase() === allEmail[i].toLowerCase()) {
        emailPresente = true;
    }
}

// conseguenze

if (emailPresente) {
    console.log(`Welcome Back`)
} else {
    console.log(`Maybe you have to register`)
}



/* Dadi */

// Dadi random pc / utente
const userNumber = Math.floor(Math.random() * 6) + 1;
console.log(`Il tuo numero:` + userNumber);
const pcNumber = Math.floor(Math.random() * 6) + 1;
console.log(`Il numero del tuo avversario:` + pcNumber);

// Comparazione
if(userNumber > pcNumber){
    console.log(`Ha vinto`);
}
else {
    console.log(`Hai perso`);
}


