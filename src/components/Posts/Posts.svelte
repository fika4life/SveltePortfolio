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

		justify-content: center;
		align-items: center;
	}
</style>
