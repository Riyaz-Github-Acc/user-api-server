import mongoose from "mongoose";

const UserSchema = mongoose.Schema(
  {
    name: {
      type: String,
      unique: [true, "Name already in use"],
      required: [true, "Please enter a name"],
    },

    gender: {
      type: String,
      required: [true, "Please specify a gender"],
      enum: {
        values: ["male", "female", "other"],
        message:
          "Gender must be any of the following three: male, female, other",
      },
    },

    dob: {
      type: Date,
      required: [true, "Please enter a date of birth"],
    },

    city: {
      type: String,
      required: [true, "Please enter a city"],
    },

    state: {
      type: String,
      required: [true, "Please enter a state"],
    },

    pincode: {
      type: Number,
      required: [true, "Please enter a pincode"],
      validate: {
        validator: function (pincode) {
          return /^\d{6}$/.test(pincode);
        },
        message: "Please enter a valid 6-digit pincode",
      },
    },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("User", UserSchema);
export default User;
