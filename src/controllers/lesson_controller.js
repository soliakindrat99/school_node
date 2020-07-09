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

exports.create_lesson = (req, res) => {
    lesson.create(req.body)
        .then((lesson) => res.json(lesson))
        .catch((err) => {
            res.status(400).send({ message: err.message() || "Body can not be empty!!!" });
        });
};

exports.delete_lesson = (req, res) => {
    lesson.destroy({
            where: { id: req.params.id }
        })
        .then((result) => {
            if (result == 1) {
                res.send({
                    message: "The lesson was successfully deleted!"
                });
            } else {
                res.send({
                    message: "The lesson could not be deleted!"
                });
            }
        })
        .catch((err) => {
            res.status(500).send({ message: err.message || "Delete error" });
        });
};

exports.update_lesson = (req, res) => {
    lesson.update({
            where: { id: req.params.id }
        })
        .then((result) => {
            if (result == 1) {
                res.send({
                    message: "The lesson was successfully updated!"
                });
            } else {
                res.send({
                    message: "The lesson could not be updated!"
                });
            }
        })
        .catch((err) => {
            res.status(500).send({ message: err.message || "Update error" });
        });
};