<script>
	import { useChat } from '@ai-sdk/svelte';

	const { input, handleSubmit, messages, isLoading } = useChat();
</script>

<main>
	<ul>
		{#each $messages as message}
			<li>{message.role}: {message.content}</li>
		{/each}
	</ul>
	<form on:submit={handleSubmit}>
		<input bind:value={$input} />
		<button type="submit">Send</button>
	</form>
	<!-- fix -->
	{#if isLoading}
		<p>wait up</p>
	{/if}
</main>
