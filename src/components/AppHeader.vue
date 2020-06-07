<template>
<div>
    <nav
        class="navbar navbar-light bg-light mb-5"
    >
        <span
            class="navbar-brand"
            >
            {{ appTitle }}
        </span>

        <span
            class="navbar-text"
            @click="showMenu = !showMenu"
        >
            Menu
        </span>
    </nav>
    <div v-if="showMenu"
        class="menu"
        @click="showMenu = !showMenu"
    >
        <p
            @click="openScoreBoard()"
        >alle scores</p>
        <p
            @click="startExcercise()"
        >nieuwe oefening starten</p>
    </div>
</div>
</template>

<script>
    import {ContentEventBus} from '../main.js';

    export default {
        name: 'AppHeader',
        data: function() {
            return {
                showMenu: false
            };
        },
        props: {
            appTitle: String
        },
        methods: {
            openScoreBoard() {
                ContentEventBus.$emit('openScoreBoard')
            },
            startExcercise() {
                ContentEventBus.$emit('reStartExercises');
            },
        }

    }
</script>

<style scoped>
</style>
