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

    import { mapGetters } from 'vuex';

    export default {
        name: 'AppMenu',
        computed: {
            ...mapGetters([
                'menuItems'
            ])
        },
        methods: {
            closeMenu() {
                this.$store.dispatch('toggleMenu', false)
            },
            openScoreBoard() {
                this.$store.dispatch('showScoreboard')
            },
            startExcercise() {
                this.$store.dispatch('resetCurrentExerciseState');
                this.$store.dispatch('startGame');
                ContentEventBus.$emit('reStartExercises');
            },
        }

    }
</script>

<style scoped>
    .menu{
        color: white;
        margin: 0;
        z-index: 1000;
        background-color: grey;
        position: absolute;
        top: 0;
        right: 0;
        height: 100vh;
        min-width: 50vw;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
</style>
