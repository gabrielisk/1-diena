import Paslauga from "./Paslauga"
import "./Paslaugos.css"

const Paslaugos = () => {
  return (
    <>
    <h2 className="teikiamos-paslaugos">Teikiamos paslaugos:</h2>
    <div className="paslaugos-wrapper">
        <Paslauga />
        <Paslauga />
        <Paslauga />
        </div>
    </>
    
  )
}

export default Paslaugos