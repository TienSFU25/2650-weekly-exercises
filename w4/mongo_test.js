import "dotenv/config.js";
import { MongoClient } from "mongodb";

const uri = process.env.MONGOURI;
const client = new MongoClient(uri);

async function connectToMongo() {
  try {
    await client.connect();
    console.log("Connected to the MongoDB database");

    const db = client.db(process.env.MONGODBNAME);

    const movies = await db
      .collection("movies")
      .find({ title: { $regex: "Despicable", $options: "i" } })
      .project({ title: 1 })
      .toArray();

    console.log(movies);
    debugger;
  } catch (err) {
    console.error("Failed to connect to MongoDB", err);
  } finally {
    await client.close();
  }
}

connectToMongo();

const e1a = () => {
  // return all movies released after the year 2000
};

const e1b = () => {
  // all distinct languages in all movies
};

console.log(`All movies after year 2000 ----->`);
console.log(e1a());

console.log(`All distinct languages in all movies ----->`);
console.log(e1b());
