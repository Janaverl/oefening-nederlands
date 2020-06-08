<template>
    <row>
        <card>
            <template v-slot:header>
                Toon al mijn scors scores
            </template>
            
            <template v-slot:body>
                
                <div class="row border font-weight-bold mt-5">
                    <p class="col-4">datum</p>
                    <p class="col-4">oefening</p>
                    <p class="col-4">jouw score</p>
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
            
        </card>
    </row>
</template>

<script>
    import Row from '../Reusable/Row.vue';
    import Card from '../Reusable/Card.vue';

    import {getAllExercisesDone} from '../../assets/functions/dataHandler.js'
    
    import {ContentEventBus} from '../../main.js';

    export default {
        name: 'Scores',
        data: function() {
            const data = getAllExercisesDone();
            return{
                allExercises: data,
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