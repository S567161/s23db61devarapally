// var express = require('express');
// var router = express.Router();
// /* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('Wolf', { title: 'Search Results Wolf' });
// //});
// //module.exports = router;
var express = require('express');
const Wolf_controlers= require('../controllers/Wolf');
var router = express.Router();

const secured = (req, res, next) => {
    if (req.user){
    return next();
    }
    res.redirect("/login");
    }
/* GET Wolves */
router.get('/', Wolf_controlers.Wolf_view_all_Page );
router.get('/detail', Wolf_controlers.Wolf_view_one_Page);
router.get('/create',secured, Wolf_controlers.Wolf_create_Page);
router.get('/update',secured, Wolf_controlers.Wolf_update_Page);
router.get('/delete', secured,Wolf_controlers.Wolf_delete_Page);
module.exports = router;
