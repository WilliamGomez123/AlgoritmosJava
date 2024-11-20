function saludar(){
    console.log("Hola mundo")
    a("Hello world!!")
}

// ALGORITMO QUE REALIZA UNA SUMA ENTRE 2 VALORES INGRESADOS POR EL USUARIO
function Suma(){
    // 1. DECLARAR LAS VARIABLES NECESARIAS PARA LA FUNCION O ALGORITMO

    let A = 0
    let B = 0
    let SUMA = 0

    //2. SOLICITAR AL USUARIO QUE INGRESE LOS VALORES Y ESTOS SE ASIGNAN A LAS VARIABLES

    A = parseInt(prompt("INGRESE EL PRIMER VALOR A SUMAR"))
    B = parseInt(prompt("INGRESE EL SEGUNDO VALOR A SUMAR"))

    //3. REALIZAR LA OPERACION

    SUMA = A + B


    //4. MOSTRAR EL RESULTADO
    
    alert("EL RESULTADO DE LA SUMA ES " + SUMA)

}


// ALGORIRMO QUE REALIZA UNA SUMA RESTA MULTIPLICACION Y DIVICION ENTRE DOS VALORES INGRESADOS POR EL USUARIO


function operacionesb() {

    let A = 0
    let B = 0
    let SUMA = 0
    let RESTA = 0
    let MULTIPLICACION = 0
    let DIVICION = 0

    A = parseInt(prompt("INGRESE EL PRIMER VALOR A SUMAR RESTAR MULTIPLICAR Y DIVIDIR"))
    B = parseInt(prompt("INGRESE EL SEGUNDO VALOR A SUMAR RESTAR MULTIPLICAR Y DIVIDIR"))

    SUMA = A + B
    RESTA = A - B
    MULTIPLICACION = A * B
    DIVICION = A / B

    alert("EL RESULTADO DE LA SUMA ES " + SUMA)
    alert("EL RESULTADO DE LA RESTA ES " + RESTA)
    alert("EL RESULTADO DE LA MULTIPLICACION ES " + MULTIPLICACION)
    alert("EL RESULTADO DE LA DIVISION ES " + DIVICION)

}



// REALIZAR UN ALGORITMO QUE DETERMINE EL CUADRADO DE UN NUMERO INGRESADO


function cuadradonumero() {

let A = 0
let cuadrado = 0

A = parseInt(prompt("INGRESE EL NUMERO A CALCULAR"))

CUADRADO = A * A 

alert("EL CUADRADO DEL NUMERO ES " + CUADRADO)

}

// CUARTO: REALIZAAR UN ALGORITMO QUE DETERMINE EL AREA DE UN TRIANGULO APARTIR DE LA BASE Y LA ALTURA INGRESADAS POR EL USUARIO   B*A _2

function areatriangulo(){

    let BASE = 0
    let ALTURA = 0
    let AREA = 0 

    BASE = parseInt(prompt("INGRESE LA BASE"))
    ALTURA = parseInt(prompt("INGRESE LA ALTURA"))

    AREA = (BASE * ALTURA) /2

    alert("EL AREA DEL TRIANGULO ES " + AREA)
    
}

// QUINTO: CONVERCION DE UNIDADES REALIZAR UN ALGORITMO QUE COMVIERTA EN MILIMETROS CENTIMETROS METROS Y KILOMETROS UN VALOR DADO EN PULGADAS 

function ConversionUn(){

    let MM = 0
    let CM = 0
    let M = 0
    let KM = 0
    let PULGADAS = 0 

    PULGADAS = parseInt(prompt("INGRESE LAS PULGADAS DEL VALOR A MEDIR "))

    MM = PULGADAS * 25.4
    CM = PULGADAS * 2.54
    M = PULGADAS * 0.0254
    KM = PULGADAS * 0.0000254

    alert("LAS PULGADAS EN MILIMETROS SON " + MM)
    alert("LAS PULGADAS EN CENTIMETROS SON " + CM)
    alert("LAS PULGADAS EN METROS SON " + M)
    alert("LAS PULGADAS EN KILOMETROS SON " + KM)
    
}





// SEXTO: ALGORITMO QUE DETERMINE SI UN NUMERO INGRESADO POR EL USUARIO ES PAR O IMPAR

function Paroimpar(){

    let num = 0

    num = parseInt(prompt("INGRESE EL NUMERO DEL QUE QUIERA SABER SI ES PAR O IMPAR "))

    if (num % 2 ==0) {
        alert("EL NUMERO ES PAR")
    } else {
        alert("EL NUMERO ES IMPAR")

    }

}

// SEPTIMO: ALGORITMO QUE DETERMINE EL MAYOR DE DOS NUMEROS INGRESADOS POR EL USUARIO

function mayorNumero(){
    let NUMERO1 = 0
    let NUMERO2 = 0

    NUMERO1 = parseInt(prompt("INGRESE EL PRIMER NUMERO"))
    NUMERO2 = parseInt(prompt("INGRESE EL SEGUNDO NUMERO"))

    if (NUMERO1 > NUMERO2) {
        alert("EL NUMERO MAYOR ES " + NUMERO1)
    } else if (NUMERO2 > NUMERO1) {
        alert("EL NUMERO MAYOR ES " + NUMERO2)
    }
    else if (NUMERO2 == NUMERO1) {
        alert("LOS 2 NUMERO SON IGUALES")
    }
        
}


// OCTAVO: ALGORITMO QUE DETERMINE EL MENOR DE TRES NUMERO INGRESADOS POR EL USUARIO

function menorNumero(){

    let NUMERO1 = 0
    let NUMERO2 = 0
    let NUMERO3 = 0

    NUMERO1 = parseInt(prompt("INGRESE EL PRIMER NUMERO"))
    NUMERO2 = parseInt(prompt("INGRESE EL SEGUNDO NUMERO"))
    NUMERO3 = parseInt(prompt("INGRESE EL TERCER NUMERO"))

    if ((NUMERO1 < NUMERO2) & (NUMERO1 < NUMERO3) ) {
        alert("EL NUMERO MENOR ES " + NUMERO1)
    }

    else if ((NUMERO2 < NUMERO1) & (NUMERO2 < NUMERO3) ) {
        alert("EL NUMERO MENOR ES " + NUMERO2)
    
    }
    else if ((NUMERO3 < NUMERO1) & (NUMERO3 < NUMERO2) ) {
        if(NUMERO3< NUMERO2)
        alert("EL NUMERO MENOR ES " + NUMERO3)
     }
    else if ((NUMERO1 == NUMERO2) & (NUMERO1 == NUMERO3)){
        alert("LOS 3 NUMERO SON IGUALES")

    }
}

// NOVENO: EL COLEGIO ABC REQUIERE UN SISTEMA QUE CAPTURE EL NOMBRE DEL ESTUDIANTE, MATERIA Y 7 CALIFICACIONES ENTRE EL 1 Y 10 CON ESTA INFORMACION  DETERMINAR SI EL ESTUDIANTE APROBO O REPROBO TENINEDO EN CUENTA QUE SE APRUEBA CON 6.1

function promedionotas() {

    let nombre = 0
    let materia = 0
    let cal1 = 0
    let cal2 = 0
    let cal3 = 0
    let cal4 = 0
    let cal5 = 0
    let cal6 = 0
    let cal7 = 0
    let sumacal = 0
    let totalsuma = 0
    let calfinal = 0

    nombre = (prompt("INGRESE SU NOMBRE"))
    materia = (prompt("INGRESE EL NOMBRE DE LA MATERIA"))
    cal1 = parseInt(prompt("INGRESE LA PRIMERA CALIFICACION"))
    cal2 = parseInt(prompt("INGRESE LA SEGUNDA CALIFICACION"))
    cal3 = parseInt(prompt("INGRESE LA TERCERA CALIFICACION"))
    cal4 = parseInt(prompt("INGRESE LA CUARTA CALIFICACION"))
    cal5 = parseInt(prompt("INGRESE LA QUINTA CALIFICACION"))
    cal6 = parseInt(prompt("INGRESE LA SEXTA CALIFICACION"))
    cal7 = parseInt(prompt("INGRESE LA SEPTIMA CALIFICACION"))

    sumacal = cal1 + cal2 + cal3 + cal4 + cal5 + cal6+ cal7
    totalsuma = sumacal
    calfinal = totalsuma /7

    if (calfinal > 6.1) {
        alert(" El estudiante " + nombre + " Aprobo " + materia + " Con " + calfinal)
    }
    else if (calfinal < 6.1){
        alert(" El estudiante " + nombre + " Reprobo " + materia + " Con " + calfinal)
    }



}




// DECIMO: UN INDIVIDUO DESEA INVERTIR SU CAPITAL EN UN BANCO Y REQUIERE SABER CUANTO DINERO GANARA DESPUES DE N NUMERO DE AÑOS TENIENDO EN CUENTA QUE EL BANCO PAGA UN INTERES MENSUAL  DEL 0,7%


function tiempoinversion(){
    let capital, tiempo, interesGanancia, totalGanancia

    capital = parseInt(prompt("INGRESE EL CAPITAL A INVERTIR"))
    tiempo = parseInt(prompt("INGRESE EL TIEMPO EN AÑOS"))

    interesGanancia = (capital * 0.084) * tiempo;
    totalGanancia = capital + interesGanancia;

    alert("La ganancia es de : " + interesGanancia)
    alert("La ganancia total es de: " + totalGanancia)


}