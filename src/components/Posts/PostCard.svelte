<script>
	export let post;
</script>

<div class="card text-center shadow-md">
	<figure class="px-10 pt-10">
		<img src="https://source.unsplash.com/random/400x250" />
	</figure>
	<div class="card-body">
		<h2 class="card-title">{post.title}</h2>
		<p>
			{post.body}
		</p>
		<div class="justify-center card-actions">
			<a href={`./posts/${post.id}`}
				><button class="btn btn-outline btn-accent">More info</button></a
			>
		</div>
	</div>
</div>
