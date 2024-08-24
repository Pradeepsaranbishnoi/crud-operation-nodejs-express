const schoolRepository = require('../repositories/schoolRepository');

exports.createSchool = async (req, res) => {
    const { name, address, city, state, zip_code } = req.body;

    if (!name || !address || !city || !state) {
        return res.status(400).json({ error: 'Please provide all required fields: name, address, city, state.' });
    }

    try {
        await schoolRepository.createSchool(name, address, city, state, zip_code);
        res.json({ success: true, message: 'School added successfully!' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to add school.' });
    }
};

exports.getAllSchools = async (req, res) => {
    try {
        const schools = await schoolRepository.getAllSchools();
        res.json(schools);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to retrieve schools.' });
    }
};

exports.getSchoolById = async (req, res) => {
    const { id } = req.body;

    if (!id) {
        return res.status(400).json({ error: 'Please provide a school ID.' });
    }

    try {
        const school = await schoolRepository.getSchoolById(id);
        res.json(school);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to retrieve school.' });
    }
};

exports.updateSchool = async (req, res) => {
    const { id, name, address, city, state, zip_code } = req.body;

    if (!id) {
        return res.status(400).json({ error: 'Please provide a school ID.' });
    }

    try {
        await schoolRepository.updateSchool(id, name, address, city, state, zip_code);
        res.json({ success: true, message: 'School updated successfully!' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to update school.' });
    }
};

exports.deleteSchool = async (req, res) => {
    const { id } = req.body;

    if (!id) {
        return res.status(400).json({ error: 'Please provide a school ID.' });
    }

    try {
        await schoolRepository.deleteSchool(id);
        res.json({ success: true, message: 'School deleted successfully!' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to delete school.' });
    }
};