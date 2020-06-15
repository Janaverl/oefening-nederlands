<template>
  <div id="app">

    <app-header 
      :appTitle = appTitle
      :menuName = menuName
    ></app-header>

    <transition name="fade">
      <app-menu
        v-if="showMenu"
        :menuItems = menuItems
      ></app-menu>
    </transition>

    <app-content
      class="content"
    ></app-content>

    <app-footer
      :name = createdBy.name
      :website = createdBy.website
    ></app-footer>
    
  </div>
</template>

<script>
  import AppHeader from './components/AppHeader.vue'
  import AppMenu from './components/AppMenu.vue'
  import AppContent from './components/AppContent.vue'
  import AppFooter from './components/AppFooter.vue'

  import {
    getAppTitle,
    getAppCreatedBy,
    getMenuName,
    getMenuItems
  } from './assets/functions/dataHandler.js';

  import {ContentEventBus} from './main.js';

  export default {
    name: 'App',
    data: function() {
      return {
        appTitle: getAppTitle(),
        createdBy: getAppCreatedBy(),
        menuName: getMenuName(),
        menuItems: getMenuItems(),
        showMenu: false
      };
    },
    created() {
      const vm = this; 

      ContentEventBus.$on('toggleMenu', (isShowing) => {
        vm.showMenu = isShowing;
      });
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
