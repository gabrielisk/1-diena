

//1
console.log ('pirmas veiksmas');
kvieciu(()=>{
    console.log ("tekstas po 2s ir pns. veiksmai")
});
console.log ('trecias veiksmas');




function kvieciu (cbFunc) {
    setTimeout(() => {cbFunc}, 2000);
};

//2 Sukurkite JS funkciją, kuri daro HTTP Request užklausą ir grąžina pažadą su
//duomenimis.


function gautiDuomenis (resource) {
    return new Promise((resolve, reject) => {
        const Request = new XMLHttpRequest ();

        Request.addEventListener ('readystatechange', () => {
            if (request.readyState === 4 && request.status === 200) {
                const data = JSON.parse (request.responseText);
                resolve(data);
            } else if (request.readyState === 4) {
                reject ("kazkas nepavyko");
            }
        });
    request.open ('GET', 'https://jsonplaceholder.typicode.com/posts/1');
    request.send ();
    });
}


gautiDuomenis ().then ((kazkasManCiaGris) => {
    console.log (kazkasManCiaGris)
})
.catch ((klaidosAtvejuCiaKazkasGris) => {
    console.log (klaidosAtvejuCiaKazkasGris)
})
//3 Sukurti funkciją(1), kuri kaip parametrus priimtų skaičių masyvą ir callback
// funkciją(2). Funkcija(1) turėtų iteruoti per masyvą ir siųsti kiekvieną jos narį
// callback funkcijai(2). Callback funkcijos esmė - patikrinti ar gautas skaičius yra
// lyginis ar nelyginis ir atitinkamą informaciją išvesti į konsolę.
// Funkcija turėtų būti iškviečiama taip (pavadinimai gali būti kitokie):
// pirmojiFunkcija(masyvas, callbackFunkcija)


 // Callback funkcija, kuri patikrina, ar skaičius yra lyginis ar nelyginis
function callbackFunkcija(skaicius) {
    if (skaicius % 2 === 0) {
        console.log(skaicius + ' yra lyginis');
    } else {
        console.log(skaicius + ' yra nelyginis');
    }
}

// Pirmoji funkcija, kuri priima masyvą ir callback funkciją
function pirmojiFunkcija(masyvas, callback) {
    // Iteruoja per masyvą ir siunčia kiekvieną elementą į callback funkciją
    for (let i = 0; i < masyvas.length; i++) {
        callback(masyvas[i]);
    }
}

// Pavyzdinis masyvas
const masyvas = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// Iškviečiame pirmąją funkciją su masyvu ir callback funkcija
pirmojiFunkcija(masyvas, callbackFunkcija);


// //4 4. Sukurkite funkciją, kuri priima masyvą (kuris užpildytas "string" tipo
// reikšmėmis(žodžiais)) ir callback funkciją. Funkcija turėtų iteruoti per masyvą ir
// nusiųsti kiekvieną stringą esantį masyve callback funckijai. Callback funkcija turi
// grąžinti atsiųsto "string" ilgį.
// - susikurti funkciją patikrinkZodzioIlgi(masyvas, callbackFunkcija)
// - funkcijos patikrinkZodzioIlgi esmė - panaudoti foreach ir kiekvienam masyvo
// nariui iškviest funkciją koksIlgis(string)

// Callback funkcija, kuri grąžina stringo ilgį
function koksIlgis(string) {
    return string.length;
}

// Funkcija, kuri priima masyvą ir callback funkciją
function patikrinkZodzioIlgi(masyvas, callbackFunkcija) {
    // Iteruojame per masyvą su forEach
    masyvas.forEach(zodis => {
        // Kviečiame callback funkciją su kiekvienu žodžiu ir išvedame jo ilgį
        console.log(`Žodžio "${zodis}" ilgis yra: ${callbackFunkcija(zodis)}`);
    });
}

// Pavyzdinis masyvas su žodžiais
const zodziai = ['obuolys', 'kriaušė', 'bananas', 'mangas'];

// Iškviečiame funkciją su masyvu ir callback funkcija
patikrinkZodzioIlgi(zodziai, koksIlgis);


// //5 Sukurkite funkciją, kuri kaip argumentus priima masyvą, sudarytą iš objektų ir
// callback funkciją. Funkcija turėtų iteruoti per masyvą ir nusiųsti kiekvieną ten
// esantį objektą (tarkim tai automobilis, turintis šias properties: rida, markė,
// modelis, gamybos metai ir kaina (bet galite susikurti ir savo nuožiūra)) callback
// funkcijai. Callback funkcija turėtų grąžinti naują objektą, kuriame būtų tik
// atrinktos objekto properties, tarkim tik markė ir modelis)




// Callback funkcija, kuri atrenka tik markę ir modelį iš automobilio objekto
function atrinktiMarkeIrModeli(automobilis) {
    return {
        marke: automobilis.marke,
        modelis: automobilis.modelis
    };
}

// Funkcija, kuri priima masyvą su objektais ir callback funkciją
function apdorotiAutomobilius(masyvas, callbackFunkcija) {
    // Iteruojame per masyvą su forEach ir kviečiame callback funkciją kiekvienam objektui
    masyvas.forEach(automobilis => {
        const rezultatas = callbackFunkcija(automobilis);
        console.log(rezultatas);
    });
}

// Pavyzdinis masyvas su automobiliais
const automobiliai = [
    { rida: 150000, marke: 'Toyota', modelis: 'Corolla', gamybosMetai: 2015, kaina: 8000 },
    { rida: 120000, marke: 'Ford', modelis: 'Focus', gamybosMetai: 2017, kaina: 10000 },
    { rida: 200000, marke: 'Volkswagen', modelis: 'Golf', gamybosMetai: 2012, kaina: 6000 }
];

// Iškviečiame funkciją su masyvu ir callback funkcija
apdorotiAutomobilius(automobiliai, atrinktiMarkeIrModeli);


