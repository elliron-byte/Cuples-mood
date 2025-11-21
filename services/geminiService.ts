import { GoogleGenAI, Type } from "@google/genai";
import { GeneratedNamesResponse } from "../types";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const generateCoupleNames = async (name1: string, name2: string): Promise<string[]> => {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: `Combine the names "${name1}" and "${name2}" to create a list of 12 catchy, cute, funny, or romantic couple portmanteau names (like 'Brangelina' or 'Bennifer'). Be creative with phonetics.`,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            names: {
              type: Type.ARRAY,
              items: {
                type: Type.STRING,
              },
              description: "A list of merged couple names.",
            },
          },
          required: ["names"],
        },
        temperature: 1.0, // High temperature for creativity
      },
    });

    const jsonResponse = JSON.parse(response.text || '{"names": []}') as GeneratedNamesResponse;
    return jsonResponse.names;

  } catch (error) {
    console.error("Error generating names:", error);
    throw new Error("Failed to generate names. Please try again.");
  }
};