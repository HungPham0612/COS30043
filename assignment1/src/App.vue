<template>
  <div>
    <AppHeader />
    <WhyChooseUsPage />
    <EventTablePage />
    <RegistrationPage />
  </div>
</template>

<script setup>
import AppHeader from './Pages/AppHeader.vue';
import EventTablePage from './Pages/EventTablePage.vue';
import RegistrationPage from './Pages/RegistrationPage.vue';
import WhyChooseUsPage from './Pages/WhyChooseUsPage.vue';
</script>

<style>
body {
  font-family: Arial, sans-serif;
  background-color: #f8f9fa;
}
</style>