const router = require('express').Router();
const lesson_controller = require('../controllers/lesson_controller.js');

router.get('/', lesson_controller.all_lessons);
router.get('/:id', lesson_controller.get_lesson);

router.post('/', lesson_controller.create_lesson);
router.delete('/:id', lesson_controller.delete_lesson);
router.put('/:id', lesson_controller.update_lesson);

module.exports = router;