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
		max-width: 1200px;
		margin: 0 auto;
	}

	a {
		text-decoration: none;
		color: inherit;
	}

	a:hover {
		transform: scale(1.05) rotate(-0.5deg);
		transition: transform 0.05s ease-in-out;
	}
</style>
