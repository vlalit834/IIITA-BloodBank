import mongoose from "mongoose";

const inventorySchema = new mongooose.Schema(
  {
    invetoryType: {
      type: String,
      required: [true, "*"],
      enum: ["in", "out"],
    },
    bloodGroup: {
      type: String,
      required: [true, "*"],
      enum: ["O+", "O-", "AB+", "AB-", "A+", "A-", "B+", "B-"],
    },
    quantity: {
      type: Number,
      required: [true, "*"],
    },
    organisation: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "users",
      required: [true, "*"],
    },
    hospital: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "users",
      required: function () {
        return this.invetoryType === "out";
      },
    },
    donor: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "users",
      required: function () {
        return this.invetoryType === "in";
      },
    },
  },
  { timestamps: true }
);

export default mongoose.model("inventory", inventorySchema);
