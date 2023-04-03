//import connection
import db from "../config/database.js";

//get all products
export const getClient = (fli, result) => {
  db.query("select Departure_City, Departure_time, Arrival_time, Arrival_City from flight", [fli.Departure_City,fli.Departure_time,fli.Arrival_time,fli.Arrival_time],(err, results) => {
    if (err) {
      console.log(err);
      result(err, null);
    } else {
      result(null, results);
    }
  });
};

//get single product
export const getClientById = (code, result) => {
  db.query(
    "SELECT * FROM Client WHERE Client_code = ?", [code], (err, results) => {
      if (err) {
        console.log(err);
        result(err, null);
      } else {
        result(null, results[0]);
      }
    }
  );
};

//insert product to databased
export const insertClient = (data, result) => {
  db.query("INSERT INTO client SET ?", [data], (err, results) => {
    if (err) {
      console.log(err);
      result(err, null);
    } else {
      result(null, results);
    }
  });
};

// Update Product to Database
export const updateClientById = (data, code, result) => {
  db.query(
    "UPDATE client SET client_name = ?, client_surname = ?, Date_birth = ?, phone_client = ?, mail_client = ?, passport_series = ?, passport_id = ?, WHERE Client_code = ?",
    [data.client_name, data.client_surname, data.Date_birth, data.phone_client, data.mail_client, data.passport_series, data.passport_id, code],
    (err, results) => {
      if (err) {
        console.log(err);
        result(err, null);
      } else {
        result(null, results);
      }
    }
  );
};

// Delete Product to Database
export const deleteClientById = (code, result) => {
  db.query("DELETE FROM client WHERE Client_code = ?", [code], (err, results) => {
    if (err) {
      console.log(err);
      result(err, null);
    } else {
      result(null, results);
    }
  });
};
