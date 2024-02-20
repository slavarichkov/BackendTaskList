const router = require('express').Router(); // создали роутер

//Контроллеры 
const {
    getTasks,
    createTask,
    updateTask,
    removeTask,
} = require('../controllers/tasks/tasksControllers');

// Валидация
const {
    getTasksValidation,
    createTaskValidation,
    updateTaskValidation,
    removeTaskValidation
} = require('../utils/validation/validation');

//Роуты
router.get('/get-tasks/:deviceId', getTasksValidation, getTasks); 
router.post('/create-task/:deviceId', createTaskValidation, createTask); 
router.patch('/update-task/:deviceId', updateTaskValidation, updateTask); 
router.delete('/remove-task/:deviceId', removeTaskValidation, removeTask); 

module.exports = router;