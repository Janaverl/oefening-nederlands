<template>
      <div
        class="row justify-content-md-center"
      >
        <div
          class="col-md-6"
          >
          <slot></slot>
        </div>
    </div>
</template>

<script>
    import {MarkUpEventBus} from '../../main.js';

    export default {
        name: 'Row'
    }
</script>

<style>
</style>