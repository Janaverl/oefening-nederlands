<template>
    <nav
        class="navbar navbar-light bg-light mb-5"
    >
        <span
            class="navbar-brand"
            >
            {{ appTitle }}
        </span>
    </nav>
</template>

<script>
    export default {
        name: 'AppHeader',
        props: {
            appTitle: String
        }
    }
</script>

<style>
</style>
