<template>
    <div class="container mt-5">
      <h2>Event Registration</h2>
  
      <form @submit.prevent="submitForm">
        <InputField
          label="Username"
          id="username"
          v-model="username"
          required
        />
        <InputField
          label="Password"
          id="password"
          type="password"
          v-model="password"
          required
        />
        <InputField
          label="Confirm Password"
          id="confirmPassword"
          type="password"
          v-model="confirmPassword"
          :errorMessage="passwordMismatch ? 'Passwords do not match' : ''"
          required
        />
        <RadioGroup
          label="Select Category:"
          :categories="categories"
          v-model="selectedCategory"
        />
        <EventSeclect
          label="Select Event:"
          :selectedCategory="selectedCategory"
          :events="events"
          v-model="selectedEvent"
        />
        <SubmitButton
          label="Register"
          :disabled="passwordMismatch || !username || !selectedEvent"
        />
      </form>
  
      <div v-if="submitted" class="mt-4 alert alert-success">
        <h5>Registration Summary</h5>
        <p><strong>Username:</strong> {{ username }}</p>
        <p><strong>Category:</strong> {{ selectedCategory }}</p>
        <p><strong>Event:</strong> {{ selectedEvent }}</p>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, computed } from 'vue';
  import InputField from '@/components/InputField.vue';
  import RadioGroup from '@/components/RadioGroup.vue';
  import SubmitButton from '@/components/SubmitButton.vue';
  import EventSeclect from '@/components/EventSeclect.vue';
  
  const username = ref('');
  const password = ref('');
  const confirmPassword = ref('');
  const selectedCategory = ref('Business');
  const selectedEvent = ref('');
  const submitted = ref(false);
  const events = ref([]);
  const categories = ['Technology', 'Business', 'Marketing', 'Finance'];
  
  const passwordMismatch = computed(() => password.value !== confirmPassword.value && confirmPassword.value.length > 0);
  
  const submitForm = () => {
    if (!passwordMismatch.value && username.value && selectedEvent.value) {
      submitted.value = true;
    }
  };
  
  fetch('events.txt')
    .then(res => res.text())
    .then(text => {
      const parsed = eval(text); 
      events.value = parsed;
    });
  </script>