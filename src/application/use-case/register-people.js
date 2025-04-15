import { People } from "../../domain/people.js";

class RegisterPeople {
    #repository;

    constructor(repository) {
        this.#repository = repository;
    }

    async execute(people) {
        const newPeople = new People({ name: people.name, age: people.age, dateOfBirth: people.dateOfBirth })
        
        await this.#repository.create(newPeople);

        return { people: newPeople };
    }
}

export { RegisterPeople }