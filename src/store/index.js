import Vuex from 'vuex';
import Vue from 'vue';
import auth from './modeuls/auth';
import images from './modeuls/images';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    auth,
    images,
  },
});
