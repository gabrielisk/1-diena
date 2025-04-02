// TODO: prijunkite šį komponentą prie App.jsx

// TODO: susikurkite šalių masyvą, kuriame būtų 3 objektai,
// kiekvienas objektas turėtų po 3 raktus:
// 1. pavadinimas,
// 2. sostinė,
// 3. gyventojų skaičius

// TODO: atvaizduokite visas šalis norimu formatu

const salys = [
    {
        pavadinimas: "Lietuva",
        sostine:"Vilnius",
        gyventojuSkaicius: "1mln"
    },
    {
        pavadinimas: "Ispanija",
        sostine:"Madridas",
        gyventojuSkaicius: "10mln"
    },
    {
        pavadinimas: "Lenkija",
        sostine:"Varsuva",
        gyventojuSkaicius: "2mln"
    }
]

const Komp8 = () => {
    return (
        <div>
             <th>
                            <td>Salis|</td>
                            <td>Sostine|</td>
                            <td>Gyventoju Skaicius|</td>
            </th> 
            {salys.map((salis) =>(
                <div>
                    <table border={1}>
                        <tr>
                            <td>{salis.pavadinimas}</td>
                            <td>{salis.sostine}</td>
                            <td>{salis.gyventojuSkaicius}</td>
                        </tr>
                    </table>
                </div>
            ))}
        </div>
    )
}

export default Komp8
