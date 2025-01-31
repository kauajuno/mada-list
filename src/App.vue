<script setup>
import { useTodoListStore } from './stores/todoListStore'
import Header from './components/Header.vue'
import TodoCreator from './components/TodoCreator.vue';

const todoStore = useTodoListStore();
</script>

<template>
  <div class="app">
    <Header />
    <TodoCreator />
    <section class="todo-list">
      <h3>TODO LIST</h3>
      <div v-for="todo in todoStore.todos" :key="todo.createdAt" :class="`todo-item ${todo.done ? 'done' : ''}`">
        <label>
          <input type="checkbox" v-model="todo.done" />
          <span :class="`bubble ${todo.category}`"></span>
        </label>
        <div class="todo-content">
          [[ {{ todo.category.toUpperCase() }} ]]
          <input type="text" v-model="todo.content" />
        </div>
        <div class="actions">
          <button class="delete" @click="todoStore.removeTodo(todo)">Delete</button>
        </div>
      </div>
    </section>
  </div>
</template>