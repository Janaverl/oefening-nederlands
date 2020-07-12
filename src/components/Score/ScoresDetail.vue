<template>
  <row>
    <card>

        <template v-slot:header>
          <p>oefening: {{exercise.description.short}}</p>
          <p>datum: {{exercise.date}}</p>
          <p>resultaat: Je behaalde {{exercise.score}} op {{ exercise.total }} ({{exercise.percentage}}%)</p>
        </template>

        <template v-slot:title>
          {{title}}
        </template>
        
        <template v-slot:body>
          <p>{{message}}</p>

          <button-next
            :btnText = btnText
            @btn-confirm="reStart"
          ></button-next>

          <div class="row border font-weight-bold mt-5">
              <p class="col-4">opdracht</p>
              <p class="col-4">jouw oplossing</p>
              <p class="col-4">juiste oplossing</p>
          </div>

          <div
            v-for="exercise in exercise.exercises"
            :key="exercise.id"
          >
            <div
              :class="['row',
                'border',
                {'text-success': exercise.isCorrect},
                {'text-danger': !exercise.isCorrect}
              ]"
            >
              <p class="col-4">{{exercise.exercise}}</p>
              <p class="col-4">{{exercise.answer}}</p>
              <p class="col-4">{{exercise.solution}}</p>
            </div>

          </div>
        </template>
    </card>
  </row>
</template>

<script>
  import Row from '../Reusable/Row.vue';
  import Card from '../Reusable/Card.vue';
  import ButtonNext from '../Reusable/ButtonNext';

  import {
    getBtnText,
    getScoreTitle,
    getScoreMessage
  } from '../../assets/functions/dataHandler.js'

    export default {
        name: 'ScoresDetail',
        data: function() {
            return{
                btnText: getBtnText('textReplay'),
                title: null,
                message: null
            };
        },
        props: {
            exercise: Object
        },
        methods: {
            reStart() {
                this.$store.dispatch('startGame');
            },
            setText(level) {
              this.title = getScoreTitle(level);
              this.message = getScoreMessage(level);
            },
        },
        mounted() {
            if(this.exercise.percentage === 100) {
                this.setText('high');
            } else if (this.exercise.percentage >= 50) {
                this.setText('medium');
            } else {
                this.setText('low');
            }
        },
        components: {
            Row,
            Card,
            ButtonNext
        }
    }
</script>

<style>
</style>