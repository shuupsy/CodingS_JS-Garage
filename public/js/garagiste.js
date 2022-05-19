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


let garage =  [attente, bureau, caisse];


// Qu'est-ce qui se passe dans le bureau?
let i=0
for (i; i < attente.personnes.length ; i++) {
    bureau.personnes.push(attente.personnes[i])
}


export {Lieux, attente, bureau, caisse, garage}