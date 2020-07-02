<template>
    <footer
    >
        <div
            class="text-center py-3"
        >
            created by
            <a
                :href="[createdBy.website]"
            >
                {{createdBy.name}}
            </a>
        </div>
    </footer>
</template>

<script>
    import { mapGetters } from 'vuex';

    export default {
        name: 'AppFooter',
        computed: {
            ...mapGetters([
                'createdBy'
            ])
        },
    }
</script>

<style>
</style>