import * as personne from './clients.js'

// Salles du garage
class Lieux {
    constructor(nom, personnes) {
        this.nom = nom;
        this.personnes = [];
    }
}

let bureau = new Lieux("Bureau", []);
let caisse = new Lieux("Caisse", []);

// Salle d'attente
let attente = new Lieux("Salle d'attente");
attente.personnes = [personne.marcus, personne.julien, personne.lea, personne.serge, personne.leo]

console.log(`Voici les clients présents dans la salle d'attente :`);
console.table(attente.personnes)


let garage =  [attente, bureau, caisse];


// Qu'est-ce qui se passe dans le bureau?
// let i=0
// for (i; i < clients.length ; i++) {

// }


export {Lieux, attente, bureau, caisse, garage}