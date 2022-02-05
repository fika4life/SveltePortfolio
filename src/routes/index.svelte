<script context="module">
	import { urlRoot } from '$lib/url';

	export async function load({ page }) {
		// const url = 'http://localhost:1337/api/posts?populate=*';
		const url = `${urlRoot}/api/posts?populate=*`;

		const response = await fetch(url);
		const posts = await response.json();
		return { props: { posts } };
	}
</script>

<script>
	import Posts from '../components/Posts/Posts.svelte';

	import Footer from '../components/UI/Footer.svelte';
	//import { posts } from '../stores/postStore';
	import PostCard from '../components/Posts/PostCard.svelte';

	export let posts;
</script>

<section id="posts"><Posts {posts} /></section>
