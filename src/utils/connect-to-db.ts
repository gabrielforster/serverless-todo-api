import mongoose from "mongoose";

let cachedDB = null;

export const db = async() => {
  if (!cachedDB) {
    await mongoose.connect(process.env.MONGODB_URI as string);  
    cachedDB = mongoose.connection
  
    cachedDB.on("error", console.error.bind(console, "connection error:"));
    cachedDB.once("open", () => {
      console.log("Connected to DB");
    });
  }
  
  return cachedDB;
}