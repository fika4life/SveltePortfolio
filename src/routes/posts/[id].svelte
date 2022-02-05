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
	export let post;
	const { title, description, body, createdAt, URL, repository_url } = post.data.attributes;
	const { url } = post.data.attributes.image.data.attributes;
	const tags = post.data.attributes.tags;
</script>

<!-- TODO TAGS -->
<img src={url} alt="" />
<h2>{title}</h2>
<h4>{description}</h4>
<p>{createdAt}</p>
<p>{body}</p>
<a href={repository_url} target="_blank">
	<Button type="primary">View code</Button>
</a>
<a href={URL} target="_blank">
	<Button type="outline">Preview site</Button>
</a>
