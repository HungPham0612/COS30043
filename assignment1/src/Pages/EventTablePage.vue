<template>
  <div>
    <EventTable :filters="filters" @update:filters="updateFilters" />
  </div>
</template>

<script>
import EventTable from '@/UI/EventTable.vue';



export default {
  data() {
    return {
      filters: {
        id: '',
        name: '',
        duration: '',
        category: 'All'
      }
    };
  },
  methods: {
    updateFilters(newFilters) {
      this.filters = newFilters;
    }
  },
  components: {
    EventTable
  }
};
</script>
