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

  export default {
    name: 'AppContent',
    data: function() {
      return {
        playing: true,
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
          console.log('data in showScoreBoard :::')
          console.log(data);
          vm.lastExercise = data;
          vm.playing = false
        });

        ContentEventBus.$on('reStartExercises', () => {
          Object.assign(vm.$data, vm.$options.data());
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