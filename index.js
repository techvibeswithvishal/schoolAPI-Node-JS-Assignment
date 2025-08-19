
const express = require("express");
const bodyParser = require("body-parser");
const schoolRoutes = require("./routes/schoolRoutes");
const db = require("./config/db");

const app = express();


app.use(bodyParser.json());


app.use("/api/schools", schoolRoutes);


app.get("/", (req, res) => {
  res.send("✅ School Management API is running...");
});


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
