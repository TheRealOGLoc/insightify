var express = require('express');
var router = express.Router();

/* /insightify has been added, no needs to add */

/* GET  */
router.get('/', function(req, res, next) {
  res.render("insightify/index", {
    title: "Insightify"
  })
});

module.exports = router;
