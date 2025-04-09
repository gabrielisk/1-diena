const Tikrinimas = () => {

    const skaicius = Math.floor((Math.random() *100) +1);

   function arLyginis () {
    if (skaicius % 2 === 0) {
        alert ("Skaicius yra lyginis")
    }   else {
        alert ("Skaicius yra nelyginis")
    }
   }

   function arDidesnis () {
    if (skaicius > 30) {
        alert ("Skaicius yra didesnis uz 30")
    }   else {
        alert ("Skaicius yra mazesnis arba lygus 30")
    }
   }

   function arPirminis () {
    if (skaicius % 2 ===0 && skaicius % skaicius ===0) {
        alert ("Skaicius yra pirminis")
    }   else {
        alert ("Skaicius nera pirminis")
    }
   }

  return (
    <div>
        {skaicius}
        <button onClick={arLyginis}>Tikrinti ar lyginis</button>
        <button onClick={arDidesnis}>Tikrinti ar didesnis uz 30</button>
        <button onClick={arPirminis}>Tikrinti ar skaicius pirminis</button>


    </div>
  )
}

export default Tikrinimas