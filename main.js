//esta es una calculadora de los materiales que harian falta para romper determinadas estructuras en el juego RUST
//arrays Materiales
let materialesUsuario = prompt("De que material es la estructura?(paja,madera,piedra,metal o hq)") 
let material= {
    "paja": 50,
    "madera": 250,
    "piedra": 500,
    "metal": 1000,
    "hq": 2000,
}
let explosivoUsuario=prompt("que explosivo vas a usar?(c4 o misiles)")
let explosivo= {
    "c4": 250,
    "misiles": 125,
    
}
let cantidadEstructuras = prompt("cuantas estructuras deseas destruir?")

//teoricamente esto lo convierte en un array(?)
const materialValido = Object.keys(material)
const explosivoValido = Object.keys(explosivo)

function error () {
    if (materialValido.includes(materialesUsuario)){
        console.log( "material valido" )
        preguntaExplosivos()
    }
    
    if (materialValido.includes(materialesUsuario)&& materialesUsuario == "paja" ){
        alert("rompelo a flechazos maestro")
    }
    
}
error()
cantidadEstructuras 
function preguntaExplosivos(){
    if (explosivoValido.includes(explosivoUsuario)){
        console.log("explosivo Valido")
        
    }
    else{
        console.error("Explosivo invalido")
        alert("Explosivo invalido")
    }
}

let calculado = material[materialesUsuario]*cantidadEstructuras / explosivo[explosivoUsuario]
alert(`Necesitas ${calculado} ${explosivoUsuario}`)

//batalla entre 2 pesonajes del vieojuego
const vidaMaxima = 100
const vidaMinima = 0
const dañoMinimo = 5
const dañoMaximo = 35
let vidaActualPlayer = 100
let vidaActualBot = 100

let round = 0
function convida() {
    return vidaActualPlayer > 0 && vidaActualBot > 0
}
 while (convida()) {
        let disparoPlayer=Math.ceil(Math.random() * (dañoMaximo - dañoMinimo) + dañoMinimo)
        let disparoBot=Math.ceil(Math.random() * (dañoMaximo - dañoMinimo) + dañoMinimo)
    if (disparoPlayer === disparoBot){
        vidaActualBot = vidaActualBot - disparoPlayer
        vidaActualPlayer = vidaActualPlayer - disparoBot
    }
    else if(disparoPlayer < disparoBot){
        vidaActualPlayer = vidaActualPlayer - disparoBot
    }
    if(disparoPlayer > disparoBot){
        vidaActualBot = vidaActualBot - disparoPlayer
    }
    round= round + 1
    console.log("-----------------")
    console.log ("round " +round)
    console.log("tienes " + vidaActualPlayer + " Puntos de vida" )
    console.log("El Cientifico tiene " + vidaActualBot + " puntos de vida" )
    console.log("-----------------")
    if (vidaActualPlayer <= 0 && vidaActualBot <= 0) {
        console.log("Empate Ambos jugadores han sido derrotados.")
    } else if (vidaActualPlayer <= 0) {
        console.log("El Cientifico gana Has sido derrotado.")
    } else if (vidaActualBot <= 0) {
        console.log("Ganaste El bot ha sido derrotado.")
}
}


