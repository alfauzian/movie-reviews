import mongodb from "mongodb"
import dotenv from "dotenv"
import app from "./server.js"

async function main() {
    dotenv.config()
    

    const client = new mongodb.MongoClient(process.env.MOVIEREVIEWS_DB_URI)
    const port = process.env.port || 8000

    try {
        await client.connect()
        app.listen(port, () =>  {
            console.log('server is runing on port'+ port);
        })
    }
    catch (e){
        console.log(e)
        process.exit(1)
    }
}   

main().catch(console.error);