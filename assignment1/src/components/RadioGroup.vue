<template>
  <fieldset class="mb-3">
    <legend>{{ label }}</legend>
    <div class="form-check form-check-inline" v-for="(cat, index) in categories" :key="index">
      <input
        type="radio"
        :id="`${name}-${index}`"
        :value="cat"
        :checked="modelValue === cat"
        :disabled="disabled"
        :name="name"
        @change="$emit('update:modelValue', cat)"
        :required="required"
      />
      <label class="form-check-label" :for="`${name}-${index}`">{{ cat }}</label>
    </div>
  </fieldset>
</template>
  
  <script setup>
  import { defineProps, defineEmits } from 'vue';
  
  defineProps({
    label: String,
    categories: Array,
    modelValue: String,
    disabled: { type: Boolean, default: false },
    required: { type: Boolean, default: false },
    name: { type: String, default: '' },
  });
  
  defineEmits(['update:modelValue']);
  </script>