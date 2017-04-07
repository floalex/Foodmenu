var foodItemView = Backbone.View.extend({
  attributes: {
    id: "item_details"
  },
  template: App.templates.food_item,
  events: {
    "click .prev": "prevFood",
    "click .next": "nextFood"
  },
  prevFood: function() {
    var id = this.model.id === 1 ? App.menu.length : this.model.id - 1;
    router.navigate("menu/" + id, { trigger: true });
  },
  nextFood: function() {
    var id = this.model.id === App.menu.length ? 1 : this.model.id + 1;
    router.navigate("menu/" + id, { trigger: true });
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