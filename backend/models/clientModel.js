//import connection
import db from "../config/database.js";

//get all products
export const getClient = (result) => {
  db.query("select * from client", (err, results) => {
    if (err) {
      console.log(err);
      result(err, null);
    } else {
      result(null, results);
    }
  });
};

//get single product
export const getClientById = (id, result) => {
  db.query(
    "SELECT * FROM client WHERE Client_code = ?", [id], (err, results) => {
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
export const updateClientById = (data, id, result) => {
  db.query(
  "UPDATE client SET Client_Name = ?, Client_Surname = ?, Date_birth = ?, Phone_Client = ?, Mail_Client = ?, Passport_Series = ?, Passport_ID = ? WHERE Client_code = ?",
  [data.Client_Name, data.Client_Surname, data.Date_birth, data.Phone_Client, data.Mail_Client, data.Passport_Series, data.Passport_ID, id],
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
export const deleteClientById = (id, result) => {
  db.query("DELETE FROM client WHERE Client_code = ?", [id], (err, results) => {
    if (err) {
      console.log(err);
      result(err, null);
    } else {
      result(null, results);
    }
  });
};

export const searchTelClient = (searchTelQuery, result) => {
  const query = `SELECT * FROM client WHERE Phone_Client LIKE '%${searchTelQuery}%'`;
  db.query(query, (err, results) => {
  if (err) {
  console.log(err);
  result(err, null);
  } else {
  result(null, results);
  }
  });
  };
  export const searchPSClient = (searchPSQuery, result) => {
    const query = `SELECT * FROM client WHERE Passport_Series LIKE '%${searchPSQuery}%'`;
    db.query(query, (err, results) => {
    if (err) {
    console.log(err);
    result(err, null);
    } else {
    result(null, results);
    }
    });
    };
    export const getClientTicket = (result) => {
      db.query(
        "SELECT * FROM client WHERE client_code = (SELECT MAX(client_code) FROM client);",(err, results) => {
          if (err) {
            console.log(err);
            result(err, null);
          } else {
            result(null, results[0]);
          }
        }
      );
    };