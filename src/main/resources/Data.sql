insert into user values (1, 'Billy', 'billy@gmail.com');
insert into user values (2, 'John', 'john@gmail.com');
insert into user values (3, 'Ron', 'Ron@gmail.com');

insert into category values (1, 'Travel');
insert into category values (2, 'Auto Loan');
insert into category values (3, 'Student Loan');

insert into expense values (100, 'New York', '2019-06-16T17:00:00.000Z',1,1);
insert into expense values (101, 'Ford Mustang', '2019-06-15T15:00:00.000Z', 2,2);
insert into expense values(102, 'Grand Canyon', '2019-06-14T15:00:00.000Z', 3,1);

# Connect to H2 console by going to:
# localhost:8080/h2-console
# JDBC URL: jdbc:h2:mem:testdb