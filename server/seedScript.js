import dotenv from "dotenv";
import mongoose from "mongoose";
import { Product } from "./src/models/product.js";
import { Category } from "./src/models/category.js";
import { categoriesData, productData } from "./seedData.js";
dotenv.config();

async function seedDatabase() {
  try {
    await mongoose.connect(process.env.MONGO_URI);

    await Product.deleteMany({});

    await Category.deleteMany({});

    const categoryDocs = await Category.insertMany(categoriesData);

    console.log("categoryDocs: ", categoryDocs)

    const categoryMap = categoryDocs.reduce((map, category) => {
      map[category.name] = category._id;
      return map;
    });

    console.log("categoryMap: ", categoryMap)

    const productWithCategoryIds = productData.map((product) => ({
      ...product,
      category: categoryMap[product.category],
    }));

    console.log("productWithCategoryIds: ", productWithCategoryIds)

    await Product.insertMany(productWithCategoryIds);

    console.log("DATABASE SEEDED SUCCESSFULLY :)");
  } catch (error) {
    console.error("Error while seeding database: ", error);
  } finally {
    mongoose.connection.close();
  }
}

seedDatabase();
