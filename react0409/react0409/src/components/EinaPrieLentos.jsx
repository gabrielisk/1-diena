
const EinaPrieLentos = () => {

const studentai = ["Jonas", "Andrius", "Aloyzas", "Jurgis", "Paulius"]

const randomize = () => {
    const pasirinkimas = studentai[Math.floor(Math.random() * studentai.length)];
    alert (`pasirinktas studentas yra: ${pasirinkimas}`)
}
  return (
    <div>
        <hr></hr>
        Studentai: {studentai.join(',')}
        <button onClick={randomize}>Pasirinkti studenta</button>
    </div>
  )
}

export default EinaPrieLentos