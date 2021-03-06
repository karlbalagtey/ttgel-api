const Joi = require('joi');
const { objectId } = require('./custom.validation');

const createCourse = {
  body: Joi.object().keys({
    title: Joi.string().required(),
    description: Joi.string(),
    notes: Joi.string(),
    mime: Joi.string(),
    image: Joi.string(),
    audio: Joi.string(),
    video: Joi.string(),
    programme: Joi.string(),
  }),
};

const getCourses = {
  query: Joi.object().keys({
    title: Joi.string(),
    description: Joi.string(),
    notes: Joi.string(),
    mime: Joi.string(),
    image: Joi.string(),
    audio: Joi.string(),
    video: Joi.string(),
    programme: Joi.string(),
    sortBy: Joi.string(),
    limit: Joi.number().integer(),
    page: Joi.number().integer(),
  }),
};

const getCourse = {
  params: Joi.object().keys({
    courseId: Joi.string().custom(objectId),
  }),
};

const updateCourse = {
  params: Joi.object().keys({
    courseId: Joi.required().custom(objectId),
  }),
  body: Joi.object()
    .keys({
      title: Joi.string().empty(''),
      description: Joi.string().empty(''),
      notes: Joi.string().empty(''),
      mime: Joi.string().empty(''),
      image: Joi.string().empty(''),
      audio: Joi.string().empty(''),
      video: Joi.string().empty(''),
      programme: Joi.string().empty(''),
    })
    .min(1),
};

const deleteCourse = {
  params: Joi.object().keys({
    courseId: Joi.string().custom(objectId),
  }),
};

module.exports = {
  createCourse,
  getCourses,
  getCourse,
  updateCourse,
  deleteCourse,
};
