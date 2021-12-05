<script context="module">
	/** @type {import('@sveltejs/kit').Load} */
	export async function load({ page, fetch, session, stuff }) {
		const res = await fetch('/api/games');

		if (res.ok) {
			return {
				props: {
					games: await res.json()
				}
			};
		}

		return {
			status: res.status,
			error: new Error(`Could not load ${url}`)
		};
	}
</script>

<script>
  import GameCard from "$lib/components/GameCard.svelte";
import Navbar from "$lib/components/Navbar.svelte";
  export let games = [];
</script>

<Navbar/>

<main>
	<section id="banner" class="mx-5">
		<div class="rounded-lg bg-red-300 text-white p-8 my-12 flex flex-col md:flex-row space-between items-center justify-between relative overflow-hidden">
			<!-- LEFT PART -->
			<div class="flex flex-col lg:ml-14 xl:ml-28 max-w-sm lg:max-w-xl z-10">
			   <h4 class="text-4xl text-center md:text-left font-bold text-white md:pb-2">
				  Do you want more features?
			   </h4>
			   <p class="text-center md:text-left text-white opacity-70 md:pb-6">
				   Create an account and get access to all the features.
			   </p>
			   <p class="text-xs text-red-200 hidden md:block">
				  What are you waiting for?
			   </p>
			</div>
			<!-- RIGHT PART -->
			<div class="pt-8 md:pt-0 justify-center lg:ml-auto z-10">
			   <!-- Contribuer -->
			   <a href="#" class="flex items-center px-8 py-4 text-center text-sm text-red-300 uppercase bg-white font-display rounded-full transition duration-200 hover:bg-red-600 hover:text-white">
				  <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 mr-3 fill-current" width="20" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="#111111" fill="none" stroke-linecap="round" stroke-linejoin="round">
					<path stroke="none" d="M0 0h24v24H0z" fill="none"/>
					<path d="M9 5h-2a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-12a2 2 0 0 0 -2 -2h-2" />
					<rect x="9" y="3" width="6" height="4" rx="2" />
					<line x1="9" y1="12" x2="9.01" y2="12" />
					<line x1="13" y1="12" x2="15" y2="12" />
					<line x1="9" y1="16" x2="9.01" y2="16" />
					<line x1="13" y1="16" x2="15" y2="16" />
				  </svg>
				  <span>
				  Create account
				  </span>
			   </a>
			</div>
			<!-- ATTENTION -->
			<p class="pt-8 text-xs block md:hidden z-10 text-white">
			   consectetur adipiscing elit
			</p>
			<!-- Decoration -->
			<div class="absolute bg-red-400 opacity-60 w-96 h-96 -top-10 -right-16 md:w-[800px] md:h-[800px] md:left-[45%] md:top-[-150%] rounded-full shadow-2xl z-0"></div>
		</div>
	</section>

	<section id="games-latests" class="mx-5">
		<h1 class="mt-5 text-4xl">
			Latest Games
		</h1>
		
		<div class="flex flex-wrap justify-evenly" style="justify-content: space-evenly;">
			
			{#each games as game}
			<GameCard name={game.name} thumbnail={game.thumbnail} />
			{/each}
			
		</div>
	</section>

	<section id="games-handpicked" class="mx-5">
		<h1 class="mt-5 text-4xl">
			Editors' Choice
		</h1>
		
		<div class="flex flex-wrap justify-evenly" style="justify-content: space-evenly;">
			
			{#each games as game}
				<GameCard name={game.name} thumbnail={game.thumbnail} />
			{/each}
			
		</div>
	</section>
  
</main>