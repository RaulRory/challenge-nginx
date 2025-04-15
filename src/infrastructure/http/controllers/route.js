import { PeopleController } from "./peopleController.js";

export async function peopleRoutes(appInstance) {
    appInstance.get("/", PeopleController.create);
}