alert ("Bienvenido a Twiceland")

let user = prompt("Ingrese su nombre de jugador")

let score = 0;


function quiz(question, answer){
    if(question.toLowerCase() == `${answer}`){
        score++
        console.log("muy bien!!")
    }else{
        console.log("fallaste..")
    }
}

function Encuesta(){
    let startPlay = prompt(`¿Estás listo para empezar a jugar ${user}?`);
    const respuesta = ["nayeon", "momo", "nayeon", "sana", "twice", "jyp", "kpop", "pop", "japon", "nueve"]

    while(startPlay.toLowerCase() == "si"){

        let uno = prompt("Quien es la mas grande en twice?")
        quiz(uno, respuesta[0])
 
        let dos = prompt("Quien baila mejor en twice?")
        quiz(dos, respuesta[1])

        let tres = prompt("Quien es la unica solista debutada en 2022?")
        quiz(tres, respuesta[2])

        let cuatro = prompt("Quien dice la frase: shy shy shy ")
        quiz(cuatro, respuesta[3])

        let cinco = prompt("¿Como se llama el grupo?")
        quiz(cinco, respuesta[4])

        let seis = prompt("De que empresa son")
        quiz(seis, respuesta[5])

        let siete = prompt("cual es el genero de musica de twice?")
        quiz(siete, respuesta[6])

        let ocho = prompt("como se llama la cancion debut de nayeon?")
        quiz(ocho, respuesta[7])

        let nueve = prompt("donde nacieron mina, sana y momo?")
        quiz(nueve,respuesta[8])

        let diez = prompt("cuantas integrantes hay en twice??")
        quiz(diez, respuesta[9])
        

        if(score == 10){
            console.log(`Su puntaje es de ${score} respuestas correctas ¡Felicidades ${user}, tus conocimientos sobre el mundo pokémon son inigualables!`)
        }else if(score >= 7){
            console.log(`Su puntaje es de ${score} respuestas correctas, ${user} tus conocimientos sobre el mundo pokémon son muy buenos.`)
        }else{
            console.log(`Su puntaje es de ${score} respuestas correctas, seguro puedes hacerlo mejor, vuelve a intentarlo para ver si puedes mejorar tu puntaje ${user}.`)
        }
    }
}


class miembro{
    constructor(Nom, Ape, Eda, Pos){
        this.Nom = Nom,
        this.Ape = Ape,
        this.Eda = Eda,
        this.Pos = Pos
    }
    showData(){
        console.log(`${this.Ape} ${this.Nom}, y tiene ${this.Eda} y es la ${this.Pos} del grupo.`)
    }
}
const Nayeon = new miembro ("Nayeon", "Im", 26, "vocalista")
const Jeongyeon = new miembro ("Jeongyeon", "Yoo", 25, "vocalista")
const Momo = new miembro ("Momo", "Hirai", 25, "Bailarina")
const Sana = new miembro ("Sana", "Minatozaki", 24, "Visual")
const Jihyo = new miembro ("Jihyo", "Park", 24, "Lider")
const Mina = new miembro ("Mina", "Myoui", 24, "Bailarina")
const Dahyun = new miembro ("Dahyun", "Kim", 23, "Rapera")
const Chaeyoung = new miembro ("Chaeyoung", "Son", 22, "Rapera")
const Tzuyu = new miembro ("Tzuyu", "Chou", 21, "Visual")

const twice = [Nayeon, Jeongyeon, Momo, Sana, Jihyo, Mina, Dahyun, Chaeyoung, Tzuyu]



function Aleatorio(){
    let miembroRandom = prompt(`¿Quieres saber que miembro de twice eres?`)
    while(miembroRandom.toLowerCase() == "si"){
        let yo = Math.floor(Math.random()*twice.length);
        let yoo = twice[yo]
        console.log("Das vibras a: ")
        yoo.showData()
        miembroRandom = prompt("quieres intentar devuelta?")
    }
}

function Soulmate(){
    let miembroRandom1 = prompt(`¿Quieres saber que miembro de twice es tu destinada?`)
    while(miembroRandom1.toLowerCase() == "si"){
        let yooo = Math.floor(Math.random()*twice.length);
        let doo = twice[yooo]
        console.log("Tienes quimica con ")
        doo.showData()
        miembroRandom1 = prompt("quieres intentar devuelta?")
    }
}


function pantalla(){
    let options = parseInt(prompt (`Hola ${user}, que quieres hacer hoy?: 
    1 - Prueba tu conociento sobre twice:
    2 - Que miembro de Twice eres:
    3 - Quien es tu pareja en Twice:
    9 - Salir`))
    menu(options)             
} 

let salir
while(salir != true){
    pantalla()
}


function menu(optionSelected){
    switch(optionSelected){
        case 9:
            quit = true
            alert('usted decidio salir, lo vamos a extrañar :( ')
        break    
        case 1:
            Encuesta()
      	break 
   	    case 2: 
           Aleatorio()
      	break 
        case 3: 
           Soulmate()
      	break
   	    default: 
      	    console.log(`Ingrese una opción correcta.`)
    }
}








