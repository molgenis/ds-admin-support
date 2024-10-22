<script setup lang="ts">
import { store }                     from '../services/store.ts'
import { defineComponent, PropType } from 'vue'

interface Recipient {
  name:                string;
  location:            string;
  personalaccesstoken: string;
}
</script>

<template>
  <div class="recipients">
    <h1>Request Recipients <button type="button" class="btn" @click="store.loadRequestRecipients()"><i class="bi-download"></i></button></h1>
    <table class="table">
      <thead>
        <tr class="table-dark">
          <th>Name</th>
          <th>Location</th>
          <th>PAT</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="requestRecipient in store.requestRecipients" @click="selectRequestRecipient(requestRecipient)" :key="requestRecipient.name" :class="{'table-primary': (store.selectedRequestRecipients.includes(requestRecipient.name)) }">
          <td>{{ requestRecipient.name }}</td>
          <td>{{ requestRecipient.location }}</td>
          <td>{{ requestRecipient.personalaccesstoken }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts">
export default defineComponent({
  name: 'Recipients',
  props: {
    msg: String,
  },
  data() {
    return {
    };
  },
  methods: {
    selectRequestRecipient(recipient) {
      if (store.selectedRequestRecipients.includes(recipient.name)) {
        store.selectedRequestRecipients.splice(store.selectedRequestRecipients.indexOf(recipient.name), 1);
      } else {
        store.selectedRequestRecipients.push(recipient.name);
      }
    }
  }
})
</script>

<style>
@media (min-width: 1024px) {
  div .recipients {
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
