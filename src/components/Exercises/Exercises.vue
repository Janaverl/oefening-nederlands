<template>
  <row>
    <card>
        
        <template v-slot:header>
          {{description.long}}
        </template>

        <template v-slot:title>
          {{exercises[progress.i].exercise}}
        </template>

        <template v-slot:body>
          <exercises-input v-if="isAnswering"
            :inputData.sync="answer"
          ></exercises-input>
          
          <exercises-solution v-else
            :myAnswer="answer"
            :correctAnswer="exercises[progress.i].solution"
          ></exercises-solution>
          
          <button-next
            :btnText = btnText
            @btn-confirm="next"
          ></button-next>

        </template>

        <template v-slot:footer>
          <div
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
        </template>

    </card>
  </row>
</template>

<script>
  import Row from '../Reusable/Row';
  import Card from '../Reusable/Card';
  import ButtonNext from '../Reusable/ButtonNext';
  import ExercisesInput from './ExercisesInput';
  import ExercisesSolution from './ExercisesSolution';

  import {
    ContentEventBus,
    MarkUpEventBus
  } from '../../main.js';

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
        colorTheme: 'secondary',
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

        this.colorTheme = this.isCorrectAnswer ? 'success' : 'danger';

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
      },
      next() {
        this.isAnswering = !this.isAnswering;
        if(this.isLastOne && this.isAnswering){
          const result = this.createResultData(this);
          postExerciseResult(result);
          ContentEventBus.$emit('showDetailsExercise', result);
          return;
        }
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
          this.colorTheme = 'secondary';
          return;
        }

        this.handleAnswer();

        if(this.isLastOne){
          this.setBtnText("textFinish");
          return;
        }

        this.setBtnText("textNext");
      },

      colorTheme(colorTheme) {
        MarkUpEventBus.$emit('setColorTheme', colorTheme);
      }

    },
    created() {
      const vm = this;

      ContentEventBus.$on('reStartExercises', () => {
          Object.assign(vm.$data, vm.$options.data());
          this.progress.total = this.exercises.length;
          this.progress.track = getPercentage(this.progress.current, this.progress.total);
          this.setBtnText("textCheck");
      });
    },
    components: {
        Row,
        Card,
        ButtonNext,
        ExercisesInput,
        ExercisesSolution
    }
  }
</script>

<style scoped>
    button{
        position: absolute;
        bottom: 20px;
    }
</style>