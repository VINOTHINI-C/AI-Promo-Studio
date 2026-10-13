import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import multer from "multer";
import { GoogleGenAI } from "@google/genai";

dotenv.config();
const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
});
const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
const app = express();

const upload = multer({
  storage: multer.memoryStorage(),
});

app.use(cors());
app.use(express.json());

// Home Route
app.get("/", (req, res) => {
  res.json({
    message: "🚀 AI Promo Studio Backend is Running Successfully!",
  });
});

// Generate Route

app.post("/api/generate", upload.array("photos", 15), async (req, res) => {
  try {
    const { prompt } = req.body;
    const photos = req.files;

let imageParts = [];

if (photos && photos.length > 0) {
  imageParts = photos.map((photo) => ({
    inlineData: {
      mimeType: photo.mimetype,
      data: photo.buffer.toString("base64"),
    },
  }));
}
    

    let response;

for (let attempt = 1; attempt <= 3; attempt++) {
  try {
    console.log("Gemini request started...");
    response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: [
        ...imageParts,
        {
          text: `
You are an expert Marketing Director and Professional Video Creator.

Analyze all uploaded product images.

Generate your response in EXACTLY this format.

📦 PRODUCTS DETECTED
(List every detected product)

🎬 STORYBOARD
Create exactly 8 scenes.

Each scene should contain:
- Scene Title
- Scene Description
- Duration

🎥 CAMERA SHOTS

For every scene provide:
- Camera Angle
- Camera Movement
- Lens
- Shot Type

🎨 COLOR GRADING

Suggest one premium cinematic color grading.

✨ TRANSITIONS

Suggest transitions between every scene.

🎞 VIDEO EFFECTS

Suggest professional video effects.

🎤 VOICE OVER

Write a professional promotional voice over.

🎵 BACKGROUND MUSIC

Suggest suitable background music.

📢 CALL TO ACTION

Write a professional ending.

🎨 AI IMAGE PROMPTS

Generate exactly 8 AI image prompts.

Each prompt should include:

• Ultra Realistic
• 8K
• Cinematic
• Photorealistic
• HDR
• Volumetric Lighting
• Highly Detailed
• Professional Product Photography
• Suitable for Google Veo 3, Runway Gen-4, Kling AI, Midjourney v7 and Flux.

One prompt for each storyboard scene.
Company Prompt:
${prompt}

Use the uploaded product images together with the company prompt to create the complete promotional video plan.

Do NOT skip any section.
`,
        },
      ],
    });

    break; // Success
  } catch (err) {
    if (err.status === 503 && attempt < 3) {
      console.log(`⚠ Gemini busy... Retrying (${attempt}/3)`);
      await sleep(2000);
    } else {
      throw err;
    }
  }
}
const script = response.text || "";
res.json({
  success: true,
  script,
  detectedProducts: script
    .split("\n")
    .map((item) => item.trim())
    .filter((item) => item !== ""),
});

  } catch (error) {
    console.error("Gemini Error:", error);

    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});