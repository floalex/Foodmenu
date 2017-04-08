var App = {
  templates: JST,
  el: $("#content"),
  indexView: function() {
    this.index = new IndexView();
    this.renderAll();
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
  readCartStorage: function() {
    var stored_cart = JSON.parse(localStorage.getItem("cart"));
    console.log(stored_cart);
    // reset the cart collection with the stored_cart data
    this.reset(stored_cart);
    this.setTotal().setQuantity();
  },
  updateCartStorage: function() {
    localStorage.setItem("cart", JSON.stringify(this.cart.toJSON()));
  },
  bindEvents: function() {
    _.extend(this, Backbone.Events);
    $(window).on("unload", this.updateCartStorage.bind(this));
  },
};

Handlebars.registerHelper("format_price", function(price) {
  return (+price).toFixed(2);
});

Handlebars.registerHelper('convert_to_kcal', function(energy) {
 return (Number(energy) * 0.239006).toFixed(4);
});