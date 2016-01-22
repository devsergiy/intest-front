import DS from 'ember-data';
import Ember from 'ember';

export default DS.Model.extend({
  title: DS.attr('string'),
  rating: DS.attr('number'),
  userRating: DS.attr('number'),
  year: DS.attr('number'),
  director: DS.attr('string'),
  actors: DS.attr('string'),

  rate: Ember.computed('rating', 'userRating', function() {
    return this.get('userRating') || this.get('rating');
  }),
});
