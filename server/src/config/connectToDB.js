import mongoose from "mongoose";

export const connectToDB = async (MONGO_URI) => {
  try {
    console.log("trying to connect mongodb...");

    await mongoose.connect(MONGO_URI);

    console.log("MongoDB connected successfully");
  } catch (error) {
    console.error("Error connecting to MongoDB: ", error);
    process.exit(1);
  }
};
