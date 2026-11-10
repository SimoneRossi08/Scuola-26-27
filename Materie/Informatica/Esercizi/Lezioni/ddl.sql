<<<<<<< HEAD
CREATE TABLE IF NOT EXIST autovettura(
=======
CREATE TABLE autovettura(
>>>>>>> d46f897fb2f746476cd2f3643283c750cb889150
    id integer unsigned auto_increment,
    marca varchar(20),
    modello varchar(20),
    annoImmatricolazione char(4),
    provincia char(2),
    uniproprietaro boolean,
    kilometraggio integer unsigned,

    primary key(id)
);