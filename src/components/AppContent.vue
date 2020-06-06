<template>
    <div
      class="container"
    >
      <exercises v-if="playing"
      ></exercises> 
      <score v-else
        :lastExercise=lastExercise
      ></score> 
    </div>
</template>

<script>
  import Exercises from './Exercises/Exercises.vue'
  import Score from './Score/Score.vue'

  import {ContentEventBus} from '../main.js';

  import {getAllExercises} from '../assets/functions/myfunctions.js'


  export default {
    name: 'AppContent',
    data: function() {
      const today = new Date();
      return {
        playing: true,
        lastExercise: {
          date: today,
          score: null,
          total: null,
          percentage: null
        }
      }
    },
    created() {
        const vm = this;

        ContentEventBus.$on('showScoreBoard', (data) => {
          vm.lastExercise.score = data.score;
          vm.lastExercise.total = data.total;
          vm.lastExercise.percentage = (data.score / data.total) * 100;
          vm.playing = false;
        });

        ContentEventBus.$on('reStartExercises', () => {
          Object.assign(vm.$data, vm.$options.data());
          getAllExercises();
        });
    },
    components: {
      Exercises,
      Score
    }
  }
</script>

<style>
</style>