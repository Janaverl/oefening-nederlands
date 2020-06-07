<template>
    <div
      class="container"
    >
      <exercises v-if="playing"
      ></exercises>

      <score v-else-if="!showAllResults"
        :lastExercise=lastExercise
      ></score>

      <scores v-else
      ></scores> 

    </div>
</template>

<script>
  import Exercises from './Exercises/Exercises.vue'
  import Scores from './Score/Scores.vue'
  import Score from './Score/Score.vue'

  import {ContentEventBus} from '../main.js';

  export default {
    name: 'AppContent',
    data: function() {
      return {
        playing: true,
        showAllResults: false,
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

        ContentEventBus.$on('showScoreBoard', (data) => {
          vm.lastExercise = data;
          vm.playing = false
        });
        ContentEventBus.$on('openScoreBoard', () => {
          vm.playing = false,
          vm.showAllResults = true
        });

        ContentEventBus.$on('reStartExercises', () => {
          Object.assign(vm.$data, vm.$options.data());
        });
    },
    components: {
      Exercises,
      Scores,
      Score
    }
  }
</script>

<style>
</style>