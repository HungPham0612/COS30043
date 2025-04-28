<template>
    <div class="row">
      <!-- Left column: job IDs -->
      <div class="col-4 border-end pe-3">
        <JobList />
      </div>
  
      <!-- Right column: detail or overview -->
      <div class="col-8 ps-3">
        <router-view />
      </div>
    </div>
  </template>
  
  <script>
import JobList from '../pages/JobExplorer/JobList.vue';
  
  export default {
    name: 'JobExplorer',
    components: { JobList }
  }
  </script>