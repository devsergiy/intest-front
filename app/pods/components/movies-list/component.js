import Ember from 'ember';
import CH from 'intest-front/helpers/contains-helper';
import RateHelper from 'intest-front/helpers/rating-match-helper';

export default Ember.Component.extend({
  filteredMovies: Ember.computed.filter('movies', function(movie, index, array) {
    return CH.contains(movie.get('title'), this.get('searchTitle')) &&
      CH.contains(movie.get('actors'),this.get('searchActor')) &&
      CH.contains(movie.get('director'),this.get('searchDirector')) &&
      RateHelper.match(movie.get('rating'), this.get('searchRating'));
  }),

  sortAscending: false,
  iconClass: Ember.computed('sortAscending', function() {
    return this.get("sortAscending") ? "fa fa-chevron-up" : "fa fa-chevron-down";
  }),
  sortProperty: Ember.computed('sortAscending', function(){
    return ['rate:' + (this.get('sortAscending') ? 'asc' : 'desc')];
  }),
  sortedMovies: Ember.computed.sort('filteredMovies', 'sortProperty'),

  actions: {
    toggleSort() {
      this.toggleProperty('sortAscending');
    },
    updateSearch() {
      this.propertyDidChange('filteredMovies');
    }
  }
});
