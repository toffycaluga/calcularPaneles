//? El problema a resolver consiste en encontrar la máxima cantidad de rectángulos de dimensiones “a” y “b” (paneles solares) que caben dentro de un rectángulo de dimensiones “x” e “y” (techo), según se muestra en la siguiente


// Funcion para calcular la cantidad de paneles que caben en una orientacion específica.
function calcularPaneles(techoWidth, techoHeigth, panelWidth, panelHeigth) {
    // Se calculan la cantidad de paneles que caen en el ancho del techo
    const panelesX = Math.floor(techoWidth / panelWidth);
    // Se calculan la cantidad de paneles que caen el alto del techo
    const panelesY = Math.floor(techoHeigth / panelHeigth);

    // console.log("Cantindad de paneles en horizontal: ", panelesX);
    // console.log("Cantindad de paneles en vertical: ", panelesY);
    // console.log("Cantindad total de paneles que caben: ", panelesX * panelesY);
    return {
        panelesX: panelesX,
        panelesY: panelesY,
        totalPaneles: panelesX * panelesY,
        with: panelWidth,
        panel: panelHeigth
    }
}

function buscarMejorOpcion(techoWidth, techoHeight, panelWidth, panelHeight) {

    // Calculamos la cantidad de paneles para ambas orientaciones
    const panelesSinRotar = calcularPaneles(techoWidth, techoHeight, panelWidth, panelHeight);
    const panelesRotados = calcularPaneles(techoWidth, techoHeight, panelHeight, panelWidth);

    let mejorOpcion = {}
    //determinamos la mejor opcion de orientacion 
    if (panelesSinRotar.totalPaneles > panelesRotados.totalPaneles) {

        mejorOpcion = panelesSinRotar;
        mejorOpcion.orientacion = "sin rotar"
    } else {
        mejorOpcion = panelesRotados;
        mejorOpcion.orientacion = "rotados"
    }



    // console.log("Cantindad de paneles en horizontal: ", mejorOpcion.panelesX);
    // console.log("Cantindad de paneles en vertical: ", mejorOpcion.panelesY);
    // console.log("Cantindad total de paneles que caben: ", mejorOpcion.totalPaneles)
    return mejorOpcion
}
function LlenarSobrante(techoWidth, techoHeight, panelWidth, panelHeight) {

    const mejorOpcion = buscarMejorOpcion(techoWidth, techoHeight, panelWidth, panelHeight);

    // Calcular espacio sobrante y intentar llenarlo con la otra orientación
    const espacioSobranteHorizontal = techoWidth - (mejorOpcion.panelesX * mejorOpcion.with);
    const espacioSobranteVertical = techoHeight - (mejorOpcion.panelesY * mejorOpcion.height);

    // Intenta colocar paneles en el espacio sobrante horizontal
    console.log(mejorOpcion);
    if (espacioSobranteHorizontal > 0) {
        console.log("hay espacio para paneles en horizontal");
    } else {
        console.log("hay espacio para paneles en horizontal");
    }

    // Intenta colocar paneles en el espacio sobrante vertical
    if (espacioSobranteVertical > 0) {
        console.log("hay espacio para paneles en vertical");
    } else {
        console.log("no hay espacio para paneles en vertical");
    }
}




// se le entregan  datos de techo y paneles y llamamos a la funcion calcularPaneles
// console.log("--------------------");
// console.log("Se calculan en un techo de 4x5 con paneles de 2x1");
// calcularPaneles(4, 5, 2, 1)
// Cantindad de paneles en horizontal:  2
// Cantindad de paneles en vertical:  5
// Cantindad total de paneles que caben:  10

// console.log("--------------------");
// console.log("Se calculan en un techo de 4x5 con paneles de 1x2");
// calcularPaneles(4, 5, 1, 2)
// Cantindad de paneles en horizontal:  4
// Cantindad de paneles en vertical:  2
// Cantindad total de paneles que caben:  8


// Probamos en ambas opciones para ver resultado 
// console.log("--------------------");
// console.log("con paneles 2x1 en parametros");
// console.log("--------------------");
// buscarMejorOpcion(4, 5, 2, 1)

// console.log("--------------------");
// console.log("con paneles 1x2 en parametros");
// console.log("--------------------");
// buscarMejorOpcion(4, 5, 1, 2)

// --------------------
// con paneles 2x1 en parametros
// Cantindad de paneles en horizontal:  2
// Cantindad de paneles en vertical:  5
// Cantindad total de paneles que caben:  10
// --------------------
// con paneles 1x2 en parametros
// --------------------
// Cantindad de paneles en horizontal:  2
// Cantindad de paneles en vertical:  5
// Cantindad total de paneles que caben:  10



LlenarSobrante(4, 5, 2, 1);