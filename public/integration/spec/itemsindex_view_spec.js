describe("Food Items Index View", function() {
  beforeEach(function() {
    this.menu = new Menu(items_scaffold);
  });
  
  describe("each index view", function() {
    beforeEach(function() {
      this.item = this.menu.get(1);
      this.view = new foodIndexView({
        model: this.item
      });
    });
  
    afterEach(function () {
      this.view.remove();
    });
    
    it ("should have a Handlebars template compiled", function() {
      expect(this.view.template).toBeDefined();
    });
  
  });
});