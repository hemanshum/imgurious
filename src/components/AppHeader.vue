<template>
  <div class="ui secondary pointing menu">
    <a href="/" class="active item">
      Imgureous
    </a>

    <div class="right menu">
      <div class="horizontal" v-if="isLoggedIn">
        <a href="#" class="ui item">
          Galleries
        </a>
        <a href="#" class="ui item">
          Upload
        </a>
        <a class="ui item" @click="logout">
          Logout
        </a>
      </div>
      <a v-else href="#" class="ui item" @click="login">
        Login
      </a>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'AppHeader',
  computed: mapGetters(['isLoggedIn']),
  methods: mapActions(['login', 'logout']),
};
</script>

<style>
.horizontal {
  display: flex;
  flex-direction: row;
}
</style>
