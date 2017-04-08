var App = {
  templates: JST,
  el: $("#content"),
  indexView: function() {
    this.index = new IndexView();
    this.renderAll();
    this.renderCart();
  },
  renderAll: function() {
    this.menu.each(this.addFoodIndexView);
  },
  renderFoodItem: function(id) {
    this.renderCart();
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
  renderCart: function() {
    this.cart.view.render();
  },
  checkoutView: function() {
    $("#cart").hide();
    new CheckoutView({ collection: this.cart });
  },
  updateCartStorage: function() {
    localStorage.setItem("cart", JSON.stringify(this.cart.toJSON()));
  },
};

$(window).on("unload", App.updateCartStorage.bind(App));

Handlebars.registerHelper("format_price", function(price) {
  return (+price).toFixed(2);
});

Handlebars.registerHelper('convert_to_kcal', function(energy) {
 return (Number(energy) * 0.239006).toFixed(4);
});