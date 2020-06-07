<template>
  <div
    class="container"
  >
    <div
      class="mb-5"
    >
      <div
        class="row justify-content-md-center"
      >
        <div
          class="col-md-6"
          >

          <exercises
            v-if="playing"
          ></exercises>

          <scores-detail
            v-else-if="!showAllResults"
            :lastExercise=lastExercise
          ></scores-detail>

          <scores
            v-else
          ></scores> 

        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Exercises from './Exercises/Exercises.vue'
  import Scores from './Score/Scores.vue'
  import ScoresDetail from './Score/ScoresDetail.vue'

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

        ContentEventBus.$on('openScoreBoard', () => {
          vm.playing = false,
          vm.showAllResults = true
        });

        ContentEventBus.$on('reStartExercises', () => {
          Object.assign(vm.$data, vm.$options.data());
        });
        
        ContentEventBus.$on('showDetailsExercise', (data) => {
          console.log(data);
          vm.lastExercise = data;
          vm.playing = false
          vm.showAllResults = false
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