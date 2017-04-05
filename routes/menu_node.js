var _ = require('underscore');
var path = require('path');
var fs = require("fs");
var file_path = path.resolve(path.dirname(__dirname), "data/menu_items.json");

function getFoodItems() {
  // don't attach .data at the end as json doesn't store the info in data prop
  return JSON.parse(fs.readFileSync(file_path, "utf8"));
}

var Menu = {
  get: function() {
    return getFoodItems();
  },
  getFood: function(id) {
    id = typeof id === 'number' ? id : Number(id);
    return _.findWhere(this.get(), { id: id });
  },
  getLastID: function() {
    return JSON.parse(fs.readFileSync(file_path, "utf8")).last_id;
  },
};

module.exports = Menu;