var IndexView = Backbone.View.extend({
  tagName: "ul",
  attributes: {
    id: "items"
  },
  render: function() {
    App.el.html(this.$el);
  },
  initialize: function() {
    this.render();
  }
});