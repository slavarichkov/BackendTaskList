const { celebrate, Joi, Segments } = require('celebrate');// Валидация приходящих на сервер данных

const { regexStroke, regexIdDevice } = require('../regex/regex');

const getTasksValidation = celebrate({
    [Segments.PARAMS]: Joi.object().keys({
        deviceId: Joi.string().regex(regexIdDevice).max(255).required(),
    })
});

const createTaskValidation = celebrate({
    [Segments.BODY]: Joi.object({
        name: Joi.string().max(255).required(),
        text: Joi.string().max(1000).required(),
        isImportant: Joi.boolean().required(),
        isDone: Joi.boolean().required(),
        idDevice: Joi.string().regex(regexIdDevice).max(255).required(),
    }),
    [Segments.PARAMS]: Joi.object().keys({
        deviceId: Joi.string().regex(regexIdDevice).max(255).required(),
    }),
});

const updateTaskValidation = celebrate({
    [Segments.BODY]: Joi.object({
        _id: Joi.string().regex(regexStroke).max(255).required(),
        name: Joi.string().max(1000).max(255).optional(),
        text: Joi.string().optional(),
        isImportant: Joi.boolean().optional(),
        isDone: Joi.boolean().optional(),
    }),
    [Segments.PARAMS]: Joi.object().keys({
        deviceId: Joi.string().regex(regexIdDevice).max(255).required(),
    }),
});

const removeTaskValidation = celebrate({
    [Segments.BODY]: Joi.object({
        _id: Joi.string().regex(regexStroke).max(255).required(),
    }),
    [Segments.PARAMS]: Joi.object().keys({
        deviceId: Joi.string().regex(regexIdDevice).max(255).required(),
    }),
});

module.exports = {
    getTasksValidation,
    createTaskValidation,
    updateTaskValidation,
    removeTaskValidation
}