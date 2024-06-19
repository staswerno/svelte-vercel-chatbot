<script>
	import { useChat } from '@ai-sdk/svelte';
	const { input, handleSubmit, messages, data, isLoading } = useChat();
</script>

<main>
	<!-- <pre>{JSON.stringify($data, null, 2)}</pre> -->
	<ul>
		{#each $messages as message}
			<li>{message.role == 'user' ? 'you' : 'barney'}: {message.content}</li>
		{/each}
	</ul>
	<form on:submit={handleSubmit}>
		<input bind:value={$input} />
		<button type="submit">Send</button>
	</form>
	{#if $isLoading}
		<p>꩜ patience ꩜</p>
	{/if}
</main>
