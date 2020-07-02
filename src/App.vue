<template>
  <div id="app">

    <app-header></app-header>

    <transition name="fade">
      <app-menu
        v-if="showMenu"
      ></app-menu>
    </transition>

    <app-content
      class="content"
    ></app-content>

    <app-footer></app-footer>
    
  </div>
</template>

<script>
  import AppHeader from './components/AppHeader.vue'
  import AppMenu from './components/AppMenu.vue'
  import AppContent from './components/AppContent.vue'
  import AppFooter from './components/AppFooter.vue'

  import { mapGetters } from 'vuex';

  export default {
    name: 'App',
    computed: {
      ...mapGetters([
        'showMenu'
      ])
    },
    components: {
      AppHeader,
      AppMenu,
      AppContent,
      AppFooter
    }
  }
</script>

<style lang="scss">
  @import './assets/scss/myBootstrap.scss';

  #app {
    display: flex;
    min-height: 100vh;
    flex-direction: column;
  }

  .content {
    flex: 1;
  }

  .fade-enter-active, .fade-leave-active {
    transition: opacity .7s;
  }
  .fade-enter, .fade-leave-to {
    opacity: 0;
  }

</style>
