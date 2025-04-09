
const Skaiciai = () => {

    const skaiciuMasyvas = [
        5,6,7,89,8,1,2,4
    ]

    const skaiciuotiSuma = () => {
        let atsakymas = skaiciuMasyvas.reduce((a,b) => a +b);
        alert( "Suma yra: " + atsakymas)
    }
    
    const didziausias = () => {
        let didziausiasSk = Math.max(...skaiciuMasyvas);
        alert ("Didziausias skaicius yra: " + didziausiasSk);
    }

  return (
    <div>
        <hr></hr>
        Skaiciai: {skaiciuMasyvas.join(',')}
        <button onClick={skaiciuotiSuma}>Skaiciuoti suma</button>
        <button onClick={didziausias}>Rasti didziausia skaiciu</button>

    </div>
  )
}

export default Skaiciai