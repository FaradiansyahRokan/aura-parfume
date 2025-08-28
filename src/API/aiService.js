export const askAI = async (prompt) => {
  const API_URL = "  https://8a9e78a3041f.ngrok-free.app/chat"; 
  try {
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message: prompt }),
    });
    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
    const data = await response.json();
    return data.response || "Maaf, terjadi kesalahan.";
  } catch (error) {
    console.error("Error calling AI API:", error);
    return "Maaf, AI Sommelier kami sedang tidak dapat dihubungi.";
  }
};