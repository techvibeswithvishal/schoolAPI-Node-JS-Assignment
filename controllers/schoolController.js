
const db = require("../config/db");
const { getDistance } = require("../utils/distance");


const addSchool = (req, res) => {
  const { name, address, latitude, longitude } = req.body;


  if (!name || !address || !latitude || !longitude) {
    return res.status(400).json({ error: "All fields are required" });
  }

  const query = "INSERT INTO schools (name, address, latitude, longitude) VALUES (?, ?, ?, ?)";
  db.query(query, [name, address, latitude, longitude], (err, result) => {
    if (err) {
      return res.status(500).json({ error: "Database error: " + err.message });
    }
    res.json({ message: "✅ School added successfully", schoolId: result.insertId });
  });
};


const listSchools = (req, res) => {
  const { latitude, longitude } = req.query;

  if (!latitude || !longitude) {
    return res.status(400).json({ error: "User latitude and longitude required" });
  }

  const query = "SELECT * FROM schools";
  db.query(query, (err, results) => {
    if (err) {
      return res.status(500).json({ error: "Database error: " + err.message });
    }

   
    const schoolsWithDistance = results.map((school) => {
      const distance = getDistance(
        parseFloat(latitude),
        parseFloat(longitude),
        school.latitude,
        school.longitude
      );
      return { ...school, distance: distance.toFixed(2) }; 
    });


    schoolsWithDistance.sort((a, b) => a.distance - b.distance);

    res.json(schoolsWithDistance);
  });
};

module.exports = { addSchool, listSchools };
