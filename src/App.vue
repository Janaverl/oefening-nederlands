<template>
  <div id="app">

    <app-header 
      :appTitle = appTitle
    ></app-header>

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
  import AppContent from './components/AppContent.vue'
  import AppFooter from './components/AppFooter.vue'

  import {getAppTitle, getAppCreatedBy} from './assets/functions/dataHandler.js';

  export default {
    name: 'App',
    data: function() {
        return {
          appTitle: getAppTitle(),
          createdBy: getAppCreatedBy()
        };
    },
    components: {
      AppHeader,
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

</style>
