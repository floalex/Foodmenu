var path = require("path");
var Menu = require(path.resolve(path.dirname(__dirname), "routes/menu_node"));

module.exports = function(router) {
  router.get('/menu', function(req, res, next) {
    res.render('index', {
      menu_items: Menu.get(),
    });
  });
  
  router.route("/menu/:id").get(function(req, res) {
    res.render("menu", {
      menu_items: Menu.get()
    });
  });
};
