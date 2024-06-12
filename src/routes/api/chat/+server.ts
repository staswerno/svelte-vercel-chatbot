import { createOpenAI } from '@ai-sdk/openai';
import { StreamingTextResponse, streamText } from 'ai';
import type { RequestHandler } from './$types';

import { env } from '$env/dynamic/private';

const openai = createOpenAI({
	apiKey: env.OPENAI_API_KEY ?? ''
});
export const POST = (async ({ request }) => {
	const { messages } = await request.json();

	// it is possible to pass in different settings here
	const result = await streamText({
		model: openai('gpt-3.5-turbo'),
		messages
	});

	return result.toAIStreamResponse();
}) satisfies RequestHandler;
