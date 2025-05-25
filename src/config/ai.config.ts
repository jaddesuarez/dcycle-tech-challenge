import { GEMINI_API_URL, GEMINI_API_KEY } from "@/consts/env.consts";

export const fetchAI = async <T>(prompt: string): Promise<T> => {
  const response = await fetch(`${GEMINI_API_URL}?key=${GEMINI_API_KEY}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      contents: [
        {
          parts: [
            {
              text: prompt,
            },
          ],
        },
      ],
    }),
  });

  if (!response.ok) {
    throw new Error(`AI API request failed with status ${response.status}`);
  }

  const data = await response.json();
  return data;
};
