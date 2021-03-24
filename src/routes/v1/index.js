const express = require('express');
const authRoute = require('./auth.route');
const userRoute = require('./user.route');
const programmeRoute = require('./programme.route');
const courseRoute = require('./course.route');
const moduleRoute = require('./module.route');
const docsRoute = require('./docs.route');
const config = require('../../config/config');

const router = express.Router();

const defaultRoutes = [
  {
    path: '/auth',
    route: authRoute,
  },
  {
    path: '/users',
    route: userRoute,
  },
  {
    path: '/programmes',
    route: programmeRoute,
  },
  {
    path: '/courses',
    route: courseRoute,
  },
  {
    path: '/modules',
    route: moduleRoute,
  },
];

const devRoutes = [
  // routes available only in development mode
  {
    path: '/docs',
    route: docsRoute,
  },
];

defaultRoutes.forEach((route) => {
  router.use(route.path, route.route);
});

/* istanbul ignore next */
if (config.env === 'development') {
  devRoutes.forEach((route) => {
    router.use(route.path, route.route);
  });
}

module.exports = router;
