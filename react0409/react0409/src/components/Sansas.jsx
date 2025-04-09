
const Sansas = () => {

const skaicius = Math.floor(Math.random() * 10) + 1;

const tikrinti = (skaicius) => {
    if (skaicius === 5) {
        alert("Laimejote!");
    } else {
        alert("Nepavyko, bandykite dar karta!");
    }
}

  return (
    <>
        <hr></hr>
        <p style={{textAlign:"center"}}>Sugeneruotas skaicius yra:  {skaicius}</p><br></br>
        <button onClick={() => tikrinti(skaicius)}>Patikrinti</button>
        <hr></hr>
    </>
  )

}

export default Sansas