import Ember from 'ember';

export default Ember.Component.extend({
  sortProperty: Ember.computed('sortAscending', function(){
    return ['rate:' + (this.get('sortAscending') ? 'asc' : 'desc')]
  }),

  sortedMovies: Ember.computed.sort('movies', 'sortProperty'),

  sortAscending: false,

  iconClass: (function() {
    return this.get("sortAscending") ? "fa fa-chevron-up" : "fa fa-chevron-down";
  }).property("sortAscending"),

  actions: {
    toggleSort() {
      this.toggleProperty('sortAscending');
    }
  }
});
