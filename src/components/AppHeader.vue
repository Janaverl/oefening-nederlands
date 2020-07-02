<template>
    <nav
        class="navbar navbar-light bg-warning mb-5"
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
    import { mapGetters } from 'vuex';

    export default {
        name: 'AppHeader',
        computed: {
            ...mapGetters([
                'appTitle',
                'menuName'
            ])
        },
        methods: {
            openMenu() {
                this.$store.dispatch('toggleMenu', true)
            }
        }
    }
</script>

<style>
</style>
