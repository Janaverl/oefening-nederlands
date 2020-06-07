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
            {{description.long}}
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

  import {
    shuffleArray,
    getPercentage,
    isLastExercise,
    hasEqualCleanString
  } from '../../assets/functions/myfunctions.js'

  import {
    postExerciseResult,
    getBtnText,
    getExercises,
    getDescription
  } from '../../assets/functions/dataHandler.js'

  export default {
    name: 'Exercises',
    data: function() {
      return {
        exercises: shuffleArray(getExercises(1)),
        description: getDescription(1),
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
      cleanAnswerString(){
        if(!this.answer){
          return;
        }
        this.answer = this.answer.toLowerCase().trim();
      },
      saveAnswer(){
        this.exercises[this.progress.i]['isCorrect'] = this.isCorrectAnswer;
        this.exercises[this.progress.i]['answer'] = this.answer;
      },
      handleAnswer() {
        this.cleanAnswerString();

        if(hasEqualCleanString(this.answer, this.exercises[this.progress.i].solution)){
          this.isCorrectAnswer = true;
          this.progress.score++;
        }
        this.saveAnswer();
      },
      goToNextExercise() {
        this.progress.i++;
        this.resetAnswer();
      },
      resetAnswer() {
        this.answer = '';
        this.isCorrectAnswer= false;
      },
      createResultData(vm) {
        const result = {
          'id': new Date().valueOf(),
          'date': new Date(),
          'score': vm.progress.score,
          'total': vm.progress.total,
          'percentage': getPercentage(vm.progress.score, vm.progress.total),
          'exercises': vm.exercises,
          'description': vm.description,
        }
        return result;
      }
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
          const result = vm.createResultData(vm);
          postExerciseResult(result);
          ContentEventBus.$emit('showScoreBoard', result);
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