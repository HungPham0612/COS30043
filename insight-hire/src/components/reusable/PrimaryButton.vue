<template>
    <button class="btn btn-primary" @click="$emit('click')">
      <slot />
    </button>
  </template>