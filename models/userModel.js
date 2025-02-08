import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    role: {
      type: String,
      require: [true, "*"],
      enum: ["admmin", "organization", "user", "hospital"],
    },
    name: {
      type: String,
      require: function () {
        if (this.role === "user" || this.role === "admin") {
          return true;
        }
        return false;
      },
    },
    organizationName: {
      type: String,
      required: function () {
        if (this.role === "organization") {
          return true;
        }
        return false;
      },
    },
    hospitalName: {
      type: String,
      required: function () {
        if (this.role === "hospital") {
          return true;
        }
        return false;
      },
    },
    email: {
      type: String,
      require: [true, "*"],
      unique: true,
    },
    password: {
      type: String,
      require: [true, "*"],
    },
    website: {
      type: String,
    },
    addAddress: {
      type: String,
      required: [true, "*"],
    },
    phone: {
      type: Number,
      require: [true, "*"],
    },
  },
  { timestamps: true }
);

export default mongoose.model("users", userSchema);
