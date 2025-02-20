console.log ("\n -------1uzd \n")
// Sukurkite objektą studento duomenims saugoti. Į šį objektą sudėkite
// tokias savybes su reikšmėmis: vardas, pavardė, amžius, studijų programa,
// atsiskaitytų kreditų skaičius, pažymiai, amžius, ūgis, kelintame kurse
// mokosi, kurioje mokykloje mokosi. Šiuos duomenis galite grupuoti į
// vidinius objektus arba visus išrašyti atskirai. Išveskite šią informaciją per
// vieną console.log(). Taip pat, pamėginkite išvesti atskirose eilutėse tris
// skirtingas pasirinktas savybes.


let studentas = {
    vardas: 'Ignas',
    pavarde: 'Juozapavicius',
    amzius: 21,
    ugis: 1.94,
    kursas: 3,
    mokykla: 'KTU',
}
console.log(studentas)
console.log(studentas.ugis)
console.log(studentas.kursas,"kursas", "Aukstoji mokykla: ", studentas.mokykla)



console.log ("\n -------2uzd \n")
// Sukurkite objektą informacijai apie filmą saugoti. Į šį objektą sudėkite
// tokias savybes su reikšmėmis: pavadinimas, režisierius, biudžetas, kiek
// uždirbo pinigų po išleidimo, žanras, trukmė, išleidimo metai, aktorių
// sąrašas (masyvas su jų vardais ir pavardėmis). Išveskite šio objekto
// informaciją. Paskaičiuokite ir išveskite šio filmo pelną (uždarbis -
// biudžetas). Išveskite kiek filme dalyvavo aktorių (jų kiekis). Paskaičiuokite
// kiek filmui yra metų (dabartinius metus tiesiog galite įrašyti rankomis arba
// panaudoti new Date(Date.now()).getFullYear() funkciją).

let filmas = {
    pavadinimas: "Pulp Fiction",
    rezisierius: "Quentin Tarantino",
    biudzetas: 500000,
    uzdarbis: 7000000,
    zanras: "veiksmo",
    trukme: "3 h",
    isleidimoMetai: 1995,
    aktoriai: ["John Travolta", "Samuel L. Jackson", "Bruce Willis", "Uma Thurman"]
}
console.log (filmas)
console.log ("Pelnas: ", filmas.uzdarbis - filmas.biudzetas)
console.log ("Aktoriu kiekis: ", filmas.aktoriai.length)
console.log ("Filmui yra:",2025-filmas.isleidimoMetai, "metai.")


console.log ("\n -------3uzd \n")
// Sukurkite du objektus dviejų knygų informacijai saugoti. Kiekviename
// objekte nurodykite tokias savybes su reikšmėmis: pavadinimas, autorius,
// žanras, kaina, puslapių kiekis, skyrių sąrašas (masyvas su pavadinimais),
// išleidimo metai, ar knygą galima rasti knygynuose. Išveskite šių knygų
// informaciją. Išveskite kuri knyga plonesnė (turi mažiau puslapių), bei
// kurioje knygoje yra daugiau skyrių. Paskaičiuokite, jeigu pigesnės knygos
// kainą padvigintumėte, ar ji jau būtų brangesnė už kitą knygą?

let knyga1 = {
    pavadinimas: "Haris Poteris",
    autorius: "J.K Rowling",
    zanras: "fantastinis",
    kaina: 15,
    puslapiai: 350,
    skyriai: ["Prologas", "1 Skyrius", "2 Skyrius","3 Skyrius","4 Skyrius","5 Skyrius", "Epilogas"],
    isleidimoMetai: 1996,
}
let knyga2 = {
    pavadinimas: "Kazkokia knyga",
    autorius: "Christian Andersen",
    zanras: "nuotykiu",
    kaina: 5,
    puslapiai: 200,
    skyriai: ["Prologas", "1 Skyrius", "2 Skyrius","3 Skyrius"],
    isleidimoMetai: 1989,
}

console.log (knyga1,knyga2)
console.log (knyga1.puslapiai<knyga2.puslapiai ? "Pirma knyga plonesne" : "Antra knyga plonesne")

let daugiauPsl = knyga1.skyriai.reduce ((a, b) => a + b) > knyga2.skyriai.reduce ((a, b) => a + b) ? "1 knygoje yra daugiau skyriu" : "2 knygoje yra daugiau skyriu"
console.log (daugiauPsl)

let knyga2PadvigubintaKaina = knyga2.kaina * 2;

if (knyga2PadvigubintaKaina > knyga1.kaina) {
    console.log("Pigesnė knyga su padvigubinta kaina būtų brangesnė už kitą knygą.");
} else {
    console.log("Pigesnė knyga su padvigubinta kaina vis dar būtų pigesnė už kitą knygą.");
}



console.log ("\n -------4uzd \n")
// Sukurkite tris objektus prekių duomenims saugoti. Kiekviename objekte
// sudėkite šias savybes su reikšmėmis: pavadinimas, kaina, savikaina, kodas,
// turimas kiekis sandėlyje, siuntimui dėžės matmenys (x, y, z ašys). Išveskite
// visų trijų prekių informaciją. Išveskite visų prekių kainas vienoje eilutėje
// (pirma prekė kainuoja - ..., antra prekė kainuoja - ..., ir t.t.). Raskite ir
// išveskite kuri prekė yra brangiausia (jos pavadinimą ir kainą arba visą
// rastos prekės informaciją). Raskite ir išveskite atskirose eilutėse kiekvienos
// prekės dėžės tūrį. Raskite ir išveskite atskirose eilutėse kiekvienos prekės
// pelningumą ((kaina - savikaina) * kiekis sandėlyje).

let prekes1 = {
    pavadinimas: 'guminukai',
    kaina:5,
    savikaina:2,
    kodas:5423,
    turimasKiekis:100,
    siuntimoDeze: {
        x:10,
        y:15,
        z:5,
    },
    
}
let prekes2 = {
    pavadinimas: 'traskuciai',
    kaina:7,
    savikaina:2,
    kodas:6666,
    turimasKiekis:50,
    siuntimoDeze: {
        x:20,
        y:20,
        z:20,
    },
    
}
let prekes3 = {
    pavadinimas: 'saldainiai',
    kaina:3,
    savikaina:1,
    kodas:3333,
    turimasKiekis:500,
    siuntimoDeze: {
        x:5,
        y:15,
        z:5,
    },
    
}

// Isveskite visų trijų prekių informaciją. Išveskite visų prekių kainas vienoje eilutėje
// (pirma prekė kainuoja - ..., antra prekė kainuoja - ..., ir t.t.). Raskite ir
// išveskite kuri prekė yra brangiausia (jos pavadinimą ir kainą arba visą
// rastos prekės informaciją). Raskite ir išveskite atskirose eilutėse kiekvienos
// prekės dėžės tūrį. Raskite ir išveskite atskirose eilutėse kiekvienos prekės
// pelningumą ((kaina - savikaina) * kiekis sandėlyje).

console.log (prekes1, prekes2,prekes3)
console.log ("pirma preke kainuoja - ", prekes1.kaina, "antra preke kainuoja - ", prekes2.kaina, "trecia preke kainuoja - ", prekes3.kaina)

if (prekes1.kaina>prekes2.kaina && prekes3.kaina) {
    console.log (prekes1.pavadinimas, prekes1.kaina)
} else if (prekes2.kaina>prekes1.kaina && prekes3.kaina) {
    console.log (prekes2.pavadinimas, prekes2.kaina)
} else {
    console.log (prekes3.pavadinimas, prekes3.kaina)
}

let prekes1Tūris = prekes1.siuntimoDeze.x * prekes1.siuntimoDeze.y * prekes1.siuntimoDeze.z;
let prekes2Tūris = prekes2.siuntimoDeze.x * prekes2.siuntimoDeze.y * prekes2.siuntimoDeze.z;
let prekes3Tūris = prekes3.siuntimoDeze.x * prekes3.siuntimoDeze.y * prekes3.siuntimoDeze.z;

console.log("Prekės 1 dėžės tūris: " + prekes1Tūris);
console.log("Prekės 2 dėžės tūris: " + prekes2Tūris);
console.log("Prekės 3 dėžės tūris: " + prekes3Tūris);

console.log ("Prekes 1 pelningumas: ", (prekes1.kaina-prekes1.savikaina)*prekes1.turimasKiekis)
console.log ("Prekes 2 pelningumas: ", (prekes2.kaina-prekes2.savikaina)*prekes2.turimasKiekis)
console.log ("Prekes 3 pelningumas: ", (prekes3.kaina-prekes3.savikaina)*prekes3.turimasKiekis)





console.log ("\n -------5uzd \n")
// Sukurkite objektą automobilio duomenims saugoti. Į šį objektą savybes su
// reikšmėmis sukelkite, po to kai sukursite tuščią objektą (10-as pavyzdys).
// Sudėkite šias savybes su reikšmėmis: markė, modelis, rida, gamybos metai,
// spalva, darbinis tūris, ar daužta, ar parduodama. Išveskite visą automobilio
// informaciją. Paskaičiuokite ir išveskite kiek automobiliui yra metų (rankomis
// įrašykite dabartinius metus arba panaudokite new
// Date(Date.now()).getFullYear() funkciją). Paskaičiuokite ir išveskite kiek
// vidutiniškai per metus yra nuvažiavęs automobilis (jeigu viso nuvažiavo 300
// kilometrų, o automobiliui yra 2 metai, tai per metus vidutiniškai gaunasi 150 km.).


let auto = {

}
console.log (auto)

auto.marke = "bmw";
auto.modelis = "e90";
auto.rida = 600000;
auto.metai = 2005;
auto.spalva = "melyna";
auto.darbinisTuris = 2;
auto.dauzta = false;
auto.parduodama = false;


console.log (auto)
console.log ("kiek metu auto: ", 2025-auto.metai)
console.log ("kiek vidutiniskai nuvaziaves: ", auto.rida/(2025-auto.metai))



console.log ("\n -------6uzd \n")
// Sukurkite savo norimą objektą(-us). Kiekviename sudėkite bent 5 savybes
// su reikšmėmis (reikšmes galite įdėti ir atskirai). Išveskite informaciją.
// Pagalvokite ką dar galite su šiuo objektu atlikti (paskaičiuoti ir pan.) ir tai
// padarykite.

let kelnes = {
    kiekis: 15,
    spalva: "melyna",
    defektas: "isplysusios saga"

}

console.log (kelnes)

kelnes.dydis = "L";
kelnes.kaina = 15;
kelnes.savikaina = 3;
kelnes.pagaminimoVieta = "Bangladesas"

console.log (kelnes)
console.log ( "Kiek pelno gautusi pardavus defektuotas kelnes: ", (kelnes.kaina - kelnes.savikaina)*kelnes.kiekis)







