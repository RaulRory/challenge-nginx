import { FetchPeople } from "../../../application/use-case/fetch-people.js";
import { RegisterPeople } from "../../../application/use-case/register-people.js";
import { PrismaRepository } from "../../database/repository/prismaRepository.js";
import { faker } from "@faker-js/faker"

class PeopleController {
    static async create(request, reply) {
        try {
            const repository = new PrismaRepository()
            const useCaseRegister = new RegisterPeople(repository);
            const useCaseList = new FetchPeople(repository);
            
            await useCaseRegister.execute({
                name: faker.person.firstName(),
                age: faker.number.int({ min: 15, max: 100 }),
                dateOfBirth: faker.date.birthdate()
            });

            const { peoples } = await useCaseList.execute();

            return reply.status(200).send({message: "<h1>Full Cycle Rocks!</h1>", peoples });
        } catch (error) {
            console.error(error);
            throw new Error("Error Controller")
        }
    }
}

export { PeopleController }