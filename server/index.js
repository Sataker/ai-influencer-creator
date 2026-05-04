import express from "express";
import cors from "cors";
import OpenAI from "openai";
import { config } from "dotenv";

config();

const app = express();
app.use(cors());
app.use(express.json());

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

function buildPrompt(data) {
  const parts = [
    "Ultra-realistic professional photograph of a single person,",
    `${data.sex === "Feminino" ? "woman" : "man"},`,
    `approximately ${data.age},`,
    `${data.ethnicity} ethnicity,`,
    `${data.skin_tone} skin tone,`,
    `${data.eye_color} eyes,`,
    `${data.hair_color} ${data.hair_style} hair,`,
    data.face_description ? `facial features: ${data.face_description},` : "",
    `${data.body_type} body type,`,
    `wearing ${data.clothing_style} clothing,`,
    data.accessories ? `accessories: ${data.accessories},` : "",
    `in a ${data.setting} environment,`,
    `brand personality: ${data.brand_personality},`,
    `brand color accent: ${data.brand_color},`,
    "looking at camera with confident expression,",
    "soft studio lighting, shallow depth of field,",
    "shot on Sony A7IV, 85mm f/1.4,",
    "8K resolution, ultra detailed skin texture, photorealistic.",
  ];

  return parts.filter(Boolean).join(" ");
}

app.post("/api/generate", async (req, res) => {
  try {
    const data = req.body;

    if (!data.influencer_name || !data.sex) {
      return res.status(400).json({ error: "Dados incompletos" });
    }

    const prompt = buildPrompt(data);

    const response = await openai.images.generate({
      model: "dall-e-3",
      prompt,
      n: 1,
      size: "1024x1792",
      quality: "hd",
      style: "natural",
    });

    const imageUrl = response.data[0]?.url;

    if (!imageUrl) {
      return res.status(500).json({ error: "Falha ao gerar imagem" });
    }

    res.json({ image_url: imageUrl, prompt });
  } catch (err) {
    console.error("OpenAI error:", err.message);

    if (err.code === "content_policy_violation") {
      return res.status(400).json({
        error: "O conteudo foi bloqueado pela politica de seguranca. Tente ajustar a descricao.",
      });
    }

    res.status(500).json({ error: err.message || "Erro interno" });
  }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
