import Vue from 'vue';
import App from './App';
import VueRouter from 'vue-router';
import UserProfile from './components/UserProfile';
import UserActivities from './components/UserActivities';
import ChosenActivity from './components/ChosenActivity';
import Signup from './components/Signup';
import Login from './components/Login';
import HomePage from './components/HomePage';


Vue.use(VueRouter); //IMPORTANT


const routes = [
  { path: '/', component: HomePage },
  { path: '/homepage', component: HomePage },
  { path: '/userprofile', component: UserProfile },
  { path: '/useractivities', component: UserActivities },
  { path: '/chosenactivity', component: ChosenActivity },
  { path: '/signup', component: Signup },
  { path: '/login', component: Login }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

new Vue({
  el: '#app',
  router,
  data: {
    showModal: false
  },
  render: h => {
    return h(App)
  }
});