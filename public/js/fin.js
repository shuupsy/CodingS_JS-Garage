import * as personne from './clients.js'

import {
    patron,
    Lieux,
    caisse,
    Devis,
    pieces
} from './garage.js'



// Payer la facture
let i = 0;
for (i; i < caisse.personnes.length; i++) {
    if (caisse.personnes[i].argent < caisse.personnes[i].devis.prix) {
        // Pas assez d'argent
        console.log(`${caisse.personnes[i].nom}  n'a pas assez d'argent pour acheter la pièce de rechange. Sa voiture part à la casse. TRISTE. Mais il lui reste ${caisse.personnes[i].argent}€ dans son porte-monnaie.`);
        // Changement propriétés
        caisse.personnes[i].voiture = "";
        caisse.personnes[i].probleme = "Cherche véhicule";
        caisse.personnes[i].devis = "";
        // Partir
        caisse.personnes.splice(0, 1)
        i--;
    } else {
        // Payer la facture
        caisse.personnes[i].argent -= caisse.personnes[i].devis.prix;
        patron.argent += caisse.personnes[i].devis.prix;
        console.log(`${caisse.personnes[i].nom} a dépensé ${caisse.personnes[i].devis.prix} pour réparer sa voiture. Il lui reste ${caisse.personnes[i].argent}.`)
        // Changement propriétés
        caisse.personnes[i].facture = "payée";
        caisse.personnes[i].probleme = "";
        caisse.personnes[i].devis = "";
        // Partir
        console.log(`${caisse.personnes[i].nom} est parti(e) du garage avec une VOITURE REPAREE.`)
        caisse.personnes.splice(0, 1)
        i--;
    }
}

// Récap des personnes
console.log("Voici le récap de nos clients, à la fin:")
console.table(personne.marcus)
console.table(personne.julien)
console.table(personne.lea)
console.table(personne.serge)
console.table(personne.leo)

// Recettes du garage
console.log(`Le patron du garage a gagné ${patron.argent}€.`)