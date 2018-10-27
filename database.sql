CREATE TABLE person (
    id SERIAL PRIMARY KEY,
    username VARCHAR (80) UNIQUE NOT NULL,
    password VARCHAR (1000) NOT NULL
);
CREATE TABLE projects (
    id SERIAL PRIMARY KEY,
    person_id INT REFERENCES person,
    project_name VARCHAR (500),
    project_location VARCHAR (500),
    date_started TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    date_ended TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    complete BOOLEAN DEFAULT FALSE,
    notes VARCHAR (10000),
    yield VARCHAR (6)
);
CREATE TABLE images (
    id SERIAL PRIMARY KEY,
    projects_id INT REFERENCES projects,
    image_path VARCHAR (5000),
    date_uploaded TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);
CREATE TABLE readings (
    id SERIAL PRIMARY KEY,
    projects_id INT REFERENCES projects,
    temperature VARCHAR (5),
    humidity VARCHAR (4),
    voc VARCHAR (500),
    lux VARCHAR (500),
    date TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);
CREATE TABLE notes (
    id SERIAL PRIMARY KEY,
    projects_id INT REFERENCES projects(id),
    note VARCHAR(10000),
    note_date TIMESTAMP DEFAULT NOW()
);
