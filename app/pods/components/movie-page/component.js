import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    deleteMovie() {
      var self = this;
      this.get('movie').destroyRecord().then(function() {
        self.get('onDeleteMovie')();
      })
    }
  }
});
