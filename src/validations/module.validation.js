const Joi = require('joi');
const { objectId } = require('./custom.validation');

const createModule = {
  body: Joi.object().keys({
    title: Joi.string().required(),
    description: Joi.string(),
    image: Joi.string(),
    note: Joi.string(),
    audio: Joi.string(),
    video: Joi.string(),
  }),
};

const getModules = {
  query: Joi.object().keys({
    title: Joi.string(),
    description: Joi.string(),
    image: Joi.string(),
    note: Joi.string(),
    audio: Joi.string(),
    video: Joi.string(),
    sortBy: Joi.string(),
    limit: Joi.number().integer(),
    page: Joi.number().integer(),
  }),
};

const getModule = {
  params: Joi.object().keys({
    moduleId: Joi.string().custom(objectId),
  }),
};

const updateModule = {
  params: Joi.object().keys({
    moduleId: Joi.required().custom(objectId),
  }),
  body: Joi.object()
    .keys({
      title: Joi.string().empty(''),
      description: Joi.string().empty(''),
      note: Joi.string().empty(''),
      image: Joi.string().empty(''),
      audio: Joi.string().empty(''),
      video: Joi.string().empty(''),
    })
    .min(1),
};

const deleteModule = {
  params: Joi.object().keys({
    moduleId: Joi.string().custom(objectId),
  }),
};

module.exports = {
  createModule,
  getModules,
  getModule,
  updateModule,
  deleteModule,
};
