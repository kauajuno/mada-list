<script setup>
import {ref, watch, onMounted} from 'vue'

const name = ref(localStorage.getItem('name') || '')

watch(name, (newName) => {
  localStorage.setItem('name', newName)
})

onMounted(() => {
  name.value = localStorage.getItem('name') || ''
})
</script>

<template>
    <section class="greeting">
        <h2 class="logo">Mada List</h2>
      <h2 class="title">Nice to see you, <input type="text" placeholder="Name here" v-model="name" /></h2>
    </section>
</template>

<style scoped>
.greeting {
    display: flex;
    justify-content: left;
    gap: 2rem;
    align-items: center;
    background-color: var(--primary);

    color: white;
}

.greeting .logo{
    font-family: 'Poppins', sans-serif;
    font-size: 1.5rem;
}

.greeting .title {
	display: flex;
}

.greeting .title input {
	margin-left: 0.5rem;
	flex: 1 1 0%;
	min-width: 0;
}

.greeting .title,
.greeting .title input {
    color: white;
	font-size: 1.5rem;
	font-weight: 700;
}

</style>