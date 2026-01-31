
import { GoogleGenAI } from "@google/genai";

export const generateWeddingMessage = async (name: string, tone: 'funny' | 'heartfelt' | 'formal') => {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  const model = 'gemini-3-flash-preview';

  const prompt = `Write a short, elegant wedding message for a couple named Rachel and Steven. 
  The message is from a guest named ${name}. 
  The tone should be ${tone}. 
  Keep it under 30 words.`;

  try {
    const response = await ai.models.generateContent({
      model,
      contents: prompt,
    });
    return response.text;
  } catch (error) {
    console.error("Error generating message:", error);
    return "Wishing you both a lifetime of happiness and love!";
  }
};
