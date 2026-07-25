import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import multer from "multer";
import { GoogleGenAI } from "@google/genai";

dotenv.config();
const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
});

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
    

    const response = await ai.models.generateContent({
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
Scene 1
Describe first video scene.


Scene 2
Describe second video scene.

Scene 3
Describe third video scene.
🎬 STORYBOARD
Scene 1
Describe first video scene.

Scene 2
Describe second video scene.

Scene 3
Describe third video scene.

🎥 CAMERA SHOTS

Scene 1
Camera :
Movement :
Duration :

Scene 2
Camera :
Movement :
Duration :

Scene 3
Camera :
Movement :
Duration :

🎨 COLOR GRADING

Suggest one professional color grading.

✨ TRANSITIONS

Suggest transitions.

🎞 VIDEO EFFECTS

Suggest professional video effects.

🎤 VOICE OVER

Write a professional promotional voice over.

🎵 BACKGROUND MUSIC

Suggest one suitable music style.

📢 CALL TO ACTION

Write a strong marketing ending.

🎤 VOICE OVER
Write a professional promotional voice over.

🎵 BACKGROUND MUSIC
Suggest one suitable music style.

📢 CALL TO ACTION
Write a strong marketing ending.

Company Prompt:
${prompt}

Do NOT skip any section.
`,
    },
  ],
});

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