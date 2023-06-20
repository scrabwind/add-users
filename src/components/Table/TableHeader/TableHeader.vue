<script setup lang="ts">
  const tableHeaders = ['', 'Full Name', 'Action']
</script>

<template>
  <thead>
    <tr class="header-row">
      <th
        v-for="header in tableHeaders"
        :key="header"
      >
        {{ header }}
      </th>
    </tr>
  </thead>
</template>
