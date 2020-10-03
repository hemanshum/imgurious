import Vuex from 'vuex';
import Vue from 'vue';
import auth from './modeuls/auth';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    auth,
  },
});
