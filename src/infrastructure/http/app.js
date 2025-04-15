import { peopleRoutes } from "./controllers/route.js";
import fastify from "fastify";

const app = fastify();

app.register(peopleRoutes);

export { app }


 