describe('Cart Collection', function () {
  beforeEach(function() {
    this.cart = new CartItems();
    this.menu = new Menu(items_scaffold);
  });
  
  it('can add all items from the menu to the car', function() {
    this.menu.each(function(item) {
      this.cart.addItem(item);
    }, this);
    
    expect(this.cart.length).toEqual(this.menu.length);
    expect(this.cart.first().get('price')).toEqual(this.menu.first().get('price'));
  });
  
  it('can be empty', function() {
    expect(this.cart.isEmpty()).toBe(true);
  });
  
  it('can update the quantity of a specific item in the cart', function() {
    this.cart.addItem(this.menu.first());
    expect(this.cart.first().get('quantity')).toBe(1);
    this.cart.addItem(this.menu.first());
    expect(this.cart.first().get('quantity')).toBe(2);
  });
  
});