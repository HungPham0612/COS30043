<template>
    <section class="container mt-4">
      <h2>Why Choose Us?</h2>
      <div class="row">
        <BenefitItem v-for="(item, index) in benefits" :key="index" :title="item.title" :description="item.description" />
      </div>
    </section>
  </template>
  
  <script setup>
  import { defineProps } from "vue";
  import BenefitItem from "@/components/BenefitItem.vue";
  
  defineProps({
    benefits: Array
  });
  </script>