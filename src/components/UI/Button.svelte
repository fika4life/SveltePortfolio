<script>
	export let type;
</script>

<button class="btn btn-{type}">
	<slot />
</button>

<style>
	button.btn {
		font-family: 'Nunito', sans-serif;
		font-size: 14px;
		text-transform: uppercase;
		font-weight: 800;
		border-radius: 0;
		border: 2px solid var(--darkest);
		padding: 0.5em 1.5em;
		position: relative;
		width: max-content;
		max-width: 100%;
		z-index: 2;
	}

	button.btn-outline {
		background-color: none;
	}

	button.btn-primary {
		background-color: var(--darkest);
		color: #fff;
	}

	/* highlighter effect */
	button.btn::after {
		content: '';
		background-color: rgba(0, 0, 0, 0);
		height: 6px;
		width: 100%;
		display: block;
		position: absolute;
		bottom: -2px;
		left: -2px;
		box-shadow: var(--primary) -2px 4px 0 0;
	}

	button.btn:hover {
		cursor: pointer;
		transform: scale(1.05);
	}
</style>
