<script>
	import PostCard from './PostCard.svelte';
</script>

<div class="posts-container">
	<PostCard />
	<PostCard />
	<PostCard />
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
