let maistas = ["blynai","steikas","traski vistiena", "wok", "sriuba"];
console.log (maistas);

maistas.push ("jautiena");
console.log (maistas);

maistas.unshift ("chips");
console.log (maistas);

maistas.splice (1,0, "kebabas","Pomidorai");
console.log (maistas);




console.log ("salinimas-\n")


maistas.pop();
console.log (maistas);

maistas.shift();
console.log (maistas);

console.log ("salinimas is vidurio-\n")

maistas.splice (1,2);
console.log (maistas);



console.log ("\n -------------2 uzd.\n")

let skaiciai = [1,2,4,7,9,10]
console.log (skaiciai)

let arYraSkaicius = skaiciai.includes(2)
console.log (`ar yra skaicius ?`, arYraSkaicius)



console.log ("\n -------------3 uzd.\n")


let zodziai = ["pirmasZodis","antrasZodis", "treciasZodis" ];
console.log (zodziai);
let tekstas = zodziai.join(` * `);
console.log ("zodziai sujungti i teksta: ", tekstas);

console.log ("\n -------------4 uzd.\n")



let sakinys = "cia yra vienas sakinys"
let isskaidytas = sakinys.split(' ');

console.log ("isskaidytas sakinys: ", isskaidytas);
console.log ("zodziu kiekis sakinyje: ", isskaidytas.length)


console.log ("\n -------------5 uzd.\n")

let pazymiai = [1,6,5,2,7,1,10];
let didziausiasMaziausias = pazymiai.slice().sort((a, b) => b - a);
console.log ("pazymiai: ", pazymiai);
console.log ("pazymiai nuo didziausio iki maziausio: ", didziausiasMaziausias);
console.log("didziausi pazymiai: ", didziausiasMaziausias.slice(0, 3)); // slicina nuo 0 isrusiuoto masyvo (didziausiasMaziausias) iki 3 indexo. t.y - 0,1,2. 3 indexas imtinai neimamas


console.log ("\n -------------6 uzd.\n")

let bioVardai = ["Agne","Saulius","Kornelija","Adomas"];
let matVardai = ["Jurgis","Antanas","Aloyzas","Martynas"];

let apjungtiVardai = [...bioVardai, ...matVardai];

console.log ("apjungti vardai: ", apjungtiVardai);



console.log ("\n 6 uzd. BONUS\n") // unikalus vardai (pasikartojantys). set pasalina pasikartojancius vardus


 bioVardai = ["Agne","Saulius","Kornelija","Adomas, Aloyzas"];
 matVardai = ["Jurgis","Antanas","Aloyzas","Martynas"];

 let unikalusVardai = [...new Set(apjungtiVardai)];
 console.log("Unikalus vardai, kurie nepasikartoja: ", unikalusVardai);




console.log ("\n -------------7 uzd.\n")

let pirmasSem = ["Ekonomika", "Matematika", "Vadyba", "IT"];
let antrasSem = ["Marketingas", "Psichologija"];
let apjungtosTemos = [...pirmasSem, ...antrasSem]

console.log ("apjungtos temos: ", apjungtosTemos)


console.log ("\n -------------8 uzd.\n")

let spalvos = ["geltona", "zalia", "raudona", "oranzine"];
let spalvosKopija = spalvos.slice();
spalvos = spalvos.splice ()

console.log ("pirmas masyvas: ", spalvos,"\n", "antras masyvas: ", spalvosKopija)



console.log ("\n --------------9 uzd.\n")
let miestai = ["Siauliai", "Vilnius", "New York", "Warsaw", "Kaunas", ]
console.log (miestai);
console.log (miestai.indexOf("New York")
)

console.log ("\n --------------10 uzd.\n") //bbz kaip

let skaiciai10 = [1,5,7,7,8,9,10,20,6];

let unikalusSkaiciai10= new Set ();
let dubliuojasiMasyvas = [];

for (const skaicius of skaiciai10) {
    if (unikalusSkaiciai10.has(skaicius)) {
        dubliuojasiMasyvas.push (skaicius)
    } else {
        unikalusSkaiciai10.add (skaicius);
    }
}
console.log (skaiciai10);
console.log (`Skaicius ${[...dubliuojasiMasyvas]} dubliuojasi`);


console.log ("\n --------------11 uzd.\n")

let masyvas = [1, 2, 3, 4, 5, 6];
let chunkSize = 2;
let gabaliukai = [];
  
for (let i = 0; i < masyvas.length; i += chunkSize) {
    gabaliukai.push(masyvas.slice(i, i + chunkSize));

}

console.log(gabaliukai);

console.log ("\n --------------12 uzd.\n")

let kintamasis="“01458";

let atvirksciai = kintamasis.split("").reverse().join("");

if (kintamasis === atvirksciai) {
    console.log("Skaitmuo yra palindromas.");
} else {
    console.log("Skaitmuo nėra palindromas.");
}


console.log ("\n --------------13 uzd.\n")

let masyvas1= [1,2,3,5,2]
let masyvas2= [5,4,76,2,3]
let masyvas3=[]










