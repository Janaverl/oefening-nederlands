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
            @click="openMenu()"
        >
            {{menuName}}
        </span>
    </nav>
</template>

<script>
    import {ContentEventBus} from '../main.js';

    export default {
        name: 'AppHeader',
        props: {
            appTitle: String,
            menuName: String
        },
        methods: {
            openMenu() {
                ContentEventBus.$emit('toggleMenu', true);
            },
        }
    }
</script>

<style>
</style>
