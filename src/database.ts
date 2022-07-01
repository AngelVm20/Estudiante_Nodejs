import { connect, connection } from "mongoose";
import {MONGO_URI} from "./config";

export async function connectMongoDB(){
    try{
        await connect(MONGO_URI);

    }catch(error){
        console.error(error);
    }
}

connection.on("connected",() => {
    console.log("DB iniciada",connection.db.databaseName);

});

connection.on("error",(e) => {
    console.error("error",e);

});

connection.on("disconnect",() => {
    console.log("Mongo(BD) esta desconectado");

});