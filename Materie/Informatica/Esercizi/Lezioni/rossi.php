<!DOCTYPE hmtl>
<html>
    <head>
        <title>Pagina PHP di Prova</title>
    </head>
    <body>
        <?php
            //phpinfo();

            $var; // variabile
            $var=19;

            echo($var.'<br/>'); //stampa

            //var_dump($var);

            $var=$var/2;

            echo($var.'<br/>');

            $var="Hello World";

            echo($var.'<br/>');

            //var_dump($var);

            $var=10;
            if($var<12){
                echo('Variabile minore di 12<br/>');
            }
            else{
                echo('Variabile maggiore o uguale di 12<br/>');
            }
            echo('<br/>');

            $var=0;

            while($var<=10){
                echo($var.' - ');
                $var++;
            }
            echo('<br/>');
        ?>
    </body>
</html>