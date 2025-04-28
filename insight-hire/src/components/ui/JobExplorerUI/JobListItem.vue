<template>
    <router-link
      :to="`/explorer/job/${jobId}`"
      class="list-group-item list-group-item-action"
    >
      {{ jobId }}
    </router-link>
  </template>
  
  <script>
  export default {
    name: 'JobListItem',
    props: {
      jobId: {
        type: String,
        required: true
      }
    }
  }
  </script>