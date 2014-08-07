import Ember from 'ember';

var bugsJSON = [
  {id: 'fly', name: 'Fly', status: 'Dead', lastSeenAt: 'Yesterday', size: 8},
  {id: 'bedbug', name: 'Bed Bug', size: 5},
  {id: 'mosquito', name: 'Mosquito', status: 'Alive', lastSeenAt: 'Today', size: '10'},
  {id: 'tick', name: 'Tick', status: 'Dead', lastSeenAt: 'Last Year', size: 9}
];

export default bugsJSON.map(function(b) {
  return Ember.Object.create(b);
});
