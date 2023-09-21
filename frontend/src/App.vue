<script setup>
import { RouterLink, RouterView } from 'vue-router';
import { ref } from 'vue'; // Import ref
const showMenu = ref(false); // Define showMenu variable

const toggleNavbar = () => {
  showMenu.value = !showMenu.value;
}
</script>

<template>
	<header>
	  <nav class="relative flex flex-wrap items-center justify-between px-2 py-3" style="background-color: #9D44C0;">
		<div class="container px-4 mx-auto flex flex-wrap items-center justify-between">
		  <div class="w-full relative flex justify-between lg:w-auto px-4 lg:static lg:block lg:justify-start">
			<RouterLink class="text-sm font-sans font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white" to="/">
			  ToDo List App
			</RouterLink>
			<button class="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none" type="button" v-on:click="toggleNavbar()">
			  <i class="fas fa-bars"></i>
			</button>
		  </div>
		  <div v-bind:class="{'hidden': !showMenu, 'flex': showMenu}" class="lg:flex lg:flex-grow items-center">
			<ul class="flex flex-col lg:flex-row list-none ml-auto">
			  <li class="nav-item">
				<RouterLink class="px-3 py-2 flex items-center text-xs uppercase font-sans font-bold leading-snug text-white hover:opacity-75" style="background-color: #EC53B0;" to="/">Home</RouterLink>
			  </li>
			  <li class="nav-item">
				<RouterLink class="px-3 py-2 flex items-center text-xs uppercase font-sans font-bold leading-snug text-white hover:opacity-75" style="background-color: #EC53B0;" to="/about">About</RouterLink>
			  </li>
			  <li class="nav-item">
				<RouterLink class="px-3 py-2 flex items-center text-xs uppercase font-sans font-bold leading-snug text-white hover:opacity-75" style="background-color: #EC53B0;" to="/todo">Todo</RouterLink>
			  </li>
			</ul>
		  </div>
		</div>
	  </nav>
	</header>
	<RouterView />
  </template>