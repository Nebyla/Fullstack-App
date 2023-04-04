//import connection
import db from "../config/database.js";

//get all products
export const getFlight = (result) => {
  db.query("select * from flight", (err, results) => {
    if (err) {
      console.log(err);
      result(err, null);
    } else {
      result(null, results);
    }
  });
};

//get single product
export const getFlightById = (id, result) => {
  db.query(
    "SELECT * FROM flight WHERE Flight_Code = ?", [id], (err, results) => {
      if (err) {
        console.log(err);
        result(err, null);
      } else {
        result(null, results[0]);
      }
    }
  );
};