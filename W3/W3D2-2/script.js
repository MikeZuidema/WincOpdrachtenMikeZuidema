const huiswerkMaken = function (vak, callback) {
    console.log(`Ok, ok, ik ga nu mijn ${vak} huiswerk maken`);
    setTimeout(function () {
        callback()
    }, 5000)
}

const klaarMetHuiswerk = function () {
    console.log("kijk paps/mams, ik ben klaar met mijn huiswerk!")
}
huiswerkMaken("Wiskunde", klaarMetHuiswerk)