var foodItemView = Backbone.View.extend({
  attributes: {
    id: "item_details"
  },
  template: App.templates.food_item,
  render: function() {
    this.$el.html(this.template(this.model.toJSON()));
    App.el.html(this.$el);
  },
  initialize: function() {
    this.render();
    this.model.view = this;
  },
});