const express = require('express');
const showRoutes = express.Router();
const authHelpers = require('../services/auth/auth-helpers');
const showHelpers = require('../services/shows/show-helpers');

const showsController = require('../controllers/shows-controller');

showRoutes.get('/', showHelpers.getPopularShows, showsController.index);
showRoutes.post('/', authHelpers.loginRequired, showsController.create);

showRoutes.get('/add', authHelpers.loginRequired, (req, res) => {
  res.render('shows/show-add', {
    currentPage: 'add',
  });
});

showRoutes.get('/:id', showsController.show);
showRoutes.get('/:id/edit', authHelpers.loginRequired, showsController.edit);
showRoutes.put('/:id', authHelpers.loginRequired, showsController.update);
showRoutes.delete('/:id', authHelpers.loginRequired, showsController.delete);

module.exports = showRoutes;
