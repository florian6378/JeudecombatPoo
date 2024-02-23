// Partie 1 : Les guerriers

// Définition de la classe Warrior avec ses propriétés et méthodes

class Warrior {
    constructor(name, power, life) {
        this.name = name;
        this.power = power;
        this.life = life;
    }


    // Méthode pour attaquer un autre guerrier
    attack(opponent) {
        opponent.life -= this.power;
    }


     // Méthode pour vérifier si le guerrier est en vie
    isAlive() {
        return this.life > 0;
    }
}

// Partie 2 : Armes

// Sous-classes qui héritent de Warrior avec des attaques spécifiques

class WarriorAxe extends Warrior {
    constructor(name, power, life) {
        super(name, power, life);
    }


    // Redéfinition de la méthode attack pour l'arme de hache
    attack(opponent) {
        if (opponent instanceof WarriorSword) {
            super.attack(opponent);
            super.attack(opponent); // double damage
        } else {
            super.attack(opponent);
        }
    }
}

class WarriorSword extends Warrior {
    constructor(name, power, life) {
        super(name, power, life);
    }


    // Redéfinition de la méthode attack pour l'arme d'épée
    attack(opponent) {
        if (opponent instanceof WarriorSpear) {
            super.attack(opponent);
            super.attack(opponent); // double damage
        } else {
            super.attack(opponent);
        }
    }
}

class WarriorSpear extends Warrior {
    constructor(name, power, life) {
        super(name, power, life);
    }

// Redéfinition de la méthode attack pour l'arme de lance
    attack(opponent) {
        if (opponent instanceof WarriorAxe) {
            super.attack(opponent);
            super.attack(opponent); // double damage
        } else {
            super.attack(opponent);
        }
    }
}

// Partie 3 : Bataille

// Ajout d'un écouteur d'événements sur le bouton de démarrage

document.getElementById('startBtn').addEventListener('click', startGame);

// Fonction pour démarrer la partie

function startGame() {

    // Création des guerriers avec leurs armes et leurs statistiques
    const warrior1 = new WarriorAxe('Axe Warrior', 10, 100);
    const warrior2 = new WarriorSword('Sword Warrior', 8, 120);

    console.log("Début de la partie !");
    console.log("Guerrier 1:", warrior1);
    console.log("Guerrier 2:", warrior2);

    const battleLog = document.getElementById('battleLog');
    battleLog.innerHTML = ''; // Efface le journal de bataille précédent
    

    // Boucle de bataille jusqu'à ce qu'un guerrier meurt

    while (warrior1.isAlive() && warrior2.isAlive()) {
        warrior1.attack(warrior2);
        warrior2.attack(warrior1);

        logBattle(warrior1, warrior2, battleLog);
    }

// Affichage du résultat de la bataille

    if (!warrior1.isAlive() && !warrior2.isAlive()) {
        console.log("C'est une égalité !");
        battleLog.innerHTML += "<p>It's a draw</p>";
    } else if (!warrior1.isAlive()) {
        console.log(warrior2.name + " remporte la victoire !");
        battleLog.innerHTML += `<p>${warrior2.name} wins</p>`;
    } else {
        console.log(warrior1.name + " remporte la victoire !");
        battleLog.innerHTML += `<p>${warrior1.name} wins</p>`;
    }
}

// Fonction pour enregistrer les détails de chaque tour de bataille

function logBattle(warrior1, warrior2, battleLog) {
    battleLog.innerHTML += `<p>${warrior1.name} attacks ${warrior2.name}. ${warrior2.name}'s life: ${warrior2.life}. ${warrior2.name} attacks ${warrior1.name}. ${warrior1.name}'s life: ${warrior1.life}</p>`;
    console.log(`${warrior1.name} attaque ${warrior2.name}. La vie de ${warrior2.name}: ${warrior2.life}. ${warrior2.name} riposte. La vie de ${warrior1.name}: ${warrior1.life}`);
}
