<script>
	export let tag;
</script>

<span class="tag">{tag.attributes.Name}</span>

<style>
	span.tag {
		font-size: 14px;
		text-transform: uppercase;
		color: var(--darker);
		font-weight: 800;
		margin-right: 1rem;
		/* highlighter effect */
		position: relative;
		width: max-content;
		max-width: 100%;
		z-index: 1;
	}

	span.tag::before {
		content: '';
		background-color: var(--primary);
		height: 8px;
		width: 100%;
		display: block;
		position: absolute;
		bottom: 0px;
		left: -4px;
		z-index: -1;
	}
</style>
