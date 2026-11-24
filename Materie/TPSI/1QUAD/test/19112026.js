document.querySelector("#btnCaricaArchivio").addEventListener('click', async function () {
    const promise=await fetch("19112026.json");
    const jsonArr=await promise.json();
    let vb=document.querySelector("#viewBox");
    
    let resultTable = `
        <table class="table table-striped table-hover">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Titolo</th>
                    <th scope="col">Piattaforma</th>
                    <th scope="col">Anno</th>
                    <th scope="col">Peso (GB)</th>
                    <th scope="col">Estensione</th>
                </tr>
            </thead>
            <tbody>
    `;
    for (let i=0; i < jsonArr.length; i++) {
        resultTable += '<tr>';
        resultTable += '<th scope="row">'+ (i+1) +'</th>';
        resultTable += '<td>'+jsonArr[i].titolo+'</td>';
        resultTable += '<td>'+jsonArr[i].piattaforma+'</td>';
        resultTable += '<td>'+jsonArr[i].anno+'</td>';
        resultTable += '<td>'+jsonArr[i].peso+' GB</td>';
        resultTable += '<td>'+jsonArr[i].estensione+'</span></td>';
        resultTable += '</tr>';
    }
    resultTable += '</tbody><caption>Giochi totali in archivio: '+jsonArr.length+'</caption></table>';

    vb.innerHTML = resultTable;
});

document.querySelector("#btnCercaPiattaforma").addEventListener('click', async function () {
    const promise= await fetch("19112026.json");
    const jsonArr = await promise.json();
    let vb = document.querySelector("#viewBox");
    let piattaformaSrc = document.querySelector("#inputPiattaforma").value;
    let cnt = 0;

    let resultTable = `
        <table class="table table-striped table-hover">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Titolo</th>
                    <th scope="col">Piattaforma</th>
                    <th scope="col">Anno</th>
                    <th scope="col">Peso (GB)</th>
                    <th scope="col">Estensione</th>
                </tr>
            </thead>
            <tbody>
    `;
    for (let i = 0; i < jsonArr.length; i++) {
        if (jsonArr[i].piattaforma==piattaformaSrc){
            resultTable += '<tr>';
            resultTable += '<th scope="row">'+ (i+1) +'</th>';
            resultTable += '<td>'+jsonArr[i].titolo+'</td>';
            resultTable += '<td>'+jsonArr[i].piattaforma+'</td>';
            resultTable += '<td>'+jsonArr[i].anno+'</td>';
            resultTable += '<td>'+jsonArr[i].peso+' GB</td>';
            resultTable += '<td>'+jsonArr[i].estensione+'</span></td>';
            resultTable += '</tr>';
            cnt++;
        }
    }
    resultTable+= '</tbody><caption>Giochi trovati: '+cnt+'</caption></table>';

    vb.innerHTML=resultTable;
});
document.querySelector("#btnCercaEstensione").addEventListener('click', async function () {
    const promise= await fetch("19112026.json");
    const jsonArr = await promise.json();
    let vb = document.querySelector("#viewBox");
    let estensioneSrc = document.querySelector("#inputEstensione").value;
    let cnt = 0;

    let resultTable = `
        <table class="table table-striped table-hover">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Titolo</th>
                    <th scope="col">Piattaforma</th>
                    <th scope="col">Anno</th>
                    <th scope="col">Peso (GB)</th>
                    <th scope="col">Estensione</th>
                </tr>
            </thead>
            <tbody>
    `;
    for (let i = 0; i < jsonArr.length; i++) {
        if (jsonArr[i].estensione===estensioneSrc) {
            resultTable += '<tr>';
            resultTable += '<th scope="row">'+ (i+1) +'</th>';
            resultTable += '<td>'+jsonArr[i].titolo+'</td>';
            resultTable += '<td>'+jsonArr[i].piattaforma+'</td>';
            resultTable += '<td>'+jsonArr[i].anno+'</td>';
            resultTable += '<td>'+jsonArr[i].peso+' GB</td>';
            resultTable += '<td>'+jsonArr[i].estensione+'</span></td>';
            resultTable += '</tr>';
            cnt++;
        }
    }
    resultTable += '</tbody><caption>Giochi trovati: '+cnt+'</caption></table>';

    vb.innerHTML = resultTable;
});

document.querySelector("#btnCercaAnno").addEventListener('click', async function(){
    const promise= await fetch("19112026.json");
    const jsonArr = await promise.json();
    let vb = document.querySelector("#viewBox");
    let annoIniziale = parseInt(document.querySelector("#inputAnnoMinimo").value);
    let annoFinale = parseInt(document.querySelector("#inputAnnoMassimo").value);
    let cnt = 0;

    let resultTable = `
        <table class="table table-striped table-hover">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Titolo</th>
                    <th scope="col">Piattaforma</th>
                    <th scope="col">Anno</th>
                    <th scope="col">Peso (GB)</th>
                    <th scope="col">Estensione</th>
                </tr>
            </thead>
            <tbody>
    `;
    for (let i = 0; i < jsonArr.length; i++) {
        if (jsonArr[i].anno >= annoIniziale && jsonArr[i].anno <= annoFinale) {
            resultTable += '<tr>';
            resultTable += '<th scope="row">'+ (i+1) +'</th>';
            resultTable += '<td>'+jsonArr[i].titolo+'</td>';
            resultTable += '<td>'+jsonArr[i].piattaforma+'</td>';
            resultTable += '<td>'+jsonArr[i].anno+'</td>';
            resultTable += '<td>'+jsonArr[i].peso+' GB</td>';
            resultTable += '<td>'+jsonArr[i].estensione+'</span></td>';
            resultTable += '</tr>';
            cnt++;
        }
    }
    resultTable += '</tbody><caption>Giochi trovati: '+cnt+'</caption></table>';

    vb.innerHTML = resultTable;
});