<template>
    <button
      :type="type"
      class="btn btn-primary"
      :disabled="disabled || loading"
    >
      <span v-if="loading" class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
      {{ loading ? 'Processing...' : label }}
    </button>
  </template>
  
  <script setup>
  import { defineProps } from 'vue';
  
  defineProps({
    label: { type: String, required: true },
    disabled: { type: Boolean, default: false },
    type: { type: String, default: 'submit' },
    loading: { type: Boolean, default: false },
  });
  </script>