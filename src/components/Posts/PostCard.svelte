<script>
	export let post;
	console.log(post);
</script>

<div class="card">
	<div class="card-image">
		<img src="https://source.unsplash.com/random" alt="" />
	</div>

	<div class="card-body">
		<div class="tags">
			{#each post.attributes.tags.data as tag}
				<span class="tag">{tag.attributes.name}</span>
			{/each}
		</div>
		<!-- <h2 class="card-title">{post.attributes.title}</h2> -->
		<div class="card-text">
			<h5 class="card-title">{post.attributes.title}</h5>
			<p>
				{post.attributes.description}
			</p>
		</div>
		<div class="card-actions">
			<a href={post.attributes.URL} target="_blank"
				><button class="btn btn-outline">Preview site</button></a
			>
			<a href={post.attributes.repository_url} target="_blank"
				><button class="btn btn-primary">View code</button></a
			>
		</div>
	</div>
</div>

<style>
	.card {
		width: 375px;
		background-color: #fff;
		display: flex;
		flex-direction: column;
	}

	.card-image img {
		height: 250px;
	}

	.card-body {
		padding: 1rem 1.6rem 1.6rem 1.6rem;
	}

	.card-text {
		margin-bottom: 1.2rem;
	}
	.card-title {
		margin: 1rem 0 0 0;
	}

	.tags {
		z-index: 1;
	}
	span.tag {
		font-size: 12px;
		text-transform: uppercase;
		color: var(--darker);
		font-weight: 800;
		margin-right: 1rem;
		/* highlighter effect */
		position: relative;
		width: max-content;
		max-width: 100%;
		z-index: 1;
	}

	span.tag::before {
		content: '';
		background-color: var(--primary);
		height: 8px;
		width: 100%;
		display: block;
		position: absolute;
		bottom: 0px;
		left: -4px;
		z-index: -1;
	}

	.card-actions {
		display: flex;
		justify-content: space-between;
	}

	a > button.btn {
		/* highlighter effect */
		position: relative;
		width: max-content;
		max-width: 100%;
		z-index: 2;
	}

	a > button.btn::after {
		content: '';
		background-color: rgba(0, 0, 0, 0);

		height: 6px;
		width: 100%;
		display: block;
		position: absolute;
		bottom: -2px;
		left: -2px;

		box-shadow: var(--primary) -2px 4px 0 0;
	}

	a > button.btn:hover {
		cursor: pointer;
		transform: scale(1.1);
	}
</style>
