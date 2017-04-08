var router = new (Backbone.Router.extend({
  routes: {
    "menu": "menuView",
    "menu/:id": "foodDetails",
    "checkout": "checkoutView",
  },
  index: function() { 
    App.indexView(); 
  },
  menuView: function() {
    App.indexView();
  },
  foodDetails: function(id) {
    App.renderFoodItem(Number(id));
  },
  checkoutView: function() {
    App.checkoutView();
  },
  initialize: function() {
    this.route(/^\/?$/, "index", this.index);
  }
}))();

Backbone.history.start({
  pushState: true,
});

$(document).on("click", "a[href^='/']", function(e) {
  e.preventDefault();
  router.navigate($(e.currentTarget).attr("href").replace(/^\//, ""), { trigger: true });
});