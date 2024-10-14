const huidigeDag = "maandag"; // Dit kan elke dag zijn

if (huidigeDag === "maandag" || huidigeDag === "dinsdag" || huidigeDag === "woensdag" || huidigeDag === "donderdag" || huidigeDag === "vrijdag") {
    console.log("Ik moet naar school");
} else if (huidigeDag === "zaterdag" || huidigeDag === "zondag") {
    console.log("Lekker uitslapen!");
} else {
    console.log("Ongeldige dag!");
}
