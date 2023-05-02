require("dotenv").config();
const express = require("express");
const cors = require("cors");
const { connection } = require("./Configs/db");
const { userRouter } = require("./Routes/users.routes");
const { productsRouter } = require("./Routes/products.routes");
const { cartRouter } = require("./Routes/cart.routes");
const { orderedProductsRouter } = require("./Routes/orderedProducts.routes");
const { productsRatingRouter } = require("./Routes/productsRatings.routes");
const { userFeedbackRouter } = require("./Routes/userFeedback.routes");

const app = express();
app.use(express.json());
app.use(cors());

/**
 * * Routes Middlewares
 */
app.use("/users", userRouter);
app.use("/products", productsRouter);
app.use("/cart", cartRouter);
app.use("/orderedproducts", orderedProductsRouter);
app.use("/product/ratings", productsRatingRouter);
app.use("/user/feedback", userFeedbackRouter);

app.get("/", (req, res) => {
  res.send({ msg: "HomePage" });
});

// * Listen
(async () => {
  try {
    await connection;

    console.log("DataBase Connected");

    //* connecting server after database
    app.listen(process.env.PORT, () => {
      console.log("Server is running");
    });
  } catch (err) {
    console.log("DataBase Error", err.message);
  }
})();
