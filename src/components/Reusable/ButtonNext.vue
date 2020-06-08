<template>
    <button
        class="btn btn-primary"
        @click="$emit('btn-confirm')"
    >
        {{btnText}}
    </button>
</template>

<script>
    export default {
        name: 'ButtonNext',
        props: {
            btnText: String,
            method: { type: Function }
        },
    }
</script>

<style>
</style>