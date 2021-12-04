<script>
	export let post;
</script>

<div class="card text-center shadow-md">
	<figure class="px-10 pt-10">
		<img src="https://source.unsplash.com/random" />
	</figure>
	<div class="card-body">
		<h2 class="card-title">{post.attributes.title}</h2>
		<p>
			{post.attributes.body}
		</p>
		<div class="justify-center card-actions">
			<a href={`./posts/${post.id}`}
				><button class="btn btn-outline btn-accent">More info</button></a
			>
		</div>
	</div>
</div>
