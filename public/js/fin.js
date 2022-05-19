import * as personne from './clients.js'

import {Lieux,caisse, Devis, pieces} from './garage.js'


// Payer la facture
let i = 0;
for (i; i< caisse.personnes.length ; i++){
    if (caisse.personnes[i].argent < caisse.personnes[i].devis.prix ) {
        console.log(`La voiture de ${caisse.personnes[i]} part à la casse. TRISTE.`)
        // Partir
        console.log(`${caisse.personnes[i].nom} est parti du garage A PIEDS et avec ${caisse.personnes[i].argent}€ dans son porte-monnaie.`)
        caisse.personnes[i].splice(0,1)
        i--;
    } else {
        // Payer la facture
        caisse.personnes[i].argent -= caisse.personnes[i].devis.prix;
        console.log(`${caisse.personnes[i].nom} a dépensé ${caisse.personnes[i].devis.prix} pour réparer sa voiture. Il lui reste ${caisse.personnes[i].argent}.`)
        caisse.personnes[i].probleme = "";
        // Partir
        console.log(`${caisse.personnes[i].nom} est parti(e) du garage avec une VOITURE REPAREE.`)
        caisse.personnes.splice(0,1)
        i--;
    }
}



