<script setup lang="ts">
  const tableHeaders = ['', 'Full Name', 'Action']
</script>

<template>
  <thead class="table-head">
    <tr class="table-head__headers">
      <th
        v-for="(header, i) in tableHeaders"
        :key="header"
        :class="{ 'table-head__header--last': tableHeaders.length === i + 1 }"
      >
        {{ header }}
      </th>
    </tr>
  </thead>
</template>

<style lang="scss" scoped>
  .table-head {
    grid-row: 1 / 2;

    &__headers {
      padding: 32px 0 16px;
      border-top: 1px solid $color-grey;
      text-align: left;
      grid-column: 1 / -1;
      display: grid;
      grid-template-columns: max(80px, 10%) 1fr max(80px, 10%);
      justify-content: center;
      align-items: center;
      border-radius: 4px;
    }

    &__header {
      &--last {
        @media only screen and (width <= $breakpoint--s) {
          text-align: right;
          margin-right: 8px;
        }
      }
    }
  }
</style>
