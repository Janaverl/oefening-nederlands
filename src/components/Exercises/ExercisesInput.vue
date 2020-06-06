<template>
    <div class="form-group">
        <input
            type="text"
            class="form-control"
            placeholder="jouw oplossing hier"
            v-model="myAnswer"
            @keyup="$emit('update:inputData', myAnswer);"
        >
    </div>
</template>

<script>
    // import {ExerciseEventBus} from '../../main.js';

    export default {
        name: 'ExercisesInput',
        data: function() {
            return{
                myAnswer: this.inputData
            };
        },
        props: {
            inputData: String
        }
    }
</script>

<style>
</style>