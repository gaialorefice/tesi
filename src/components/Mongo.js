/*

const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://admin:admin@cluster0.iz1z9hb.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
// client.connect(err => {
//   const collection = client.db("test").collection("devices");
//   // perform actions on the collection object
//   client.close();
// });

// const newSchema = new MongoClient.Schema({
    


// });


async function run(){
    try{
        await client.connect(); //per connettere sl server
        await client.db("admin").command({ping: 1}); //per vedere se la connessione è andata a buon fine
        const myDB = client.db("mydatabase");
        const myColl = myDB.collection("user_list");
        const user1= {name:"Prova", email:"prova", password:"prova"};
        const result = await myColl.insertOne(user1);

        console.log("pinged");
    } finally{
        await client.close();
    }

}

run().catch(console.dir);

*/