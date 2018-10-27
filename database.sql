CREATE TABLE person (
    id SERIAL PRIMARY KEY,
    username VARCHAR (80) UNIQUE NOT NULL,
    password VARCHAR (1000) NOT NULL
);
CREATE TABLE projects (
    id SERIAL PRIMARY KEY,
    person_id INT REFERENCES person,
    devices_id INT REFERENCES devices,
    project_name VARCHAR (500),
    project_location VARCHAR (500),
    date_started date TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    date_ended date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    complete BOOLEAN DEFAULT FALSE,
    notes VARCHAR (10000),
    yield VARCHAR (6)
);
CREATE TABLE images (
    id SERIAL PRIMARY KEY,
    projects_id INT REFERENCES projects,
    image_path VARCHAR (5000)
);
CREATE TABLE devices (
    id SERIAL PRIMARY KEY,
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

