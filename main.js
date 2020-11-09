function cargarJSON() {
    fetch('verbs.json')
        .then(result => {//de donde obtengo el resultado
            return result.json();
        })
        .then(jsonVerbs => {//aplicar resultado            
            let wrongAnswer = [], correction = [], answer = [], okAnswer = [], used = [], repeat = [""];
            let aux = "", cont = 0 , nVerb, nForms, tForm;

            const forms = () => { //numero aleatorio para la forma verbal
                nForms = Math.floor(Math.random() * (0, 3));
                switch(nForms){
                    case 0:
                        tForm = "Simple Form"
                        break;
                    case 1:
                        tForm = "Simple Past"
                        break;
                    case 2 :
                        tForm = "Past Participle"
                        break;
                }
            }
            const verbss = () => {//numero aleatorio para el verbo
                nVerb = Math.floor(Math.random() * (0, jsonVerbs.length));
                return nVerb;
            }
            const feedBack = () => {//mensaje al final del examen con la nota y mensaje al alumno
                return (`<br>Has acertado un total de ${cont}/20 verbos <br>Tu nota final es
                ${((cont * 10) / 20).toFixed(2)}<br>`);
            }


            //elementos HTML
            let mean = document.getElementById('mean');
            let wrong = document.getElementById('wrong');
            let correct = document.getElementById('correct');
            let ok = document.getElementById('ok');
            let grades = document.getElementById('grades');

            const supr = () => {//suprime undefined e imprime respuestas incorrectas y su respectivas respuestas correctas
                for (let i = 0; i < answer.length; i++) {

                    const equal = () => {//funcion para que el html sea igual a respuestas
                        wrong.innerHTML += `${i + 1}) ${wrongAnswer[i]}<br><hr>`
                        correct.innerHTML += `${i + 1}) ${correction[i]}<br><hr>`
                        mean.innerHTML += `${i + 1}) ${answer[i]}<br><hr>`
                        ok.innerHTML += `${i + 1}) ${okAnswer[i]}<br><hr>`
                    }
                    if (okAnswer[i] === undefined) {
                        okAnswer[i] = "-------";
                    }else{
                        wrongAnswer[i] = "-------";
                    }
                   equal();
                }
                ok.innerHTML = `
                <h2 id ="oka">Correctas</h2>
                <div>${ok.innerHTML}</div>
                `;
                wrong.innerHTML = `
                <h2 id ="inc">Incorrectas</h2>
                <div>${wrong.innerHTML}</div>
                `;
                correct.innerHTML = `
                <h2 id ="cor">Correciones</h2>
                <div>${correct.innerHTML}</div>
                `;
                mean.innerHTML = `
                <h2 id ="sig">Significado</h2>
                <div>${mean.innerHTML}</div>
                `;
                if (cont < 8) {
                    grades.innerHTML = `${feedBack()} No te desanimes sigue practicando, con practica va a poder superar este examen.`;
                } else if (cont >= 8 && cont < 14) {
                    grades.innerHTML = `${feedBack()} Esta aprobado, aún hay mucho por mejorar, pero es un gran paso a favor.`;
                } else if (cont >= 14 && cont < 20) {
                    grades.innerHTML = `${feedBack()} Se nota que tiene muchos conocimientos, esta en un nivel increible, por otro lado, no es motivo para dejar de practicar y seguir mejorando.`;
                } else {
                    grades.innerHTML = `${feedBack()} ¡¡¡¡¡¡CONGRATULATIONS YOU ARE AMAZING, YOUR LEVEL OF ENGLISH IS UNBELIEVABLE!!!!!.`;
                }
            }

            for (let i = 0; i < 20; i++) {
                forms();
                verbss();
                used[i] = nForms.toString() + nVerb.toString();

                const If =()=>{
                    okAnswer[i] = aux;
                    answer[i] = jsonVerbs[nVerb].spanishVerb
                    cont++;
                }
                const Else = ()=>{
                    wrongAnswer[i] = aux;
                    answer[i] = jsonVerbs[nVerb].spanishVerb;
                }
                const how = () =>{
                    aux = prompt(`how do you say "${jsonVerbs[nVerb].spanishVerb}" in its ${tForm}? | score: ${cont}/${i}`).toLowerCase();
                }

                start:
                for (let j = 0; j < repeat.length; j++) {
                    if (used[i] == repeat[j]) {
                        i--;
                        break;
                    }
                    if (i == used.length - 1 && j == repeat.length - 1) {
                        repeat.push(used[i]);

                        switch (tForm) {//aca es donde se elige la forma verbal gracias a la funcion forms()
                            case "Simple Form":
                                how();
                                if (aux === jsonVerbs[nVerb].sForm.toLowerCase()) {
                                    correction[i] = `${jsonVerbs[nVerb].sForm.toLowerCase()} (${tForm})`;
                                    If();
                                } else {
                                    correction[i] = `${jsonVerbs[nVerb].sForm.toLowerCase()} (${tForm})`;
                                    Else();
                                }
                                break;
                            case "Simple Past":
                                how();
                                if (aux === jsonVerbs[nVerb].sPast.toLowerCase()) {
                                    correction[i] = `${jsonVerbs[nVerb].sPast.toLowerCase()} (${tForm})`;
                                    If();
                                } else {
                                    correction[i] = `${jsonVerbs[nVerb].sPast.toLowerCase()} (${tForm})`;
                                    Else();
                                }
                                break;
                            case "Past Participle":
                                how();
                                if (aux === jsonVerbs[nVerb].pParticiple.toLowerCase()) {
                                    correction[i] = `${jsonVerbs[nVerb].pParticiple.toLowerCase()} (${tForm})`;
                                    If();
                                } else {
                                    correction[i] = `${jsonVerbs[nVerb].pParticiple.toLowerCase()} (${tForm})`;
                                    Else();
                                }
                                break;
                        }
                        break start;
                    }
                }
            }
            supr();
        })
        .catch(error => {
            console.log(error);
        });
}

cargarJSON();


