describe("Render Cart View", function() {
  beforeEach(function() {
    this.menu = new Menu(items_scaffold);
    this.cart = new CartItems(this.menu);
    this.cart.view = new CartView({
      collection: this.cart
    });
  });
  
  afterEach(function () {
    this.cart.view.remove();
  });
  
  it ("should have a Handlebars template compiled", function() {
    expect(this.cart.view.template).toBeDefined();
  });

  it ("should have a collection", function() {
    expect(this.cart.view.collection).toBeDefined();
  });
});