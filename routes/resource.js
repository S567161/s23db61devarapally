var express = require('express');
var router = express.Router();
// Require controller modules.
var api_controller = require('../controllers/api');
var Wolf_controller = require('../controllers/Wolf');
/// API ROUTE ///
// GET resources base.
router.get('/', api_controller.api);
/// Wolf ROUTES ///
// POST request for creating a Wolf.
router.post('/Wolf', Wolf_controller.Wolf_create_post);
// DELETE request to delete Wolf.
router.delete('/Wolf/:id', Wolf_controller.Wolf_delete);
// PUT request to update Wolf.
router.put('/Wolf/:id', Wolf_controller.Wolf_update_put);
// GET request for one Wolf.
router.get('/Wolf/:id', Wolf_controller.Wolf_detail);
// GET request for list of all Wolf items.
router.get('/Wolf', Wolf_controller.Wolf_list);
module.exports = router;