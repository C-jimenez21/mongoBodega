import dotenv from "dotenv";
import {MongoClient} from "mongodb"

dotenv.config("../");

export async function connection(){
    try {
        const URI = `mongodb+srv://${process.env.ATLAS_USER}:${process.env.ATLAS_PASSWORD}@cluster0.qbqr4gp.mongodb.net/${process.env.ATLAS_DATABASE}`;
        const options = {
            useNewUrlParser: true,
            useUnifiedTopology: true
        };
        const client = await MongoClient.connect(URI, options);
        return client.db()

    } catch (error) {
        return{status: 500, message: error};
    }
}
