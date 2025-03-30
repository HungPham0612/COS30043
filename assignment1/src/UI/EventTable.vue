<template>
  <div class="container mt-4">
    <h2>Event List</h2>

    <div class="row mb-3">
      <div class="col-md-4 mb-2">
        <BaseInput v-model="localFilters.id" placeholder="Search Event ID" />
      </div>
      <div class="col-md-4 mb-2">
        <BaseInput v-model="localFilters.name" placeholder="Search Event Name" />
      </div>
      <div class="col-md-4 mb-2">
        <BaseInput v-model="localFilters.duration" placeholder="Search Duration" type="number" />
      </div>
    </div>

    <div class="mb-3">
      <label class="me-3"><strong>Category:</strong></label>
      <div class="form-check form-check-inline" v-for="cat in categories" :key="cat">
        <input class="form-check-input" type="radio" v-model="localFilters.category" :value="cat">
        <label class="form-check-label">{{ cat }}</label>
      </div>
    </div>

    <table class="table table-bordered">
      <thead class="table-light">
        <tr>
          <th>Event ID</th>
          <th>Event Name</th>
          <th>Category</th>
          <th>Duration (Hours)</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="event in filteredEvents" :key="event.eventid">
          <td>{{ event.eventid }}</td>
          <td>{{ event.eventname }}</td>
          <td>{{ event.category }}</td>
          <td>{{ event.durationhour }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import BaseInput from "@/components/BaseInput.vue";

export default {
  props: {
    filters: Object
  },
  data() {
    return {
      localFilters: { ...this.filters },
      categories: ['All', 'Technology', 'Business', 'Marketing', 'Finance'],
      events: []
    };
  },
  computed: {
    filteredEvents() {
      return this.events.filter(event => {
        const matchID = event.eventid.toLowerCase().includes(this.localFilters.id.toLowerCase());
        const matchName = event.eventname.toLowerCase().includes(this.localFilters.name.toLowerCase());
        const matchDuration = this.localFilters.duration === '' || event.durationhour === Number(this.localFilters.duration);
        const matchCategory = this.localFilters.category === 'All' || event.category === this.localFilters.category;
        return matchID && matchName && matchDuration && matchCategory;
      });
    }
  },
  watch: {
    localFilters: {
      handler(newFilters) {
        this.$emit('update:filters', newFilters);
      },
      deep: true
    }
  },
  mounted() {
    fetch('events.txt')
      .then(res => res.text())
      .then(text => {
        const parsed = eval(text);
        this.events = parsed;
      });
  },
  components: {
    BaseInput
  }
};
</script>