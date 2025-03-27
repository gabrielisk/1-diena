const receptai = [
    {
        raktas: 'vistiena',
        ingredientai:[
            {pavadinimas: "vistiena", kiekis: 100},
            {pavadinimas: "grietinele", kiekis: 200},
            {pavadinimas: "salotos", kiekis: 90} ,  
            {pavadinimas: "ryziai", kiekis: 120},
        ],
        raktas: 'Tortas',
        ingredientai:[
            { pavadinimas: "miltai", kiekis: 200},
            { pavadinimas: "melynes", kiekis: 100},
            { pavadinimas: "cukrus", kiekis: 20},   
            { pavadinimas: "kiausiniai", kiekis: 2},
        ],
        raktas: 'Makaronai',
        ingredientai:[
            { pavadinimas: "makaronai", kiekis: 200},
            { pavadinimas: "mesa", kiekis: 350},
            { pavadinimas: "suris", kiekis: 120},   
        ],
    }
]






document.querySelectorAll ('.receptas').forEach(function (receptas) {
    receptas.addEventListener ('click', function () {
        hideAll()
        this.querySelector('svg').style.display="block";
    })
})

function hideAll () {
    document.querySelectorAll ('.receptas').forEach(function (receptas) {
            receptas.querySelector('svg').style.display="none";
    });
}
