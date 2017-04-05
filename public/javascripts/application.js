var App = {
  templates: JST,
  el: $("#content"),
  indexView: function() {
    this.renderAll();
    // this.createCart();
    this.bindEvents();
  },
  renderAll: function() {
    this.menu.each(this.addFoodIndexView);
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