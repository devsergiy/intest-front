import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    showMovieList() {
      this.transitionToRoute('movies');
    }
  }
});
