function cargarJSON() {
    fetch('verbs.json')
        .then(result => {//de donde obtengo el resultado
            return result.json();
        })
        .then(jsonVerbs => {//aplicar resultado            
            let wrongAnswer = [], okAnswer = [], answer = [];
            let aux = "";
            let cont = 0;
            let nVerb;
            let nForms;

            const forms = () => { //numero aleatorio para la forma verbal
                nForms = Math.floor(Math.random() * (0, 3));
                return nForms;
            }
            const verbss = () => {//numero aleatorio para el verbo
                nVerb = Math.floor(Math.random() * (0, jsonVerbs.length));
                return nVerb;
            }

            let exam = document.getElementById('exam');
            let tittleExam = document.getElementById('tittleExam');
            let note = document.getElementById('note');

            const supr = () => {//suprime undefined e imprime respuestas incorrectas y su respectivas respuestas correctas
                for (let i = 0; i < wrongAnswer.length; i++) {
                    if (wrongAnswer[i] === undefined) {
                        okAnswer.splice(i, 1);
                        wrongAnswer.splice(i, 1);
                        answer.splice(i, 1);
                        --i
                    } else {
                        if (nForms === 0) {
                            exam.innerHTML += (`N° ${i + 1}: "${wrongAnswer[i]}"
                =====> Respuesta Correcta: "${okAnswer[i]}"=====> Significado: "${answer[i]}"<br>`);
                        } else if (nForms === 1) {
                            exam.innerHTML += (`N° ${i + 1}: "${wrongAnswer[i]}"
                =====> Respuesta Correcta: "${okAnswer[i]}"=====> Significado: "${answer[i]}"<br>`);
                        } else {
                            exam.innerHTML += (`N° ${i + 1}: "${wrongAnswer[i]}"
                =====> Respuesta Correcta: "${okAnswer[i]}"=====> Significado: "${answer[i]}"<br>`);
                        }
                    }
                }
                tittleExam.innerHTML = "<h2>Respuestas Incorrectas:</h2>";
                note.innerHTML = (`<br>Ha acertado un total de ${cont}/20 verbos <br>Tu nota final es
                ${((cont * 10) / 20).toFixed(2)}<br>`);
            }


            let used = [];
            let repeat = [""];

            for (let i = 0; i < 2; i++) {
                forms();
                verbss();
                used[i] = nForms.toString() + nVerb.toString();

                start:
                for (let j = 0; j < repeat.length; j++) {
                    if (used[i] == repeat[j]) {
                        i--;
                        break;
                    }
                    if (i == used.length - 1 && j == repeat.length - 1) {
                        repeat.push(used[i]);

                        switch (nForms) {//aca es donde se elige la forma verbal gracias a la funcion forms()
                            case 0:
                                aux = prompt(`how do you say "${jsonVerbs[nVerb].spanishVerb}" in its simple form? | score: ${cont}/${i}`).toLowerCase();
                                if (aux === jsonVerbs[nVerb].sForm.toLowerCase()) {
                                    cont++;
                                } else {
                                    wrongAnswer[i] = aux;
                                    okAnswer[i] = jsonVerbs[nVerb].sForm.toLowerCase() + " (Simple Form)";
                                    answer[i] = jsonVerbs[nVerb].spanishVerb
                                }
                                break;
                            case 1:
                                aux = prompt(`how do you say "${jsonVerbs[nVerb].spanishVerb}" in its simple past? | score: ${cont}/${i}`).toLowerCase();
                                if (aux === jsonVerbs[nVerb].sPast.toLowerCase()) {
                                    cont++;
                                } else {
                                    wrongAnswer[i] = aux;
                                    okAnswer[i] = jsonVerbs[nVerb].sPast.toLowerCase() + " (Simple Past)";
                                    answer[i] = jsonVerbs[nVerb].spanishVerb
                                }
                                break;
                            case 2:
                                aux = prompt(`how do you say "${jsonVerbs[nVerb].spanishVerb}" in its past participle? | score: ${cont}/${i}`).toLowerCase();
                                if (aux === jsonVerbs[nVerb].pParticiple.toLowerCase()) {
                                    cont++;
                                } else {
                                    wrongAnswer[i] = aux;
                                    okAnswer[i] = jsonVerbs[nVerb].pParticiple.toLowerCase() + " (Past Participle)";
                                    answer[i] = jsonVerbs[nVerb].spanishVerb
                                }
                                break;
                            default:

                        }
                        break start;
                    }
                }
            }

            supr();
        })
        .catch(error => {
            console.log(error);
        })
}

cargarJSON();
