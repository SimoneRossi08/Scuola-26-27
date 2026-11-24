async function CaricaLista(){
    const risposta=await fetch("locale.json");
    const vett=await risposta.json();
    let ctlg=document.querySelector("#Catalogo");
    let table=`<table class="table">
                <thead>
                    <tr>
                        <th scope="col"></th>
                        <th scope="col">Tipologia</th>
                        <th scope="col">Indirizzo</th>
                        <th scope="col">Città</th>
                        <th scope="col">Provincia</th>
                        <th scope="col">Superficie (m²)</th>
                        <th scope="col">Numero di locali</th>
                        <th scope="col">Prezzo (€)</th>
                        <th scope="col">Disponibile</th>
                    </tr>
                </thead>
                <tbody>`;

    for(let i=0; i<vett.length; i++){
        table+="<tr>";
        table+='<th scope="row">'+ (i+1) +'</th>';
        table+="<td>"+vett[i].tipologia+"</td>";
        table+="<td>"+vett[i].indirizzo+"</td>";
        table+="<td>"+vett[i].città+"</td>";
        table+="<td>"+vett[i].provincia+"</td>";
        table+="<td>"+vett[i].superficie+"m²</td>";
        table+="<td>"+vett[i].n_locali+"</td>";
        table+="<td>"+vett[i].prezzo+"€</td>";
        table+="<td>"+vett[i].disponibile+"</td>";
        table+="</tr>";
    }                
    table+="</tbody></table>";
    ctlg.innerHTML=table;
}

async function CaricaDisp(){
    const risposta=await fetch("locale.json");
    const vett=await risposta.json();
    let ctlg=document.querySelector("#Catalogo");
    let table=`<table class="table">
                <thead>
                    <tr>
                        <th scope="col"></th>
                        <th scope="col">Tipologia</th>
                        <th scope="col">Indirizzo</th>
                        <th scope="col">Città</th>
                        <th scope="col">Provincia</th>
                        <th scope="col">Superficie (m²)</th>
                        <th scope="col">Numero di locali</th>
                        <th scope="col">Prezzo (€)</th>
                        <th scope="col">Disponibile</th>
                    </tr>
                </thead>
                <tbody>`;

    for(let i=0; i<vett.length; i++){
        if(vett[i].disponibile==true){
            table+="<tr>";
            table+='<th scope="row">'+ (i+1) +'</th>';
            table+="<td>"+vett[i].tipologia+"</td>";
            table+="<td>"+vett[i].indirizzo+"</td>";
            table+="<td>"+vett[i].città+"</td>";
            table+="<td>"+vett[i].provincia+"</td>";
            table+="<td>"+vett[i].superficie+"m²</td>";
            table+="<td>"+vett[i].n_locali+"</td>";
            table+="<td>"+vett[i].prezzo+"€</td>";
            table+="<td>"+vett[i].disponibile+"</td>";
            table+="</tr>";
        }
    }                
    table+="</tbody></table>";
    ctlg.innerHTML=table;
}

async function CaricaCittà(){
    const risposta=await fetch("locale.json");
    const vett=await risposta.json();
    let ctlg=document.querySelector("#Catalogo");
    let città=document.querySelector("#Città").value;
    let table=`<table class="table">
                <thead>
                    <tr>
                        <th scope="col"></th>
                        <th scope="col">Tipologia</th>
                        <th scope="col">Indirizzo</th>
                        <th scope="col">Città</th>
                        <th scope="col">Provincia</th>
                        <th scope="col">Superficie (m²)</th>
                        <th scope="col">Numero di locali</th>
                        <th scope="col">Prezzo (€)</th>
                        <th scope="col">Disponibile</th>
                    </tr>
                </thead>
                <tbody>`;

    for(let i=0; i<vett.length; i++){
        if(vett[i].città==città){
            table+="<tr>";
            table+='<th scope="row">'+ (i+1) +'</th>';
            table+="<td>"+vett[i].tipologia+"</td>";
            table+="<td>"+vett[i].indirizzo+"</td>";
            table+="<td>"+vett[i].città+"</td>";
            table+="<td>"+vett[i].provincia+"</td>";
            table+="<td>"+vett[i].superficie+"m²</td>";
            table+="<td>"+vett[i].n_locali+"</td>";
            table+="<td>"+vett[i].prezzo+"€</td>";
            table+="<td>"+vett[i].disponibile+"</td>";
            table+="</tr>";
        }
    }                
    table+="</tbody></table>";
    ctlg.innerHTML=table;
}

async function CaricaTipologia(){
    const risposta=await fetch("locale.json");
    const vett=await risposta.json();
    let ctlg=document.querySelector("#Catalogo");
    let tipo=document.querySelector("#Tipologia").value;
    let table=`<table class="table">
                <thead>
                    <tr>
                        <th scope="col"></th>
                        <th scope="col">Tipologia</th>
                        <th scope="col">Indirizzo</th>
                        <th scope="col">Città</th>
                        <th scope="col">Provincia</th>
                        <th scope="col">Superficie (m²)</th>
                        <th scope="col">Numero di locali</th>
                        <th scope="col">Prezzo (€)</th>
                        <th scope="col">Disponibile</th>
                    </tr>
                </thead>
                <tbody>`;

    for(let i=0; i<vett.length; i++){
        if(vett[i].tipologia==tipo){
            table+="<tr>";
            table+='<th scope="row">'+ (i+1) +'</th>';
            table+="<td>"+vett[i].tipologia+"</td>";
            table+="<td>"+vett[i].indirizzo+"</td>";
            table+="<td>"+vett[i].città+"</td>";
            table+="<td>"+vett[i].provincia+"</td>";
            table+="<td>"+vett[i].superficie+"m²</td>";
            table+="<td>"+vett[i].n_locali+"</td>";
            table+="<td>"+vett[i].prezzo+"€</td>";
            table+="<td>"+vett[i].disponibile+"</td>";
            table+="</tr>";
        }
    }                
    table+="</tbody></table>";
    ctlg.innerHTML=table;
}

async function CaricaSuper(){
    const risposta=await fetch("locale.json");
    const vett=await risposta.json();
    let ctlg=document.querySelector("#Catalogo");
    let superficie_min=document.querySelector("#SupMin").value;
    let superficie_max=document.querySelector("#SupMax").value;
    let table=`<table class="table">
                <thead>
                    <tr>
                        <th scope="col"></th>
                        <th scope="col">Tipologia</th>
                        <th scope="col">Indirizzo</th>
                        <th scope="col">Città</th>
                        <th scope="col">Provincia</th>
                        <th scope="col">Superficie (m²)</th>
                        <th scope="col">Numero di locali</th>
                        <th scope="col">Prezzo (€)</th>
                        <th scope="col">Disponibile</th>
                    </tr>
                </thead>
                <tbody>`;

    for(let i=0; i<vett.length; i++){
        if(vett[i].superficie<=superficie_max && vett[i].superficie>=superficie_min){
            table+="<tr>";
            table+='<th scope="row">'+ (i+1) +'</th>';
            table+="<td>"+vett[i].tipologia+"</td>";
            table+="<td>"+vett[i].indirizzo+"</td>";
            table+="<td>"+vett[i].città+"</td>";
            table+="<td>"+vett[i].provincia+"</td>";
            table+="<td>"+vett[i].superficie+"m²</td>";
            table+="<td>"+vett[i].n_locali+"</td>";
            table+="<td>"+vett[i].prezzo+"€</td>";
            table+="<td>"+vett[i].disponibile+"</td>";
            table+="</tr>";
        }
    }                
    table+="</tbody></table>";
    ctlg.innerHTML=table;
}

async function CaricaSuper(){
    const risposta=await fetch("locale.json");
    const vett=await risposta.json();
    let ctlg=document.querySelector("#Catalogo");
    let superficie_min=document.querySelector("#SupMin").value;
    let superficie_max=document.querySelector("#SupMax").value;
    let table=`<table class="table">
                <thead>
                    <tr>
                        <th scope="col"></th>
                        <th scope="col">Tipologia</th>
                        <th scope="col">Indirizzo</th>
                        <th scope="col">Città</th>
                        <th scope="col">Provincia</th>
                        <th scope="col">Superficie (m²)</th>
                        <th scope="col">Numero di locali</th>
                        <th scope="col">Prezzo (€)</th>
                        <th scope="col">Disponibile</th>
                    </tr>
                </thead>
                <tbody>`;

    for(let i=0; i<vett.length; i++){
        if(vett[i].superficie<=superficie_max && vett[i].superficie>=superficie_min){
            table+="<tr>";
            table+='<th scope="row">'+ (i+1) +'</th>';
            table+="<td>"+vett[i].tipologia+"</td>";
            table+="<td>"+vett[i].indirizzo+"</td>";
            table+="<td>"+vett[i].città+"</td>";
            table+="<td>"+vett[i].provincia+"</td>";
            table+="<td>"+vett[i].superficie+"m²</td>";
            table+="<td>"+vett[i].n_locali+"</td>";
            table+="<td>"+vett[i].prezzo+"€</td>";
            table+="<td>"+vett[i].disponibile+"</td>";
            table+="</tr>";
        }
    }                
    table+="</tbody></table>";
    ctlg.innerHTML=table;
}

async function CaricaPrezzo(){
    const risposta=await fetch("locale.json");
    const vett=await risposta.json();
    let ctlg=document.querySelector("#Catalogo");
    let prezzo_min=document.querySelector("#PrezzoMin").value;
    let prezzo_max=document.querySelector("#PrezzoMax").value;
    let table=`<table class="table">
                <thead>
                    <tr>
                        <th scope="col"></th>
                        <th scope="col">Tipologia</th>
                        <th scope="col">Indirizzo</th>
                        <th scope="col">Città</th>
                        <th scope="col">Provincia</th>
                        <th scope="col">Superficie (m²)</th>
                        <th scope="col">Numero di locali</th>
                        <th scope="col">Prezzo (€)</th>
                        <th scope="col">Disponibile</th>
                    </tr>
                </thead>
                <tbody>`;

    for(let i=0; i<vett.length; i++){
        if(vett[i].prezzo<=prezzo_max && vett[i].prezzo>=prezzo_min){
            table+="<tr>";
            table+='<th scope="row">'+ (i+1) +'</th>';
            table+="<td>"+vett[i].tipologia+"</td>";
            table+="<td>"+vett[i].indirizzo+"</td>";
            table+="<td>"+vett[i].città+"</td>";
            table+="<td>"+vett[i].provincia+"</td>";
            table+="<td>"+vett[i].superficie+"m²</td>";
            table+="<td>"+vett[i].n_locali+"</td>";
            table+="<td>"+vett[i].prezzo+"€</td>";
            table+="<td>"+vett[i].disponibile+"</td>";
            table+="</tr>";
        }
    }                
    table+="</tbody></table>";
    ctlg.innerHTML=table;
}

async function CaricaLocali(){
    const risposta=await fetch("locale.json");
    const vett=await risposta.json();
    let ctlg=document.querySelector("#Catalogo");
    let n_locali=document.querySelector("#Locali").value;
    let table=`<table class="table">
                <thead>
                    <tr>
                        <th scope="col"></th>
                        <th scope="col">Tipologia</th>
                        <th scope="col">Indirizzo</th>
                        <th scope="col">Città</th>
                        <th scope="col">Provincia</th>
                        <th scope="col">Superficie (m²)</th>
                        <th scope="col">Numero di locali</th>
                        <th scope="col">Prezzo (€)</th>
                        <th scope="col">Disponibile</th>
                    </tr>
                </thead>
                <tbody>`;

    for(let i=0; i<vett.length; i++){
        if(vett[i].n_locali==n_locali){
            table+="<tr>";
            table+='<th scope="row">'+ (i+1) +'</th>';
            table+="<td>"+vett[i].tipologia+"</td>";
            table+="<td>"+vett[i].indirizzo+"</td>";
            table+="<td>"+vett[i].città+"</td>";
            table+="<td>"+vett[i].provincia+"</td>";
            table+="<td>"+vett[i].superficie+"m²</td>";
            table+="<td>"+vett[i].n_locali+"</td>";
            table+="<td>"+vett[i].prezzo+"€</td>";
            table+="<td>"+vett[i].disponibile+"</td>";
            table+="</tr>";
        }
    }                
    table+="</tbody></table>";
    ctlg.innerHTML=table;
}

let btnCaricaLista=document.querySelector("#CaricaLista");
btnCaricaLista.addEventListener('click', CaricaLista);
let btnCaricaDisp=document.querySelector("#CaricaDisp");
btnCaricaDisp.addEventListener('click', CaricaDisp);
let btnCaricaCittà=document.querySelector("#CaricaCittà");
btnCaricaCittà.addEventListener('click', CaricaCittà);
let btnCaricaTipo=document.querySelector("#CaricaTipo");
btnCaricaTipo.addEventListener('click', CaricaTipologia);
let btnCaricaSup=document.querySelector("#CaricaSuper");
btnCaricaSup.addEventListener('click', CaricaSuper);
let btnCaricaPrez=document.querySelector("#CaricaPrezzo");
btnCaricaPrez.addEventListener('click', CaricaPrezzo);
let btnCaricaNL=document.querySelector("#CaricaLocali");
btnCaricaNL.addEventListener('click', CaricaLocali);