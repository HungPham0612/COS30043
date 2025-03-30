<template>
    <div class="mb-3">
      <label><strong>{{ label }}</strong></label>
      <select
        :value="modelValue"
        @change="$emit('update:modelValue', $event.target.value)"
        class="form-select"
        :disabled="disabled"
        :required="required"
      >
        <option disabled value="">{{ placeholder }}</option>
        <option v-for="event in filteredEvents" :key="event.eventid" :value="event.eventname">
          {{ event.eventname }}
        </option>
      </select>
    </div>
  </template>
  
  <script setup>
  import { defineProps, defineEmits, computed } from 'vue';
  
  const props = defineProps({
    label: String,
    selectedCategory: String,
    events: Array,
    modelValue: String,
    placeholder: { type: String, default: '-- Select an event --' },
    disabled: { type: Boolean, default: false },
    required: { type: Boolean, default: true },
  });
  
  const filteredEvents = computed(() => {
    return props.events.filter(e => e.category === props.selectedCategory);
  });
  
  defineEmits(['update:modelValue']);
  </script>