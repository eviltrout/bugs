import Ember from 'ember';

export default Ember.ArrayController.extend({

  // Calculate the average bug size
  averageSize: function() {

    var total = 0;
    var bugs = this.get('model');

    bugs.forEach(function(b) {
      total += b.get('size');
    });

    return Math.round(total / this.get('length'));

  }.property('@each.size')

});
