<script context="module">
	export async function load({ page }) {
		const url = 'http://localhost:1337/api/posts?populate=image';
		const response = await fetch(url);
		const posts = await response.json();
		//console.log(posts);
		return { props: { posts } };
	}
</script>

<script>
	import Posts from '../components/Posts/Posts.svelte';
	import Hero from '../components/UI/Hero.svelte';
	import Footer from '../components/UI/Footer.svelte';
	//import { posts } from '../stores/postStore';
	import PostCard from '../components/Posts/PostCard.svelte';

	export let posts;
</script>

<Hero class="my-3 w-full" />
<section class="posts my-8">
	<div class="grid grid-cols-3 gap-5">
		{#each posts.data as post}
			<PostCard {post} />
		{/each}
	</div>
</section>

<Footer class="w-full" />
