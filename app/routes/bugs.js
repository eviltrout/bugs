import Ember from 'ember';
import bugsList from 'bugs/data/list';

export default Ember.Route.extend({
  model: function() {
    return bugsList;
  }
});
