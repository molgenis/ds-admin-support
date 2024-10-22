<script setup lang="ts">
import { store }                     from '../services/store.ts'
import { defineComponent, PropType } from 'vue'

interface RequestedUpdate {
  id:           string;
  requester:    string;
  summary:      string;
  receivedDate: string;
}
</script>

<template>
  <div class="requestedupdates">
    <h1>Requested Update <button type="button" class="btn" @click="store.loadRequestedUpdates()"><i class="bi-download"></i></button></h1>
    <table class="table">
      <thead>
        <tr class="table-dark">
          <th>Requester</th>
          <th>Summary</th>
          <th>Received Date</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="requestedUpdate in store.requestedUpdates" @click="selectRequestedUpdate(requestedUpdate)" :key="requestedUpdate.id" :class="{ 'table-primary': (store.selectedRequestedUpdate === requestedUpdate) }">
          <td>{{ requestedUpdate.requester }}</td>
          <td>{{ requestedUpdate.summary }}</td>
          <td>{{ requestedUpdate.dateReceived }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts">
export default defineComponent({
  name: 'requesteds',
  props: {
    msg: String,
  },
  data() {
    return {
    };
  },
  methods: {
    selectRequestedUpdate(requestedUpdate) {
      store.selectedApprovedRequest = null;
      store.selectedRequestedUpdate = requestedUpdate;
    }
  }
})
</script>

<style>
@media (min-width: 1024px) {
  div .requestedupdates {
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
