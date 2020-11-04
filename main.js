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
            const feedBack = () =>{//mensaje al final del examen con la nota y mensaje al alumno
                return (`<br>Ha acertado un total de ${cont}/20 verbos <br>Tu nota final es
                ${((cont * 10) / 20).toFixed(2)}<br>`);
            }

            let mean = document.getElementById('mean');
            let wrong = document.getElementById('wrong');
            let correct = document.getElementById('correct')
            let grades = document.getElementById('grades');

            const supr = () => {//suprime undefined e imprime respuestas incorrectas y su respectivas respuestas correctas
                for (let i = 0; i < wrongAnswer.length; i++) {
                    if (wrongAnswer[i] === undefined) {
                        okAnswer.splice(i, 1);
                        wrongAnswer.splice(i, 1);
                        answer.splice(i, 1);
                        --i
                    } else {
                        if (nForms === 0) {
                            wrong.innerHTML += `${i + 1}) ${wrongAnswer[i]}<br><hr>`
                            correct.innerHTML += `${i + 1}) ${okAnswer[i]}<br><hr>`
                            mean.innerHTML += `${i + 1}) ${answer[i]}<br><hr>`
                        } else if (nForms === 1) {
                            wrong.innerHTML += `${i + 1}) ${wrongAnswer[i]}<br><hr>`
                            correct.innerHTML += `${i + 1}) ${okAnswer[i]}<br><hr>`
                            mean.innerHTML += `${i + 1}) ${answer[i]}<br><hr>`
                        } else {
                            wrong.innerHTML += `${i + 1}) ${wrongAnswer[i]}<br><hr>`
                            correct.innerHTML += `${i + 1}) ${okAnswer[i]}<br><hr>`
                            mean.innerHTML += `${i + 1}) ${answer[i]}<br><hr>`
                        }
                    }
                }
                wrong.innerHTML = `
                <h2 id ="inc">Respuestas Incorrectas</h2>
                <div>${wrong.innerHTML}</div>
                `;
                correct.innerHTML = `
                <h2 id ="cor">Respuestas Correctas</h2>
                <div>${correct.innerHTML}</div>
                `;
                mean.innerHTML = `
                <h2 id ="sig">Significado</h2>
                <div>${mean.innerHTML}</div>
                `;
                if(cont < 8){
                    grades.innerHTML = `${feedBack()} No te desanimes sigue practicando, con practica vas a poder superar este examen`;
                }else if(cont >= 8 && cont > 14){
                    grades.innerHTML = `${feedBack()} No esta para nada mal, esta aprobado, se puede mejorar bastante pero no es facil llegar hasta aca, podes estar feliz con vos mismo`;
                }else if(cont >= 14 && cont < 20){
                    grades.innerHTML = `${feedBack()} Se nota que estudiaste mucho, muy buena nota y esto no quiere decir que no sigues superandote, pero estas en un gran nivel felicidades!`;
                }else{
                    grades.innerHTML = `${feedBack()} ¡¡¡¡¡¡CONGRATULATIONS YOU ARE AMAZING, YOUR LEVEL OF ENGLISH IS UNBELIEVABLE!!!!!`;
                }
            }


            let used = [];
            let repeat = [""];

            for (let i = 0; i < 20; i++) {
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
