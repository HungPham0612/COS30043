<template>
  <div class="mb-3">
    <label class="form-label">{{ label }}</label>
    <Datepicker
      :modelValue="modelValue"
      @update:modelValue="$emit('update:modelValue', $event)"
      :inputFormat="'yyyy-MM-dd'"
      :enableTimePicker="false"
      :maxDate="maxDate"
      :minDate="minDate"
      :placeholder="placeholder"
      :name="name"
    />
  </div>
</template>

<script>
import Datepicker from 'vue3-datepicker'

export default {
  name: 'DatePickerField',
  components: { Datepicker },
  props: {
    modelValue: String,
    label: { type: String, default: 'Select Date' },
    name: { type: String, default: '' },
    minDate: { type: Date, default: () => new Date(1950, 0, 1) },
    maxDate: { type: Date, default: () => new Date(2008, 11, 31) },
    placeholder: { type: String, default: 'Select a date...' }
  }
}
</script>