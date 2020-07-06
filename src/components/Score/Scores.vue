<template>
    <row>
        <card>
            <template v-slot:header>
                {{scoreBoardText.title}}
            </template>
            
            <template
                v-slot:body
                v-if="resultAllExercises"
            >
                
                <div class="row border font-weight-bold mt-5">
                    <p class="col-4">{{scoreBoardText.columns.date}}</p>
                    <p class="col-4">{{scoreBoardText.columns.exerciseType}}</p>
                    <p class="col-4">{{scoreBoardText.columns.score}}</p>
                </div>

                <div
                    v-for="exercise in resultAllExercises"
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
                {{scoreBoardText.noContent}}
            </template>
            
        </card>
    </row>
</template>

<script>
    import Row from '../Reusable/Row.vue';
    import Card from '../Reusable/Card.vue';

    import { mapGetters } from 'vuex';
    
    import {ContentEventBus} from '../../main.js';

    export default {
        name: 'Scores',
        computed: {
            ...mapGetters([
                'resultAllExercises',
                'scoreBoardText'
            ])
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