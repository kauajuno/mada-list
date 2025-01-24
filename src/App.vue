<script setup>
import { ref, onMounted, computed, watch } from 'vue'

const todos = ref([])
const name = ref('')

const input_content = ref('')
const input_category = ref(null)

const addTodo = () => {

}

watch(name, (newName) => {
  localStorage.setItem('name', newName)
})

onMounted(() => {
  name.value = localStorage.getItem('name') || ''
})

const todos_asc = computed(() => todos.value.sort((a, b) => a.createdAt - b.createdAt))
</script>

<template>
  <div class="app">
    <section class="greeting">
      <h2 class="title">How you doing, <input type="text" placeholder="Name here" v-model="name" /></h2>
    </section>
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
      </form>
    </section>
  </div>
</template>
