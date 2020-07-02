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
        :lastExercise=lastExercise
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

  import {ContentEventBus} from '../main.js';

  export default {
    name: 'AppContent',
    computed: {
      ...mapGetters([
        'playing',
        'scoreboard'
      ])
    },
    data: function() {
      return {
        lastExercise: {
          date: null,
          score: null,
          total: null,
          percentage: null,
          exercises: {},
          description: {}
        }
      }
    },
    created() {
        const vm = this;

        ContentEventBus.$on('reStartExercises', () => {
          Object.assign(vm.$data, vm.$options.data());
        });
        
        ContentEventBus.$on('showDetailsExercise', (data) => {
          console.log(data);
          vm.lastExercise = data;
          this.$store.dispatch('endGame')
        });
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