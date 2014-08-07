import Ember from 'ember';
import Resolver from 'ember/resolver';
import loadInitializers from 'ember/load-initializers';
import 'bugs/helpers/pretty';

Ember.MODEL_FACTORY_INJECTIONS = true;

var App = Ember.Application.extend({
  modulePrefix: 'bugs', // TODO: loaded via config
  Resolver: Resolver
});

loadInitializers(App, 'bugs');

export default App;
