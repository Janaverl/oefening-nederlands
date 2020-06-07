<template>
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
            @click="openScoreBoard"
        >
            Bekijk mijn scorebord
        </span>
    </nav>
</template>

<script>
    import {ContentEventBus} from '../main.js';

    export default {
        name: 'AppHeader',
        props: {
            appTitle: String
        },
        methods: {
            openScoreBoard() {
                ContentEventBus.$emit('openScoreBoard')
            }
        }

    }
</script>

<style>
</style>
