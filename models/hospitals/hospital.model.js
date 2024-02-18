import mongoose from "mongoose";

const hospitalSchmea = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    specialisedIn: [
      // can store multiple object as array
      {
        type: String,
      },
    ],
    addressLine1: {
      type: String,
      required: true,
    },
    addressLine: {
      type: String,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
    state: {
      type: String,
      required: true,
    },
    pinCode: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export const Hospital = mongoose.model("Hospital", hospitalSchmea);
