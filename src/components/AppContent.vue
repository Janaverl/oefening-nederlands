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

  import {saveLastGame, getAllGames} from '../assets/functions/myfunctions.js'


  export default {
    name: 'AppContent',
    data: function() {
      const today = new Date();
      return {
        playing: true,
        lastGame: {
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
          vm.lastGame.score = data.score;
          vm.lastGame.total = data.total;
          vm.lastGame.percentage = (data.score / data.total) * 100;
          vm.playing = false;
        });

        ContentEventBus.$on('reStartExercises', () => {
          saveLastGame(vm.lastGame);
          Object.assign(vm.$data, vm.$options.data());
          getAllGames();
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