<script>
	import Footer from '../components/UI/Footer.svelte';
	import Nav from '../components/UI/Nav.svelte';
</script>

<svelte:head>
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
	<link
		href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;500;600;700;800;900&display=swap"
		rel="stylesheet"
	/>
	<link rel="stylesheet" href="/global.css" />
</svelte:head>

<body>
	<Nav />
	<main class="main-container">
		<slot />
	</main>
	<Footer />
</body>

<style>
	* {
		box-sizing: border-box;
		margin: 0;
		padding: 0;
	}

	body {
		font-family: 'Nunito', sans-serif;
		background-color: var(--background-color);
	}

	.main-container {
		width: 100%;
		max-width: var(--max-width);
		margin: 0 auto;
	}
</style>
