<template>
  <div
    class="mb-5"
  >
    <div class="row justify-content-md-center">
      <div class="col-md-6">
        <div
          :class="['card', setBorder]"
        >

          <div
            :class="['card-header', setBackground]"
          >
            {{exercises[progress.i].exerciseType}}
          </div>

          <div
            class="card-body"
            :style="{'minHeight': '200px'}"
          >
            <h5 class="card-title">
              {{exercises[progress.i].exercise}}
            </h5>

            <exercises-input v-if="isAnswering"
              :inputData.sync="answer"
            ></exercises-input>
            
            <exercises-solution v-else
              :myAnswer="answer"
              :correctAnswer="exercises[progress.i].solution"
            ></exercises-solution>
            
            <exercises-button
              :btnText = btnText
            ></exercises-button>
        
          </div>

          <div
            :class="['card-footer', setBackground]"
            :style="{'minHeight': '40px'}"
          >
            <div v-if="isAnswering"
              class="progress text-dark"
            >
              <div
                class="progress-bar"
                role="progressbar"
                :style="{'width': progress.track +'%'}"
              >
                {{progress.current}} van {{progress.total}}
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import ExercisesInput from './ExercisesInput';
  import ExercisesButton from './ExercisesButton';
  import ExercisesSolution from './ExercisesSolution';

  import {ExerciseEventBus} from '../../main.js';
  import {ContentEventBus} from '../../main.js';

  import {shuffleArray, getPercentage, isLastExercise, hasEqualCleanString} from '../../assets/functions/myfunctions.js'

  import {getBtnText, getExercises} from '../../assets/functions/dataHandler.js'

  export default {
    name: 'Exercises',
    data: function() {
      return {
        exercises: shuffleArray(getExercises(1)),
        progress: {
          i: 0,
          current: 1,
          total: null,
          track: null,
          score: 0
        },
        isAnswering:  true,
        answer: null,
        isCorrectAnswer: false,
        isLastOne: false,
        btnText: null,
      };
    },
    methods: {
      setBtnText(action) {
        this.btnText = getBtnText(action);
      },
      handleAnswer() {
        if(hasEqualCleanString(this.answer, this.exercises[this.progress.i].solution)){
          this.isCorrectAnswer = true;
          this.progress.score++;
        }
      },
      goToNextExercise() {
        this.progress.i++;
        this.resetAnswer();
      },
      resetAnswer() {
        this.answer = '';
        this.isCorrectAnswer= false;
      },
    },
    mounted() {
      this.progress.total = this.exercises.length;
      this.progress.track = getPercentage(this.progress.current, this.progress.total);
      this.setBtnText("textCheck");
    },
    watch: {
      'progress.i'(newIndex) {
        this.progress.current = newIndex + 1;

        const current = this.progress.current;
        const total = this.progress.total;
        this.progress.track = getPercentage(current, total);
        this.isLastOne = isLastExercise(current, total);
      },
      isAnswering (isAnswering) {
        if(isAnswering) {
          this.setBtnText("textCheck");
          this.goToNextExercise();
          return;
        }

        this.handleAnswer();

        if(this.isLastOne){
          this.setBtnText("textFinish");
          return;
        }

        this.setBtnText("textNext");
        
      }
    },
    created() {
      const vm = this;
      ExerciseEventBus.$on('next', () => {
        vm.isAnswering = !vm.isAnswering;
        if(vm.isLastOne && vm.isAnswering){
          ContentEventBus.$emit('showScoreBoard', vm.progress);
          return;
        }
      });
      ContentEventBus.$on('reStartExercises', () => {
          Object.assign(vm.$data, vm.$options.data());
      });
    },
    computed: {
      setBorder() {
        if(this.isAnswering){
          return;
        }
        return this.isCorrectAnswer ? 'border-success' : 'border-danger';
      },
      setBackground() {
        if(this.isAnswering){
          return;
        }
        return this.isCorrectAnswer ? 'bg-success' : 'bg-danger';
      }
    },
    components: {
        ExercisesInput,
        ExercisesButton,
        ExercisesSolution
    }
  }
</script>

<style>
</style>