import DS from 'ember-data';
import DataAdapterMixin from 'ember-simple-auth/mixins/data-adapter-mixin';

export default DS.JSONAPIAdapter.extend(DataAdapterMixin, {
  host: window.IntestFront.API_HOST,
  authorizer: 'authorizer:oauth2'
});
