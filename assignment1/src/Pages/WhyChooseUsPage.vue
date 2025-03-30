<template>
  <BenefitSection :benefits="benefits" />
</template>

<script setup>
import BenefitSection from "@/UI/BenefitSection.vue";
import { ref } from "vue";

const benefits = ref([
  { title: "Affordable", description: "Reasonable prices for everyone." },
  { title: "Variety", description: "A wide range of events to choose from." },
  { title: "Expert Speakers", description: "Learn from industry leaders." },
  { title: "Networking", description: "Meet professionals and make connections." },
  { title: "Flexible Schedule", description: "Choose a time that fits you." },
  { title: "Easy Registration", description: "Simple and quick process." }
]);
</script>