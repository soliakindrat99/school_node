const { lesson } = require('../db/sequelize.js');

exports.all_lessons = (req, res) => {
    lesson.findAll().then((users) => res.json(users));
};

exports.get_lesson = (req, res) => {
    lesson.findOne({
            where: { id: req.params.id }
        })
        .then((user) => res.json(user));
};