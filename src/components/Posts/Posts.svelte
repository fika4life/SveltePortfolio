<script>
	import PostCard from './PostCard.svelte';

	export let posts;
</script>

<div class="posts-container">
	{#each posts.data as post}
		<PostCard {post} />
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
</style>
