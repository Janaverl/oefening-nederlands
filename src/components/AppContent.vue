<template>
  <div
    class="container"
  >
    <div
      class="mb-5"
    >

      <exercises
        v-if="playing"
      ></exercises>

      <scores-detail
        v-else-if="scoreboard.show && scoreboard.detailed"
        :currentExercise=currentExercise
      ></scores-detail>

      <scores
        v-else
      ></scores> 
        
    </div>
  </div>
</template>

<script>
  import Exercises from './Exercises/Exercises.vue'
  import Scores from './Score/Scores.vue'
  import ScoresDetail from './Score/ScoresDetail.vue'

  import { mapGetters } from 'vuex';

  export default {
    name: 'AppContent',
    computed: {
      ...mapGetters([
        'playing',
        'scoreboard',
        'currentExercise'
      ])
    },
    components: {
      Exercises,
      Scores,
      ScoresDetail
    }
  }
</script>

<style>
</style>