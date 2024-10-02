// Opgave 1: Berekening van de inhoud van een rechthoekige prisma
function prismaInhoud(lengte, hoogte, breedte) {
    let inhoud = lengte * hoogte * breedte;
    return inhoud;
}

let prisma = prismaInhoud(10, 5, 6); // Lengte, hoogte en breedte
console.log("Inhoud van de prisma:", prisma);

// Opgave 2: Berekening van de inhoud van een cilinder
function cylinderInhoud(diameter, hoogte) {
    let straal = diameter / 2; // Straal is de helft van de diameter
    let inhoud = Math.PI * Math.pow(straal, 2) * hoogte; // Formule voor cilinderinhoud: π * r^2 * h
    return inhoud;
}

let cylinder = cylinderInhoud(10, 5); // Diameter en hoogte
console.log("Inhoud van de cilinder:", cylinder);
function langeZijde(lengte, hoogte) {
    return Math.sqrt(lengte * lengte + hoogte * hoogte);
}

let zijde = langeZijde(3, 4); // Voorbeeld met een lengte van 3 en hoogte van 4
console.log("Lange zijde van de driehoek:", zijde);
function gemiddelde(a, b, c, d, e, f, g) {
    return (a + b + c + d + e + f + g) / 7;
}

let gem = gemiddelde(10, 20, 30, 40, 50, 60, 70); // Voorbeeld met 7 getallen
console.log("Gemiddelde van de getallen:", gem);
