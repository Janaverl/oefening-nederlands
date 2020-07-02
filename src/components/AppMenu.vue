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
                this.$store.dispatch('startGame');
                ContentEventBus.$emit('reStartExercises');
            },
        }

    }
</script>

<style>
</style>
