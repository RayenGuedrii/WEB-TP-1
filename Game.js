function startGame() {
    alert("Bienvenue dans le jeu du chiffre caché !");

    while (true) {
        let difficulty = chooseDifficulty();
        let {maxAttempts, range}  = getGameSettings(difficulty);
        playRound(maxAttempts, range);
        if (!confirm("Voulez-vous rejouer ?")) break;
    }
    alert("Merci d'avoir joué !");
}

function chooseDifficulty() {
    let difficulty;
    while (true) {
        difficulty = prompt("Choisissez un niveau de difficulté : Facile, Intermédiaire, Difficile").toLowerCase();
        if (["facile", "intermédiaire", "difficile"].includes(difficulty)) break;
        alert("Niveau invalide, veuillez choisir parmi Facile, Intermédiaire ou Difficile.");
    }
    return difficulty; 
}

function getGameSettings(difficulty) {
    switch (difficulty) {
        case "facile": return { maxAttempts: 10, range: 50 };
        case "intermédiaire": return { maxAttempts: 7, range: 100 };
        case "difficile": return { maxAttempts: 5, range: 200 };
    }
}

function playRound(maxAttempts, range) {
    let targetNumber = Math.floor(Math.random() * range) + 1;
    let attempts = 0;
    let guess;

    alert(`Un nombre entre 1 et ${range} a été généré. Vous avez ${maxAttempts} tentatives.`);

    while (attempts < maxAttempts) {
        guess = parseInt(prompt(`Tentative ${attempts + 1}/${maxAttempts} : Entrez un nombre entre 1 et ${range}`), 10);
        if (isNaN(guess) || guess < 1 || guess > range) {
            alert("Veuillez entrer un nombre valide dans la plage spécifiée.");
            continue;
        }

        attempts++;

        if (guess === targetNumber) {
            alert(`Félicitations ! Vous avez trouvé le nombre ${targetNumber} en ${attempts} tentatives.`);
            return;
        } else if (guess < targetNumber) {
            alert("Trop bas ! Essayez encore.");
        } else {
            alert("Trop haut ! Essayez encore.");
        }
    }

    alert(`Dommage ! Le nombre caché était ${targetNumber}.`);
}

