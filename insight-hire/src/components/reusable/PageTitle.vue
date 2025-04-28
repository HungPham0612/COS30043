<template>
    <h3 class="mb-4 fw-bold">{{ title }}</h3>
  </template>
  
  <script>
  export default {
    name: 'PageTitle',
    props: {
      title: {
        type: String,
        required: true
      }
    }
  }
  </script>