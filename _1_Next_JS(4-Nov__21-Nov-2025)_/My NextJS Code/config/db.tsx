import mysql from "mysql2/promise";

export const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "root",
  database: "hospital_db",
});

// Wrap in an async function to test connection
async function testConnection() {
  try {
    const connection = await db.getConnection();
    console.log("Database connected successfully.");
    connection.release(); // release the connection back to the pool
  } catch (err) {
    console.error("Database connection failed:", err);
  }
}

// Call the test function
testConnection();
