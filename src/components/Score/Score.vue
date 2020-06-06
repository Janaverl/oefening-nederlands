<template>
  <div class="mb-5">
    <div class="row justify-content-md-center">
      <div class="col-md-6">
        <div class="card">
          <div class="card-header">
            Je behaalde:%)
          </div>

          <div
            class="card-body"
            :style="{'minHeight': '200px'}"
          >
            <h5 class="card-title">
                {{score}} op {{ total }} ({{ percentage}}%)
            </h5>
        
          </div>

          <div class="card-footer"
            :style="{'minHeight': '40px'}"
          >

          </div>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: 'Score',
        props: {
            score: Number,
            total: Number,
            percentage: Number
        }
    }
</script>

<style>
</style>