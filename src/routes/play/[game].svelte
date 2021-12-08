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
			error: new Error('Failed to load game'),
            props: {}
		};
	}
</script>

<script>
    export let game = {};
    let started = false;

    function openFullscreen() {
        started = true;
        let elem = document.querySelector('iframe');
        if (elem.requestFullscreen) {
            elem.requestFullscreen();
        } else if (elem.webkitRequestFullscreen) { /* Safari */
            elem.webkitRequestFullscreen();
        } else if (elem.msRequestFullscreen) { /* IE11 */
            elem.msRequestFullscreen();
        }
        navigator.keyboard.lock(["Escape"]);
    }

    let timer = 0;
    setInterval(() => {
        if (started) {
            timer++;
        }
    }, 1000);
</script>

<div class="fixed top-0 left-0 right-0 bottom-0 backdrop-blur-lg grid grid-cols-2 md:grid-cols-4 grid-rows-3 text-white">
    <button on:click={openFullscreen} class="bg-opacity-50 bg-green-300">
        {started ? 'Resume' : 'Start Game'}
    </button>
    <div class="m-auto bg-opacity-50 bg-yellow-500 w-full h-full flex justify-center items-center">
        {new Date(timer * 1000).toISOString().substr(11, 8)}
    </div>
</div>
<iframe src={game.url} frameborder="0" title="Game" class="w-screen h-screen"></iframe>