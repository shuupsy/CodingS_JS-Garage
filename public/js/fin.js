import * as personne from './clients.js'

import * as garage from './garage.js'


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




export{Devis, rouleur,pneu, feu, moteur, huile, pieces}