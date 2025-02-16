import mongoose, { Schema } from "mongoose";

const ItemSchema = new Schema({
  product: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Product",
    requried: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
});

const OrderSchema = new Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    deliveryDate: {
      type: Date,
      required: true,
    },
    address: {
      type: String,
    },
    items: {
      type: ItemSchema,
      required: true,
    },
    status: {
      type: String,
      enum: [
        "ORDER_PLACED",
        "SHIPPING",
        "OUT_FOR_DELIVERY",
        "DELIVERED",
        "CANCELLED",
      ],
      default: "ORDER_PLACED",
      required: true,
    },
  },
  { timestamps: true }
);


export const Order = mongoose.model("Order", OrderSchema)
