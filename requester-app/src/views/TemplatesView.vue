<script setup lang="ts">
import { store }                     from '../services/store.ts'
import { defineComponent, PropType } from 'vue'

interface RequestTemplate {
  type:  string;
  value: string;
}

interface TemplateParameter {
  paramName: string;
}
</script>

<template>
  <div class="templates">
    <h1>Request Templates <button type="button" class="btn" @click="store.loadRequestTemplates()"><i class="bi-download"></i></button></h1>
    <table class="table">
      <thead>
        <tr class="table-dark">
           <th scope="col">Type</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="requestTemplate in store.requestTemplates" @click="selectRequestTemplate(requestTemplate)" :key="requestTemplate.type" :class="{ 'table-primary': (store.selectedRequestTemplate !== null) && (store.selectedRequestTemplate.type === requestTemplate.type) }">
          <td>{{ requestTemplate.type }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts">
export default defineComponent({
  name: 'Templates',
  props: {
    msg: String,
  },
  data() {
    return {
    };
  },
  methods: {
    selectRequestTemplate(requestTemplate) {
      store.selectedRequestTemplate = requestTemplate;
    }
  }
})
</script>

<style>
@media (min-width: 1024px) {
  div .templates {
    min-height:     100vh;
    display:        flex;
    align-items:    start;
    flex-direction: column;
  }
}

tr:hover {
  cursor: pointer;
}
</style>
