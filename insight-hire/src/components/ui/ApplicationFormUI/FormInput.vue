<template>
  <div class="mb-3">
    <label class="form-label">{{ label }}</label>
    <input
      :type="type"
      class="form-control"
      :placeholder="placeholder"
      :name="name"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
      :min="min"
      :max="max"
    />
  </div>
</template>

<script>
export default {
  props: ['label', 'type', 'modelValue', 'placeholder', 'min', 'max', 'name']
}
</script>