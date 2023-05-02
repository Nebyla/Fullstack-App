//import express
import express from "express";

//import functions from controller
import {
  showClient,
  showClientById,
  createClient,
  updateClient,
  deleteClient,
  searchTelGenre,
  searchPSGenre,
  showClientTicket,
} from "../controllers/client.js";
import { 
  showFlight,
  showFlightById,
  createFlight,
  deleteFlight,
  searchGenre,
} from "../controllers/flight.js";

//init express router
const router = express.Router();

//get all product
router.get("/flight", showFlight);

router.get("/psgenre", searchPSGenre);

router.get("/telgenre", searchTelGenre);

router.get("/genre", searchGenre);

//get single product
router.get("/flight/:id", showFlightById);


router.post("/flight", createFlight);

router.delete("/flight/:id", deleteFlight);


//get all product
router.get("/client", showClient);

//get single product
router.get("/client/:id", showClientById);

router.get("/ticket", showClientTicket);

// Create New Product
router.post("/client", createClient);

// Update Product
router.put("/client/:id", updateClient);

// Delete Product
router.delete("/client/:id", deleteClient);

//export default router
export default router;
