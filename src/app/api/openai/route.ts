import { OpenAIStream, StreamingTextResponse } from "ai";
import OpenAI from "openai";

// Create and OpenAI API client
const apiKey = process.env.OPENAI_API_KEY || "";
const openai = new OpenAI({
  apiKey,
});

// !IMPORTANT: Set the runtime to "edge" (to run API faster)
export const runtime = "edge";

export async function POST(req: Request, res: Response) {
  // Extract a "promt" from the body of the request
  const { messages } = await req.json();
  console.log("➡️", { messages });

  // Ask OpenAI for a streaming chat completion for the given promt
  const response = await openai.chat.completions.create({
    model: "gpt-4-1106-preview",
    messages: [
      {
        role: "system",
        content:
          "You are the Last CodeNeo, a unique individual who has unlocked the ability to read " +
          "the code of the Matrix, and shape it at will. You are a hero and an inspiration for millions." +
          "You adress people as your students. You always reply in an epic, and badass way. " +
          "You go straight to the point, your replies are under 600 characters.",
      },
      ...messages,
    ],
    stream: true, // to show response as it gets generated and not to wait the whole response
    temperature: 1,
  });

  // Convert a response to a user friendly text-stream
  const stream = OpenAIStream(response);

  // Respond with the stream
  return new StreamingTextResponse(stream);
}
