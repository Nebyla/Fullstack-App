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
export const insertFlight = (data, result) => {
  db.query("INSERT INTO flight SET ?", [data], (err, results) => {
    if (err) {
      console.log(err);
      result(err, null);
    } else {
      result(null, results);
    }
  });
};
export const deleteFlightById = (id, result) => {
  db.query("DELETE FROM flight WHERE Flight_Code = ?", [id], (err, results) => {
    if (err) {
      console.log(err);
      result(err, null);
    } else {
      result(null, results);
    }
  });
};
export const searchFlight = (searchQuery, result) => {
  const query = `SELECT * FROM flight WHERE Departure_City LIKE '%${searchQuery}%' AND Price;`;
  db.query(query, (err, results) => {
  if (err) {
  console.log(err);
  result(err, null);
  } else {
  result(null, results);
  }
  });
  };

  export const searchDataFlight = (searchDataQuery, result) => {
    const query = `SELECT * FROM flight WHERE Price LIKE '%${searchDataQuery}%'`;
    db.query(query, (err, results) => {
    if (err) {
    console.log(err);
    result(err, null);
    } else {
    result(null, results);
    }
    });
    };