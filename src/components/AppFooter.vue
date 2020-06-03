<template>
    <footer
        class="page-footer font-small blue fixed-bottom"
    >
        <div
            class="text-center py-3"
        >
            created by
            <a
                :href="[website]"
            >
                {{name}}
            </a>
        </div>
    </footer>
</template>

<script>
    export default {
        name: 'AppFooter',
        props: {
            name: String,
            website: String
        }
    }
</script>

<style>
</style>