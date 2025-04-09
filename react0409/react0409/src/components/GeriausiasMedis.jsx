
const GeriausiasMedis = () => {

    const medis = (pavadinimas) => {
        if (pavadinimas === "Uosis") {
            alert ("oho koks rimtas")
        } else if (pavadinimas === "ąžuolas") {
            alert ("labai mielas rastas!")
        } else {
            alert ("kazkoks medis")
        }
    }


  return (
    <div>
        <hr></hr>
        <button onClick={() => medis("Uosis")}>Uosis</button>
        <button onClick={() => medis("ąžuolas")}>ąžuolas</button>
        <button onClick={() => medis("Pusis")}>Pusis</button>
    </div>
  )
}

export default GeriausiasMedis