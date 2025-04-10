const TrysSkaiciai = () => {
  let skaicius1 = 2;
  let skaicius2 = 6;
  let skaicius3 = 5;

  function vienameParagrafe() {
    return `Pirmas skaičius: ${skaicius1}, antras skaičius: ${skaicius2}, trečias skaičius: ${skaicius3}`;
  }

  function kurisDidziausias() {
    if (skaicius1 > skaicius2 && skaicius1 > skaicius3) {
      return `${skaicius1} yra didziausias`;
    } else if (skaicius2 > skaicius1 && skaicius2 > skaicius3) {
      return `${skaicius2} yra didziausias`;
    } else if (skaicius3 > skaicius2 && skaicius3 > skaicius1) {
      return `${skaicius3} yra didziausias`;
    } else {
      return `Klaida`;
    }
  }

  function suma() {
    return `Siu skaiciu suma yra: ${skaicius1 + skaicius2 + skaicius3}`;
  }

  return (
    <div>
      <p>{vienameParagrafe()}</p>
      <p>{kurisDidziausias()}</p>
      <p>{suma()}</p>
    </div>
  );
};

export default TrysSkaiciai;
