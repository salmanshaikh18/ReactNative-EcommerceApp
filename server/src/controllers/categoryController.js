import { Category } from "../models/category.js";
import { errorHandler } from "../utils/errorHandler.js";

export const getAllCategories = async (req, res) => {
  try {
    const categories = await Category.find();

    res.status(200).json({
      success: true,
      categories,
    });
  } catch (error) {
    errorHandler(error, "getAllCategories", res);
  }
};
