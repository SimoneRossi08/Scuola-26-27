async function CaricaArchivio(){
    const risposta=await fetch("pet.json");
    const vett=await risposta.json();
    let ls=document.querySelector("#Lista");
    let tbl=`<table class="table">
                <thead>
                    <tr>
                        <th scope="col"></th>
                        <th scope="col">Nome</th>
                        <th scope="col">Specie</th>
                        <th scope="col">Razza</th>
                        <th scope="col">Età</th>
                        <th scope="col">Sesso</th>
                        <th scope="col">Provincia</th>
                        <th scope="col">Adottabile</th>
                        <th scope="col">Data Arrivo</th>
                    </tr>
                </thead>
                <tbody>`;
                    
    for(let i=0; i<vett.length; i++){
        tbl+="<tr>";
        tbl+="<td>"+(i+1)+"</td>";
        tbl+="<td>"+vett[i].nome+"</td>";
        tbl+="<td>"+vett[i].specie+"</td>";
        tbl+="<td>"+vett[i].razza+"</td>";
        tbl+="<td>"+vett[i].eta+"</td>";
        tbl+="<td>"+vett[i].sesso+"</td>";
        tbl+="<td>"+vett[i].provincia+"</td>";
        tbl+="<td>"+vett[i].adottabile+"</td>";
        tbl+="<td>"+vett[i].data_arrivo+"</td>";
        tbl+="</tr>";
    }
    tbl+="</tbody></table>";
    ls.innerHTML=tbl;
}

async function CaricaAdott(){
    const risposta=await fetch("pet.json");
    const vett=await risposta.json();
    let ls=document.querySelector("#Lista");
    let tbl=`<table class="table">
                <thead>
                    <tr>
                        <th scope="col"></th>
                        <th scope="col">Nome</th>
                        <th scope="col">Specie</th>
                        <th scope="col">Razza</th>
                        <th scope="col">Età</th>
                        <th scope="col">Sesso</th>
                        <th scope="col">Provincia</th>
                        <th scope="col">Adottabile</th>
                        <th scope="col">Data Arrivo</th>
                    </tr>
                </thead>
                <tbody>`;
                    
    for(let i=0; i<vett.length; i++){
        if(vett[i].adottabile==true){
            tbl+="<tr>";
            tbl+="<td>"+(i+1)+"</td>";
            tbl+="<td>"+vett[i].nome+"</td>";
            tbl+="<td>"+vett[i].specie+"</td>";
            tbl+="<td>"+vett[i].razza+"</td>";
            tbl+="<td>"+vett[i].eta+"</td>";
            tbl+="<td>"+vett[i].sesso+"</td>";
            tbl+="<td>"+vett[i].provincia+"</td>";
            tbl+="<td>"+vett[i].adottabile+"</td>";
            tbl+="<td>"+vett[i].data_arrivo+"</td>";
            tbl+="</tr>";
        }
    }
    tbl+="</tbody></table>";
    ls.innerHTML=tbl;
}

async function CaricaSpecie(){
    const risposta=await fetch("pet.json");
    const vett=await risposta.json();
    let ls=document.querySelector("#Lista");
    let spc=document.querySelector("#Specie").value;
    let tbl=`<table class="table">
                <thead>
                    <tr>
                        <th scope="col"></th>
                        <th scope="col">Nome</th>
                        <th scope="col">Specie</th>
                        <th scope="col">Razza</th>
                        <th scope="col">Età</th>
                        <th scope="col">Sesso</th>
                        <th scope="col">Provincia</th>
                        <th scope="col">Adottabile</th>
                        <th scope="col">Data Arrivo</th>
                    </tr>
                </thead>
                <tbody>`;
                    
    for(let i=0; i<vett.length; i++){
        if(vett[i].specie==spc){
            tbl+="<tr>";
            tbl+="<td>"+(i+1)+"</td>";
            tbl+="<td>"+vett[i].nome+"</td>";
            tbl+="<td>"+vett[i].specie+"</td>";
            tbl+="<td>"+vett[i].razza+"</td>";
            tbl+="<td>"+vett[i].eta+"</td>";
            tbl+="<td>"+vett[i].sesso+"</td>";
            tbl+="<td>"+vett[i].provincia+"</td>";
            tbl+="<td>"+vett[i].adottabile+"</td>";
            tbl+="<td>"+vett[i].data_arrivo+"</td>";
            tbl+="</tr>";
        }
    }
    tbl+="</tbody></table>";
    ls.innerHTML=tbl;
}

async function CaricaProv(){
    const risposta=await fetch("pet.json");
    const vett=await risposta.json();
    let ls=document.querySelector("#Lista");
    let prov=document.querySelector("#Provincia").value;
    let tbl=`<table class="table">
                <thead>
                    <tr>
                        <th scope="col"></th>
                        <th scope="col">Nome</th>
                        <th scope="col">Specie</th>
                        <th scope="col">Razza</th>
                        <th scope="col">Età</th>
                        <th scope="col">Sesso</th>
                        <th scope="col">Provincia</th>
                        <th scope="col">Adottabile</th>
                        <th scope="col">Data Arrivo</th>
                    </tr>
                </thead>
                <tbody>`;
                    
    for(let i=0; i<vett.length; i++){
        if(vett[i].provincia==prov){
            tbl+="<tr>";
            tbl+="<td>"+(i+1)+"</td>";
            tbl+="<td>"+vett[i].nome+"</td>";
            tbl+="<td>"+vett[i].specie+"</td>";
            tbl+="<td>"+vett[i].razza+"</td>";
            tbl+="<td>"+vett[i].eta+"</td>";
            tbl+="<td>"+vett[i].sesso+"</td>";
            tbl+="<td>"+vett[i].provincia+"</td>";
            tbl+="<td>"+vett[i].adottabile+"</td>";
            tbl+="<td>"+vett[i].data_arrivo+"</td>";
            tbl+="</tr>";
        }
    }
    tbl+="</tbody></table>";
    ls.innerHTML=tbl;
}

async function CaricaRazza(){
    const risposta=await fetch("pet.json");
    const vett=await risposta.json();
    let ls=document.querySelector("#Lista");
    let razza=document.querySelector("#Razza").value;
    let tbl=`<table class="table">
                <thead>
                    <tr>
                        <th scope="col"></th>
                        <th scope="col">Nome</th>
                        <th scope="col">Specie</th>
                        <th scope="col">Razza</th>
                        <th scope="col">Età</th>
                        <th scope="col">Sesso</th>
                        <th scope="col">Provincia</th>
                        <th scope="col">Adottabile</th>
                        <th scope="col">Data Arrivo</th>
                    </tr>
                </thead>
                <tbody>`;
                    
    for(let i=0; i<vett.length; i++){
        if(vett[i].razza==razza){
            tbl+="<tr>";
            tbl+="<td>"+(i+1)+"</td>";
            tbl+="<td>"+vett[i].nome+"</td>";
            tbl+="<td>"+vett[i].specie+"</td>";
            tbl+="<td>"+vett[i].razza+"</td>";
            tbl+="<td>"+vett[i].eta+"</td>";
            tbl+="<td>"+vett[i].sesso+"</td>";
            tbl+="<td>"+vett[i].provincia+"</td>";
            tbl+="<td>"+vett[i].adottabile+"</td>";
            tbl+="<td>"+vett[i].data_arrivo+"</td>";
            tbl+="</tr>";
        }
    }
    tbl+="</tbody></table>";
    ls.innerHTML=tbl;
}

async function CaricaEtà(){
    const risposta=await fetch("pet.json");
    const vett=await risposta.json();
    let ls=document.querySelector("#Lista");
    let età_x=document.querySelector("#EtàX").value;
    let età_y=document.querySelector("#EtàY").value;
    let tbl=`<table class="table">
                <thead>
                    <tr>
                        <th scope="col"></th>
                        <th scope="col">Nome</th>
                        <th scope="col">Specie</th>
                        <th scope="col">Razza</th>
                        <th scope="col">Età</th>
                        <th scope="col">Sesso</th>
                        <th scope="col">Provincia</th>
                        <th scope="col">Adottabile</th>
                        <th scope="col">Data Arrivo</th>
                    </tr>
                </thead>
                <tbody>`;
                    
    for(let i=0; i<vett.length; i++){
        if(vett[i].eta<=età_y && vett[i].eta>=età_x){
            tbl+="<tr>";
            tbl+="<td>"+(i+1)+"</td>";
            tbl+="<td>"+vett[i].nome+"</td>";
            tbl+="<td>"+vett[i].specie+"</td>";
            tbl+="<td>"+vett[i].razza+"</td>";
            tbl+="<td>"+vett[i].eta+"</td>";
            tbl+="<td>"+vett[i].sesso+"</td>";
            tbl+="<td>"+vett[i].provincia+"</td>";
            tbl+="<td>"+vett[i].adottabile+"</td>";
            tbl+="<td>"+vett[i].data_arrivo+"</td>";
            tbl+="</tr>";
        }
    }
    tbl+="</tbody></table>";
    ls.innerHTML=tbl;
}

async function CaricaArrivo(){
    const risposta=await fetch("pet.json");
    const vett=await risposta.json();
    let ls=document.querySelector("#Lista");
    let arrivo=document.querySelector("#Arrivo").value;
    let tbl=`<table class="table">
                <thead>
                    <tr>
                        <th scope="col"></th>
                        <th scope="col">Nome</th>
                        <th scope="col">Specie</th>
                        <th scope="col">Razza</th>
                        <th scope="col">Età</th>
                        <th scope="col">Sesso</th>
                        <th scope="col">Provincia</th>
                        <th scope="col">Adottabile</th>
                        <th scope="col">Data Arrivo</th>
                    </tr>
                </thead>
                <tbody>`;
                    
    for(let i=0; i<vett.length; i++){
        if(vett[i].data_arrivo==arrivo){
            tbl+="<tr>";
            tbl+="<td>"+(i+1)+"</td>";
            tbl+="<td>"+vett[i].nome+"</td>";
            tbl+="<td>"+vett[i].specie+"</td>";
            tbl+="<td>"+vett[i].razza+"</td>";
            tbl+="<td>"+vett[i].eta+"</td>";
            tbl+="<td>"+vett[i].sesso+"</td>";
            tbl+="<td>"+vett[i].provincia+"</td>";
            tbl+="<td>"+vett[i].adottabile+"</td>";
            tbl+="<td>"+vett[i].data_arrivo+"</td>";
            tbl+="</tr>";
        }
    }
    tbl+="</tbody></table>";
    ls.innerHTML=tbl;
}

let btnArchivio=document.querySelector("#MostraArchivio");
btnArchivio.addEventListener('click', CaricaArchivio);
let btnAdott=document.querySelector("#CaricaAdo");
btnAdott.addEventListener('click', CaricaAdott);
let btnSpecie=document.querySelector("#CaricaSpecie");
btnSpecie.addEventListener('click', CaricaSpecie);
let btnProv=document.querySelector("#CaricaProv");
btnProv.addEventListener('click', CaricaProv);
let btnRazza=document.querySelector("#CaricaRazza");
btnRazza.addEventListener('click', CaricaRazza);
let btnEtà=document.querySelector("#CaricaEtà");
btnEtà.addEventListener('click', CaricaEtà);
let btnArrivo=document.querySelector("#CaricaArrivo");
btnArrivo.addEventListener('click', CaricaArrivo);