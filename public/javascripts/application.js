var App = {
  templates: JST,
  el: $("#content"),
  indexView: function() {
    this.index = new IndexView();
    this.renderAll();
    // this.createCart();
    this.bindEvents();
  },
  renderAll: function() {
    this.menu.each(this.addFoodIndexView);
  },
  renderFoodItem: function(id) {
    var item = this.menu.get(id);
    new foodItemView({
      model: item
    });
  },
  addFoodIndexView: function(item) {
    new foodIndexView({
      model: item
    });
  },
  createCart: function() {
    this.cart = new CartItems();
    this.cart.view = new CartView({
      collection: this.cart
    });
  },
  bindEvents: function() {
    _.extend(this, Backbone.Events);
    // this.on("add_to_cart", this.cart.addItem.bind(this.cart));
  },
};

Handlebars.registerHelper("format_price", function(price) {
  return (+price).toFixed(2);
});

Handlebars.registerHelper('convert_to_kcal', function(energy) {
 return Number(energy) * 0.239006;
});