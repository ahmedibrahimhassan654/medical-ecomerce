import mongoose from "mongoose";
// const pkgSize = new mongoose.Schema();
const subSchema = new mongoose.Schema({
  unit: {
    type: String,
    enum: ["ml", "sticks", "gm", "pens"],
  },
  price: {
    type: Number,
    required: true,
  },
  count: {
    type: Number,
    required: true,
  },
  numberonStock: {
    type: Number,
    required: true,
    default: 0,
  },
});
const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please add a product name"],
      trim: true,
      index: true,
      unique: true,
    },
    slug: { type: String, required: true, unique: true },
    description: {
      type: String,
      default: "No Description",
      trim: true,
    },
    category: {
      type: String,
      required: [true, "Please add a category"],
    },
    image: { type: String, required: true },
    brand: { type: String, required: true },
    rating: { type: Number, required: true, default: 0 },
    numReviews: { type: Number, required: true, default: 0 },
    size: [subSchema],

    requiredPrescription: {
      type: Boolean,
      default: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  {
    timestamps: true,
  }
);

const Product =
  mongoose.models.Product || mongoose.model("Product", productSchema);
export default Product;
