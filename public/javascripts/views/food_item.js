var foodItemView = Backbone.View.extend({
  attributes: {
    id: "item_details"
  },
  template: App.templates.food_item,
  events: {
    "click .prev": "prevFood",
    "click .next": "nextFood",
    "click .add_cart": "addToCart"
  },
  prevFood: function() {
    var id = this.model.id === 1 ? App.menu.length : this.model.id - 1;
    router.navigate("menu/" + id, { trigger: true });
  },
  nextFood: function() {
    var id = this.model.id === App.menu.length ? 1 : this.model.id + 1;
    router.navigate("menu/" + id, { trigger: true });
  },
  addToCart: function(e) {
    e.preventDefault();
    // sends the model to the cart collection
    App.trigger("add_to_cart", this.model);
  },
  render: function() {
    this.$el.html(this.template(this.model.toJSON()));
    App.el.html(this.$el);
  },
  initialize: function() {
    this.render();
    this.model.view = this;
  },
});