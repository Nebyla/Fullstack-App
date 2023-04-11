import {
    getFlight,
    getFlightById,
    insertFlight,
  } from "../models/flightModel.js";
  
  //get all products
  export const showFlight = (req, res) => {
    getFlight((err, results) => {
      if (err) {
        res.send(err);
      } else {
        res.json(results);
      }
    });
  };
  
  //get single product
  export const showFlightById = (req, res) => {
    getFlightById(req.params.id, (err, results) => {
      if (err) {
        res.send(err);
      } else {
        res.json(results);
      }
    });
  };
  export const createFlight = (req, res) => {
    const data = req.body;
    insertFlight(data, (err, results) => {
      if (err) {
        res.send(err);
      } else {
        res.json(results);
      }
    });
  };