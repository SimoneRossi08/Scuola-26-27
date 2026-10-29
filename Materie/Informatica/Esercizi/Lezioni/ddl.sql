CREATE TABLE autovettura(
    id integer unsigned auto_increment,
    marca varchar(20),
    modello varchar(20),
    annoImmatricolazione char(4),
    provincia char(2),
    uniproprietaro boolean,
    kilometraggio integer unsigned,

    primary key(id)
);