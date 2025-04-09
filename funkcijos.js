// 1uzd
console.log ("\n------ 1 uzd \n")

function pirma () {
    console.log ("Gabrielis")
    console.log ("Kiela")
    console.log ("pakeisti profesija \n")
}

pirma();
pirma();
pirma();

console.log ("\n------ 2 uzd \n")
// Sukurkite funkciją, kuri išvestų 5 eilučių eilėraštį. Iškvieskite šią funkciją 5
// kartus.

function eilerastis () {
    console.log ("eglute skarota")
    console.log ("eglute zalia")
    console.log ("padejau granata")
    console.log ("eglutes nebera")
    console.log ("tadaaam")
}
eilerastis ();
eilerastis ();
eilerastis ();
eilerastis ();
eilerastis ();

console.log ("\n------ 3 uzd \n")
// Sukurkite tris funkcijas, kur kiekviena išvestų skirtingus tekstus. Iškvieskite
// visas tris funkcijas po vieną kartą.

function pirmasTekstas () {
    console.log ("cia yra pirmas tekstas")
};
function antrasTekstas () {
    console.log ("cia yra antras tekstas")
};
function treciasTekstas () {
    console.log ("cia yra trecias tekstas")
};

pirmasTekstas();
antrasTekstas();
treciasTekstas();

console.log ("\n------ 4 uzd \n")
// 4. Sukurkite dvi funkcijas, kur vienoje būtų viena teksto eilutė, kitoje - kita.
// Sukurkite trečią funkciją, kuri iškviestų pirmas dvi funkcijas. Iškvieskite šią
// trečiąją funkciją už visų funkcijų ribų.

function pirma () {
    console.log ("cia yra pirma eilute")
};
function antra () {
    console.log ("cia yra antra eilute")
};
function trecia () {
    pirma(),antra();
};
trecia()

console.log ("\n------ 5 uzd \n")
// 5. Sukurkite funkciją, kurios viduje sugeneruotumėte du atsitiktinius skaičius.
// Funkcijoje suskaičiuokite ir išveskite šių dviejų skaičių sumą, kartu išvedant
// ir patį atliekamą veiksmą (pvz 7 + 2 = 9). Iškvieskite šią funkciją keletą
// kartų.

function atsitiktiniai () {
   let skaicius1 = Math.floor (Math.random() * 10);
   let skaicius2 = Math.floor (Math.random() * 10);
console.log (`${skaicius1} + ${skaicius2} = ${skaicius1+skaicius2}`)
}
atsitiktiniai();
atsitiktiniai();
atsitiktiniai();

console.log ("\n------ 6 uzd \n")
// 6. Sukurkite ir iškvieskite funkciją, kurioje kintamuosiuose būtų saugoma
// informacija apie policininką (vardas, pavardė, amžius, alga, etatas,
// specializacija). Išveskite šią informaciją suformatuotai (pavyzdžiui įterpkite
// į sakinį, ar išveskite sąrašu ar pan.).

function policininkas () {
    let vardas = "Arvydas";
    let pavarde = "Arvydauskas";
    let amzius = 40;
    let alga = 1200;
    let etatas = "pilnas";
    let specializacija = "Kriminologas";
    console.log (`${vardas} yra policininkas. Jam yra ${amzius} metu, jis uzdirba ${alga} eurus ir yra ${specializacija}`)
}
policininkas ()

console.log ("\n------ 7 uzd \n")
// 7. Sukurkite funkciją, kuri išvestų 10 atsitiktinių skaičių vienoje eilutėje,
// skaičius atskiriant tarpu. Šią funkciją iškvieskite 5 kartus.

function randomai () {
    console.log (Math.floor (Math.random() * 10), Math.floor (Math.random() * 10),Math.floor (Math.random() * 10),Math.floor (Math.random() * 10),Math.floor (Math.random() * 10),Math.floor (Math.random() * 10),Math.floor (Math.random() * 10),Math.floor (Math.random() * 10),Math.floor (Math.random() * 10),Math.floor (Math.random() * 10))
} // arba cia naudoti for loopa, kad nereiktu 10 kartu rasyti atskiru skaiciu.
randomai();
randomai();
randomai();
randomai();
randomai();


console.log ("\n------ 8 uzd \n")
// 8. Sukurkite funkciją, kuri išvestų atsitiktinį skaičių. Už funkcijos ribų
// sukurkite ciklą, kurį būtų vykdomas 10 kartų. Iškvieskite sukurtą funkciją
// cikle. Turėtumėte pamatyti 10 atsitiktinių skaičių.

function randomai2 () {
    console.log (Math.floor (Math.random() * 10))
}
for (let i = 0; i < 10; i++) {
    randomai2();
}

console.log ("\n------ 9 uzd \n")
// 9. Sukurkite funkciją pasisveikinimui, šiai funkcijai per argumentus
// perduokite vardą, funkcijoje išveskite tekstą labas ir gautą vardą. Sukurkite
// kitą funkciją, kuri irgi per argumentus gautų vardą, tačiau pasakytų 'viso
// gero' ir patį vardą. Ne funkcijose susikurkite kintamąjį vardui saugoti ir
// įrašykite vardą. Iškvieskite abi funkcijas, perduodant kintamąjį joms.

function pasisveikinti (vard) {
    console.log (`labas, `, vard)
}
let vardas = "Tomas";

function atsisveikinti (vard) {
    console.log (`Viso gero,`, vard)
}
pasisveikinti (vardas)
atsisveikinti (vardas)

console.log ("\n------ 10 uzd \n")
// 10.Sukurkite funkciją, kuriai perduotumėte du skaičius. Ši funkcija turi rasti
// kuris skaičius yra didesnis ir išvesti gautą atsakymą, o jei skaičiai lygūs -
// tuomet išvesti, kad skaičiai lygūs. Iškvieskite šią funkciją keletą kartų,
// duodant skirtingus skaičius.


function skaiciai (skaicius11, skaicius22) {
    if (skaicius11>skaicius22) {
        console.log (`${skaicius11} > ${skaicius22}`)
    } else if (skaicius11<skaicius22) {
        console.log (`${skaicius11} < ${skaicius22}`)
    } else {
        console.log ("skaiciai lygus")
    }
};

skaiciai(5,7)
skaiciai(5,5)
skaiciai(8,5)

console.log ("\n------ 11 uzd \n")
// 11.Sukurkite funkciją, kuri per argumentus gautų automobilių duomenis (markė,
//     modelis, gamybos metai, darbinis tūris). Ši funkcija turėtų šiuos duomenis išvesti
//     kaip nors gražiai formatuotai. Iškvieskite šią funkciją du kartus, perduodant
//     skirtingus duomenis jai.

function auto (marke,modelis,metai,darbinis) {
    console.log ( `Sis automobilis yra ${marke} ${modelis}, jis pagamintas ${metai} ir jo darbinis turis yra ${darbinis}`)
}
let marke1 = "BMW"
let modelis1 = "e90"
let metai1 = 2005
let darbinis1 = "2.0L"

auto (marke1,modelis1,metai1,darbinis1)

let marke2 = "Audi"
let modelis2 = "RS7"
let metai2 = 2020
let darbinis2 = "4.0L"

auto (marke2,modelis2,metai2,darbinis2)


console.log ("\n------ 12 uzd \n")
// 12.Sukurkite funkciją sumai skaičiuoti, ši funkcija per argumentus turėtų gauti du
// skaičius, bei išvesti patį veiksmą kartu su atsakymu (pvz 7 + 5 = 12). Sukurkite tokias
// pačias funkcijas skirtumui, sandaugai ir dalmeniui rasti. Sukurkite dar vieną
// funkciją, kuri sugeneruotų du atsitiktinius skaičius, bei iškviestų kitas 4 funkcijas,
// perduodant joms sugeneruotus skaičius. Šią bendrąją funkciją iškvieskite keletą
// kartų.

function suma (pirmas,antras) {
    console.log (`${pirmas} + ${antras} = ${pirmas + antras}`)
};
function skirtumas (pirmas,antras) {
    console.log (`${pirmas} - ${antras} = ${pirmas - antras}`)
};
function sandauga (pirmas,antras) {
    console.log (`${pirmas} * ${antras} = ${pirmas * antras}`)
};
function dalmuo (pirmas,antras) {
    console.log (`${pirmas} / ${antras} = ${pirmas / antras}`)
};

function atsitiktiniai () {
    let skaicius1 = Math.floor ((Math.random() * 10) + 1);
    let skaicius2 = Math.floor ((Math.random() * 10) + 1);
    suma(skaicius1,skaicius2),skirtumas(skaicius1,skaicius2),sandauga(skaicius1,skaicius2),dalmuo(skaicius1,skaicius2)
};
atsitiktiniai()


console.log ("\n------ 13 uzd \n")
// 13.Susikurkite funkciją, kuri per argumentus priimtų žodžių masyvą. Funkcijoje
// išveskite visus žodžius iš masyvo atskirose eilutėse, nurodant žodžio ilgį
// (simbolių kiekį). Už funkcijos ribų susikurkite žodžių masyvą ir užpildykite jį
// duomenimis. Iškvieskite sukurtą funkciją perduodant turimą masyvą.

function zodziai (masyvas) {
    for (const zodis of masyvas) {
        console.log (zodis, zodis.length)
    }
}
let zodziuMasyvas = ["Labas","Ate","Pele","Mygtukas"]

zodziai(zodziuMasyvas)


console.log ("\n------ 14 uzd \n")
// 14.Susikurkite funkciją, kuri per argumentus priimtų skaičių masyvą. Funkcija
// turėtų atspausdinti visus skaičius, šalia jų išvedant to skaičiaus kvadratą ir jį
// padalintą iš dviejų. Už funkcijos ribų susikurkite du skaičių masyvus ir
// užpildykite jį duomenimis. Iškvieskite funkciją du kartus, kiekvieną kartą
// perduodant skirtingą turimą masyvą.

function priemimas (skaiciuSarasas) {
    for (const skaicius of skaiciuSarasas) {
        console.log ("skaicius: ",skaicius, "skaiciaus kvadratas: ", skaicius * skaicius, "skaiciaus kvadratas padalintas is 2: ", (skaicius**2)/2)
    }
} 
let skaiciuMasyvas1= [1,5,7,6,2]
let skaiciuMasyvas2= [2,10,8,5,1]

priemimas (skaiciuMasyvas1);
console.log ("")
priemimas (skaiciuMasyvas2);

console.log ("\n------ 15 uzd \n")
// 15.Susikurkite funkciją, kuri per argumentus priimtų pažymių masyvą, bei
// studento vardą su pavarde. Funkcija turėtų išvesti studento vardą ir
// pavardę, jo pažymius. Taip pat, suskaičiuoti vidurkį, bei jį išvesti. Už
// funkcijos ribų susikurkite reikiamus kintamuosius ir masyvus, arba
// objektus studentų pažymiams saugoti ir užpildykite juos duomenimis.
// Iškvieskite šią funkciją perduodant visus reikalingus duomenis.

function pazymiai (pazymiuMasyvas, studentoVardas, studentoPavarde) {
    console.log (studentoVardas,studentoPavarde,pazymiuMasyvas);
    console.log ("Studento pazymiu vidurkis: ", (pazymiuMasyvas.reduce ((a, b) => a + b))/pazymiuMasyvas.length)
}

let vardas2 = "Andrius";
let pavarde2 = "Andrijanovas";
let pazymiai2 = [4,5,8,10,7];

pazymiai (pazymiai2,vardas2,pavarde2)

console.log ("\n------ 16 uzd \n")
// 16.Susikurkite funkciją, kuri per argumentus priimtų skaičių masyvą. Funkcija
// turėtų rasti didžiausią skaičių iš masyvo bei išvesti gautą atsakymus. Taip pat,
// susikurkite funkciją, kuri per argumentus priimtų masyvą ir į jį sugeneruotų
// pasirinktą kiekį atsitiktinių skaičių. Susikurkite tris tuščius masyvus.
// Iškvieskite atsitiktinių skaičių generavimo funkciją tris kartus, kiekvieną kartą
// perduodant funkcijai vis kitą masyvą. Kai duomenys bus užpildyti,
// masyvuose esančią informaciją išsiveskite norimu būdu (per console.log arba
// per dar atskirą funkciją). Tuomet kvieskite didžiausio skaičiaus paieškos
// funkciją tris kartus, kiekvieną kartą perduodant skirtingą masyvą į ją.


function didziausioPaieska (skaiciuMasyvas3) {
    let max = skaiciuMasyvas3 [0];
    for (const skaicius of skaiciuMasyvas3) {
        if (skaicius > max) {
              max = skaicius; 
            }
        }
     console.log ("Didziausias skaicius yra: ", max)
    }
    let skaiciai1 = [1,55,65,2,10]
    console.log ("skaiciai: ", skaiciai1)
    didziausioPaieska(skaiciai1)

console.log ("\n------ 17 uzd \n")
// 17.Susikurkite funkciją, kuri grąžintų bet kokį jūsų norimą sakinį. Iškvieskite
// šią funkciją ir išspausdinkite gautus rezultatus.

function sakinys () {
    return "Cia yra mano norimas sakinys"
}

console.log (sakinys())
    

console.log ("\n------ 18 uzd \n")
// 18.Susikurkite funkciją, kuri grąžintų atsitiktinai sugeneruotą skaičių.
// Iškvieskite šią funkciją kelis kartus ir gautus atsakymus išveskite kokiu
// norite būdu.

function atsitiktinis () {
    return Math.floor (Math.random () * 10) + 1 ;
}
console.log (atsitiktinis ());
console.log (atsitiktinis ());


console.log ("\n------ 19 uzd \n")
// 19.Susikurkite funkciją, kuri per argumentus priimtų studento vardą ir vidurkį.
// Ši funkcija turėtų sugeneruoti iš to sakinį (pvz Studentas Tomas turi vidurkį
// 8.7) ir tai grąžinti kaip atsakymą. Iškvieskite šią funkciją bent porą kartų,
// perduodant vis skirtingus duomenis. Gautus atsakymus išveskite.

function studentauskas (vardas, vidurkis) {
    return console.log (` Studentas ${vardas} turi vidurki: ${vidurkis}`)
}

studentauskas("Justas",9)

studentauskas("Tomas",7.5)

console.log ("\n------ 20 uzd \n")
// 20.Susikurkite funkciją, kuri per argumentus gautų skaičių. Ji turėtų surasti
// duoto skaičiaus mažiausią daliklį (skaičių iš kurio dalinasi be liekanos). Už
// funkcijos ribų sukite ciklą nuo 10 iki 30 ir kiekvienoje ciklo iteracijoje
// iškvieskite šią funkciją, perduodant ciklo kintamąjį.

function maziausiasDal (skaicius) {
   let daliklis = 2;
   let radom = false;
   while (radom === false) {
    if (skaicius % daliklis === 0) {
        radom=true;
        return daliklis;
    }
    daliklis++;
   }
}

for ( let i=10; i<30; i++) {
    console.log (i, maziausiasDal(i))
}


console.log ("\n------ 23 uzd \n")
// 23.Susikurkite funkciją kuri priimtų skaičių masyvą per argumentus. Ši funkcija turėtų
// rasti duotųjų skaičių sumą ir grąžinti gautą atsakymą. Už funkcijos ribų susikurkite
// du skaičių masyvus ir užpildykite juos duomenimis. Iškvieskite turimą funkciją du
// kartus, jai abu kartus perduodant skirtingą masyvą. Gautus atsakymus išveskite.
// Taip pat, raskite kuri suma gavosi didesnė ir išveskite atsakymą.


// meta kad .reduce is not a function nes neaptinka kad skaiciai2 ir skaiciai3 yra masyvai nzn kodel, tik per chatgpt isejo sutvarkyt

// 1. Sukuriame funkciją, kuri apskaičiuos skaičių sumą
function suma(skaiciai) {
    // Patikriname, ar skaiciai tikrai yra masyvas
    if (!Array.isArray(skaiciai)) {
        console.error('Klaida: "skaiciai" turi būti masyvas, tačiau gauta:', typeof skaiciai);
        return;  // Nutraukiame funkcijos vykdymą, jei "skaiciai" nėra masyvas
    }

    let skaiciuSuma = skaiciai.reduce((a, b) => a + b, 0);  // Naudojame reduce metodą, kad apskaičiuotume sumą
    return skaiciuSuma;  // Grąžiname sumą
}

// 2. Sukuriame du masyvus su skaičiais
let skaiciai2 = [1, 2, 3, 4, 5];  // Pirmas masyvas
let skaiciai3 = [10, 20, 30, 40]; // Antras masyvas

// 3. Iškviečiame funkciją du kartus ir saugome rezultatus
let suma1 = suma(skaiciai2);  // Pirmas iškvietimas
let suma2 = suma(skaiciai3);  // Antras iškvietimas

// 4. Išvedame gautas sumas
console.log("Pirmo masyvo suma: ", suma1);
console.log("Antro masyvo suma: ", suma2);

// 5. Palyginame sumas ir išvedame didesnę
if (suma1 > suma2) {
    console.log("Didžiausia suma yra: ", suma1);
} else {
    console.log("Didžiausia suma yra: ", suma2);
}
























