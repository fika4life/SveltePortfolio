<script>
	import { urlRoot } from '$lib/url';
	import PostCard from './PostCard.svelte';

	export let posts;
</script>

<div class="posts-container">
	{#each posts.data as post}
		<a href={`/posts/${post.id}`}><PostCard {post} /></a>
	{/each}
</div>

<style>
	.posts-container {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		column-gap: 4rem;
		justify-content: center;
		align-items: center;
		max-width: var(--container-width);
		margin: 0 auto;
	}

	a {
		text-decoration: none;
		color: inherit;

		transition: transform 0.1s ease-in-out;
	}

	a:hover {
		transform: scale(1.04) rotate(-0.5deg);
		transition: transform 0.1s ease-in-out;
	}
</style>
