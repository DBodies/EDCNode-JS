import mongoose from "mongoose";
import { getEnvVar } from "../utils/getEnvVar.js";

export const initMongoDb = async () => {
    try {
        const db_user = getEnvVar("DB_USER") ;
        const db_url =  getEnvVar("DB_URL");
        const db_folder = getEnvVar("DB_FOLDER");
        const db_pwd = getEnvVar("DB_PWD");
        
        await mongoose.connect(`mongodb+srv://${db_user}:${db_pwd}@${db_url}/${db_folder}?retryWrites=true&w=majority`);
          console.log('Mongo connection successfully established!');
    } catch (e) {
        console.log('Error while setting up mongo connection', e);
        throw e;
    }
};