import Ember from 'ember';

var bugsJSON = [
  {id: 'fly', name: 'Fly', status: 'Dead', lastSeenAt: 'Yesterday'},
  {id: 'bedbug', name: 'Bed Bug'},
  {id: 'mosquito', name: 'Mosquito', status: 'Alive', lastSeenAt: 'Today'},
  {id: 'tick', name: 'Tick', status: 'Dead', lastSeenAt: 'Last Year'}
];

export default bugsJSON.map(function(b) {
  return Ember.Object.create(b);
});
