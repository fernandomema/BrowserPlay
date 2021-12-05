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