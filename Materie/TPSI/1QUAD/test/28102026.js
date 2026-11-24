async function leggiarchivio(){
    const promise=await fetch("28102026.json");
    const vettarchivio=await promise.json();
    let vb=document.querySelector("#viewBox");

    vb.innerHTML="Numero di JSON ricevuti: " + vettarchivio.length + "<br /><br />";

    for(let i=0; i<vettarchivio.length; i++){
        vb.innerHTML += vettarchivio[i].marca + " " + vettarchivio[i].modello + " " + vettarchivio[i].anno + " " + vettarchivio[i].provincia + " " + vettarchivio[i].km + " km <br />";
    }
}
async function uniproprietario(){
    const promise=await fetch("28102026.json");
    const vettuniproprietario=await promise.json();
    let vb=document.querySelector("#viewBox");

    let cnt=0;

    for(let i=0; i<vettuniproprietario.length; i++){
        if(vettuniproprietario[i].uniproprietario==1){
            cnt++;
        }
    }
    vb.innerHTML="Numero autovetture con uniproprietario: " + cnt + "<br /><br />";
    for(let i=0; i<vettuniproprietario.length; i++){
        if(vettuniproprietario[i].uniproprietario==1){
            vb.innerHTML += vettuniproprietario[i].marca + " " + vettuniproprietario[i].modello + " " + vettuniproprietario[i].anno + " " + vettuniproprietario[i].provincia + " " + vettuniproprietario[i].km + "<br />";
        }
    }
}
async function provincia(){
    const promise=await fetch("28102026.json");
    const vettprovincia=await promise.json();
    let vb=document.querySelector("#viewBox");
    let provincia=document.querySelector("#Provincia").value;
    let cnt=0;

    for(let i=0; i<vettprovincia.length; i++){
        if(vettprovincia[i].provincia==provincia){
            cnt++;
        }
    }
    
    vb.innerHTML="Numero autovetture nella provincia: " + cnt + "<br/><br/>";
    for(let i=0; i<vettprovincia.length; i++){
        if(vettprovincia[i].provincia==provincia){
            vb.innerHTML += vettprovincia[i].marca + " " + vettprovincia[i].modello + " " + vettprovincia[i].anno + " " + vettprovincia[i].provincia + " " + vettprovincia[i].km + "<br />";
        }
    }
}
async function anno(){
    const promise=await fetch("28102026.json");
    const vettanni=await promise.json();
    let vb=document.querySelector("#viewBox");
    let anno_x=parseInt(document.querySelector("#AnnoX").value);
    let anno_y=parseInt(document.querySelector("#AnnoY").value);
    let cnt=0;

    vb.innerHTML += anno_x + " " + anno_y + "<br/>";
    for(let i=0; i<vettanni.length; i++){
        if(vettanni[i].anno>=anno_x && vettanni[i].anno<=anno_y){
            cnt++;
        }
    }
    vb.innerHTML="Autovetture da anno a anno: " + cnt + "<br/><br/>";
    for(let i=0; i<vettanni.length; i++){
        if(vettanni[i].anno>=anno_x && vettanni[i].anno<=anno_y){
            vb.innerHTML += vettanni[i].marca + " " + vettanni[i].modello + " " + vettanni[i].anno + " " + vettanni[i].provincia + " " + vettanni[i].km + "<br />";
        }
    }
}
let btnCaricaTutto=document.querySelector("#btnCaricaJSON");
btnCaricaTutto.addEventListener('click', leggiarchivio);
let btnCaricaProprietario=document.querySelector("#btnCaricaUniproprietario");
btnCaricaProprietario.addEventListener('click', uniproprietario);
let btnCaricaProvincia=document.querySelector("#btnCaricaprovincia");
btnCaricaProvincia.addEventListener('click', provincia);
let btnCaricaAnno=document.querySelector("#btnCaricaAnno");
btnCaricaAnno.addEventListener('click', anno);