export interface QuizData {
  // Dados pessoais
  name: string;
  email: string;
  whatsapp: string;
  // Marca
  brand_name: string;
  brand_niche: string;
  brand_color: string;
  brand_personality: string;
  // Influenciador
  influencer_name: string;
  sex: string;
  age: string;
  ethnicity: string;
  // Aparencia
  skin_tone: string;
  eye_color: string;
  hair_color: string;
  hair_style: string;
  face_description: string;
  body_type: string;
  // Estilo
  clothing_style: string;
  accessories: string;
  setting: string;
  // Personalidade
  communication_style: string;
  tone_of_voice: string;
  content_type: string;
  platform: string;
}

export const initialQuizData: QuizData = {
  name: "",
  email: "",
  whatsapp: "",
  brand_name: "",
  brand_niche: "",
  brand_color: "",
  brand_personality: "",
  influencer_name: "",
  sex: "",
  age: "",
  ethnicity: "",
  skin_tone: "",
  eye_color: "",
  hair_color: "",
  hair_style: "",
  face_description: "",
  body_type: "",
  clothing_style: "",
  accessories: "",
  setting: "",
  communication_style: "",
  tone_of_voice: "",
  content_type: "",
  platform: "",
};
