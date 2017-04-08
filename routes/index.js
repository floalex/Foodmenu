var path = require('path');
var Menu = require(path.resolve(path.dirname(__dirname), "routes/menu_node"));

/* GET home page. */
module.exports = function(router) {
  // router.get('/', function(req, res, next) {
  //   res.render('index', { 
  //     menu_items: Menu.get()
  //   });
  // });
  
  router.route("/").get(function(req, res) {
    res.render("index", {
      menu_items: Menu.get()
    });
  }).post(function(req, res) {
    res.render("index", {
      menu_items: Menu.get()
    });
  });
};
