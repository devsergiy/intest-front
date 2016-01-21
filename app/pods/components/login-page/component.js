import Ember from 'ember';

export default Ember.Component.extend({
  session: Ember.inject.service(),

  actions: {
    authenticate() {
      const { login, password } = this.getProperties('login', 'password');
      this.get('session').authenticate('authenticator:oauth2', login, password).catch((reason) => {
      // msg = JSON.parse(error).error;
      // this.set('errorMessage', msg);


        this.set('errorMessage', reason.error || reason);
      });
    },
    closeMessage() {
      this.set('errorMessage', null);
    }
  },

  reset() {
    this.setProperties({
      errorMessage: null,
      email: null,
      password: null
    });
  }
});
