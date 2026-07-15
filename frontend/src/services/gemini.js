import { GoogleGenAI } from "@google/genai";
console.log("API Key:", import.meta.env.VITE_GEMINI_API_KEY);
const ai = new GoogleGenAI({
  apiKey: import.meta.env.VITE_GEMINI_API_KEY,
});

export async function generateScript(prompt) {
  try {
    const response = await ai.models.generateContent({
     model: "gemini-2.5-flash",
      contents: prompt,
    });

    return response.text;
  } 
  catch (error) {
  console.error("Gemini Error:", error);
  alert(error.message);
  return error.message;
}
}