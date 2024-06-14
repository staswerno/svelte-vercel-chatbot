import { createOpenAI } from '@ai-sdk/openai';
import { StreamData, StreamingTextResponse, streamText } from 'ai';
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
		system: 'Answer in the style of Barney the Dinosaur',
		messages
	});

	// const data = new StreamData();

	// data.append({ test: 'value' });

	// const stream = result.toAIStream({
	// 	onFinal(_) {
	// 		data.close();
	// 	}
	// });

	// return new StreamingTextResponse(stream, {}, data);
	return result.toAIStreamResponse();
}) satisfies RequestHandler;
