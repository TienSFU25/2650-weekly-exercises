import "dotenv/config";
import mongoose from "mongoose";

async function connectToDatabase() {
  const uri = process.env.MONGOURI;

  if (!uri) {
    throw new Error("Missing MONGOURI environment variable");
  }

  await mongoose.connect(uri);
}

const movieSchema = new mongoose.Schema({
  title: { type: String, required: true },
  year: { type: Number, required: true },
  director: { type: String, required: true },
  genre: { type: String },
  createdAt: { type: Date, default: Date.now },
});

const Movie = mongoose.model("Movie", movieSchema);

async function getOneMovie() {
  try {
    const movies = await Movie.findOne({});
    console.log("A movie", movies);
  } catch (err) {
    console.error("Error fetching movies:", err.message);
  }
}

async function main() {
  try {
    await connectToDatabase();
    await getOneMovie();
  } catch (err) {
    console.log(`It blew up! ${err}`);
    process.exit(1);
  } finally {
    mongoose.connection.close();
  }
}

main();

const e2a = () => {
  // return all movies released after the year 2000
};

const e2b = () => {
  // all distinct languages in all movies
};

console.log(`All movies after year 2000 ----->`);
console.log(e2a());

console.log(`All distinct languages in all movies ----->`);
console.log(e2b());
