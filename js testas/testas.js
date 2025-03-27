// 1.1 Sukurkite funkciją, kuri paverstų eurus į dolerius.
console.log("1.1");

function eurDol(valiutosKiekis) {
    const kursas = 1/0.93;
    let atsakymas = valiutosKiekis*kursas;
    console.log (atsakymas + "$")
}


eurDol(50)

//1.2 Sugeneruokite atsitiktinį skaičių (eurų sumą) nuo 1 iki 1000.
console.log("1.2");

let atsitiktinis = Math.floor(Math.random()*1000) +1;
console.log (atsitiktinis + " eur.")


// 1.3 Pritaikykite savo sukurtą funkciją ir išspausdinkite atitikmenį
// doleriais.
console.log("1.3");

eurDol(atsitiktinis);

// 2.1 Sukurkite funkciją, kuri paverstų dolerius į eurus.
console.log("2.1");

function dolEur (valiutosKiekis) {
    const kursas = 0.93/1;
    let atsakymas = valiutosKiekis*kursas;
    console.log (atsakymas + " eur.")
}
dolEur (50)

// 2.2 Sugeneruokite atsitiktinį skaičių (dolerių sumą) nuo 1 iki 1000.
console.log("2.2");


let atsitiktinisDol = Math.floor(Math.random()*1000) +1;
console.log (atsitiktinisDol + " $")

//2.3 Pritaikykite savo sukurtą funkciją ir išspausdinkite atitikmenį
// eurais.
console.log("2.3");
dolEur (atsitiktinisDol);

// 3. Parašykite programą, kuri suskaičiuotų žmogaus BMI (body
// mass index), kai yra žinomas žmogaus ūgis ir svoris.
console.log("3.");

function BMI (svoris, ugis) {
    let indeksas=svoris/(ugis**2/100);
    console.log ("Jūsų KMI yra: ", (indeksas*100).toFixed(1));
}
BMI(70,180);

//4. Parašykite programą, kuri iš duoto žmogaus amžiaus metais
// pasakytų kiek tai yra sekundėmis, minutėmis, valandomis,
// dienomis.
console.log("4.");

function metuSkaiciuokle (metai) {
    let amziusDienomis = 365*metai;
    let amziusValandomis = amziusDienomis * 24;
    let amziusMinutemis = amziusValandomis * 60;
    let amziusSekundemis = amziusMinutemis * 60;
    console.log (`Jeigu jums yra ${metai} metai, tai reiškia, kad jums yra:
        ${amziusDienomis} dienos,
        ${amziusValandomis} valandos,
        ${amziusMinutemis} minutės,
        ${amziusSekundemis} sekundės.`)
}

metuSkaiciuokle(25)

//5. Parašykite programą, kuri konvertuos termometro
// duomenis iš Farenheito į Celsijų, ir atvirkščiai.
console.log("5.");

function convert(laipsniai,tipas) {

    let atsakymas;

    if(tipas.includes("C") && typeof laipsniai == 'number' || tipas.includes ("c") && typeof laipsniai == 'number' ) {
        atsakymas = (laipsniai * 1.8) + 32;
    } else if (tipas.includes ("F")  && typeof laipsniai == 'number' || tipas.includes ("f") && typeof laipsniai == 'number') {
       atsakymas = (laipsniai - 32) * 5 / 9;
    } else {
        atsakymas = "Klaida. Blogai įvesti laipsniai arba tipas."
    }
    

    console.log (`Pateikti duomenys: 
        ${laipsniai}${tipas}. Perkonvertavus gauname: ${atsakymas}`);
}
convert (25, "f")

// //6. Sukurkite kodą, kuris išspausdins į konsolę
// 1-2-3-4-5-6-7-8-9-10 vienoje eilutėje. Prieš vienetą ir po
// dešimties neturėtų būti brūkšniuko.
console.log("6.");


function spausdinam() {
    let atsakymas = "";

    for ( let i=1; i<=10; i++) {
        if (i<10){
            atsakymas += i+ "-";
            } else {
            atsakymas += i;
            }
    }
    console.log (atsakymas)
};

spausdinam()

// 7. Panaudokite for ciklus, kad sukurtumėte tokį vaizdą konsolėje.

// *

// * *

// * * *

// * * * *

// * * * * *

console.log("7.");


for (let i = 1; i <= 5; i++) {
    let eilute = ''; 
    for (let g = 1; g <= i; g++) {
        if (g === i) {
            eilute += '*'; 
        } else {
            eilute += '* ';  
        }
    }
    console.log(eilute);
}

//8. Parašykite kodą, kuris apskaičiuos kiek liko dienų iki Kalėdų.
console.log("8.");

let kaleduData = new Date('2025-12-25'); 
let siandienData = new Date('2025-03-27');

let skirtumas = kaleduData - siandienData; 
let likoDienu = Math.ceil(skirtumas / (1000 * 3600 * 24)); 

console.log(`Iki Kalėdų liko ${likoDienu} dienos.`);

// //9.Parašykite kodą, kuris apjungia masyvo duomenis į vieną
// tekstinę eilutę. Turėtumėte gauti tokį rezultatą:
// Tomas,Dainius,Paulius,Jonas
// Tomas+Dainius+Paulius+Jonas


let vardai = ["Tomas", "Dainius", "Paulius", "Jonas"]

let kablelis = "";
let pliusas = "";

for (let i = 0; i < vardai.length; i++) {
    if (i < vardai.length - 1) {
        kablelis += vardai[i] + ",";
        pliusas += vardai[i] + "+";
    } else {
        kablelis += vardai[i];
        pliusas += vardai[i];
    }
}


console.log(kablelis);
console.log(pliusas);

// 10. Parašykite kodą, kuris sugeneruos dvylikos simbolių
// slaptažodį. Slaptažodyje privalo būti bent po vieną: didžioji raidė,
// mažoji raidė, skaičius, specialusis simbolis. Visi slaptažodžio
// simboliai privalo būti atsitiktiniai ir atsitiktine tvarka.








