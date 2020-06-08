<template>
    <row>
        <card>
            <template v-slot:header>
                {{text.title}}
            </template>
            
            <template
                v-slot:body
                v-if="allExercises"
            >
                
                <div class="row border font-weight-bold mt-5">
                    <p class="col-4">{{text.columns.date}}</p>
                    <p class="col-4">{{text.columns.exerciseType}}</p>
                    <p class="col-4">{{text.columns.score}}</p>
                </div>

                <div
                    v-for="exercise in allExercises"
                    :key="exercise.id"
                >
                    <div
                        :class="['row',
                        'border',
                    ]"
                        @click="showDetails(exercise)"
                    >
                    <p class="col-4">{{exercise.date}}</p>
                    <p class="col-4">{{exercise.description.short}}</p>
                    <p class="col-4">{{exercise.percentage}}%</p>
                    </div>

                </div>
            </template>
            
            <template
                v-slot:body
                v-else
            >
                {{text.noContent}}
            </template>
            
        </card>
    </row>
</template>

<script>
    import Row from '../Reusable/Row.vue';
    import Card from '../Reusable/Card.vue';

    import {
        getScoreBoardText,
        getAllExercisesDone
    } from '../../assets/functions/dataHandler.js'
    
    import {ContentEventBus} from '../../main.js';

    export default {
        name: 'Scores',
        data: function() {
            return{
                allExercises: getAllExercisesDone(),
                text: getScoreBoardText(),
            }
        },
        methods: {
            showDetails(exercise) {
                ContentEventBus.$emit('showDetailsExercise', exercise);
            }
        },
        components: {
            Row,
            Card
        }
    }
</script>

<style>
</style>