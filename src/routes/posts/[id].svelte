<script context="module">
	export async function load({ page }) {
		const id = page.params.id;
		console.log(id);
		const url = `https://jsonplaceholder.typicode.com/posts/${id}`;
		const res = await fetch(url);
		const post = await res.json();
		console.log(post);
		return { props: { post } };
	}
</script>

<script>
	export let post;
</script>

<h1 class="text-4xl text-center font-bold">{post.title}</h1>
<p class="my-4">{post.body}</p>
