<template>
  <div>
    <!-- Navbar -->
    <nav class="navbar navbar-expand-lg navbar-light bg-light px-3">
      <div class="container-fluid">
        <span class="navbar-brand fw-bold">Insight Hire</span>
        <div class="d-flex gap-3 ms-auto">
          <router-link to="/explorer/overview" class="nav-link">Job Explorer</router-link>
          <router-link to="/form" class="nav-link">Job Application</router-link>
          <router-link to="/todo" class="nav-link">To-Do List</router-link>
        </div>
      </div>
    </nav>

    <!-- Content -->
    <div class="container mt-4">
      <router-view />
    </div>
  </div>
</template>