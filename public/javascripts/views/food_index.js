var foodIndexView = Backbone.View.extend({
  tagName: "li",
  attributes: function() {
    // Return model data
    return {
      "data-id": Number(this.model.get('id'))      
    };
  },
  template: App.templates.food_index,
  events: {
    "click header": "renderSingleFood",
    "click footer a": "addToCart"
  },
  renderSingleFood: function(e) {
    var id = Number(this.model.get('id'));
    router.navigate('menu/' + id, { trigger: true, replace: false });
  },
  addToCart: function(e) {
    e.preventDefault();
    // sends the model to the cart collection
    App.trigger("add_to_cart", this.model);
  },
  render: function() {
    this.$el.html(this.template(this.model.toJSON()));
    this.$el.appendTo(App.el.find("ul"));
  },
  initialize: function() {
    this.render();
    this.model.view = this;
  },
});