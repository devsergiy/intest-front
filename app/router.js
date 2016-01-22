import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('movies', { path: '/movies' }, function() {
    this.route('new');
  });
  this.route('movie', { path: '/movies/:movie_id'}, function(){
    this.route('edit');
  });
  this.route('login');
  this.route('sign-up');
});

export default Router;
