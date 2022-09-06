import nc from "next-connect";
import Product from "../../models/Product";
import db from "../../utils/db";
import data from "../../utils/data";
const asyncHandler = require("express-async-handler");

const handler = nc();

handler.get(
  asyncHandler(async (req, res) => {
    await db.connect();

    await Product.deleteMany();
    await Product.insertMany(data.newProducts);
    await db.disconnect();
    res.send({ message: "seeded successfully" });
  })
);

export default handler;
