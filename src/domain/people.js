import { randomUUID } from "node:crypto";

 class People {
    
    id;
    name; 
    age;
    dateOfBirth;
    
    constructor({ id = randomUUID(), name, age, dateOfBirth }) {
        this.id = id;
        this.name = name;
        this.age = age;
        this.dateOfBirth = dateOfBirth;
    }
}

export { People };