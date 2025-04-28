<template>
    <div class="mb-3">
      <label class="form-label">{{ label }}</label>
      <select
        class="form-select"
        :name="name"
        :value="modelValue" 
        @change="$emit('update:modelValue', $event.target.value)"
      >
        <option disabled value="">Select...</option>
        <option v-for="option in options" :key="option" :value="option">
          {{ option }}
        </option>
      </select>
    </div>
  </template>
  
  <script>
  export default {
    props: ['label', 'options', 'modelValue', 'name']
  }
  </script>