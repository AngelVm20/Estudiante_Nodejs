import express, { Application } from "express";
import { PORT } from "./config";
import { connectMongoDB } from "./database";
import { routes } from "./router";
const server: Application= express();

async function main() {
    await connectMongoDB();
    const server = express();
    server.use(express.json());
    routes(server);
    server.listen(PORT,()=>{
        console.log("server running on part 3000")
    });
}
main();
