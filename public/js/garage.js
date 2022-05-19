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

import {Devis, rouleur, pneu,feu, moteur, huile, pieces} from './fin.js'

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
    console.log(`${bureau.personnes[0].nom} a reçu un devis.`)
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
    console.table(bureau.personnes)
    i--;
}

console.log(caisse.personnes)



export {Lieux, attente, bureau, caisse}