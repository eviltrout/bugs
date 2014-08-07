import Ember from 'ember';

Ember.Handlebars.helper('pretty', function(v) {
  if (Ember.isEmpty(v)) {
    return new Ember.Handlebars.SafeString("&mdash;");
  }
  return v;
});

