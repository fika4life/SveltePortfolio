<script context="module">
	import { urlRoot } from '$lib/url';
	export async function load({ page }) {
		//get the page id
		const id = page.params.id;

		const url = `${urlRoot}/api/posts/${id}?populate=*`;
		const response = await fetch(url);
		const post = await response.json();
		// console.log(post);
		return {
			props: {
				post
			}
		};
	}
</script>

<script>
	import Button from '../../components/UI/Button.svelte';
	import Tag from '../../components/UI/Tag.svelte';
	export let post;
	const { title, description, body, createdAt, URL, repository_url } = post.data.attributes;
	const { url } = post.data.attributes.image.data.attributes;
	const tags = post.data.attributes.tags.data;
	console.log(tags);
</script>

<!-- TODO TAGS -->

<div class="post-container">
	<p class="date">{createdAt}</p>
	<div class="website-image">
		<img src={url} alt={title} />
	</div>
	<div class="post-text">
		<h2>{title}</h2>
		<!-- <p class="description">{description}</p> -->
		<div class="tags">
			{#each tags as tag}
				<Tag {tag} />
			{/each}
		</div>

		<p class="body">{body}</p>
		<div class="links">
			<a href={repository_url} target="_blank">
				<Button type="primary">View code</Button>
			</a>
			<a href={URL} target="_blank">
				<Button type="outline">Preview site</Button>
			</a>
		</div>
	</div>
	<span class="back"> <a href="/"><i class="fa fa-times-circle fa-3x" /> </a></span>
</div>

<style>
	.post-container {
		max-width: var(--container-width);
		margin: 0 auto;
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		column-gap: 3rem;
		background-color: #fff;
		padding: 6rem;
		position: relative;
	}

	p.date {
		position: absolute;
		top: 3rem;
		right: 7rem;
	}
	/* .description {
		color: var(--third-lightest);
	} */

	.tags {
		margin-top: 0.2rem;
	}
	p {
		margin: 1.5rem 0rem;
	}

	.links {
		display: flex;
		flex-direction: row;
		justify-content: space-around;
		margin-top: 2rem;
	}

	.fa.fa-times-circle {
		position: absolute;
		right: 2rem;
		top: 2rem;
		color: var(--next-lightest);
	}
	.fa.fa-times-circle:hover {
		transform: rotate(-20deg);
		transition: transform 0.2s ease-in-out;
	}
</style>
