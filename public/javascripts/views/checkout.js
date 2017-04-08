var CheckoutView = Backbone.View.extend({
  attributes: {
    id: "checkout",
  },
  template: App.templates.checkout,
  events: {
    'click .fa': 'updateQuantity',
    'click footer a': 'reset',
    'submit footer form': 'reset',
  },
  updateQuantity: function (e) {
    var $target = $(e.target);
    var id = $target.closest('tr').attr('data-id');
    var item = this.collection.get(id);
    var newQuantity;

    if ($target.hasClass('fa-plus')) {
      newQuantity = item.get('quantity') + 1;
    } else {
      newQuantity = item.get('quantity') - 1;
    }

    this.collection.trigger('update_quantity', { id: id, quantity: newQuantity });
    this.render();
    App.cart.view.showItemsCount();
  },
  reset: function () {
    this.collection.trigger('empty');
    App.cart.view.showItemsCount();
  },
  render: function() {
    this.$el.html(this.template({ 
      items: this.collection.toJSON(),
      checkout_total: App.cart.getTotal()
    }));
    App.el.html(this.$el);
    // without delegateEvents, can only update quantty once
    this.delegateEvents();
  },
  initialize: function () {
    this.render();
  },
});