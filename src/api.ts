import axios from 'axios';

const BASE = import.meta.env.VITE_API_URL;

export async function summarizeText(text: string): Promise<string> {
  const res = await axios.post(
    `${BASE}/summarize`,
    { text }
  );
  return res.data.summary;
}