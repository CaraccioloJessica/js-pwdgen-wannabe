// PASSWORD GENERATOR
// CHIEDERE NOME ALL'UTENTE
let nome = prompt('Inserisci il tuo nome');

console.log(nome);

// CHIEDERE COGNOME ALL'UTENTE
let cognome = prompt('Inserisci il tuo cognome');

console.log(cognome);

// CHIEDERE COLORE PREFERTITO UTENTE
let colore = prompt('Inserisci il tuo colore preferito');

console.log(colore);

// VALORE FISSO
const numeroFisso = 21;

// OUTPUT (PASSWORD GENERATA)
document.getElementById('password').innerHTML = `La tua password è: ${nome}${cognome}${colore}${numeroFisso}`;