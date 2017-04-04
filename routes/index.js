var path = require('path');
var Menu = require(path.resolve(path.dirname(__dirname), "routes/menu_node"));

/* GET home page. */
module.exports = function(router) {
  router.get('/', function(req, res, next) {
    res.render('index', { 
      menu: Menu.get()
    });
  });
};

