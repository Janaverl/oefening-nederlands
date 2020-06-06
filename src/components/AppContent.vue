<template>
    <div
      class="container"
    >
      <exercises v-if="playing"
      ></exercises> 
      <score v-else
        :score=lastGame.score
        :total=lastGame.total
        :percentage=lastGame.percentage
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
        endScore: {
          score: null,
          total: null,
          percentage: null
        }
      }
    },
    created() {
        const vm = this;

        ContentEventBus.$on('showScoreBoard', (data) => {
          vm.endScore.score = data.score;
          vm.endScore.total = data.total;
          vm.endScore.percentage = (data.score / data.total) * 100;
          vm.playing = false;
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