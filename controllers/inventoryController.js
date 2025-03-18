import inventoryModel from "../models/inventory.model.js";
import userModel from "../models/user.model.js";

// Create inventory
const createInventoryController = async (req, res) => {
  try {
    const { email, inventoryType } = req.body;
    // Validation
    const user = await userModel.findOne({ email });
    if (!user) {
      throw new Error("User Not found");
    }
    if (inventoryType === "in" && user.role !== "donor") {
      throw new Error("Not a donor account");
    }
    if (inventoryType === "out" && user.role !== "hospital") {
      throw new Error("Not a hospital");
    }

    // Save record
    const inventory = new inventoryModel(req.body);
    await inventory.save();

    // Created
    res.status(201).send({
      success: true,
      message: "New Record Added",
    });
  } catch (error) {
    console.log(
      "inventoryController createInventoryController error:".bgRed.black,
      error
    );
    // 500 Internal Server Error
    res.status(500).send({
      success: false,
      message: "Error in create inventory API",
      error,
    });
  }
};

// Get blood records
const getInventoryController = async (req, res) => {
  try {
    const inventory = await inventoryModel
      .find({
        organisation: req.body.userId,
      })
      .populate("donor")
      .populate("hospital")
      .sort({ ceatedAt: -1 });
    // 200 OK response
    return res.status(200).send({
      success: true,
      message: "Get all records successful",
      inventory,
    });
  } catch (error) {
    console.log(
      "inventoryController getInventoryController error:".bgRed.black,
      error
    );
    // 500 Internal Server Error
    res.status(500).send({
      success: false,
      message: "Error in get inventory API",
      error,
    });
  }
};

export { createInventoryController, getInventoryController };
