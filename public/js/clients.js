// Clients
class Clients {
    constructor(nom, vehicule, argent, probleme, facture, goTo, pay) {
        this.nom = nom;
        this.vehicule = vehicule;
        this.argent = argent;
        this.probleme = probleme;
        this.facture = facture;
        this.goTo = goTo;
        this.pay = pay;
    }
}

// Description des clients
let marcus = new Clients("Marcus", "BMW", 200, "rouleur");
let julien = new Clients("Julien", "Peugeot", 200, "pneu crevé");
let lea = new Clients("Léa", "Renault", 300, "feu avant cassé");
let serge = new Clients("Serge", "Mercedes", 500, "moteur en panne");
let leo = new Clients("Léo", "Audi", 600, "huile à moteur vide");



// Export
export {Clients, marcus, julien, lea, serge, leo}