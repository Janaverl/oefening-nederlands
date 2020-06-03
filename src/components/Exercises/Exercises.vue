<template>
  <div class="mb-5">
      <div class="row justify-content-md-center">
        <div class="col-md-6">
          <div class="card">
              <div class="card-header">
                <div class="progress">
                  <div class="progress-bar" role="progressbar" style="width: 25%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">5 van 20</div>
                </div>
                  {{exercises[0].exerciseType}}
              </div>
              <div class="card-body">
              <h5 class="card-title">
                {{exercises[0].exercise}}
              </h5>
              <div class="form-group">
                <input type="text" class="form-control" placeholder="jouw oplossing hier">
              </div>
              <a href="#" class="btn btn-primary">
                 Is het juist?
              </a>
              </div>
          </div>
        </div>
      </div>
    <!-- <h1>Juiste oplossing</h1>
      <div class="row justify-content-md-center">
        <div class="col-md-6">
          <div class="card border-success">
              <div class="card-header">
                <div class="progress">
                  <div class="progress-bar" role="progressbar" style="width: 25%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">5 van 20</div>
                </div>
                  {{exercises[0].exerciseType}}
              </div>
              <div class="card-body text-success">
                <h5 class="card-title">
                  {{exercises[0].exercise}}
                </h5>
                <p>jouw oplossing: geschild</p>
                <p>juiste oplossing: geschild</p>
                <a href="#" class="btn btn-primary">
                  volgende
                </a>
              </div>
          </div>
        </div>
      </div>
      <h1>Foute oplossing</h1>
      <div class="row justify-content-md-center">
        <div class="col-md-6">
          <div class="card border-danger">
              <div class="card-header">
                <div class="progress">
                  <div class="progress-bar" role="progressbar" style="width: 25%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">5 van 20</div>
                </div>
                  {{exercises[0].exerciseType}}
              </div>
              <div class="card-body text-danger">
                <h5 class="card-title">
                  {{exercises[0].exercise}}
                </h5>
                <p>jouw oplossing: geschilde</p>
                <p>juiste oplossing: geschild</p>
                <a href="#" class="btn btn-primary">
                  volgende
                </a>
              </div>
          </div>
        </div>
      </div> -->
  </div>
</template>

<script>
  import exercises from '../../assets/data/exercises.json';

    export default {
        name: 'Exercises',
        data: function() {
          return {
            exercises: exercises
          };
      },
    }
</script>

<style>
</style>