import { describe, it, beforeEach}  from "node:test";
import { deepStrictEqual } from "node:assert";
import { faker } from "@faker-js/faker"
import { PeopleRepository } from "../../src/application/repositories/PeopleRepository.js";
import { RegisterPeople } from "../../src/application/use-case/register-people.js";

describe("Resgister People", () => {
    let useCase = {};
    let repository = {};

    beforeEach(() => {
        repository = new PeopleRepository();
        useCase = new RegisterPeople(repository);
    });

    it("Should to register a people", async () => {
        const personToRegister = {
            name: faker.person.firstName(),
            age: faker.number.int(),
            dateOfBirth: faker.date.birthdate()
        };

        const { people } = await useCase.execute(personToRegister);

        deepStrictEqual(personToRegister, {
            name: people.name,
            age: people.age,
            dateOfBirth: people.dateOfBirth
        });
    })
});