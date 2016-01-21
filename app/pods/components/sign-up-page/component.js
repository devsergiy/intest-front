import Ember from 'ember';

export default Ember.Component.extend({
  session: Ember.inject.service(),

  actions: {
    createUser() {
      var user = this.get('user');
      var data = this.getProperties('firstName', 'lastName', 'email', 'password', 'passwordConfirmation');
      user.setProperties(data);

      var self = this;

      function success(user) {
        self.setProperties({
            name: null,
            email: null,
            username: null,
            password: null,
            password_confirmation: null
          });

        self.get('session').authenticate('authenticator:oauth2', user.get('email'), user.get('password'))
      }

      user.save().then(success);
    },
  }
});
