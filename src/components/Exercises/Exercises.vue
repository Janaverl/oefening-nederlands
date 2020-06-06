<template>
  <div class="mb-5">
      <div class="row justify-content-md-center">
        <div class="col-md-6">
          <div class="card">
            <div class="card-header">
              <div class="progress">
                <div class="progress-bar" role="progressbar" style="width: 25%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                  5 van 20
                </div>
            </div>
            {{exercises[counter].exerciseType}}
          </div>
            <div class="card-body">
            <h5 class="card-title">
              {{exercises[counter].exercise}}
            </h5>

            <exercises-input v-if="!answered"
            ></exercises-input>
            
            <exercises-sollution v-else
            ></exercises-sollution>
            
            <exercises-button></exercises-button>
        
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import ExercisesInput from './ExercisesInput';
  import ExercisesButton from './ExercisesButton';
  import ExercisesSollution from './ExercisesSollution';

  import jsonExercises from '../../assets/data/exercises.json';

    export default {
        name: 'Exercises',
        data: function() {
          return {
            exercises: jsonExercises,
            counter: 0,
            answered: false
          };
      },
      components: {
          ExercisesInput,
          ExercisesButton,
          ExercisesSollution
      }
    }
</script>

<style>
</style>