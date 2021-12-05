<script context="module">
	/** @type {import('@sveltejs/kit').Load} */
	export async function load({ page, fetch, session, stuff }) {
		const res = await fetch('/api/game/' + encodeURIComponent(page.params.game));

		if (res.ok) {
			return {
				props: {
					game: await res.json()
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
    export let game = {};
</script>

<iframe src={game.url} frameborder="0" title="Game" class="w-screen h-screen"></iframe>