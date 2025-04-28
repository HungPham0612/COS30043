<template>
  <div>
    <h1>Job Explorer</h1>
  </div>
  <div>
    <router-link to="/explorer/overview" class="btn btn-outline-primary btn-sm mb-3 w-100">
      Overview
    </router-link>

    <div class="list-group">
      <JobListItem
        v-for="job in jobs"
        :key="job.job_id"
        :jobId="job.job_id"
      />
    </div>
  </div>
</template>

<script>
import { jobs } from '@/data/job.js'
import JobListItem from '@/components/ui/JobExplorerUI/JobListItem.vue'

export default {
  name: 'JobList',
  components: { JobListItem },
  data() {
    return { jobs }
  }
}
</script>