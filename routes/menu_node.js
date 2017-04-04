var _ = require('underscore');
var path = require('path');
var fs = require("fs");
var file_path = path.resolve(path.dirname(__dirname), "data/menu_items.json");

function getFoodItems() {
  return JSON.parse(fs.readFileSync(file_path, "utf8")).data;
}

function writeFoodItems(data) {
  fs.writeFileSync(file_path, JSON.stringify(data), "utf8");
}

var Menu = {
  get: function() {
    return getFoodItems();
  },
  getFood: function(id) {
    id = typeof id === 'number' ? id : Number(id);
    return _.findWhere(this.get(), { id: id });
  },
  set: function(food_item) {
    var food_items = getFoodItems();
    food_item.id = this.nextID();
    food_items.push;
    writeFoodItems({ last_id: food_item.id, data: food_items });
  },
  getLastID: function() {
    return JSON.parse(fs.readFileSync(file_path, "utf8")).last_id;
  },
  nextID: function() {
    return this.getLastID()+ 1;
  }
};

module.exports = Menu;