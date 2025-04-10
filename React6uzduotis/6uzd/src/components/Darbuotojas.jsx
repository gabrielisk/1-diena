const Darbuotojas = () => {
  let darbuotojas = {
    vardas: "Dainius",
    profesija: "Technikas",
    atlyginimas: 1200,
    etatas: 0.5,
    darboStazas: 5,
  };

  const informacija = [];

  for (let savybe in darbuotojas) {
    informacija.push(
      <p>
        {savybe}: {darbuotojas[savybe]}
      </p>
    );
  }

  function kiekUzdirbes() {
    let metuAlga = 12 * darbuotojas.atlyginimas;
    let visaAlga = metuAlga * darbuotojas.darboStazas;
    return visaAlga / 2;
  }

  function ilgametisDarbuotojas() {
    if (darbuotojas.darboStazas >= 5) {
      return `ilgametis`;
    } else if (darbuotojas.darboStazas < 5) {
      return `naujokas`;
    } else {
      return `klaida`;
    }
  }

  function patikrintiAtlyginima(sugalvotasAtlyginimas) {
    if (darbuotojas.atlyginimas >= sugalvotasAtlyginimas) {
      return `Darbuotojas uždirba lygiai arba daugiau nei ${sugalvotasAtlyginimas} eurų.`;
    } else {
      return `Darbuotojas uždirba mažiau nei ${sugalvotasAtlyginimas} eurų.`;
    }
  }

  return (
    <div>
      {informacija}
      <p>
        Darbuotojas per visus darbo metus dirbdamas{" "}
        {darbuotojas.etatas.toFixed(1) + " "}
        etatu, uzdirbo: {kiekUzdirbes()} eur.
      </p>
      {ilgametisDarbuotojas()}
      <br></br>
      {patikrintiAtlyginima(50)}
    </div>
  );
};

export default Darbuotojas;
