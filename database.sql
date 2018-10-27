CREATE TABLE person (
    id SERIAL PRIMARY KEY,
    username VARCHAR (80) UNIQUE NOT NULL,
    password VARCHAR (1000) NOT NULL,
    notes VARCHAR (10000)
);

CREATE TABLE devices (
    id SERIAL PRIMARY KEY,
    person_id INT REFERENCES person,
    particle_id VARCHAR (10),
    token VARCHAR (10),
    location VARCHAR (100)
);
CREATE TABLE readings (
    id SERIAL PRIMARY KEY,
    device_id INT REFERENCES devices,
    temperature VARCHAR (5),
    humidity VARCHAR (4),
    date TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);
CREATE TABLE alerts (
    id SERIAL PRIMARY KEY,
    temperature_alert VARCHAR (5),
    humidity_alert VARCHAR (4),
    date TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    device_id INT REFERENCES devices
);
CREATE TABLE notes (
    id SERIAL PRIMARY KEY,
    note VARCHAR (1000),
    person_id INT REFERENCES person
);
CREATE TABLE project_complete (
    id SERIAL PRIMARY KEY,
    temperature_data VARCHAR (5),
    humidity_data VARCHAR (4),
    yield VARCHAR (6)
);

