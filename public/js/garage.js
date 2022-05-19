import * as personne from './clients.js'

// EL patrone
let patron = {
    nom : "BOSS", 
    argent : 0,
}

// Salles du garage
class Lieux {
    constructor(nom, personnes) {
        this.nom = nom;
        this.personnes = [];
    }
}


// Caisse
let caisse = new Lieux("Caisse", []);

// Bureau
let bureau = new Lieux("Bureau", []);
bureau.personnes = [patron]
console.table(`${patron.nom} est dans son ${bureau.nom}.`)

// Salle d'attente
let attente = new Lieux("Salle d'attente");
attente.personnes = [personne.marcus, personne.julien, personne.lea, personne.serge, personne.leo]

console.log(`Voici les clients présents dans la salle d'attente :`);
console.table(attente.personnes)

// Grille des devis
class Devis {
    constructor(probleme, pieces, prix) {
        this.probleme = probleme;
        this.pieces = pieces;
        this.prix = prix;
    }
}

let rouleur = new Devis("rouleur", "rouleur neuf", 45);
let pneu = new Devis("pneu crevé", "pneu neuf", 50);
let feu = new Devis("feu avant cassé", "feu neuf", 60);
let moteur = new Devis("moteur en panne", "moteur neuf", 800);
let huile = new Devis("huile à moteur vide", "huile neuf", 100);

let pieces = [rouleur, pneu, feu, moteur, huile]


// Qu'est-ce qui se passe dans le bureau?
let i=0
for (i; i < attente.personnes.length ; i++) {
    // Le client rentre dans le bureau
    bureau.personnes.unshift(attente.personnes[i]);
    console.log(`${attente.personnes[i].nom} est rentré dans le bureau.`)
    // Le client est sorti de la salle d'attente
    attente.personnes.splice(0,1);
    console.log(`Il reste ces personnes dans la salle d'attente :`)
    console.table(attente.personnes);
    // Le client reçoit un devis 
    bureau.personnes[0].devis = pieces[i]
    // Le client donne 45€ au patron
    bureau.personnes[0].argent -= 45;
    console.log(`${bureau.personnes[0].nom} a donné 45€ pour le devis, il lui reste ${bureau.personnes[0].argent}€.`)
    // Le patron reçoit 45€
    patron.argent += 45;
    console.log(`Argent du patron après devis : ${patron.argent}€.`);
    // Le client sort du bureau et va à la caisse
    caisse.personnes.push(bureau.personnes[0])
    bureau.personnes.shift();
    // Il reste le patron dans le bureau (normalement)
    console.log(`Il reste dans le bureau : ${bureau.personnes[0].nom}`)
    i--;
}

console.log(`Ces personnes attendent à la CAISSE :`)
console.table(caisse.personnes)

console.table(personne.marcus.devis)
console.table(personne.julien.devis)
console.table(personne.lea.devis)
console.table(personne.serge.devis)
console.table(personne.leo.devis)



export {Lieux, caisse, attente, bureau, Devis, pieces}