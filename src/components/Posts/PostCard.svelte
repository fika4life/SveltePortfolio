<script>
	import { urlRoot } from '$lib/url';
	import Button from '../UI/Button.svelte';
	import Tag from '../UI/Tag.svelte';

	export let post;

	let imageurl = post.attributes.image.data[0];
	//post.attributes.image.data.attributes.url
</script>

<div class="card">
	<div class="card-image">
		{#if imageurl}
			<img src={urlRoot + imageurl.attributes.url} alt="" />
		{:else}
			<img src={undefined} alt="" />
		{/if}
	</div>

	<div class="card-body">
		<div class="tags">
			{#each post.attributes.tags.data as tag}
				<!-- <span class="tag">{tag.attributes.name}</span> -->
				<Tag {tag} />
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
			<a href={post.attributes.URL} target="_blank">
				<Button type="outline">Preview site</Button>
			</a>
			<a href={'/posts/' + post.attributes.slug}>
				<Button type="primary">More info</Button>
			</a>
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
	.tags {
		z-index: 1;
	}

	.card-text {
		margin-bottom: 1.2rem;
	}
	.card-title {
		margin: 1rem 0 0 0;
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
