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

            <p>{{text}}</p>

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

    import {saveLastExercise} from '../../assets/functions/myfunctions.js'

    import jsonAppContent from '../../assets/data/appContent.json';


    export default {
        name: 'Score',
        data: function() {
            return{
                scoreTexts: jsonAppContent.score,
                btnText: jsonAppContent.btn.textReplay,
                title: null,
                text: null
            };
        },
        props: {
            lastExercise: Object
        },
        methods: {
            reStart() {
                ContentEventBus.$emit('reStartExercises');
            }
        },
        mounted() {
            
            saveLastExercise(this.lastExercise);

            if(this.lastExercise.percentage == 100) {
                this.title = this.scoreTexts.high.title;
                this.text = this.scoreTexts.high.message;
            } else if (this.lastExercise.percentage >= 50) {
                this.title = this.scoreTexts.medium.title;
                this.text = this.scoreTexts.medium.message; 
            } else {
                this.title = this.scoreTexts.low.title;
                this.text = this.scoreTexts.low.message;
            }
        },
    }
</script>

<style>
</style>