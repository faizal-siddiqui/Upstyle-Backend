const { CartModel } = require("../../Models/cart.model");

const updateCartProducts = async (req, res) => {
  const body = req.body;
  //* Delete UserId so that it will not get added here  in the cart product
  delete req.body.userId;
  const ID = req.params.id;

  try {
    await CartModel.findByIdAndUpdate({ _id: ID }, body);
    res.send({ msg: "Cart Details Updated" });
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};

module.exports = {
  updateCartProducts,
};
