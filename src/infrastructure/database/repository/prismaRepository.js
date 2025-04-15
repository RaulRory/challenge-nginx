import { PeopleRepository } from "../../../application/repositories/PeopleRepository.js";
import { primsa } from "../connection/connection.js";

class PrismaRepository extends PeopleRepository {

    async create(people) {
        const peopleCreated = await primsa.people.create({
            data: {
                name: people.name,
                age: people.age,
                dateOfBirth: people.dateOfBirth
            }
        });

        return peopleCreated;
    }
    
    async list() {
        const peoples = await primsa.people.findMany();
        
        return peoples;
    }
}

export { PrismaRepository }