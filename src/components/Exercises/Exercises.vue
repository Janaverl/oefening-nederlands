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

  import {shuffleArray, getPercentage, isLastExercise} from '../../assets/functions/myfunctions.js'

  import jsonExercises from '../../assets/data/exercises.json';
  import jsonAppContent from '../../assets/data/appContent.json';

  export default {
    name: 'Exercises',
    data: function() {
      return {
        exercises: shuffleArray(jsonExercises),
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
        btnTexts: jsonAppContent.btn,
      };
    },
    methods: {
      changeBtnTxt(newText) {
        this.btnText = newText;
      },
      handleAnswer() {
        if(this.answer == this.exercises[this.progress.i].solution){
          this.isCorrectAnswer = true;
          this.progress.score++;
        }
        this.changeBtnTxt(this.btnTexts.textNext);
      },
      goToNextExercise() {
        this.progress.i++;
        this.resetAnswer();
        this.changeBtnTxt(this.btnTexts.textCheck);
      },
      resetAnswer() {
        this.answer = '';
        this.isCorrectAnswer= false;
      },
    },
    mounted() {
      this.progress.total = this.exercises.length;
      this.progress.track = getPercentage(this.progress.current, this.progress.total);
      this.btnText = this.btnTexts.textCheck
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
          this.goToNextExercise();
          return;
        }
        if(this.isLastOne){
          this.btnText = this.btnTexts.textFinish;
          return;
        }
        
        this.handleAnswer();
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