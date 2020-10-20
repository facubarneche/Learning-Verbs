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

*/

const sForm = ['add', 'borrowed', 'clap', 'cook', 'enjoy', 'hear', 'help', 'kiss', 'lower', 'plan'];
const sPast = ['added', 'borrowed', 'clapped', 'cooked', 'enjoyed', 'heard', 'helped', 'kissed', 'lowered', 'planned'];
const pParticiple = ['added', 'borrowed', 'clapped', 'cooked', 'enjoyed', 'heard', 'helped', 'kissed', 'lowered', 'planned'];
const spanishVerb = ['agregar', 'tomar prestado', 'aplaudir', 'cocinar', 'disfrutar', 'oír', 'ayudar', 'besar', 'reducir', 'planear'];
let aux = "";
let cont = 0;
let nVerb;
let nForms;

const forms = () => {
    nForms = Math.floor(Math.random() * (0, 3));
    return nForms;
}
const verbs = () => {
    nVerb = Math.floor(Math.random() * (0, 10));
    return nVerb;
}

let used = [];
let repeat = [""];

for (i = 0; i < 10; i++) {
    forms();
    verbs();
    used[i] = nForms.toString() + nVerb.toString();
    start:
        for (j = 0; j < repeat.length; j++) {
            if (used[i] == repeat[j]) {  
                i--;
                break;
            }
            if (i == used.length-1 && j == repeat.length-1) {
                repeat.push(used[i]);
                
                switch (nForms) {
                    case 0:
                        aux = prompt(`how do you say "${spanishVerb[nVerb]}" in its simple form?`).toLowerCase();
                        if (aux === sForm[nVerb]) {
                            cont++;
                        }
                        break;
                    case 1:
                        aux = prompt(`how do you say "${spanishVerb[nVerb]}" in its simple past?`).toLowerCase();
                        if (aux === sPast[nVerb]) {
                            cont++;
                        }
                        break;
                    case 2:
                        aux = prompt(`how do you say "${spanishVerb[nVerb]}" in its past participle?`).toLowerCase();
                        if (aux === pParticiple[nVerb]) {
                            cont++;
                        }
                        break;
                    default:
            
                }
                break start;
            }
        }
}

document.write(`Ha acertado un total de ${cont}/10 verbos <br>Tu nota final es ${((cont * 10) / 10).toFixed(2)}`);