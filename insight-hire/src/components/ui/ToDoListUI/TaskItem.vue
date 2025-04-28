<template>
    <li
      class="list-group-item d-flex justify-content-between align-items-start"
      :class="{ 'bg-warning': task.priority === 'High Priority' }"
    >
      <div>
        {{ task.name }} <span class="text-muted">({{ task.priority }})</span>
      </div>
      <div class="btn-group btn-group-sm">
        <button class="btn btn-outline-secondary" @click="$emit('toggle')">
          {{ task.priority === 'High Priority' ? 'Mark as Low Priority' : 'Mark as High Priority' }}
        </button>
        <button class="btn btn-outline-danger" @click="$emit('remove')">Delete</button>
      </div>
    </li>
  </template>
  
  <script>
  export default {
    name: 'TaskItem',
    props: {
      task: {
        type: Object,
        required: true
      }
    }
  }
  </script>