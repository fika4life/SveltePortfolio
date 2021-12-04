<script>
	import { supabase } from '../supabase/init';

	let email;
	let password;
	let errorMsg;

	async function signIn() {
		try {
			let { error, session: sesh } = await supabase.auth.signIn({
				email: email,
				password: password
			});
			if (error) throw error;
		} catch (error) {
			errorMsg = `Error: ${error.message}`;
			// setTimeout(() => (errorMsg = ''), 5000);
		}
	}
</script>

<form
	on:submit|preventDefault={signIn}
	class="lg:w-2/6 md:w-1/2 bg-gray-100 rounded-lg p-8 flex flex-col md:mx-auto w-full mt-8 md:mt-18"
>
	<h2 class="text-gray-900 text-lg font-medium title-font mb-5">Sign In</h2>

	<div class="relative mb-4">
		<label for="email" class="leading-7 text-sm text-gray-600">Email</label>
		<input
			type="email"
			id="email"
			name="email"
			bind:value={email}
			class="w-full bg-white rounded border border-gray-300 focus:border-bg-neutral focus:ring-2 focus:ring-secondary text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
			required
		/>
	</div>
	<div class="relative mb-4">
		<label for="password" class="leading-7 text-sm text-gray-600">Password</label>
		<input
			type="password"
			id="password"
			name="password"
			bind:value={password}
			class="w-full bg-white rounded border border-gray-300 focus:border-bg-neutral focus:ring-2 focus:ring-secondary text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
			required
		/>
	</div>
	<button
		type="submit"
		class="text-white bg-secondary border-0 py-2 px-8 focus:outline-none hover:bg-primary rounded text-lg"
		>Sign In</button
	>
	{#if errorMsg}
		<p class="text-xs text-gray-500 mt-3">{errorMsg}</p>
	{/if}
</form>
