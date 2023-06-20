<script setup lang="ts"></script>

<template>
  <tbody>
    <tr
      v-for="i in 8"
      :key="i"
    >
      <td
        v-for="z in 3"
        :key="z"
      >
        {{ i * z }}
      </td>
    </tr>
  </tbody>
</template>
