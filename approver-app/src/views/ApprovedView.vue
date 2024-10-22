><script setup lang="ts">
import { store }                     from '../services/store.ts'
import { defineComponent, PropType } from 'vue'

interface ApprovedRequest {
  id:           string;
  requester:    string;
  summary:      string;
  dateReceived: string;
  dateApproved: string;
  outcome:      string;
}
</script>

<template>
  <div class="approved">
    <h1>Approved Requests <button type="button" class="btn" @click="store.loadApprovedRequests()"><i class="bi-download"></i></button></h1>
    <table class="table">
      <thead>
        <tr class="table-dark">
           <th scope="col">Requester</th>
           <th scope="col">Summary</th>
           <th scope="col">Date Received</th>
           <th scope="col">Date Approved</th>
           <th scope="col">Outcome</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="approvedRequest in store.approvedRequests" @click="selectApprovedRequest(approvedRequest)" :key="approvedRequest.id" :class="{ 'table-primary': (store.selectedApprovedRequest !== null) && (store.selectedApprovedRequest.id === approvedRequest.id) }">
          <td>{{ approvedRequest.requester }}</td>
          <td>{{ approvedRequest.summary }}</td>
          <td>{{ approvedRequest.dateReceived }}</td>
          <td>{{ approvedRequest.dateApproved }}</td>
          <td>{{ approvedRequest.outcome }}</td>
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
    selectApprovedRequest(approvedRequest) {
      store.selectedRequestedUpdate = null;
      store.selectedApprovedRequest = approvedRequest;
    }
  }
})
</script>

<style>
@media (min-width: 1024px) {
  div .approved {
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
