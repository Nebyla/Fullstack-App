//import express
import express from "express";

//import functions from controller
import {
  showClient,
  showClientById,
  createClient,
  updateClient,
  deleteClient,
} from "../controllers/client.js";
import { 
  showFlight,
  showFlightById,
} from "../controllers/flight.js";

//init express router
const router = express.Router();

//get all product
router.get("/flight", showFlight);

//get single product
router.get("/flight/:id", showFlightById);

//get all product
router.get("/client", showClient);

//get single product
router.get("/client/:id", showClientById);

// Create New Product
router.post("/client", createClient);

// Update Product
router.put("/client/:id", updateClient);

// Delete Product
router.delete("/client/:id", deleteClient);

//export default router
export default router;
