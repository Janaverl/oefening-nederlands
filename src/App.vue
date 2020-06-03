<template>
  <div id="app">

    <app-header 
      :appTitle = appTitle
    ></app-header>

    <app-content></app-content>

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

  import appInformation from './assets/data/appInformation.json';

  export default {
    name: 'App',
    data: function() {
        return {
          appTitle: appInformation.title,
          createdBy: appInformation.createdBy
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

</style>
