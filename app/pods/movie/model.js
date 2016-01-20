import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string'),
  rating: DS.attr('number'),
  userRating: DS.attr('number'),
  year: DS.attr('number'),
  user: DS.belongsTo('user'),
  directors: DS.hasMany('person', { async: true })
});
