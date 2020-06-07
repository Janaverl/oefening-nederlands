<template>
    <button
        class="btn btn-primary"
        @click="btnConfirm"
    >
        {{btnText}}
    </button>
</template>

<script>
    import {ExerciseEventBus} from '../../main.js';
    
    export default {
        name: 'ExercisesButton',
        props: {
            btnText: String,
            btnAction: String
        },
        methods: {
            btnConfirm() {
                ExerciseEventBus.$emit('next');
            }
        }
    }
</script>

<style scoped>
    button{
        position: absolute;
        bottom: 20px;
    }
</style>