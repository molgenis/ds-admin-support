<template>
  <div class="templates">
    <h1>Update Request Templates</h1>
    <p v-for="requestParameter in requestParameters">
      {{ requestParameter.title }}
      <br/>
      {{ requestParameter.value }}
    </p>
  </div>
</template>

<script setup lang="ts">
import { defineComponent, PropType } from 'vue'

interface RequestParameter {
  title: string;
  value: string;
}
</script>

<script lang="ts">
export default defineComponent({
  name: 'Templates',
  props: {
    msg: String,
    requestParameters: Array as PropType<RequestParameter>
  },
  mounted() {
    console.log("----")
    console.log(this.name)
    console.log("----")
  }
})
</script>

<style>
@media (min-width: 1024px) {
  .templates {
    min-height:  100vh;
    display:     flex;
    align-items: center;
  }
}
</style>
