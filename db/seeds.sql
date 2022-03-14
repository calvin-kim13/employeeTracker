USE employee_db; 

INSERT INTO department
    (name)
VALUES
    ('Finance'),
    ('Marketing'),
    ('Sales');

INSERT INTO role
    (title, salary, department_id)
VALUES
    ('Financial Manager', 750000, 1),
    ('Financial Analyst', 500000, 1),
    ('Financial Analyst', 50000, 1),
    ('Marketing Manager', 1000000, 2),
    ('Marketing Analyst', 1000000, 2),
    ('Marketing Analyst', 60000, 2),
    ('Sales Manager', 250000, 3),
    ('Sales Analyst', 250000, 3),
    ('Sales Analyst', 50000, 3);

INSERT INTO employee 
    (first_name, last_name, role_id, manager_id)
VALUES  
    ('Daenerys', 'Targaryen', 1, NULL),
    ('Rhaehgar', 'Targaryen', 2, 1),
    ('George', 'Targaryen', 3, 1),
    ('Tywin', 'Lannister', 4, NULL),
    ('Joanna', 'Lannister', 5, 4),
    ('Jamie', 'Lannister', 6, 4),
    ('Ed', 'Stark', 7, NULL),
    ('Sansa', 'Stark', 8, 7),
    ('Jon', 'Snow', 9, 7);