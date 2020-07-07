module.exports = (seq, Sequelize) => seq.define('lesson', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    topic: {
        type: Sequelize.STRING
    },
    classroom: {
        type: Sequelize.INTEGER
    },
    schedule_num: {
        type: Sequelize.INTEGER
    }
});