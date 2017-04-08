var CartItems = Backbone.Collection.extend({
  setTotal: function(){
    this.total = this.toJSON().reduce(function(a, b) {
      return a + b.price * b.quantity;
    }, 0);
    
    return this;
  },
  getTotal: function() { return this.total; },
  setQuantity: function() {
    this.quantity = this.toJSON().reduce(function(a, b) {
      return a + b.quantity;
    }, 0);
    
    return this;
  },
  getQuantity: function() { return this.quantity; },
  updateQuantity: function(data) {
    var item = this.get(data.id);
    if (data.quantity <= 0) {
      this.destroy(data.id);
    }
    item.set('quantity', data.quantity);
    this.update();
  },
  readStorage: function() {
    var stored_cart = JSON.parse(localStorage.getItem("cart"));
    console.log(stored_cart);
    // reset the cart collection with the stored_cart data
    this.reset(stored_cart);
    this.setTotal().setQuantity();
  },
  addItem: function(item) {
    // check if the item already existed, get the item if the id existed
    var existing = this.get(item.get("id"));
    
    if (existing) {
      existing.set("quantity", existing.get("quantity") + 1);
    }
    else {
      existing = item.clone();
      existing.set("quantity", 1);
      this.add(existing);
    }
    this.update();
    this.trigger("cart_updated");
  },
  destroy: function(id) {
    // don't call remove on collection as we need to update total and quantity
    this.remove(id);
    this.update();
  },
  empty: function() {
    this.reset();
    this.update();
  },
  update: function() {
    this.setTotal().setQuantity();
  },
  initialize: function() {
    this.readStorage();
    this.on('add_to_cart', this.addItem);
    this.on("destroy", this.destroy);
    this.on("empty", this.empty);
    this.on('update_quantity', this.updateQuantity);
  }
});