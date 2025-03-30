<template>
  <input
    :type="type"
    :placeholder="placeholder"
    v-model="inputValue"
    class="form-control"
    @input="$emit('update:modelValue', inputValue)"
  />
</template>

<script>
export default {
  props: {
    modelValue: String,
    type: String,
    placeholder: String
  },
  data() {
    return {
      inputValue: this.modelValue
    };
  },
  watch: {
    modelValue(newValue) {
      this.inputValue = newValue;
    }
  }
};
</script>