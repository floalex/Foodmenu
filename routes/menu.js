var path = require("path");
var Menu = require(path.resolve(path.dirname(__dirname), "routes/menu_node"));

module.exports = function(router) {
  
  router.route("/menu/:id").get(function(req, res) {
    res.render("view", {
      menu: Menu.get()
    });
  });
};
