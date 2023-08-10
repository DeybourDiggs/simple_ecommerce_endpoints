const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const UserRoutes = require("./routes/users");
const AuthRoutes = require("./routes/auth");
const ProductRoutes = require("./routes/product");
const CartRoutes = require("./routes/cart");
const OrderRoutes = require("./routes/order");

const PORT = process.env.PORT || 3000;

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("Db connected"))
  .catch((err) => console.log(err));
app.use(express.json());
app.use("/api/auth", AuthRoutes);
app.use("/api/user", UserRoutes);
app.use("/api/products", ProductRoutes);
app.use("/api/orders", OrderRoutes);
app.use("/api/carts", CartRoutes);

app.listen(PORT, () => {
  console.log(`Backend Server is running on ${PORT}`);
});
