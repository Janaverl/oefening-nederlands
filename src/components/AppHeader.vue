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
    export default {
        name: 'AppHeader',
        props: {
            appTitle: String,
            menuName: String
        },
        methods: {
            openMenu() {
                this.$store.commit('toggleMenu', true)
            }
        }
    }
</script>

<style>
</style>
