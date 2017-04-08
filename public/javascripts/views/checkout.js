var CheckoutView = Backbone.View.extend({
  attributes: {
    id: "checkout",
  },
  template: App.templates.checkout,
  render: function() {
    this.$el.html(this.template({ 
      items: this.collection.toJSON(),
      checkout_total: App.cart.getTotal()
    }));
    App.el.html(this.$el);
    this.delegateEvents();
  },
  initialize: function () {
    this.render();
  },
});