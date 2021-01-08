//Consts
var age = 17;
const isFemale = true;
const driverStatus = "bop";
const name = "Sarah"
const totalAmaunt = 29
//leeftijdcontrole

if (age > 17) {
    console.log("Jij mag binnen komen")
    
}
else { console.log("jij mag er niet in, buiten blijven aub")};
//ladies night


if (isFemale) {
    console.log("Fijne avond mevrouw")
}
else {console.log("Jij mag er niet in, buiten blijven aub")};

//veilig thuiskomen

if (driverStatus === "bob") { 
    console.log("Jij bobt")
    
} else {
    console.log("Jij hebt teveel gedronken")
    
};

/*Comparison && Logical Operators

Deel 1 */

if (age >= 18 && age <= 25) {
    console.log("Je krijgt 50% korting!")
} else {
    console.log("Je krijgt helaas geen korting")
}

//Deel 2
if (name === "Bram" || name === "Sarah") {
    console.log("Jij verdient een biertje op deze feestelijke dag")
    
} else {
    console.log("Helaas, probeer het morgen opnieuw!")
}
// Deel 3
if (totalAmaunt >= 100){
console.log("We hebben een winnaar...Champagne!!")
}
if (totalAmaunt >= 50 && totalAmaunt < 100){
    console.log("We hebben een stel macho's...Gratis Nachos!!")
    }
    if (totalAmaunt >= 25 && totalAmaunt < 50){
        console.log("They are very good..those Bitterballs")
        }
     if (totalAmaunt < 25) {
        console.log("Helaas, bestel morgen meer!")
     }