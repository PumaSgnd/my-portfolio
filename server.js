require("dotenv").config();
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const { Pool } = require("pg");
const nodemailer = require("nodemailer");
const path = require("path");

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
  ssl: { rejectUnauthorized: false },
});

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

app.post("/contact", async (req, res) => {
  const { name, email, message } = req.body;

  try {
    await pool.query("INSERT INTO contacts (name, email, message) VALUES ($1, $2, $3)", [name, email, message]);

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: "bomavan12@gmail.com",
      subject: "Pesan Baru dari Website Portfolio Anda",
      text: `Nama: ${name}\nEmail: ${email}\nPesan: ${message}`,
    };

    await transporter.sendMail(mailOptions);

    res.status(200).json({ message: "Pesan berhasil dikirim!" });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Terjadi kesalahan saat mengirim pesan." });
  }
});

app.get("/test-db", async (req, res) => {
  try {
    const result = await pool.query("SELECT NOW()");
    res.json({ success: true, time: result.rows[0].now });
  } catch (error) {
    console.error("Database error:", error);
    res.status(500).json({ success: false, error: error.message });
  }
});

app.use(express.static(path.join(__dirname, "../client/build")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "..public/index.html"));
});

app.listen(port, () => {
  console.log(`Server berjalan di http://localhost:${port}`);
});
