const sequelize = require("sequelize");

const teacher_model = require('../models/teacher');
const lesson_model = require('../models/lesson');
const group_model = require('../models/group');
const student_model = require('../models/student');

const seq = new sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
    dialect: "postgres",
    host: "localhost"
});

const teacher = teacher_model(seq, sequelize);
const lesson = lesson_model(seq, sequelize);
const group = group_model(seq, sequelize);
const student = student_model(seq, sequelize);

group.hasMany(student);
group.hasMany(lesson);
teacher.hasMany(lesson);

seq.sync().then(result => console.log(result))
    .catch(err => console.log(err));

module.exports = { teacher, lesson, group, student };