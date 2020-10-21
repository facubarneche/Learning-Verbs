/*
Vamos a crear un proyecto que en un vector guarde algunos verbos y que el usuario o alumno tenga que tipiar el verbo correctamente
*Crear array con verbos en:
1) Forma simple
2) Pasado simple
3) Pasado participio
-----------------------------------------
agregar nota final, con los aciertos
------------------------------------------
Lograr que no se repitan las preguntas...
-----------------------------------------
mostrar respuestas INCORRECTAS!

*/

const sForm = ['add', 'borrow', 'clap', 'cook', 'enjoy', 'hear', 'help', 'kiss', 'lower', 'plan'];
const sPast = ['added', 'borrowed', 'clapped', 'cooked', 'enjoyed', 'heard', 'helped', 'kissed', 'lowered', 'planned'];
const pParticiple = ['added', 'borrowed', 'clapped', 'cooked', 'enjoyed', 'heard', 'helped', 'kissed', 'lowered', 'planned'];
const spanishVerb = ['agregar', 'tomar prestado', 'aplaudir', 'cocinar', 'disfrutar', 'oír', 'ayudar', 'besar', 'reducir', 'planear'];
let wrongAnswer = [], okAnswer = [];
let aux = "";
let cont = 0;
let nVerb;
let nForms;


const forms = () => { //numero aleatorio para la forma verbal
    nForms = Math.floor(Math.random() * (0, 3));
    return nForms;
}
const verbs = () => {//numero aleatorio para el verbo
    nVerb = Math.floor(Math.random() * (0, 10));
    return nVerb;
}

const supr = () => {//suprime undefined e imprime respuestas incorrectas y su respectivas respuestas correctas
    for (i = 0; i < wrongAnswer.length; i++) {
        if (wrongAnswer[i] === undefined) {
            okAnswer.splice(i, 1);
            wrongAnswer.splice(i, 1);
            --i
        } else {
            document.write(`Respuesta Incorrecta N° ${i + 1}: "${wrongAnswer[i]}"
             -----> Respuesta Correcta: "${okAnswer[i]}"<br>`);
        }
    }
    document.write(`<br>Ha acertado un total de ${cont}/20 verbos <br>Tu nota final es
     ${((cont * 10) / 20).toFixed(2)}<br>`);
}


for (i = 0; i < 20; i++) {
    let used = [];
    let repeat = [""];
    forms();
    verbs();
    used[i] = nForms.toString() + nVerb.toString();

    start:
    for (j = 0; j < repeat.length; j++) {
        if (used[i] == repeat[j]) {
            i--;
            break;
        }
        if (i == used.length - 1 && j == repeat.length - 1) {
            repeat.push(used[i]);

            switch (nForms) {
                case 0:
                    aux = prompt(`how do you say "${spanishVerb[nVerb]}" in its simple form?`).toLowerCase();
                    if (aux === sForm[nVerb]) {
                        cont++;
                    } else {
                        wrongAnswer[i] = aux;
                        okAnswer[i] = sForm[nVerb];

                    }
                    break;
                case 1:
                    aux = prompt(`how do you say "${spanishVerb[nVerb]}" in its simple past?`).toLowerCase();
                    if (aux === sPast[nVerb]) {
                        cont++;
                    } else {
                        wrongAnswer[i] = aux;
                        okAnswer[i] = sPast[nVerb];

                    }
                    break;
                case 2:
                    aux = prompt(`how do you say "${spanishVerb[nVerb]}" in its past participle?`).toLowerCase();
                    if (aux === pParticiple[nVerb]) {
                        cont++;
                    } else {
                        wrongAnswer[i] = aux;
                        okAnswer[i] = pParticiple[nVerb];

                    }
                    break;
                default:

            }
            break start;
        }
    }
}

supr();


