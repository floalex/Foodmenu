describe("It has a food menu", function() {
  beforeEach(function() {
    this.menu = new Menu(items_scaffold);
  });
  
  it ("has a menu of food items with the specified attributes", function() {
    var id = 1;
    expect(this.menu.get(id).toJSON()).toBe(_.findWhere(items_scaffold, { id: id }));
  });
});