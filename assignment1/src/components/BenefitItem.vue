<template>
  <div class="col-lg-4 col-md-6 col-sm-12">
    <div class="card p-3">
      <h4>{{ title }}</h4>
      <p>{{ description }}</p>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from "vue";

defineProps({
  title: String,
  description: String
});
</script>