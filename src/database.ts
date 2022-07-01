import { connect, connection } from "mongoose";
import { MONGO_URI } from "./config";

export const connectToMongodb = async() => {
    try {
      await connect(MONGO_URI);
    } catch (error) {
      console.log("Error:", error);
    }
  }
  
  connection.on("connected", () => {
    console.log("Mongodb connected to:", connection.db.databaseName);
  });
  
  connection.on("error", (error) => {
    console.error("error", error);
  });
  
  connection.on("disconnected", () => {
    console.log("Mongodb disconnected");
  });