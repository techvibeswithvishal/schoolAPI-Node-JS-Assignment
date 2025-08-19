// schoolModel.js
const db = require("./db");

// Add new school
const addSchool = (schoolData, callback) => {
  const sql = "INSERT INTO schools (name, address, city) VALUES (?, ?, ?)";
  db.query(sql, [schoolData.name, schoolData.address, schoolData.city], callback);
};

// Get all schools
const getAllSchools = (callback) => {
  const sql = "SELECT * FROM schools";
  db.query(sql, callback);
};


const getSchoolById = (id, callback) => {
  const sql = "SELECT * FROM schools WHERE id = ?";
  db.query(sql, [id], callback);
};


const updateSchool = (id, schoolData, callback) => {
  const sql = "UPDATE schools SET name = ?, address = ?, city = ? WHERE id = ?";
  db.query(sql, [schoolData.name, schoolData.address, schoolData.city, id], callback);
};


const deleteSchool = (id, callback) => {
  const sql = "DELETE FROM schools WHERE id = ?";
  db.query(sql, [id], callback);
};

module.exports = {
  addSchool,
  getAllSchools,
  getSchoolById,
  updateSchool,
  deleteSchool,
};
