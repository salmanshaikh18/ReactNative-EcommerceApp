import { Product } from "../models/product.js";
import { errorHandler } from "../utils/errorHandler.js";

export const getProductByCategoryId = async (req, res) => {
  try {
    const { categoryId } = req.params;

    const products = await Product.find({ category: categoryId });

    if (!products || products.length === 0) {
      return res.status(404).json({
        success: false,
        message: "No products found for this category",
      });
    }

    res.status(200).json({
      success: true,
      products,
    });
    
  } catch (error) {
    errorHandler(error, "getProductByCategoryId", res);
  }
};
