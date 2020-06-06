<template>
    <div>
        <p>jouw oplossing: {{myAnswer}}</p>
        <p>juiste oplossing: {{correctAnswer}}</p>
    </div>
</template>

<script>
    export default {
        name: 'ExercisesSolution',
        props: {
            myAnswer: String,
            correctAnswer: String
        }
    }
</script>

<style>
</style>