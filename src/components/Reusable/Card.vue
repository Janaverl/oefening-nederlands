<template>
    <div
        class="card"
    >
        <div
        class="card-header"
        >
            <slot name="header">
                <span></span>
            </slot>
        </div>

        <div
        class="card-body"
        :style="{'minHeight': '200px'}"
        >
        <h5 class="card-title">
            <slot name="title">
                <span></span>
            </slot>
        </h5>

            <slot name="body">
                <span></span>
            </slot>

        </div>

        <div
            class="card-footer"
            style="{'minHeight': '40px'}"
        >

            <slot name="footer">
                <span></span>
            </slot>

        </div>
    </div>
</template>

<script>
  export default {
    name: 'Card',
  }
</script>

<style>
</style>