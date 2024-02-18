import mongoose from "mongoose";

const orderDetailsSchema = new mongoose.Schema({
  productId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Product",
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
});

const orderSchema = new mongoose.Schema(
  {
    orderPrice: {
      type: Number,
      requried: true,
    },
    Customer: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: ture,
    },
    orderItems: {
      type: [orderDetailsSchema], // defined minimodel ref from order details schema
    },
    address: {
      type: String,
      required: true,
    },
    orderStatus: {
      type: String,
      enum: ["Pending", "Canclled", "Delivered"], // restrict user with option to choose
      default: "Pending",
    },
  },
  { timestamps: true }
);

export const Order = mongoose.model("Order", orderSchema);
