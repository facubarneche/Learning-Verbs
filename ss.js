class Verbo {
    constructor(sForm, sPast, pParticiple, spanishVerb) {
        this.sForm = sForm;
        this.sPast = sPast;
        this.pParticiple = pParticiple;
        this.spanishVerb = spanishVerb;
    }
}

let palabra = "";
let verbitos = [], wrongAnswer = [], okAnswer = [];
let cont = 0;


verbitos.push(new Verbo("add", "added", "added", "agregar"));
verbitos.push(new Verbo("borrow", 'borrowed', 'borrowed', 'tomar prestado'));
verbitos.push(new Verbo('clap', 'clapped', 'clapped', 'aplaudir'));


const forms = () => { //numero aleatorio para la forma verbal
    nForms = Math.floor(Math.random() * (0, 3));
    return nForms;
}
const verbs = () => {//numero aleatorio para el verbo
    nVerb = Math.floor(Math.random() * (0, verbitos.length));
    return nVerb;
}

let text = "";
const usuario = (nForms) => {
    palabra = selectForm(nForms);
    aux = prompt(`how do you say "${verbitos[nVerb].spanishVerb}" in its ${text}? | score: ${cont}`).toLowerCase();
    if (aux === palabra) {
        cont++;
    } else {
        wrongAnswer[i] = aux;
        okAnswer[i] = palabra;
    }
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

const selectForm = (nForms) => {
    switch (nForms) {
        case 0:
            text = "Simple Form"
            return verbitos[nVerb].sForm;
        case 1:
            text = "Simple Past"
            return verbitos[nVerb].sPast;
        case 2:
            text = "Past Participle"
            return verbitos[nVerb].pParticiple;
    }
}


let used = [];
let repeat = [""];
for (i = 0; i < 20; i++) {
    forms();
    verbs();
        used[i] = nForms.toString() + nVerb.toString();
        for (j = 0; j < repeat.length; j++) {
            if (used[i] == repeat[j]) {
                i--;
                break;
            }
            if (i == used.length - 1 && j == repeat.length - 1) {
                repeat.push(used[i]);
            }
        }
    }
    usuario(nForms)

supr()