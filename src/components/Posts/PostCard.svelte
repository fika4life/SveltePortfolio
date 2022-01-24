<script>
	// export let post;
</script>

<div class="card">
	<div class="card-image">
		<img src="https://source.unsplash.com/random" alt="" />
	</div>

	<div class="card-body">
		<div class="tags">
			<span class="tag">HTML</span>
			<span class="tag">CSS</span>
		</div>
		<!-- <h2 class="card-title">{post.attributes.title}</h2> -->
		<div class="card-text">
			<h5 class="card-title">NFT preview card component</h5>
			<!-- <p>
			{post.attributes.body}
		</p> -->
			<p>Frontendmentor.io challenge</p>
		</div>
		<div class="card-actions">
			<a href="https://github.com/fika4life/nft-preview-card-component-main"
				><button class="btn btn-outline">Preview site</button></a
			>
			<a href="https://unruffled-swartz-12e92f.netlify.app/"
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
		padding: 1rem 1.6rem;
	}

	.card-text {
		margin-bottom: 1.2rem;
	}
	.card-title {
		margin: 1rem 0 0 0;
	}

	span.tag {
		font-size: 12px;
		text-transform: uppercase;
		color: var(--darker);
		font-weight: 800;
		margin-right: 1rem;
	}

	.card-actions {
		display: flex;
		justify-content: space-between;
	}
</style>
