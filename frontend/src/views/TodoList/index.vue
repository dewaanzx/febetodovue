<script setup>
import { useTodoStore } from '@/stores/todostore.js'
import { onMounted, computed, ref } from 'vue'

const todoStore = useTodoStore();
const title = ref(''); 

const todos = computed(() => {
  return todoStore.todos;
})

onMounted(() => {
  todoStore.fetchTodos();
});

const addTodo = () => {
  todoStore.addTodo(title.value);
  title.value = ''; 
};

const deleteTodo = (todoId) => {
  todoStore.deleteTodo(todoId);
};

const checkTodo = (todoId) => {
  todoStore.checkTodo(todoId);
};
</script>

<template>
	<div class="flex justify-center items-center h-screen">
	  <div class="text-center">
		<div class="mb-4">
		  <input
			type="text"
			v-model="title"
			placeholder="New Task"
			class="w-64 p-2 border rounded-lg"
		  />
		  <button
			@click="addTodo"
			class="hover:bg-purple-700 text-white font-semibold py-2 px-4 rounded-lg ml-2 " style="background-color: #0E21A0;"
		  >
			Add Todo
		  </button>
		</div>
		<div class="text-center">
		  <table class="table-auto">
			<thead>
			  <tr class="bg-purple-500 text-white">
				<th class="px-4 py-2">Title</th>
				<th class="px-4 py-2">Check</th>
				<th class="px-4 py-2">Action</th>
			  </tr>
			</thead>
			<tbody>
			  <tr v-for="todo in todos.data" :key="todo.id" class="bg-purple-100">
				<td class="border px-4 py-2">{{ todo.title }}</td>
				<td class="border px-4 py-2">{{ todo.checked }}</td>
				<td class="border px-4 py-2">
				  <button
					@click="checkTodo(todo.id)"
					class="bg-green-500 hover:bg-blue-400 text-white font-semibold py-1 px-2 rounded-lg ml-2"
				  >
					Check
				  </button>
				  <button
					@click="deleteTodo(todo.id)"
					class="bg-red-500 hover:bg-orange-400 text-white font-semibold py-1 px-2 rounded-lg ml-2"
				  >
					Delete
				  </button>
				</td>
			  </tr>
			</tbody>
		  </table>
		</div>
	  </div>
	</div>
  </template>
  