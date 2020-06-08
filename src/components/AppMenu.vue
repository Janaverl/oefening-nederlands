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
                ContentEventBus.$emit('toggleMenu', false);
            },
            openScoreBoard() {
                ContentEventBus.$emit('openScoreBoard')
            },
            startExcercise() {
                ContentEventBus.$emit('reStartExercises');
            },
        }

    }
</script>

<style>
</style>
