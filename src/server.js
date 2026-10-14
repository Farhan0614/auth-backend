import mongoose from "mongoose";
import app from "./app.js";
const PORT = process.env.PORT || 8000;

let server;

async function main() {
  await mongoose.connect(process.env.DATABASE_PASSWORD);
  console.log("DB connection successful!");

  server = app.listen(PORT, () => {
    console.log(`Server is running on PORT ${PORT}`);
  });
}

main();
