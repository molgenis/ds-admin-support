<template>
  <div class="listcontainer">
    <ul class="list">
      <li v-for="recipient in recipients" class="listitem">
        {{ recipient.name }}
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { defineComponent, defineModel, ref } from 'vue'

const model = defineModel('recipients');

const rec = ref<Recipient>({name: "BiB", location: "https://bib.nhs.gov.uk/aps"});
model.recipients = ref([]);

interface Recipient {
  name:     string;
  location: string;
}
</script>

<script lang="ts">
export default defineComponent({
  name: 'RecipientsList'
})
</script>

<style scoped>
.listcontainer {
}

.list {
}

.listitem {
}
</style>
