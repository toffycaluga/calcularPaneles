//? El problema a resolver consiste en encontrar la máxima cantidad de rectángulos de dimensiones “a” y “b” (paneles solares) que caben dentro de un rectángulo de dimensiones “x” e “y” (techo), según se muestra en la siguiente


// Funcion para calcular la cantidad de paneles que caben en una orientacion específica.
function calcularPaneles(techoWidth, techoHeigth, panelWidth, panelHeight) {
    // Se calculan la cantidad de paneles que caen en el ancho del techo
    const panelesX = Math.floor(techoWidth / panelWidth);
    // Se calculan la cantidad de paneles que caen el alto del techo
    const panelesY = Math.floor(techoHeigth / panelHeight);

    // console.log("Cantindad de paneles en horizontal: ", panelesX);
    // console.log("Cantindad de paneles en vertical: ", panelesY);
    // console.log("Cantindad total de paneles que caben: ", panelesX * panelesY);
    return {
        panelesX: panelesX,
        panelesY: panelesY,
        totalPaneles: panelesX * panelesY,
        with: panelWidth,
        height: panelHeight
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


function llenarSobrante(techoWidth, techoHeight, panelWidth, panelHeight) {

    let mejorOpcion = buscarMejorOpcion(techoWidth, techoHeight, panelWidth, panelHeight);

    // Calcular espacio sobrante y intentar llenarlo con la otra orientación
    const espacioSobranteHorizontal = techoWidth - (mejorOpcion.panelesX * mejorOpcion.with);
    const espacioSobranteVertical = techoHeight - (mejorOpcion.panelesY * mejorOpcion.height);

    // Intenta colocar paneles en el espacio sobrante horizontal
    if (espacioSobranteHorizontal > 0) {
        // console.log("hay espacio para paneles en horizontal");
        mejorOpcion.llenarSobrante = buscarMejorOpcion(techoWidth, espacioSobranteHorizontal, panelWidth, panelHeight);
        mejorOpcion = llenarTotales(mejorOpcion)
        console.log(mejorOpcion);
    } else {
        mejorOpcion = llenarTotales(mejorOpcion)
    }

    // Intenta colocar paneles en el espacio sobrante vertical
    if (espacioSobranteVertical > 0) {
        // se vuelve a analizar el espacio disponible
        mejorOpcion.llenarSobrante = buscarMejorOpcion(techoWidth, espacioSobranteVertical, panelWidth, panelHeight);
        // se agregan datos al objeto 
        mejorOpcion = llenarTotales(mejorOpcion)

    } else {
        mejorOpcion = llenarTotales(mejorOpcion)
    }
    console.log(mejorOpcion);

}

function llenarTotales(mejorOpcion) {
    if (mejorOpcion.llenarSobrante) {
        const totalPaneles = {
            total: mejorOpcion.totalPaneles + mejorOpcion.llenarSobrante.totalPaneles,
            totalprimeraposicion: mejorOpcion.totalPaneles,
            totalRotados: mejorOpcion.llenarSobrante.totalPaneles
        }
        mejorOpcion.totales = totalPaneles;
    } else {

        const totalPaneles = {
            total: mejorOpcion.totalPaneles,
            totalprimeraposicion: mejorOpcion.totalPaneles,
            totalRotados: 0
        }
        mejorOpcion.totales = totalPaneles;
    }
    return mejorOpcion
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



llenarSobrante(4, 5, 2, 1);
// {
//     panelesX: 2,
//     panelesY: 5,
//     totalPaneles: 10,
//     with: 2,
//     height: 1,
//     orientacion: 'sin rotar'
//   }
//   espacio Sobrante Horizontal:  0
//   espacio Sobrante Vertical:  0

llenarSobrante(3, 5, 2, 1);
// {
//     panelesX: 3,
//     panelesY: 2,
//     totalPaneles: 6,
//     with: 1,
//     height: 2,
//     orientacion: 'rotados',
//     llenarSobrante: {
//       panelesX: 1,
//       panelesY: 1,
//       totalPaneles: 1,
//       with: 2,
//       height: 1,
//       orientacion: 'sin rotar'
//     },
//     totales: { total: 7, totalprimeraposicion: 6, totalRotados: 1 }
//   }