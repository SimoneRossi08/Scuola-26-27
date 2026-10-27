<!DOCTYPE html>
<html lang="en">
    <head>
        <title>Esercizio 4</title>
        <-- presenta un form per l'inserimento di un valore quindi visualizza una tabella
                contenente tutte le tabelline da 1 fino al numero inserito. --!>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-sRIl4kxILFvY47J16cr9ZwB07vP4J8+LH7qKQnuqkuIAvNWLzeN8tE5YBujZqJLB" crossorigin="anonymous">
    </head>
    <body>
        <?php
            if(isset($_GET['scelta'])){
                    switch($_GET['scelta']){
                        case "calcola":{
                            $tabella=$_GET['InputValore'];

                            echo('<table style="border: solid 2px rbg(200,0,0);">');
                            for($r=1; $r<=$tabella; $r++){
                                echo('<tr>');
                                for($c=1; $c<=10; $c++){
                                    $prodotto=$r*$c;
                                    //echo($prodotto.'');
                                    echo('<td style="border: solid 2px rbg(200,0,0);">'.$prodotto.'</td>');
                                }
                                //echo('<br />');
                                echo('</tr>');
                            }
                            echo('</table>');
                            
                            echo('<a href="e05.php">Torna al form...</a>');
                            break;
                        }
                        
                    }   
                }
            else{
                echo('<div class="container-fluid">
                    <h1>Form Inserimento Dati</h1>
                    <form action="e05.php" method="get">
                        <div class="mb-3">
                            <label for="InputValore" class="form-label">Inserisci il valore:</label>
                            <input class="form-control form-control-lg" type="text" name="area" id="area" placeholder="Valore del raggio" aria-label="default input example">
                        </div>
                        <input type="hidden" name="scelta" id="scelta" value="calcola">
                        <button class="btn btn-success" type="submit">Visualizza tabelline</button>
                    </form>            
                </div>');
            }
        ?>
    </body>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/js/bootstrap.bundle.min.js" integrity="sha384-FKyoEForCGlyvwx9Hj09JcYn3nv7wiPVlz7YYwJrWVcXK/BmnVDxM+D2scQbITxI" crossorigin="anonymous"></script>
</html>