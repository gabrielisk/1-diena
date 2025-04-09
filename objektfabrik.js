// 1. Praeitame skyriuje sukurtą darbuotojo objektą pasikopijuokite į naują
// gamyklos (factory) funkciją, kuri galėtų sukurti daugiau tokių objektų.
// Pritaikykite objektą, kad duomenis prisiskirtų iš funkcijos argumentų. Už
// funkcijos ribų sukurkite ir sudėkite keletą tokių darbuotojų į masyvą.
// Tuomet mėginkite prasukti ciklą pro sukurtą darbuotojų masyvą ir
// išsiveskite darbuotojų duomenis, taip pat, pakvieskite skaičiavimų
// funkcijas ir pasižiūrėkite gaunamus rezultatus.


function darbuotojas_factory (profesija, alga, amzius) {
    return  {
    profesija,
    alga,
    amzius,
    isvesti_info: function () {
        console.log ("Darbuotojo profesija imoneje: ", this.profesija);
        console.log ("Darbuotojo alga imoneje: ", this.alga);
        console.log ("Darbuotojo amzius imoneje: ", this.amzius);
        }
    };
}
let darbuotojas1 = darbuotojas_factory ("stalius", 1300,45);
let darbuotojas2 = darbuotojas_factory ("Direktorius", 4000,60);

darbuotojas1.isvesti_info()
console.log()
darbuotojas2.isvesti_info()



