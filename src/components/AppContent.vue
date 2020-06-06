<template>
    <div
      class="container"
    >
      <exercises v-if="playing"></exercises> 
      <score v-else
        :score=endScore.score
        :total=endScore.total
        :percentage=endScore.percentage
      ></score> 
    </div>
</template>

<script>
  import Exercises from './Exercises/Exercises.vue'
  import Score from './Score/Score.vue'

  import {ScoreEventBus} from '../main.js';

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
        ScoreEventBus.$on('showScoreBoard', (data) => {
          this.endScore.score = data.score;
          this.endScore.total = data.total;
          this.endScore.percentage = (data.score / data.total) * 100;
          vm.playing = false;
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