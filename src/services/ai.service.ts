import type { INameAnalysisAI } from "@/types/name.types";
import { fetchAI } from "@/config/ai.config";
import type { IAIResponse } from "@/types/ai.types";

const cleanJsonResponse = (text: string): string => {
  // Remove markdown code block indicators and any "json" language specification
  return text.replace(/```json\n?|\n?```/g, "").trim();
};

export const getNameAnalysis = async (
  name: string
): Promise<INameAnalysisAI> => {
  const prompt = `You are a knowledgeable expert in names, their origins, cultural significance, and associated characteristics. Analyze the name "${name}" thoroughly and provide concise, meaningful information. Return the information as a JSON object with the following structure:

    {
      "origin": {
        "culturalOrigin": "..." (In 20-25 words, specify the culture and time period, e.g., 'Ancient Greek - Hellenistic Period' or 'Medieval Anglo-Saxon England'),
        "etymology": "..." (In 20-25 words, explain the name's linguistic roots and development),
        "historicalContext": "..." (In 20-25 words, describe the name's historical significance and traditional usage)
      },
      "relatedNames": ["...", "...", "...", "...", "..."] (List exactly 5 most relevant variations or similar names),
      "astrology": {
        "mostCommonSign": "..." (Single zodiac sign only),
        "element": "..." (Single classical element only),
        "planet": "..." (Single celestial body only),
        "keyTraits": ["...", "...", "..."] (Exactly 3 most significant traits),
        "luckyNumbers": ["...", "...", "..."] (Exactly 3 numbers),
        "luckyColors": ["...", "...", "..."] (Exactly 3 colors)
      },
      "meaningAndPersonality": {
        "primaryMeaning": "..." (In 20-25 words, provide the main literal and symbolic meanings),
        "personalityTraits": "..." (In 20-25 words, describe key personality characteristics traditionally associated with the name)
      }
    }

    IMPORTANT GUIDELINES:
    1. Keep ALL text responses between 20-25 words - be concise but informative.
    2. Use "N/A" ONLY as an absolute last resort when information cannot be found after extensive research.
    3. For each field, try multiple research approaches before defaulting to "N/A":
       - Consider historical records
       - Look into cultural traditions
       - Check etymological sources
       - Examine folklore and traditional beliefs
       - Research similar names if direct information is scarce
    4. Provide specific, meaningful responses rather than generic ones.
    5. All array fields must contain exactly 3 items, besides relatedNames, choosing the most significant options.
    6. Single-value fields (zodiac sign, element, planet) should contain only one word/term.
    7. Return only valid JSON without any additional text or explanations.
    8. Do not include markdown formatting or code block indicators.`;

  const data = await fetchAI<IAIResponse>(prompt);
  const generatedText = data.candidates[0].content.parts[0].text;
  const cleanedJson = cleanJsonResponse(generatedText);
  return JSON.parse(cleanedJson) as INameAnalysisAI;
};
