<template>
	<div class="overflow-x-auto">
	  <table class="min-w-full border-collapse border border-purple-400">
		<thead>
		  <tr class="bg-purple-300">
			<th class="border border-purple-400 text-center">Jumlah</th>
			<th class="border border-purple-400 text-center">Title</th>
			<th class="border border-purple-400 text-center">Checked</th>
			<th class="border border-purple-400 text-center">Actions</th>
		  </tr>
		</thead>
		<tbody>
		  <tr v-for="todo in todos" :key="todo.id" class="bg-purple-100">
			<td class="border border-purple-400 text-center">{{ todo.id }}</td>
			<td class="border border-purple-400 text-center">{{ todo.title }}</td>
			<td class="border border-purple-400 text-center">{{ todo.checked }}</td>
			<td class="border border-purple-400 text-center">
			  <button @click="deleteTodo(todo.id)" class="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-full mx-auto mt-2">
				Delete
			  </button>
			</td>
		  </tr>
		</tbody>
	  </table>
	</div>
  </template>
  
  
  <script setup>
  import { ref, onMounted } from "vue";
  import axios from 'axios';
  
  const todos = ref([]);
  
  const getTodos = () => {
	return axios
	  .get("http://localhost:8080/todo")
	  .then((res) => {
		todos.value = res.data.data;
	  })
	  .catch((error) => console.log(error));
  };
  
  const editTodo = (todo) => {
	// Handle the edit action here, e.g., show a modal or navigate to an edit page
	console.log("Edit:", todo);
  };
  
  const deleteTodo = (todoId) => {
	// Handle the delete action here, e.g., send a DELETE request to your API
	console.log("Delete:", todoId);
  };
  
  onMounted(() => {
	getTodos();
  });
  </script>
  