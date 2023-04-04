//import functions from Product model
import {
  getClient,
  getClientById,
  insertClient,
  updateClientById,
  deleteClientById,
} from "../models/clientModel.js";

//get all products
export const showClient = (req, res) => {
  getClient((err, results) => {
    if (err) {
      res.send(err);
    } else {
      res.json(results);
    }
  });
};

//get single product
export const showClientById = (req, res) => {
  getClientById(req.params.id, (err, results) => {
    if (err) {
      res.send(err);
    } else {
      res.json(results);
    }
  });
};

//create new product
export const createClient = (req, res) => {
  const data = req.body;
  insertClient(data, (err, results) => {
    if (err) {
      res.send(err);
    } else {
      res.json(results);
    }
  });
};

// Update Product
export const updateClient = (req, res) => {
  const data = req.body;
  const id = req.params.id;
  updateClientById(data, id, (err, results) => {
    if (err) {
      res.send(err);
    } else {
      res.json(results);
    }
  });
};

// Delete Product
export const deleteClient = (req, res) => {
  const id = req.params.id;
  deleteClientById(id, (err, results) => {
    if (err) {
      res.send(err);
    } else {
      res.json(results);
    }
  });
};
