<template>
    <div
        :class="['card', 'shadow', 'border-'+colorTheme]"
    >
        <div
        class="card-header"
        :class="['bg-'+colorTheme]"
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
            :class="['bg-'+colorTheme]"
            style="{'minHeight': '40px'}"
        >

            <slot name="footer">
                <span></span>
            </slot>

        </div>
    </div>
</template>

<script>
    import {MarkUpEventBus} from '../../main.js';

    export default {
        name: 'Card',
        data: function() {
            return {
                colorTheme: 'secondary',
            }
        },
        created() {
            const vm = this;

            MarkUpEventBus.$on('setColorTheme', (theme) => {    
                vm.colorTheme = theme;
            });
        }
    }
</script>

<style>
</style>