<template>
  <div class="mb-5">
    <div class="row justify-content-md-center">
      <div class="col-md-6">
        <div class="card">
          <div class="card-header">
            alle scores
          </div>

          <div
            class="card-body"
            :style="{'minHeight': '200px'}"
          >
            <h5 class="card-title">
                alle scores
            </h5>

            <div class="row border font-weight-bold mt-5">
                <p class="col-4">datum</p>
                <p class="col-4">oefening</p>
                <p class="col-4">jouw score</p>
            </div>

            <div
              v-for="exercise in allExercises"
              :key="exercise.id"
            >
              <div
                :class="['row',
                  'border',
                ]"
                @click="showDetails(exercise)"
              >
                <p class="col-4">{{exercise.date}}</p>
                <p class="col-4">{{exercise.description.short}}</p>
                <p class="col-4">{{exercise.percentage}}%</p>
              </div>

            </div>
        
          </div>

          <div class="card-footer"
            :style="{'minHeight': '40px'}"
          >

          </div>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
    import {getAllExercisesDone} from '../../assets/functions/dataHandler.js'
    
    import {ContentEventBus} from '../../main.js';

    export default {
        name: 'Scores',
        data: function() {
            const data = getAllExercisesDone();
            return{
                allExercises: data,
            }
        },
        methods: {
            showDetails(exercise) {
                ContentEventBus.$emit('showDetailsExercise', exercise);
            }
        }
    }
</script>

<style>
</style>