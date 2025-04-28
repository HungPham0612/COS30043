<template>
    <div v-if="message" class="text-danger small mt-1">{{ message }}</div>
  </template>
  
  <script>
  export default {
    props: ['message']
  }
  </script>