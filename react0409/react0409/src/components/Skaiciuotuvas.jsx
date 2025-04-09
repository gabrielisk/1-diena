
const Skaiciuotuvas = () => {


    const skaiciuoti = (event) => {

        const pirmasSkaicius = parseFloat(document.querySelector(".pirmas").value);
        const antrasSkaicius = parseFloat(document.querySelector(".antras").value);

        if (isNaN(pirmasSkaicius) || isNaN(antrasSkaicius)) {
            document.querySelector("#atsakymas").innerText = "Įveskite galiojančius skaičius!";
            return;
          }

        const  veiksmas = event.target.value;
        let rezultatas;
        
        if (veiksmas === "+") {
            rezultatas = pirmasSkaicius + antrasSkaicius;
        } else if (veiksmas === "-") {
            rezultatas = pirmasSkaicius - antrasSkaicius;
        }else if (veiksmas === "*") {
            rezultatas = pirmasSkaicius * antrasSkaicius;
        }else if (veiksmas === "/") {
            rezultatas = pirmasSkaicius / antrasSkaicius;
        } else {
            rezultatas = "Klaida!"
        }
        document.querySelector("#atsakymas").innerText = `${rezultatas}`
    }

    


  return (
    <div style={{textAlign:"center"}}>
        <hr></hr>
        <input type="number" className="pirmas"></input><br></br>
        <input type="number" className="antras"></input><br></br>
        <button value={"+"} onClick={skaiciuoti}>+</button>
        <button value={"-"} onClick={skaiciuoti}>-</button>
        <button value={"*"} onClick={skaiciuoti}>*</button>
        <button value={"/"} onClick={skaiciuoti}>/</button>
        <p id="atsakymas">Atsakymas: </p>
    </div>
  )
}

export default Skaiciuotuvas