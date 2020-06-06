<template>
  <div class="mb-5">
    <div class="row justify-content-md-center">
      <div class="col-md-6">
        <div class="card">
          <div class="card-header">
            {{title}}
          </div>

          <div
            class="card-body"
            :style="{'minHeight': '200px'}"
          >
            <h5 class="card-title">
                Je behaalde {{lastExercise.score}} op {{ lastExercise.total }} ({{ lastExercise.percentage}}%)
            </h5>

            <p>{{message}}</p>

            <button
                class="btn btn-primary"
                @click="reStart"
            >
                {{btnText}}
            </button>
        
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
  import {ContentEventBus} from '../../main.js';

  import {
    setLastExercise,
    getBtnText,
    getScoreTitle,
    getScoreMessage
  } from '../../asstets/functions/dataHandler.js'

    export default {
        name: 'Score',
        data: function() {
            return{
                btnText: getBtnText('textReplay'),
                title: null,
                message: null
            };
        },
        props: {
            lastExercise: Object
        },
        methods: {
            reStart() {
                ContentEventBus.$emit('reStartExercises');
            },
            setText(level) {
              this.title = getScoreTitle(level);
              this.message = getScoreMessage(level);
            },
        },
        mounted() {
            setLastExercise(this.lastExercise);

            if(this.lastExercise.percentage === 100) {
                this.setText('high');
            } else if (this.lastExercise.percentage >= 50) {
                this.setText('medium');
            } else {
                this.setText('low');
            }
        },
    }
</script>

<style>
</style>