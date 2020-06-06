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
              :inputData.sync="answer.answer"
            ></exercises-input>
            
            <exercises-sollution v-else
              :myAnswer="answer.answer"
              :correctAnswer="exercises[progress.i].solution"
            ></exercises-sollution>
            
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
  import ExercisesSollution from './ExercisesSollution';

  import {ExerciseEventBus} from '../../main.js';

  import jsonExercises from '../../assets/data/exercises.json';
  import jsonAppContent from '../../assets/data/appContent.json';

    export default {
        name: 'Exercises',
          data: function() {
            function shuffleArray(array) {
              for (var i = array.length - 1; i > 0; i--) {
                  var j = Math.floor(Math.random() * (i + 1));
                  var temp = array[i];
                  array[i] = array[j];
                  array[j] = temp;
              }
            return array;
          }
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
            showScore: false,
            answer: {
              answer: null,
              isCorrect: false,
              isLastOne: false
            },
            btnTexts: jsonAppContent.btn,
            btnText: jsonAppContent.btn.textCheck
          };
      },
      methods: {
        setTrack(current, total) {
          return ((current / total)*100);
        },
        isAnswerCorrect(answer, correctAnswer) {
          if(answer == correctAnswer) {
            return true;
          }
          return false;
        },
        isLastExercise(currentNr, total){
          if(currentNr == total){
            return true;
          }
          return false;
        },
        handleAnswer() {
          this.btnText = this.btnTexts.textNext;
          this.answer.isCorrect = this.isAnswerCorrect(this.answer.answer, this.exercises[this.progress.i].solution);
          if(this.answer.isCorrect){
            this.progress.score++;
          }
        },
        goToNextExercise() {
          this.progress.i++;
          this.resetAnswer();
          this.btnText = this.btnTexts.textCheck;
        },
        resetAnswer() {
          this.answer.answer = '';
        },
        showScore() {
          console.log(this.progress.score);
        }
      },
      mounted() {
        this.progress.total = this.exercises.length;
        this.progress.track = this.setTrack(this.progress.current, this.progress.total);
      },
      watch: {
        'progress.i'(newIndex) {
          this.progress.current = newIndex + 1;
          this.progress.track = this.setTrack(this.progress.current, this.progress.total);
          const total = this.progress.total;
          const current = this.progress.current;
          this.answer.isLastOne = this.isLastExercise(total, current);
          console.log('current state:')
          console.log(this.answer.isLastOne);
          console.log(this.progress.current);
        },
        isAnswering (isAnswering) {
          if(this.answer.isLastOne){
            this.btnText = this.btnTexts.textFinish;
            return;
          }
          if(!isAnswering){
            this.handleAnswer();
            return;
          }
          this.goToNextExercise();
        }
      },
      created() {
        const vm = this;
        ExerciseEventBus.$on('next', () => {
          vm.isAnswering = !vm.isAnswering;
          if(vm.answer.isLastOne){
            this.showScore();
            return;
          }
        });
      },
      computed: {
        setBorder() {
          if(this.isAnswering){
            return;
          }
          return this.answer.isCorrect ? 'border-success' : 'border-danger';
        },
        setBackground() {
          if(this.isAnswering){
            return;
          }
          return this.answer.isCorrect ? 'bg-success' : 'bg-danger';
        }
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