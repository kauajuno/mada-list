import { defineStore } from 'pinia'
import { computed } from 'vue';

export const useTodoListStore = defineStore('todoList', {
    state: () => ({
        todos: JSON.parse(localStorage.getItem('todos')) || []
    }),
    actions: {
        addTodo(todo){
            this.todos.push(todo);
            localStorage.setItem('todos', JSON.stringify(this.todos));
        },
        removeTodo(todo){
            this.todos = this.todos.filter(t => t !== todo);
        },
        getTodos(){
            return computed(() => this.todos.sort((a, b) => a.createdAt - b.createdAt));
        }
    }
})