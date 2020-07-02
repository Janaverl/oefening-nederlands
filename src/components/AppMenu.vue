<template>
        <div 
            class="menu bg-primary"
            @click="closeMenu()"
        >

            <p
                @click="openScoreBoard()"
            >
                {{menuItems.openScoreBoard}}
            </p>
            <p
                @click="startExcercise()"
            >
                {{menuItems.startExcercise}}
            </p>

        </div>
</template>

<script>
    import {ContentEventBus} from '../main.js';

    export default {
        name: 'AppMenu',
        props: {
            menuItems: Object,
        },
        methods: {
            closeMenu() {
                this.$store.commit('toggleMenu', false)
            },
            openScoreBoard() {
                this.$store.commit('togglePlaying', false)
                this.$store.commit('toggleScoreboard', true)
            },
            startExcercise() {
                this.$store.commit('togglePlaying', true)
                this.$store.commit('toggleScoreboard', false)
                ContentEventBus.$emit('reStartExercises');
            },
        }

    }
</script>

<style>
</style>
