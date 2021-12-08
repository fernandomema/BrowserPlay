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

    if (res.status == 404) return {
      status: 302,
      headers: {
        'Location': '/errors/404'
      }
    };

		return {
			status: res.status,
			error: new Error('Failed to load game data')
		};
	}
</script>

<script>
import Navbar from "$lib/components/Navbar.svelte";
import Error_404 from "../errors/error-404.svelte";
export let game;
</script>


<svelte:head>
  {#if (game)}
    <meta name="description" content={game.description.en} />
    <meta property="og:title" content="{game.name} | BrowserPlay" />
    <meta property="og:image" content="{game.thumbnail}" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="{game.name} | BrowserPlay" />
    <meta name="twitter:description" content={game.description.en} />
    <meta name="twitter:image" content={game.thumbnail} />
    <title>{game.name} | BrowserPlay</title>
  {/if}
</svelte:head>

<Navbar />

{#if (game)}
<section class="bg-white">
    <div class="px-4 py-5 max-w-screen-xl sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 gap-y-8 gap-x-16">
        <div class="lg:sticky lg:top-16">
          <div class="grid grid-cols-2 gap-2 sm:grid-cols-3 sm:grid-rows-2">
            <div class="relative h-64 col-span-2 lg:h-96 row-span-2">
              <img
                class="absolute inset-0 object-cover w-full h-full rounded-lg"
                src={game.images[0]}
                alt=""
              />
            </div>
  
            <div class="relative h-32 col-span-1 sm:h-auto">
              <img
                class="absolute inset-0 object-cover w-full h-full rounded-lg"
                src={game.images[1]}
                alt=""
              />
            </div>
  
            <div class="relative h-32 col-span-1 sm:h-auto">
              <img
                class="absolute inset-0 object-cover w-full h-full rounded-lg"
                src={game.images[2]}
                alt=""
              />
            </div>
          </div>
  
          <div class="flex justify-between mt-2">
            <h1 class="text-2xl font-bold text-gray-900 sm:text-3xl flex-grow">{game.name}</h1>
            <div class="flex items-stretch md:justify-end lg:justify-end">
              <a class="inline-flex items-center justify-center w-12 rounded-lg bg-rose-50 text-rose-600" href="">
                 <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clip-rule="evenodd"></path>
                 </svg>
              </a>
              <a class="inline-block px-5 py-3 ml-3 font-medium text-white bg-blue-600 rounded-lg" href="/play/{game.name}">Play</a>
            </div>
          </div>

          <p class="mt-2 text-gray-500 text-justify">
            {game.description.en}
          </p>

        </div>
  
      </div>
    </div>
  </section>
{:else}
  <Error_404 />
{/if}
  