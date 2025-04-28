<template>
  <div v-if="job">
    <JobInfoCard :job="job" />
  </div>
  <div v-else>
    <p>Job not found.</p>
  </div>
</template>

<script>
import { jobs } from '@/data/job.js'
import JobInfoCard from '@/components/ui/JobExplorerUI/JobInfoCard.vue'

export default {
  name: 'JobDetail',
  components: { JobInfoCard },
  data() {
    return { job: null }
  },
  mounted() {
    this.loadJob()
  },
  watch: {
    '$route.params.id': {
      immediate: true,
      handler() {
        this.loadJob()
      }
    }
  },
  methods: {
    loadJob() {
      const id = this.$route.params.id
      this.job = jobs.find(j => j.job_id === id)
    }
  }
}
</script>