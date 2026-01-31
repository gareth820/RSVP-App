
import { GoogleGenAI } from "@google/genai";

/**
 * Generates a refined wedding message using the Gemini API.
 * 
 * @param name - The name of the guest for personalization.
 * @param tone - The desired tone of the message.
 * @returns A promise that resolves to the generated message string.
 */
export const generateWeddingMessage = async (name: string, tone: 'funny' | 'heartfelt' | 'formal'): Promise<string> => {
  // Creating a new instance per call ensures we always use the latest environment variable
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  const model = 'gemini-3-flash-preview';

  const systemInstruction = `You are a sophisticated wedding assistant helping a guest named ${name} write a short message for Rachel and Steven's wedding RSVP.`;
  const prompt = `Write a ${tone} message from ${name} to the couple. Keep it under 25 words and very elegant.`;

  try {
    const response = await ai.models.generateContent({
      model,
      contents: prompt,
      config: {
        systemInstruction,
        temperature: 0.8,
        topP: 0.9,
      }
    });

    return response.text?.trim() || "Wishing you both a lifetime of happiness!";
  } catch (error) {
    console.error("Gemini API Error:", error);
    // Return a sensible fallback if the API fails or is unavailable
    const fallbacks = {
      funny: "I'm only here for the cake (and to witness your love, obviously)! Congrats!",
      heartfelt: "So honored to witness your beautiful journey. Wishing you endless love.",
      formal: "We are delighted to celebrate this special day with you both. Warmest congratulations."
    };
    return fallbacks[tone];
  }
};
