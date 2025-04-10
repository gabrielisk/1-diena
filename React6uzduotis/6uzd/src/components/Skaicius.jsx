const Skaicius = () => {
  let kazkoksSkaicius = 5;

  function arLyginis(skaicius) {
    if (skaicius % 2 === 0) {
      return "Lyginis";
    } else {
      return "Nelyginis";
    }
  }

  function arTeigiamas(skaicius) {
    if (skaicius === 0) {
      return "Skaicius yra = 0";
    } else if (skaicius < 0) {
      return "Skaicius yra neigiamas";
    } else if (skaicius > 0) {
      return "Skaicius yra teigiamas";
    } else {
      return "Klaida";
    }
  }

  return (
    <div>
      {kazkoksSkaicius}
      <br></br>
      {arLyginis(kazkoksSkaicius)}
      <br></br>
      {arTeigiamas(kazkoksSkaicius)}
    </div>
  );
};

export default Skaicius;
