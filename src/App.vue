<script setup>
import { ref, onMounted, watch } from 'vue'
import { useTodoListStore } from './stores/todoListStore'
import Header from './components/Header.vue'

const input_content = ref('')
const input_category = ref(null)
const todoStore = useTodoListStore()

const addTodo = () => {
  if (input_content.value.trim() === '' || input_category.value === null) return

  const newTodo = {
    content: input_content.value,
    category: input_category.value,
    done: false,
    createdAt: Date.now()
  }

  todoStore.addTodo(newTodo)
  input_content.value = ''
  input_category.value = null
}
</script>

<template>
  <div class="app">
    <Header />
    <section class="create-todo">
      <h3>CREATE A TODO</h3>
      <form @submit.prevent="addTodo">
        <h4>What's on your todo list?</h4>
        <input type="text" placeholder="e.g. make a sandwich" v-model="input_content" />

        <h4>Category</h4>
        <div class="options">
          <label>
            <input type="radio" name="category" value="work" v-model="input_category" />
            <span class="bubble work"></span>
            <div>Work</div>
          </label>
          <label>
            <input type="radio" name="category" value="academic" v-model="input_category" />
            <span class="bubble academic"></span>
            <div>Academic</div>
          </label>
          <label>
            <input type="radio" name="category" value="personal" v-model="input_category" />
            <span class="bubble personal"></span>
            <div>Personal</div>
          </label>
        </div>

        <input type="submit" value="Add Todo" />
      </form>
    </section>
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