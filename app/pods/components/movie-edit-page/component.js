import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    save() {
      var movie = this.get('movie');

      var self = this;

      movie.save().then(function () {
        self.get('onShowMovie')(movie);
      });
    }
  }
});
