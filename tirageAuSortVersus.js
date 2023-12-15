// CREATION D'UNE LISTE DE NOMS
var participants = [





























    'Lola Pezant Tiktok', 'Enzo Desille Threads'
























];

// ON CREE LA VARIABLE QUI VA CONTENIR LE TIMER
var defilement;
var countdown; // Variable for countdown timer
var countdownValue = 90; // Initial countdown value in seconds

function departDefilement() {
    // RELANCE LA FONCTION TIRAGE DEFILEMENT TOUTE LES 0.1 SECONDE
    defilement = setInterval(tirageDefilement, 100); // Change interval to 100 milliseconds
    countdown = setInterval(updateCountdown, 1000); // Update countdown every 1 second
    // DESACTIVE LE BOUTON LANCER
    document.getElementById("demarrer").disabled = true;
}

function tirageDefilement() {
    var participant = participants[Math.floor(Math.random() * participants.length)];
    document.getElementById("versus").innerHTML = participant;
}

function stopDefilement() {
    // PERMET DE STOPPER LE TIMER PRECEDEMENT LANCE - ON MET LA VARIABLE ET NON LA FONCTION ENTRE PARENTHESE
    clearInterval(defilement);
    clearInterval(countdown);

    // Récupérer le gagnant
    var winner = participants[Math.floor(Math.random() * participants.length)];

    // Masquer le versus en le vidant
    document.getElementById("versus").innerHTML = "";

    // Afficher le gagnant
    document.getElementById("winner").innerHTML = `${winner} !`;
}

function updateCountdown() {
    document.getElementById("countdown").innerHTML = countdownValue;
    countdownValue--;

    if (countdownValue < 0) {
        clearInterval(defilement);
        clearInterval(countdown);
        stopDefilement(); // Call stopDefilement when the countdown reaches zero
    }
}
