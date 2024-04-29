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
    }
}

function BuscarMejorOpcion(techoWidth, techoHeight, panelWidth, panelHeight) {

    // Calculamos la cantidad de paneles para ambas orientaciones
    const panelesSinRotar = calcularPaneles(techoWidth, techoHeight, panelWidth, panelHeight);
    const panelesRotados = calcularPaneles(techoWidth, techoHeight, panelHeight, panelWidth);

    //determinamos la mejor opcion de orientacion 
    const mejorOpcion = panelesSinRotar.totalPaneles > panelesRotados.totalPaneles ? panelesSinRotar : panelesRotados;

    console.log("Cantindad de paneles en horizontal: ", mejorOpcion.panelesX);
    console.log("Cantindad de paneles en vertical: ", mejorOpcion.panelesY);
    console.log("Cantindad total de paneles que caben: ", mejorOpcion.totalPaneles)
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
console.log("--------------------");
console.log("con paneles 2x1 en parametros");
console.log("--------------------");
BuscarMejorOpcion(4, 5, 2, 1)

console.log("--------------------");
console.log("con paneles 1x2 en parametros");
console.log("--------------------");
BuscarMejorOpcion(4, 5, 1, 2)

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