<script>
	import { useChat } from '@ai-sdk/svelte';
	const { input, handleSubmit, messages, data, isLoading } = useChat();
</script>

<main>
	<!-- <pre>{JSON.stringify($data, null, 2)}</pre> -->
	<ul>
		{#each $messages as message}
			<li>{message.id} | {message.role}: {message.content}</li>
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
