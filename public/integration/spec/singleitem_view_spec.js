describe("Render Each Food View", function() {
  beforeEach(function() {
    this.menu = new Menu(items_scaffold);
  });
  
  describe("individual view", function() {
    beforeEach(function() {
      this.item = this.menu.get(1);
      this.view = new foodItemView({
        model: this.item
      });
    });
  
    afterEach(function () {
      this.view.remove();
    });
    
    it ("should have a Handlebars template compiled", function() {
      expect(this.view.template).toBeDefined();
    });
  
    it ("should retrive the model from collection", function() {
      expect(this.view.model).toBeDefined();
    });
  });
});