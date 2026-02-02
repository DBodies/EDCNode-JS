import { initMongoDb } from "./db/initMongoDb.js";
import { startServer } from "./server.js";

const boot = async () => {
    await initMongoDb();
    startServer();
};
boot();