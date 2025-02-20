// // Susikurkite skaičių masyvą. Suraskite jame pirmą skaičių (naudojant find
// metodą), kuris yra lyginis. Pvz, jeigu masyvas bus [3, 7, 2, 9, 6, 4], tai
// atsakymas turi gautis 2, nes 3 ir 7 buvo nelyginiai.
console.log ("\n ------------1 uz \n")

let skaiciai = [1,5,4,3,6]

let rastasSkaicius = skaiciai.find (skaicius => skaicius % 2 === 0)
console.log (skaiciai)
console.log ("pirmas lyginis skaicius: ", rastasSkaicius)

// Susikurkite skaičių masyvą, kuriame būtų teigiamų ir neigiamų skaičių.
// Suraskite jame pirmą skaičių, kuris yra teigiamas (daugiau nei 0). Pvz, jeigu
// masyvas bus [-3, 0, 5, -8, 2, 7], atsakymas turi gautis 5.
console.log ("\n ------------2 uz \n")


let skaiciai2= [-2,-54,3,9,-7,-4]
let teigiamasSkaicius = skaiciai2.find (skaicius => skaicius>0)
console.log (skaiciai2)
console.log ("pirmas teigiamas skaicius: ", teigiamasSkaicius)


console.log ("\n ------------3 uz \n")
// Susikurkite skaičių masyvą, kuriame būtų teigiamų ir neigiamų skaičių.
// Suraskite jame pirmą skaičių kuris yra neigiamas ir išveskite jo indeksą, o
// jeigu tokio skaičiaus nėra išveskite -1. Pvz, jeigu masyvas bus [8, -2, 3, 4],
// tai atsakymas yra 1, nes skaičius -2 yra indekse 1. O jeigu masyvas bus [7,
// 5, 3], tai atsakymas bus -1, nes masyve nėra neigiamo skaičiaus.

let skaiciai3=[1,5,7,9,-5,4,3]
let pirmasNeigiamas = skaiciai3.findIndex( skaicius => skaicius<0 )
console.log (pirmasNeigiamas)


console.log ("\n ------------4 uz \n")

// Susikurkite skaičių masyvą. Suraskite jame pirmą skaičių, kuris yra lygus
// arba didesnis 10 ir išveskite jo indeksą, o jeigu tokio skaičiaus nėra
// išveskite -1. Pvz, jeigu turite masyvą [8, 12, 5, 3, 15, 9], atsakymas bus 1.
let skaiciai4 = [1,4,10,14,6]
let didesnisUz10 = skaiciai4.findIndex (skaicius => skaicius>=10)
console.log (didesnisUz10)


console.log ("\n ------------5 uz \n")
// Susikurkite skaičių masyvą. Suraskite jame pirmą skaičių, kuris dalintųsi iš
// 3 ir būtų didesnis nei 10, ir jį išveskite. Pvz, jeigu masyvas yra [5, 9, 12, 7,
// 18, 4], atsakymas bus 12.

let skaiciai5 = [1,4,8,15,6,12]
let dalinasiIs3 = skaiciai5.find (skaicius => skaicius%3 === 0 && skaicius>10)
console.log (dalinasiIs3)


console.log ("\n ------------6 uz \n")
// Susikurkite skaičių masyvą. Suraskite jame pirmą skaičių, kuris yra
// neigiamas ir yra lyginis. Pvz, jeigu masyvas [5, 8, -3, -6, 4, 7], tai atsakymas
// yra -6.

let skaiciai6 = [1,4,5,-4,-7]
let neigiamas = skaiciai6.find (skaicius => skaicius < 0 && skaicius % 2 == 0)
console.log (neigiamas)


console.log ("\n ------------7 uz \n")
// Susikurkite skaičių masyvą. Patikrinkite ar šiame masyve visi skaičiai yra
// teigiami (didesni nei 0). Pvz, jeigu masyvas [7, 5, 9, 8], tai atsakymas true, o
// jeigu masyvas [8, 9, -3, 2], tai atsakymas false.

let skaiciai7 = [1,4,5,2,6]
let arVisiTeigiami = skaiciai7.every (skaicius => skaicius>0)
console.log (arVisiTeigiami)


console.log ("\n ------------8 uz \n")
// Susikurkite skaičių masyvą. Patikrinkite ar šiame masyve visi skaičiai yra
// lyginiai. Pvz, jeigu masyvas yra [2, 4, 8, 6], tai atsakymas true, o jeigu
// masyvas [7, 3, 6, 8, 10], tai atsakymas false.

let skaiciai8 = [2,4,6,8]
let arVisiLyginiai = skaiciai8.every (skaicius => skaicius % 2 === 0)
console.log (arVisiLyginiai)


console.log ("\n ------------9 uz \n")
// Susikurkite skaičių masyvą. Patikrinkite ar šiame masyve yra bent vienas
// skaičius, kuris yra mažesnis nei 5. Pvz, jeigu masyvas [8, 20, 5, 97, 44], tai
// atsakymas false, bet jeigu masyvas [20, 3, 7, 9], tai atsakymas true.

let skaiciai9 = [18,8,6,78,8]
let arYraMazesnis = skaiciai9.some (skaicius => skaicius < 5)
console.log (arYraMazesnis)


console.log ("\n ------------10 uz \n")
// Susikurkite skaičių masyvą, kuriame būtų teigiamų ir neigiamų skaičių.
// Patikrinkite ar šiame masyve yra bent vienas teigiamas skaičius (didesnis
// nei 0). Pvz, jeigu masyvas [7, 2, -3, -6], tai atsakymas yra true, o jeigu
// masyvas yra [-8, -6, -4], tai atsakymas yra false.

let skaiciai10 = [1,-2,-5,10,6]
let arYraTeigiamu = skaiciai10.some (skaicius => skaicius > 0)
console.log (arYraTeigiamu)


console.log ("\n ------------11 uz \n")
// Susikurkite žodžių masyvą. Patikrinkite ar visi šiame masyve esantys
// žodžiai yra sudaryti iš 3 ar daugiau raidžių. Pvz, jeigu masyvas yra [‘antis’,
// ‘ožka’, ‘arklys’], tai atsakymas true, o jeigu masyvas [‘abc’, ‘de’, ‘fgia’], tai
// atsakymas false.

let zodziai1 = ["labas", "zodis", "kazkoks", "savas"]
let arDaugiauRaidziu = zodziai1.every (zodis => zodis.length>3)
console.log (arDaugiauRaidziu)


console.log ("\n ------------12 uz \n")
// Susikurkite žodžių masyvą. Patikrinkite ar šiame masyve yra bent vienas
// žodis prasidedantis raide a (turi surasti nepriklausomai tai didžioji ar
// mažoji raidė). Pvz, jeigu masyvas [‘bananas’, ‘agurkas’, ‘pomidoras’], tai
// atsakymas true, o jeigu masyvas [‘kaunas’, ‘vilnius’, ‘klaipėda’], tai
// atsakymas false.

let zodziai2 = ["labas", "zodis", "kazkoks", "savas", "abrikosas"]
let arPrasideda = zodziai2.some (zodis => zodis.startsWith ("a"))
console.log (arPrasideda)


console.log ("\n ------------13 uz \n")
// Susikurkite skaičių masyvą. Patikrinkite ar visi šiame masyve esantys
// skaičiai yra teigiami ir ar yra bent vienas skaičius, kuris būtų lyginis. Pvz,
// masyvas [3, 7, 2, 9, 6, 4], grąžina true, o masyvas [4, -2, 3, 7] grąžina false.

let skaiciai11 = [11,3,5,7,6]
let arVisiTeigiami2 = skaiciai11.every (skaicius => skaicius>0) && skaiciai11.some (skaicius => skaicius % 2 == 0);
console.log (arVisiTeigiami2)


console.log ("\n ------------14 uz \n")
// Susikurkite skaičių masyvą, kuriame būtų teigiamų ir neigiamų skaičių.
// Išfiltruokite skaičius, kurie yra teigiami. Pvz, jeigu masyvas yra [4, -3, -2, 8,
// 9, 5], tai išfiltruotas variantas yra [4, 8, 9, 5].

let skaiciai12 = [11,3,-5,-7,6]
let filtruotiTeig = skaiciai12.filter(skaicius => skaicius>0)
console.log (filtruotiTeig)


console.log ("\n ------------15 uz \n")
// Susikurkite skaičių masyvą, kuriame būtų saugomi prekės reitingai
// (skaičiai nuo 1 iki 5). Išfiltruokite tuos įrašus, kur balų yra 1 arba 2. Pvz,
// jeigu masyvas [5, 1, 4, 5, 1, 3, 4, 5, 2], tai išfiltravus gausis [1, 1, 2].

let skaiciai13 = [1,3,5,2,4,1,1,2]
let filtruotiReitingai = skaiciai13.filter (ivertinimas => ivertinimas===1 || ivertinimas ===2)
console.log(filtruotiReitingai)


console.log ("\n ------------16 uz \n")
// Susikurkite skaičių masyvą, kuriame būtų ir teigiamų ir neigiamų skaičių.
// Išfiltruokite tik tuos skaičius, kurie yra teigiami ir yra lyginiai. Pvz, jeigu
// turite masyvą [5, -3, 2, 7, 8, -4, 1] tai turi gautis [2, 8].

let skaiciai14 = [11,3,-5,-7,6,4]
let filtruotiTeigLyg = skaiciai14.filter (skaicius => skaicius>0 && skaicius % 2 === 0)
console.log (filtruotiTeigLyg)


console.log ("\n ------------17 uz \n")
// Susikurkite šalių pavadinimų masyvą. Išfiltruokite tik tas šalis, kurių
// pavadinime yra raidė b (nesvarbu didžioji ar mažoji raidė). Pvz, jeigu turite
// masyvą [‘Belgija’, ‘Lietuva’, ‘Graikija’, ‘Bulgarija’], tai turi gautis [‘Belgija’,
// ‘Bulgarija’].

let salys = ["Lietuva", "Estija", "Svedija", "Anglija", "Amerika", "Belgija", "Bulgarija"]
let salysIsB = salys.filter(salys => salys.startsWith("B"))
console.log(salysIsB)


console.log ("\n ------------18 uz \n")
// Susikurkite skaičių masyvą. Išfiltruokite lyginius skaičius ir juos
// padvigubinkite. Pvz, jeigu masyvas yra [3, 7, 2, 9, 6, 4], išfiltravus gausis [2,
// 6, 4], o padvigubinus galutinis variantas bus [4, 12, 8].

let skaiciai15 = [1,5,4,8,6,10]
let padvigubinti = skaiciai15
.filter (skaicius => skaicius % 2 === 0) 
.map (skaicius => skaicius * 2)
console.log (padvigubinti)


console.log ("\n ------------19 uz \n")
// Susikurkite skaičių masyvą. Kiekvieną skaičių jame padidinkite per 1. Pvz,
// jeigu masyvas yra [7, 8, 9, 2, 3], tai turi gautis [8, 9, 10, 3, 4].

let skaiciai16 = [1,5,4,8,6,10]
let padidinti1 = skaiciai16.map (skaicius => skaicius +1 )
console.log (padidinti1)


console.log ("\n ------------20 uz \n")
// Susikurkite žodžių masyvą. Kiekvieną žodį iš šio masyvo paverskite į
// variantą iš didžiųjų raidžių. Pvz, jeigu turite masyvą [‘bananas’, ‘baba’,
// ‘klėtis’], tai turi gautis [‘BANANAS’, ‘BABA’, ‘KLĖTIS’].

let zodziai3 = ["labas", "zodis", "kazkoks", "savas", "abrikosas"]
let didziosiosRaides = zodziai3.map (zodis => zodis.toUpperCase(zodis))
console.log (didziosiosRaides)



console.log ("\n ------------21 uz \n")
// Susikurkite skaičių masyvą. Gaukite visų skaičių sumą. Pvz, jeigu masyvas
// yra [2, 3, 1], tai atsakymas 6.


let skaiciai17 = [1,5,4,8]
let suma = skaiciai17.reduce((a, b) => a + b);
console.log (suma)


console.log ("\n ------------22 uz \n")
// Susikurkite skaičių masyvą. Atrinkite tik tuos skaičius, kurie yra lyginiai ir
// gaukite jų sumą. Pvz, jeigu masyvas yra [1, 2, 3, 4, 5], atrinkus gausis [2, 4],
// o šių skaičių suma ir galutinis atsakymas yra 6.

let skaiciai18 = [1,2,3,4,5]
let lyginiai2 = skaiciai18.filter (skaicius => skaicius % 2 === 0) 
console.log ("gauti lyginiai skaiciai: ", lyginiai2)
let lyginiuSuma = lyginiai2.reduce ((a, b) => a + b)
console.log("ju suma: ", lyginiuSuma)


console.log ("\n ------------23 uz \n")
// Susikurkite žodžių masyvą. Pasiimkite kiekvieno žodžio pirmą raidę, ją
// padarykite iš didžiosios raidės. Pvz, jeigu turite masyvą [‘šuo’, ‘katė’,
// ‘gyvatė’], tai turi gautis [‘Š’, ‘K’, ‘G’].


let zodziai4 = ["labas", "zodis", "kazkoks", "savas", "abrikosas"]
let isDidziosios = zodziai4.map(zodis => zodis[0].toUpperCase())
console.log (isDidziosios)


console.log ("\n ------------24 uz \n")
// Susikurkite žodžių masyvą. Raskite kiek šiame masyve yra žodžių, kurie
// susideda iš 5 ar daugiau raidžių. Pvz, jeigu masyvas yra [‘bananas’,
// ‘persikas’, ‘abc’, ‘de’], tai atrinkus žodžius gausis [‘bananas’, ‘persikas’], o
// tokių žodžių yra ir galutinis atsakymas skaitosi 2.


let zodziai5 = ["lab", "zod", "kazs", "savas", "abrikosas"]
let isKiek = zodziai5.filter (zodis => zodis.length>=5)
let kiekIsViso = isKiek.length


console.log (kiekIsViso)

console.log ("\n ------------25 uz \n")
// Susikurkite žodžių masyvą. Raskite kiekvieno žodžio simbolių kiekį. Pvz,
// jeigu masyvas yra [‘obelis’, ‘liepa’, ‘eglė’, ‘uosis’], tai turi gautis [6, 5, 4, 5].

let zodziai6 = ["labas", "zodis", "kazkoks", "savas", "abrikosas"]
let simboliuKiekis = zodziai6.map (zodis => zodis.length)
console.log (simboliuKiekis)



console.log ("\n ------------26 uz \n")
// Susikurkite masyvą, kur string pavidalu kiekviename elemente būtų sudėti
// vardai ir amžiai. Ištraukite iš tokio masyvo tik vardus. Pvz, jeigu masyvas
// yra [‘Tomas 34’, ‘Jonas 20’, ‘Gintarė 40’, ‘Inga 24’], tai turi gautis [‘Tomas’,
// ‘Jonas’, ‘Gintarė’, ‘Inga’].


let zodziai7 = ["Tomas 34", "Jonas 20", "Gintarė 40", "Inga 24"]
let vardaiBeAmziaus = zodziai7.map (zodis => zodis.split(" ") [0])
console.log (vardaiBeAmziaus)

console.log ("\n ------------27 uz \n")
// Susikurkite masyvą, kur string pavidalu kiekviename elemente būtų sudėti
// vardai ir amžiai. Ištraukite iš tokio masyvo tik amžius, juos paverskite į
// skaičius ir raskite bendrą sumą. Pvz, jeigu masyvas yra [‘Tomas 34’, ‘Jonas
// 20’, ‘Gintarė 40’, ‘Inga 24’],

let zodziai8 = ["Tomas 34", "Jonas 20", "Gintarė 40", "Inga 24"]
let amzius = zodziai8.map (skaicius => parseInt(skaicius.split (" ") [1]))
console.log (amzius)
let amziausSuma= amzius.reduce((a, b) => a + b, 0)
console.log(amziausSuma)


console.log ("\n ------------28 uz \n")
// Susikurkite masyvą prekių likučiams saugoti (tik likučių skaičiai). Išrinkite
// visus likučius, kurių liko mažai (mažiau nei 5 vnt.), ties kiekvienu likučiu
// paskaičiuokite kiek trūksta iki ribos. Pvz, jeigu turite masyvą [74, 2, 54, 3,
// 1, 87], išfiltravus liks [2, 3, 1], o paskaičiavus kiek kiekvieno trūksta iki 5,
// gausis [3, 2, 4].

let likuciai = [200,40,5,7,10,2,1,3]
let mazaiLikuciu = likuciai.filter (skaicius => skaicius < 5)
console.log ("likuciai kuriu maziau negu 5: ", mazaiLikuciu)
let truksta = mazaiLikuciu.map ( skaicius => 5-skaicius)
console.log ("Kiek truksta iki maziausios ribos (5): ", truksta)



console.log ("\n ------------29 uz \n")
// Susikurkite masyvą studento pažymiams saugoti. Suraskite kiek studentas
// turi gerų pažymių (8 ar daugiau). Pvz, jeigu masyvas yra [7, 8, 10, 6, 5, 9],
// išfiltravus gausis [8, 10, 9], o tokių pažymių jis turi 3.

let pazymiai2 = [1,5,6,8,9,9,10,4]
let geri = pazymiai2.filter (pazymys => pazymys>=8)
console.log (geri)
let kiekGeru = geri.length
console.log (kiekGeru)




console.log ("\n ------------30 uz \n")
// Susikurkite žodžių masyvą. Suraskite kiek iš viso šiame masyve per visus
// žodžius yra raidžių a (nesvarbu didžioji ar mažoji raidė). Pvz, jeigu masyvas
// yra [‘bananas’, ‘obelis’, ‘automobilis’], gausis kad yra 4 raidės.

let zodziai9 = ["labas", "zodis", "kazkoks", "savas", "abrikosas"]
let kiekisvisoA = zodziai9.reduce ((suma, zodis) => {
    let raidziuSuma = zodis.split ("").filter(raide => raide.toLowerCase() === "a".lenght || raide.toUpperCase() === "A").length; 
    return suma + raidziuSuma; }, 0 )

    console.log (kiekisvisoA)
