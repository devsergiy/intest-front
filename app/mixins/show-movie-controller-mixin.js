import Ember from 'ember';

export default Ember.Mixin.create({
  actions: {
    showMovie(movie) {
      this.transitionToRoute('movie', movie);
    }
  }
});
