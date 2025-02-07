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


//4,  dalinasi, nesidalina ir tt

let q = 6

if (q%5===0) {
   console.log ("isvedame daugybos lentele")
} else {
   console.log ("nesidalina")
}
if (q%2 === 0) {
   console.log (q, Math.pow (q,2), q/2);
} 

if (q%7 !==0) {
   let o=5;
   console.log (q+o);
   console.log (q=o);
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

let  failas = "mycomputer/failai/nuotraukos/profilis.png"

if (failas.endsWith) {
   console.log ("ikeliamas .jpeg failas")
} else {
   console.log ("Prasome pasirinkti .jpeg faila")
}












