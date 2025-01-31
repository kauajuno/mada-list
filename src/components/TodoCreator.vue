<script setup>
import { ref } from 'vue'
import { useTodoListStore } from '../stores/todoListStore'

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
</template>

<style scoped>
.create-todo input[type="text"] {
	display: block;
	width: 100%;
	font-size: 1.125rem;
	padding: 1rem 1.5rem;
	color: var(--dark);
	background-color: #FFF;
	border-radius: 0.5rem;
	box-shadow: var(--shadow);
	margin-bottom: 1.5rem;
}

.create-todo .options {
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	grid-gap: 1rem;
	margin-bottom: 1.5rem;
}

.create-todo .options label {
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	padding: 1.5rem;
	background-color: #FFF;
	border-radius: 0.5rem;
	box-shadow: var(--shadow);
	cursor: pointer;
}

input[type="radio"],
input[type="checkbox"] {
	display: none;
}

.bubble {
	display: flex;
	align-items: center;
	justify-content: center;
	width: 20px;
	height: 20px;
	border-radius: 50%;
	border: 2px solid var(--primary);
	box-shadow: var(--primary-glow);
}

.bubble::after {
	content: "";
	display: block;
	opacity: 0;
	width: 0px;
	height: 0px;
	background-color: var(--primary);
	box-shadow: var(--primary-glow);
	border-radius: 50%;
	transition: 0.2s ease-in-out;
}



input:checked ~ .bubble::after {
	width: 10px;
	height: 10px;
	opacity: 1;
}

.create-todo .options label div {
	color: var(--dark);
	font-size: 1.125rem;
	margin-top: 1rem;
}

.create-todo input[type="submit"] {
	display: block;
	width: 100%;
	font-size: 1.125rem;
	padding: 1rem 1.5rem;
	color: #FFF;
	background-color: var(--primary);
	border-radius: 0.5rem;
	box-shadow: var(--personal-glow);
	cursor: pointer;
	transition: 0.2s ease-in-out;
}

.create-todo input[type="submit"]:hover {
	opacity: 0.75;
}
</style>