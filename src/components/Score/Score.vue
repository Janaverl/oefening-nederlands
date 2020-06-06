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
                Je behaalde {{score}} op {{ total }} ({{ percentage}}%)
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
            score: Number,
            total: Number,
            percentage: Number
        },
        methods: {
            reStart() {
                ContentEventBus.$emit('reStartExercises');
            }
        },
        mounted() {
            console.log(this.scoreTexts);
            if(this.percentage == 100) {
                this.title = this.scoreTexts.high.title;
                this.text = this.scoreTexts.high.message;
            } else if (this.percentage >= 50) {
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