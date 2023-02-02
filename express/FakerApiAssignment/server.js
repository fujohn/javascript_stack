const express = require("express");
const { faker } = require('@faker-js/faker')

const app = express();
const port = 8000;

const createUser = () => ({
    _id: faker.datatype.uuid(),
    email: faker.internet.email(),
    password: faker.internet.password(),
    phoneNumber: faker.phone.phoneNumber(),
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName()
});

const createCompany = () => ({
    _id: faker.datatype.uuid(),
    name: faker.company.name(),
    address: {
        street: faker.address.street(),
        city: faker.address.cityName(),
        state: faker.address.state(),
        zipCode: faker.address.zipCode(),
        country:faker.address.country()
        }
    });

// returns a new user
app.get("/api/users/new", (req, res) => {
    const newUser = createUser();
    res.json(newUser);
});

// returns a new company
app.get("/api/companies/new", (req, res) => {
    const newCompany = createCompany();
    res.json(newCompany);
});

// returns both new user and company
app.get("/api/user/company", (req, res) => {
    const newCompany = createCompany();
    const newUser = createUser();
    const both = {
        user: newUser,
        company: newCompany
    }
    res.json(both);
});

// this needs to be below the other code blocks
app.listen( port, () => console.log(`Listening on port: ${port}`) );
