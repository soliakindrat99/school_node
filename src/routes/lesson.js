const router = require('express').Router();
const lesson_controller = require('../controllers/lesson_controller.js');

router.get('/', lesson_controller.all_lessons);
router.get('/:id', lesson_controller.get_lesson);



module.exports = router;