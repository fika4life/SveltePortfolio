<script>
	import Nav from '../components/UI/Nav.svelte';
	import { supabase } from '../supabase/init';
	import { session } from '$app/stores';
	import { onMount } from 'svelte';
	import { goto } from '$app/navigation';

	onMount(async () => {
		$session = supabase.auth.session();
		$session ? goto('/') : goto('/sign-in');
		supabase.auth.onAuthStateChange((event, sesh) => {
			$session = sesh;
		});
		console.log('onmount ran');
	});
</script>

<svelte:head>
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
	<link
		href="https://fonts.googleapis.com/css2?family=Zen+Kurenaido&display=swap"
		rel="stylesheet"
	/>
</svelte:head>

<Nav />
<div class="container mx-auto my-8">
	<main>
		<slot />
		<pre>
			{JSON.stringify($session, null, 2)}
		</pre>
	</main>
</div>

<style>
	@tailwind base;
	@tailwind components;
	@tailwind utilities;
</style>
