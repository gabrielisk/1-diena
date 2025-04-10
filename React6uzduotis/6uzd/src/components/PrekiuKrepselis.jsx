const PrekiuKrepselis = () => {
  const krepselis = [
    {
      id: 1,
      pavadinimas: "Svarkas",
      kaina: 500,
      kiekis: 15,
      nuolaida: 50,
    },
    {
      id: 2,
      pavadinimas: "Kelnės",
      kaina: 100,
      kiekis: 30,
      nuolaida: 30,
    },
    {
      id: 3,
      pavadinimas: "Marškiniai",
      kaina: 150,
      kiekis: 25,
      nuolaida: 20,
    },
  ];

  // Funkcija, kuri priima masyvą ir sugeneruoja lentelę
  function spausdinti(prekes) {
    // Imame pirmąją prekę, kad gautume jos laukus (raktus)
    const laukai = Object.keys(prekes[0]);

    return (
      <table>
        <thead>
          <tr>
            {/* Dinamiškai generuojame <th> pagal lauko pavadinimus */}
            {laukai.map((laukas, index) => (
              <th>{laukas.charAt(0).toUpperCase() + laukas.slice(1)}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {/* Pereiname per kiekvieną prekę ir sugeneruojame <td> */}
          {prekes.map((preke) => (
            <tr>
              {laukai.map((laukas, index) => (
                <td>
                  {preke[laukas]}
                  {laukas === "kaina"
                    ? "EUR"
                    : laukas === "kiekis"
                    ? "vnt"
                    : laukas === "nuolaida"
                    ? "%"
                    : ""}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    );
  }

  function skaiciuotiBendraNuolaida(prekes) {
    return prekes.reduce((suma, preke) => suma + preke.nuolaida, 0);
  }
  function bendrKaina(prekes) {
    return prekes.reduce((suma, preke) => suma + preke.kiekis * preke.kaina, 0);
  }

  return (
    <div>
      <h1>Prekių Krepšelis</h1>
      {spausdinti(krepselis)}{" "}
      {/* Iškviečiame funkciją ir perduodame prekių masyvą */}
      <p>Bendra nuolaida: {skaiciuotiBendraNuolaida(krepselis)}%</p>
      <p>Bendra kaina: {bendrKaina(krepselis)}eur</p>
    </div>
  );
};

export default PrekiuKrepselis;
