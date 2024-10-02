function berekenInhoud(lengte, hoogte, diepte) {
    return lengte * hoogte * diepte;
}

let kubusInhoud = berekenInhoud(10, 5, 10);
console.log(kubusInhoud);
function berekenCilinderInhoud(diameter, hoogte) {
    const radius = diameter / 2;
    const inhoud = Math.PI * Math.pow(radius, 2) * hoogte;
    return inhoud;
}

let cilinderInhoud = berekenCilinderInhoud(10, 20);
console.log(`Inhoud van de cilinder: ${cilinderInhoud.toFixed(2)}`);
function berekenLangeZijde(lengte, hoogte) {
    return Math.sqrt(Math.pow(lengte, 2) + Math.pow(hoogte, 2));
}

let langeZijde = berekenLangeZijde(3, 4);
console.log(`Lange zijde van de driehoek: ${langeZijde.toFixed(2)}`);
function berekenGemiddelde(getal1, getal2, getal3, getal4, getal5, getal6, getal7) {
    const som = getal1 + getal2 + getal3 + getal4 + getal5 + getal6 + getal7;
    return som / 7;
}

let gemiddelde = berekenGemiddelde(10, 15, 20, 25, 30, 35, 40);
console.log(`Gemiddelde van de getallen: ${gemiddelde}`);
