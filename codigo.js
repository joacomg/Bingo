let MaximoNum = 20;
function RandomNumero(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
let RandomNum = RandomNumero(1, 20);
app.post('/', (req, res) => {
    res.send(RandomNum)
  })
  let Nombre = "";
  let Numeros = [];
  let Nombres = [];
  let Cartones = [];
function ActualizarDatos(){
    app.post('/', (req, res) => {
        res.send(Nombres,Cartones,Numeros,Nombre)
    })
}

function Iniciar_Juego(){
    for (var o = 0; o < MaximoNum*5; o++) {
        RandomNum = Numeros[o];
    }
    for (var i = 0; i < Nombres.length; i++) {
            Nombre = Nombres[i];    
    }
    for (let a = o ; o+4 < MaximoNum*5 ; i++ , o = o + 5){ 
        Nombres[i] = {
            Nombre : Nombres[i],
            Numero1 : Numeros[o] ,
            Numero2 : Numeros[o+1] ,
            Numero3 : Numeros[o+2] ,
            Numero4 : Numeros[o+3] ,
            Numero5 : Numeros[o+4]
        };
        Cartones.push(a);
        app.post('/', (req, res) => {
            res.send(Cartones)
        })
    }
}

function Obtener_carton(Cartones){
    let Jugador;
    if(Jugador == ""){
        return Cartones;
    }
    else {
        function BuscarCarton(Cartones) {
            Jugador == Cartones;
        }
        Jugador = Cartones.find(BuscarCarton);
        return Jugador;
    }
}

var numero_sacado=0;
function sacar_numero(min, max) {
    numero_sacado= Math.floor(Math.random() * (max - min + 1)) + min;
    return numero_sacado
}

for (var i = 0; i < Cartones.length; i++) {
    if (i==numero_sacado) {
        i=0;
    }    
}