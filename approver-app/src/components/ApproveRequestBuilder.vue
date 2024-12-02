<script setup lang="ts">
import { store } from '../services/store.ts'
</script>

<template>
  <div class="greetings">
    <h1 class="green">Requested/Approved Updates Builder</h1>
    <div v-if="store.selectedRequestedUpdate !== null">
      <h3>Requested Update</h3>
      <table class="table">
        <tbody>
          <tr>
            <th>Requester</th>
            <td>{{ store.selectedRequestedUpdate.requester }}</td>
          </tr>
          <tr>
            <th>Summary</th>
            <td>{{ store.selectedRequestedUpdate.summary }}</td>
          </tr>
          <tr>
            <th>Date Received</th>
            <td>{{ store.selectedRequestedUpdate.dateReceived }}</td>
          </tr>
        </tbody>
      </table>
      <h4>Update details</h4>
      <p class="text-center">
        <button type="button" class="btn btn-primary text-center" @click="store.submitApproveRequest()">Submit Request Approval</button>
      </p>
    </div>
    <div v-if="store.selectedApprovedRequest !== null">
      <h3>Approved Update</h3>
      <table class="table">
        <tbody>
          <tr>
            <th>Requester</th>
            <td>{{ store.selectedApprovedRequest.requester }}</td>
          </tr>
          <tr>
            <th>Summary</th>
            <td>{{ store.selectedApprovedRequest.summary }}</td>
          </tr>
          <tr>
            <th>Date Received</th>
            <td>{{ store.selectedApprovedRequest.dateReceived }}</td>
          </tr>
          <tr>
            <th>Date Approved</th>
            <td>{{ store.selectedApprovedRequest.dateApproved }}</td>
          </tr>
          <tr>
            <th>Outcome</th>
            <td>{{ store.selectedApprovedRequest.outcome }}</td>
          </tr>
        </tbody>
      </table>
      <h4>Update details</h4>
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
