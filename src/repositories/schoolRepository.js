// src/repositories/schoolRepository.js

const db = require('../config/db');

exports.createSchool = (name, address, city, state, zip_code) => {
    const sql = 'INSERT INTO schools (name, address, city, state, zip_code) VALUES (?, ?, ?, ?, ?)';
    return new Promise((resolve, reject) => {
        db.query(sql, [name, address, city, state, zip_code], (err, result) => {
            if (err) reject(err);
            resolve(result);
        });
    });
};

exports.getAllSchools = () => {
    const sql = 'SELECT * FROM schools';
    return new Promise((resolve, reject) => {
        db.query(sql, (err, results) => {
            if (err) reject(err);
            resolve(results);
        });
    });
};

exports.getSchoolById = (id) => {
    const sql = 'SELECT * FROM schools WHERE id = ?';
    return new Promise((resolve, reject) => {
        db.query(sql, [id], (err, result) => {
            if (err) reject(err);
            resolve(result);
        });
    });
};

exports.updateSchool = (id, name, address, city, state, zip_code) => {
    const sql = 'UPDATE schools SET name = ?, address = ?, city = ?, state = ?, zip_code = ? WHERE id = ?';
    return new Promise((resolve, reject) => {
        db.query(sql, [name, address, city, state, zip_code, id], (err, result) => {
            if (err) reject(err);
            resolve(result);
        });
    });
};

exports.deleteSchool = (id) => {
    const sql = 'DELETE FROM schools WHERE id = ?';
    return new Promise((resolve, reject) => {
        db.query(sql, [id], (err, result) => {
            if (err) reject(err);
            resolve(result);
        });
    });
};
