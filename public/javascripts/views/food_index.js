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
    "click header": "renderSingleFood"
  },
  renderSingleFood: function(e) {
    var id = Number(this.model.get('id'));
    router.navigate('menu/' + id, { trigger: true, replace: false });
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