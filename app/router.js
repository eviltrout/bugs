import Ember from 'ember';

var Router = Ember.Router.extend({
  location: BugsENV.locationType
});

Router.map(function() {
  this.resource('bugs', function() {
    this.route('show', {path: '/:id'});
  });
});

export default Router;
