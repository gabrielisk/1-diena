// TODO: prijunkite šį komponentą prie App.jsx

// TODO: susikurkite mokymų/kursų masyvą, kuriame būtų bent 3 objektai,
// kiekvienas objektas turėtų po 3 raktus:
// 1. pavadinimas,
// 2. trukmė,
// 3. kaina

// TODO: atvaizduokite visus mokymus/kursus norimu formatu


const kursai = [
    {
        pavadinimas: "programavimas",
        trukme: "9men",
        kaina: 3000,
    },
    {
        pavadinimas: "CNC stakliu operavimas",
        trukme: "3men",
        kaina: 1500,
    },
    {
        pavadinimas: "Duomenu analitika",
        trukme: "6men",
        kaina: 2300,
    }
]


const Komp9 = () => {
    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Kurso pavadinimas</th>
                        <th>Kurso trukme</th>
                        <th>Kurso kaina</th>
                    </tr>
                </thead>
                <tbody>
                    {kursai.map((kursas, index) => (
                        <tr key={index}>
                            <td>{kursas.pavadinimas}</td>
                            <td>{kursas.trukme}</td>
                            <td>{kursas.kaina} EUR</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Komp9
