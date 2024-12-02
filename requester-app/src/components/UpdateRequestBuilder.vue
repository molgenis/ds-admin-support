<script setup lang="ts">
import { store } from '../services/store.ts'
</script>

<template>
  <div class="greetings">
    <h1 class="green">Update Request Builder</h1>
    <h3>Request Recipients</h3>
    <div>
      <table class="table">
        <tbody>
          <tr v-for="requestRecipient in store.selectedRequestRecipients">
            <td>{{ requestRecipient }}</td>
          </tr>
        </tbody>
      </table>
    </div>
    <h3>Request Template</h3>
    <div v-if="store.selectedRequestTemplate !== null">
      <form>
        <h4 class="font-weight-bold">{{ store.selectedRequestTemplate.type }}</h4>
        <table class="table">
          <tbody>
            <tr v-for="requestTemplateParameter in store.selectedRequestTemplate.parameters">
              <td>
                <p>{{ requestTemplateParameter.paramName }}</p>
                <textarea class="form-control" id="requestTemplateParameter.paramName" row="2"></textarea>
              </td>
            </tr>
          </tbody>
        </table>
      </form>
    </div>
    <div class="text-center">
      <button type="button" class="btn btn-primary text-center" @click="store.submitUpdateRequest()">Submit Update Requests</button>
    </div>
  </div>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  position: static;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings {
  margin-top: 4rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
