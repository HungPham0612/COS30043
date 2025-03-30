<template>
    <div class="mb-3">
      <label :for="id">{{ label }}</label>
      <input
        :id="id"
        :value="modelValue"
        @input="$emit('update:modelValue', $event.target.value)"
        :type="type"
        :placeholder="placeholder"
        :disabled="disabled"
        :required="required"
        :maxlength="maxlength"
        :minlength="minlength"
        :autocomplete="autocomplete"
        class="form-control"
      />
      <small v-if="errorMessage" class="text-danger">{{ errorMessage }}</small>
    </div>
  </template>
  
  <script setup>
  import { defineProps, defineEmits } from 'vue';
  
  defineProps({
    label: String,
    id: String,
    modelValue: String,
    type: { type: String, default: 'text' },
    placeholder: { type: String, default: '' },
    disabled: { type: Boolean, default: false },
    required: { type: Boolean, default: true },
    maxlength: Number,
    minlength: Number,
    autocomplete: { type: String, default: 'off' },
    errorMessage: String,
  });
  
  defineEmits(['update:modelValue']);
  </script>