<script context="module">
	export async function load({ page }) {
		const id = page.params.id;
		const url = `http://localhost:1337/api/posts/${id}?populate=image`;
		const res = await fetch(url);
		const post = await res.json();
		console.log(post);
		return { props: { post } };
	}
</script>

<script>
	export let post;
</script>

<h1 class="text-4xl text-center font-bold">{post.data.attributes.title}</h1>
<p class="my-4">{post.data.attributes.body}</p>
