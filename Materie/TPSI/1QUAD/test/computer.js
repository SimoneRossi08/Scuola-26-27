async function CaricaLista(){
    const promise=await fetch("computer.json");
    const vett=await promise.json();
    let ls=document.querySelector("#Lista");

    let Tabella="<table class=\"table table-striped\">";
    Tabella+="<tbody>";
    for(let i=0; i<vett.length; i++){
        Tabella+="<tr>";
        Tabella+="<td>"+vett[i].marca+"</td>"
        Tabella+="<td>"+vett[i].modello+"</td>"
        Tabella+="<td>"+vett[i].processore+"</td>"
        Tabella+="<td>"+vett[i].ram+" GB</td>"
        Tabella+="<td>"+vett[i].memoria+" GB</td>"
        Tabella+="<td>"+vett[i].anno+"</td>"
        Tabella+="<td>"+vett[i].prezzo+" $</td>"
        Tabella+="<td>"+vett[i].disponibile+"</td>"
        Tabella+="</tr>";
    }
    Tabella+="</tbody>";
    Tabella+="</table>";
    ls.innerHTML=Tabella;
}

async function CaricaMarca(){
    const promise=await fetch("computer.json");
    const vett=await promise.json();
    let ls=document.querySelector("#Lista");
    let marca=document.querySelector("#Marca").value;

    let Tabella="<table class=\"table table-striped\">";
    Tabella+="<tbody>";
    for(let i=0; i<vett.length; i++){
        if(vett[i].marca==marca){
            Tabella+="<tr>";
            Tabella+="<td>"+vett[i].marca+"</td>"
            Tabella+="<td>"+vett[i].modello+"</td>"
            Tabella+="<td>"+vett[i].processore+"</td>"
            Tabella+="<td>"+vett[i].ram+" GB</td>"
            Tabella+="<td>"+vett[i].memoria+" GB</td>"
            Tabella+="<td>"+vett[i].anno+"</td>"
            Tabella+="<td>"+vett[i].prezzo+" $</td>"
            Tabella+="<td>"+vett[i].disponibile+"</td>"
            Tabella+="</tr>";
        }
    }
    Tabella+="</tbody>";
    Tabella+="</table>";
    ls.innerHTML=Tabella;
}

async function CaricaRAM(){
    const promise=await fetch("computer.json");
    const vett=await promise.json();
    let ls=document.querySelector("#Lista");
    let ram=document.querySelector("#RAM").value;

    let Tabella="<table class=\"table table-striped\">";
    Tabella+="<tbody>";
    for(let i=0; i<vett.length; i++){
        if(vett[i].ram==ram){
            Tabella+="<tr>";
            Tabella+="<td>"+vett[i].marca+"</td>"
            Tabella+="<td>"+vett[i].modello+"</td>"
            Tabella+="<td>"+vett[i].processore+"</td>"
            Tabella+="<td>"+vett[i].ram+" GB</td>"
            Tabella+="<td>"+vett[i].memoria+" GB</td>"
            Tabella+="<td>"+vett[i].anno+"</td>"
            Tabella+="<td>"+vett[i].prezzo+" $</td>"
            Tabella+="<td>"+vett[i].disponibile+"</td>"
            Tabella+="</tr>";
        }
    }
    Tabella+="</tbody>";
    Tabella+="</table>";
    ls.innerHTML=Tabella;
}

async function CaricaPrezzo(){
    const promise=await fetch("computer.json");
    const vett=await promise.json();
    let ls=document.querySelector("#Lista");
    let prezzo_min=document.querySelector("#PrezzoMin").value;
    let prezzo_max=document.querySelector("#PrezzoMax").value;

    let Tabella="<table class=\"table table-striped\">";
    Tabella+="<tbody>";
    for(let i=0; i<vett.length; i++){
        if(vett[i].prezzo>=prezzo_min && vett[i].prezzo<=prezzo_max){
            Tabella+="<tr>";
            Tabella+="<td>"+vett[i].marca+"</td>"
            Tabella+="<td>"+vett[i].modello+"</td>"
            Tabella+="<td>"+vett[i].processore+"</td>"
            Tabella+="<td>"+vett[i].ram+" GB</td>"
            Tabella+="<td>"+vett[i].memoria+" GB</td>"
            Tabella+="<td>"+vett[i].anno+"</td>"
            Tabella+="<td>"+vett[i].prezzo+" $</td>"
            Tabella+="<td>"+vett[i].disponibile+"</td>"
            Tabella+="</tr>";
        }
    }
    Tabella+="</tbody>";
    Tabella+="</table>";
    ls.innerHTML=Tabella;
}

async function CaricaAnno(){
    const promise=await fetch("computer.json");
    const vett=await promise.json();
    let ls=document.querySelector("#Lista");
    let anno_x=document.querySelector("#AnnoX").value;
    let anno_y=document.querySelector("#AnnoY").value;

    let Tabella="<table class=\"table table-striped\">";
    Tabella+="<tbody>";
    for(let i=0; i<vett.length; i++){
        if(vett[i].anno>=anno_x && vett[i].anno<=anno_y){
            Tabella+="<tr>";
            Tabella+="<td>"+vett[i].marca+"</td>"
            Tabella+="<td>"+vett[i].modello+"</td>"
            Tabella+="<td>"+vett[i].processore+"</td>"
            Tabella+="<td>"+vett[i].ram+" GB</td>"
            Tabella+="<td>"+vett[i].memoria+" GB</td>"
            Tabella+="<td>"+vett[i].anno+"</td>"
            Tabella+="<td>"+vett[i].prezzo+" $</td>"
            Tabella+="<td>"+vett[i].disponibile+"</td>"
            Tabella+="</tr>";
        }
    }
    Tabella+="</tbody>";
    Tabella+="</table>";
    ls.innerHTML=Tabella;
}

async function CaricaDisp(){
    const promise=await fetch("computer.json");
    const vett=await promise.json();
    let ls=document.querySelector("#Lista");     

    let Tabella="<table class=\"table table-striped\">";
    Tabella+="<tbody>";
    for(let i=0; i<vett.length; i++){
        if(vett[i].disponibile==true){
            Tabella+="<tr>";
            Tabella+="<td>"+vett[i].marca+"</td>"
            Tabella+="<td>"+vett[i].modello+"</td>"
            Tabella+="<td>"+vett[i].processore+"</td>"
            Tabella+="<td>"+vett[i].ram+" GB</td>"
            Tabella+="<td>"+vett[i].memoria+" GB</td>"
            Tabella+="<td>"+vett[i].anno+"</td>"
            Tabella+="<td>"+vett[i].prezzo+" $</td>"
            Tabella+="<td>"+vett[i].disponibile+"</td>"
            Tabella+="</tr>";
        }
    }
    Tabella+="</tbody>";
    Tabella+="</table>";
    ls.innerHTML=Tabella;
}

let btnLista=document.querySelector("#CaricaLista");
btnLista.addEventListener('click', CaricaLista);
let btnMarca=document.querySelector("#CaricaMarca");
btnMarca.addEventListener('click', CaricaMarca);
let btnRAM=document.querySelector("#CaricaRAM");
btnRAM.addEventListener('click', CaricaRAM);
let btnPrezzo=document.querySelector("#CaricaPrezzo");
btnPrezzo.addEventListener('click', CaricaPrezzo);
let btnAnno=document.querySelector("#CaricaAnno");
btnAnno.addEventListener('click', CaricaAnno);
let btnDisp=document.querySelector("#CaricaDisp");
btnDisp.addEventListener('click', CaricaDisp);