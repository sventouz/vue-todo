// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import firebase from 'firebase'

Vue.config.productionTip = false

const config = {
  apiKey: "AIzaSyA6e5HHyyoT_T7P_B9YcKP0d_otzhL2P1E",
  authDomain: "vue-chat-7fa0a.firebaseapp.com",
  databaseURL: "https://vue-chat-7fa0a.firebaseio.com",
  projectId: "vue-chat-7fa0a",
  storageBucket: "vue-chat-7fa0a.appspot.com",
  messagingSenderId: "631611803954",
  appId: "1:631611803954:web:844970e61287b5d0c7af2b",
  measurementId: "G-N807032PC8"
}
firebase.initializeApp(config);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
