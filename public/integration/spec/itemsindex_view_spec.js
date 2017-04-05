describe("Food Items Index View", function() {
  beforeEach(function() {
    this.item = App.menu.first();
    this.view = new foodIndexView({ model: this.album });
  });
  
  afterEach(function () {
    this.view.remove();
  });
  
  it ("should have a Handlebars template compiled", function() {
    expect(this.view.template).toBeDefined();
  });
  
});