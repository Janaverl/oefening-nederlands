<template>
    <div
      class="container"
    >
      <exercises></exercises> 
    </div>
</template>

<script>
  import Exercises from './Exercises/Exercises.vue'

  export default {
    name: 'AppContent',
    components: {
      Exercises
    }
  }
</script>

<style>
</style>