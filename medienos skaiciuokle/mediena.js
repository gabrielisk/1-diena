const mygtukasSkaiciuoti = document.getElementById('skaiciuoti');


mygtukasSkaiciuoti.addEventListener ('click', () => {
    const formData = new FormData(document.getElementById("forma"));
    const formValues =  Object.fromEntries(formData.entries());
    
    const lentosTuris = parseFloat(formValues.plotis) * parseFloat(formValues.ilgis) * parseFloat(formValues.gylis);

    const kubuSuma = lentosTuris * parseFloat(formValues.kiekis);
    const kuboKaina = (kubuSuma * parseFloat(formValues["kubo-kaina"])) || 0 ;
    const galutineKaina = kuboKaina.toFixed(2)

    document.getElementById('kaina').innerText = galutineKaina;
})
