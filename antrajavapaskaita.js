let a=3
let b=5
let c=7

//1
if (a==b) {
   console.log ("a yra lygu b")
} else {
   console.log ("a nera lygu b")
}

//2
if (b==c) {
   console.log ("b yra lygu c")
} else {
   console.log ("b nera lygu c")
}

//3

if (a>b) {
   console.log ("a yra didesnis uz b")
} else {
   console.log ("a nera didesnis uz b")
}

//4

if (b>c*2) {
   console.log ("b daugiau uz c")
} else {
   console.log ("b nera daugiau uz c")
}

//5

if (a%2 == 0) {
   console.log ("lyginis")
} else {
   console.log ("nelyginis")
}

//6 
if (b % 2 !== 0) {
   console.log ("nelyginis")
} else {
   console.log ("lyginis")
}

//7

if (c>0) {
   console.log ("skaicius  teigiamas")
} else {
   console.log ("skaicius neigiamas")
}

//8 

if (a<0) {
   console.log ("skaicius  neigiamas")
} else {
   console.log ("skaicius teigiamas")
}

//9

if (b%4 == 0) {
   console.log ("skaicius  dalinasi is 4")
} else {
   console.log ("skaicius nesidalina is 4")
}

//10

if (c%8 == 0) {
   console.log ("skaicius  dalinasi is 8")
} else {
   console.log ("skaicius nesidalina is 8")
}

// amzius balsuoti
let x=18

if (x>=18) {
   console.log ("jus galite balsuoti")
} else {console.log ("jus negalite balsuoti")}


//vidurkis

let p1=4;
let p2=6;
let p3=6

vidurkis = (p1 + p2 + p3)/3

console.log (vidurkis)

if (vidurkis>=5) {
   console.log ("Vidurkis teigiamas")
} else { console.log ("Vidurkis neigiamas")}


//4.1,  dalinasi, nesidalina ir tt

let q = 5

if (q%5===0) {
   console.log (
`${q}* 1 = ${q*1}
${q}* 2 = ${q*2}
${q}* 3 = ${q*3}
${q}* 4 = ${q*4}
${q}* 5  = ${q*5}
${q}* 6  = ${q*6}
${q}* 7  = ${q*7}
${q}* 8  = ${q*8}
${q}* 9  = ${q*9}
${q}* 10  = ${q*10}`)
} else {
   console.log ("nesidalina")
}

// 4.2 
if (q%2 === 0) {
   console.log (q, Math.pow (q,2), q/2);
} else {"skaicius lyginis"}

//4.3
if (q%7 !==0) {
   let o=5;
   console.log (q+o);
   console.log (q-o);
   console.log (q*o);
   console.log (q/o);
}




/// else if 


let w=3
let e=4
let r=7

if (w>e) {
   console.log ("pirmas didesnis uz antra")
}
else if (e>r) {
   console.log ("antras didesnis uz trecia")
}
else if (r>w) {
   console.log ("trecias didesnis uz pirma")
}
else if (w==e) {
   console.log ("abu yra lygus")
}
else if (e==r) {
   console.log ("antras ir trecias yra lygus")
}
else if (w==0) {
   console.log ("pirmas lygus 0")
}
else if (e<0) {
   console.log ("antras yra neigiamas")
}
else if (r>0) {
   console.log ("trecias yrra teigiamas")
}


//5 egzo pazymys

let paz=4

if (paz==10) {
   console.log ("puiku")
}
else if (paz>=9) {
   console.log ("labai gerai")
}
else if (paz>=7) {
   console.log ("gerai")
}
else if (paz>=5) {
   console.log ("patenkinamai")
}
else if (paz<=5) {
   console.log ("egz neislaikytas")
}

// tik else.

let  failas = "mycomputer/failai/nuotraukos/profilis.jpeg"

if (failas.endsWith (".jpeg")) {
   console.log ("ikeliamas .jpeg failas")
} else {
   console.log ("Prasome pasirinkti .jpeg faila")
}


let s= 1

if (s % 2 == 0) {
   console.log ("skaicius yra lyginis")
} else if (s%5 == 0){
   console.log ("skaicius dalinasi is 5")
} else if (s==3) {
   console.log ("skaicius lygus 3")
} else {
   console.log ("Klaida")
}

let s1=1
let s2=2
let s3=3

if (s1===s2) {
   console.log ("Pirmi du skaiciai lygus")
} else if (s1===s3){
   console.log (" pirmas ir trecias lygus")
}
else if (s3>s1){
   console.log ("trecias didesnis uz pirma")
}
else if (s2 === s3*2){
   console.log (" pirmas ir trecias lygus")
}
else if (s1 % 3 == 0){
   console.log (" pirmas  dalinasi is 3")
}
else {
   console.log (" Klaida")
}


// figuros


/*const figura = document.querySelector ("#figura");
const stiliai = window.getComputedStyle(figura)
const figurosPlotis = figura.clientWidth;
const figurosAukstis = figura.clientHeight;
const kvadratoRiba = 200;

if (stiliai.borderRadius == "50%") {
   figura.style.backgroundColor = "purple";
   } else {
    if (figurosPlotis === figurosAukstis) {
      if (figurosPlotis >= kvadratoRiba){
      figura.style.backgroundColor="red";
      } else {
      figura.style.backgroundColor="blue";
      }
   } else {
      figura.style.backgroundColor = "green"
   }
}*/


// if && ir ||

//12
let m = 1
let n = 8
let o = 7

if (m>n && m>o) {
   console.log (m, "yra didziausias skaicius" )
} else if (n>m && n>o) {
   console.log (n, "yra didziausias skaicius" )
} else if (o>m && o>n) {
   console.log (o, "yra didziausias skaicius" )
}


//13
if (m<n && m<o) {
   console.log (m, "yra maziausias skaicius" )
} else if (n<m && n<o) {
   console.log (n, "yra maziausias skaicius" )
} else if (o<m && o<n) {
   console.log (o, "yra maziausias skaicius" )
}

//14

let paz1=6;
let paz2=1;
let paz3=2;

vidurkis = (paz1+paz2+paz3)/3;

if (vidurkis>=8 && vidurkis <= 10) {
   console.log ("Vidurkis yra tarp 8-10")
} else if (vidurkis>=5 && vidurkis <= 8) {
   console.log ("vidurkis yra tarp 5-8")
} else {
   console.log ("vidurkis yra maziau negu 5")
} 


//15 

let skaicius1= 20;
let skaicius2 = 6;

if (skaicius1>skaicius2||skaicius1 === 0) {
   console.log ("1 skaicius didesnis uz antra arba = 0")
} else {
   console.log ("1 skaicius arba nera didesnis uz antra arba nelygus 0")
}

if (skaicius2>skaicius1||skaicius1 === 5) {
   console.log ("2 skaicius didesnis uz pirma arba = 5")
} else {
   console.log ("2 skaicius arba nera didesnis uz pirma arba nelygus 5")
}

if (skaicius1>skaicius2 && skaicius1 === 20) {
   console.log ("1 skaicius didesnis uz antra ir yra = 20")
} else {
   console.log ("1 skaicius arba nera didesnis uz antra ir yra nelygus 20")
}

if (skaicius2>skaicius1 && skaicius1 <= 100) {
   console.log ("2 skaicius didesnis uz pirma ir yra mazesnis uz 100")
} else {
   console.log ("2 skaicius nera didesnis uz pirma ir nelygus 100")
}

/* kepykla 
1. Apibrėžti duomenys: Darbo valandų per dieną - 8 val.

Jūsų suvedami duomenys:

1. Kiek darbuotojas gali iškepti kepalų per valandą. 
2. Kiek darbuotojų turi kepykla.
3. Vieno kepalo savikaina.
4. Vieno kepalo pardavimo kaina.
5. Kiek kepykla turi tą dieną iškepti kepalų (užsakymai). */

let darboH = 8;
let darbuotojoMax = 6;
let darbuotojai=10;
let savikaina = 2;
let pardavimoKaina = 8;
let uzsakymai = 450;

//1
let MaxPerDiena = (darbuotojoMax * darboH) * darbuotojai

console.log ("kepykla iskeps", MaxPerDiena, "kepalus per diena")

//2
let kepaluSavikaina = MaxPerDiena * savikaina;
console.log ("kepalu savikaina yra", kepaluSavikaina, "eur.")

let pajamosPardavus = MaxPerDiena * pardavimoKaina;
console.log ("kepyklos pajamos pardavus kepalus yra", pajamosPardavus, "eur.")

let pelnas = pajamosPardavus - kepaluSavikaina;
console.log ("kepyklos pelnas pardavus visus dienos kepalus yra", pelnas, "eur.")

//3

if (uzsakymai <= MaxPerDiena) {
   console.log ("Kepykla spes padaryti visus uzsakymus")
} else {
   console.log ("Kepykla nespes padaryti visu uzsakymu, ir jiems iki uzsakymo ivykdimo dar reiktu iskepti",(uzsakymai-MaxPerDiena) ,"kepalu")
}

//4

if (uzsakymai <= MaxPerDiena == true) {
   console.log ("Kepykla pilnai ivykdo uzsakyma ir gaus pelna")
} else {
   console.log ("Kepykla nespes padaryti visu uzsakymu, ir jie pelno negaus")
}


















