// Clients
class Clients {
    constructor(nom, vehicule, argent, probleme, facture, devis) {
        this.nom = nom;
        this.vehicule = vehicule;
        this.argent = argent;
        this.probleme = probleme;
        this.facture = facture;
        this.devis = devis;
    }
}

// Description des clients
let marcus = new Clients("Marcus", "BMW", 200, "rouleur");
let julien = new Clients("Julien", "Peugeot", 200, "pneu crevé");
let lea = new Clients("Léa", "Renault", 300, "feu avant cassé");
let serge = new Clients("Serge", "Mercedes", 500, "moteur en panne");
let leo = new Clients("Léo", "Audi", 600, "huile à moteur vide");

let clients = [marcus, julien, lea, serge, leo]

// Export
export {
    Clients,
    clients,
    marcus,
    julien,
    lea,
    serge,
    leo
}