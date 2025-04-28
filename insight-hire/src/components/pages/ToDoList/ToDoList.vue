<template>
  <div>
    <PageTitle title="To-Do List" />

    <div class="input-group mb-3">
      <input
        v-model="newTask"
        @keyup.enter="addTask"
        type="text"
        class="form-control"
        placeholder="Enter a task"
      />
      <button class="btn btn-outline-success" @click="addTask">Add</button>
    </div>

    <ul class="list-group">
      <TaskItem
        v-for="(task, index) in tasks"
        :key="index"
        :task="task"
        @remove="removeTask(index)"
        @toggle="togglePriority(index)"
      />
    </ul>
  </div>
</template>

<script>
import PageTitle from '@/components/reusable/PageTitle.vue'
import TaskItem from '@/components/ui/ToDoListUI/TaskItem.vue'

export default {
  name: 'ToDoList',
  components: { PageTitle, TaskItem },
  data() {
    return {
      newTask: '',
      tasks: []
    }
  },
  methods: {
    addTask() {
      const name = this.newTask.trim()
      if (name) {
        this.tasks.unshift({ name, priority: 'Low Priority' })
        this.newTask = ''
      }
    },
    removeTask(index) {
      this.tasks.splice(index, 1)
    },
    togglePriority(index) {
      const task = this.tasks[index]
      task.priority =
        task.priority === 'High Priority' ? 'Low Priority' : 'High Priority'
    }
  }
}
</script>