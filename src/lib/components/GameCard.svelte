<script>
	export let name;
	export let thumbnail;
</script>

<a href="/game/{name}" class="relative max-w-sm min-w-[340px] bg-white shadow-md rounded-3xl p-2 mx-1 my-3 cursor-pointer" style="height: fit-content;">
	<div class="overflow-x-hidden rounded-2xl relative">
		<img class="h-40 rounded-2xl w-full object-cover" src={thumbnail} alt="{name} thumbnail">
		<p class="absolute right-2 top-2 bg-white rounded-full p-2 cursor-pointer group">
			<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 group-hover:opacity-70" fill="none" viewBox="0 0 24 24" stroke="gray">
				<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
			</svg>
		</p>
	</div>
	<div class="mt-4 pl-2 mb-2 flex justify-between ">
		<div>
			<p class="text-lg font-semibold text-gray-900 mb-0">{name}</p>
			<p class="text-md text-gray-800 mt-0"></p>
		</div>
		<div class="flex flex-col-reverse mb-1 mr-4 group cursor-pointer">
			<a href="/game/{name}">
				<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 group-hover:opacity-70" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
					<path stroke="none" d="M0 0h24v24H0z" fill="none"/>
					<rect x="2" y="6" width="20" height="12" rx="2" />
					<path d="M6 12h4m-2 -2v4" />
					<line x1="15" y1="11" x2="15" y2="11.01" />
					<line x1="18" y1="13" x2="18" y2="13.01" />
				</svg>
			</a>
		</div>
	</div>
</a>