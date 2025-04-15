import { app } from "./app.js"

const HOST = process.env.HOST || "0.0.0.0";
const PORT = process.env.NODE_PORT || 3000;

async function start() {
    try {
        app.listen({ port: PORT , host: HOST})
    } catch (error) {
        console.error(error)
        process.exit(1)
    }
}

start().then(() => { console.log(`App it's running on port ${PORT}`) });