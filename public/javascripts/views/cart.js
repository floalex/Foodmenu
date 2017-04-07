var CartView = Backbone.View.extend({
  template: App.templates.cart,
  el: $("#cart"),
  events: {
    "click .empty_cart": "emptyCart"
  },
  emptyCart: function() {
    this.$el.slideUp();
    this.collection.trigger("empty");
    this.showItemsCount();
  },
  destroy: function(e) {
    e.preventDefault();
    var $e = $(e.target);
    console.log($e);
    // trigger event that bound to collection
    this.collection.trigger("destroy", Number($e.attr("data-id")));
    this.render();
  },
  render: function() {
    if (this.collection.length === 0) { 
      $(this.$el).hide();
      return; 
    }
    
    this.$el.html(this.template({
      quantity: this.collection.getQuantity(),
      items: this.collection.toJSON(),
      total: this.collection.getTotal()
    })).slideDown();
    this.showItemsCount();
  },
  showItemsCount: function() {
    $("body > header .count").text(this.collection.length);
  },
  initialize: function() {
    this.render();
    this.listenTo(this.collection, "cart_updated", this.render);
  }  
});
