<template>
	<div v-for="todo in todos.data" :key="todo.id">
		<p>{{ todo.title }}</p>
		<p>{{ todo.checked }}</p>
	</div>
</template>

<script setup>
  import { ref, onMounted } from "vue";
  import axios from 'axios'

  const todos = ref([]);

  const getTodos = () => {
  	return axios
  	.get("http://localhost:8080/todo")
  	.then((res) => todos.value=res.data)
  	.catch((error) => console.log(error));
  };
  onMounted(() => {
  	getTodos();
  });
</script>