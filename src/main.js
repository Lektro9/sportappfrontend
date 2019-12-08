import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import ApolloClient from 'apollo-boost';
import VueApollo from 'vue-apollo';

const apolloProvider = new VueApollo({
  defaultClient: new ApolloClient({
    uri: 'http://127.0.0.1:8000/graphql'
  })
})

Vue.config.productionTip = false

Vue.use(VueApollo)
new Vue({
  vuetify,
  provide: apolloProvider.provide(),
  render: h => h(App)
}).$mount('#app')