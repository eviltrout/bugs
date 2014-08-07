import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    var list = this.modelFor('bugs');
    return list.findBy('id', params.id);
  }
});
