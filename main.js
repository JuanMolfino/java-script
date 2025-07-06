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



