import ollama from "ollama";

function extractJSON(text) {
  const match = text.match(/\{[\s\S]*\}/);
  if (!match) throw new Error("LLM tidak mengembalikan JSON");
  return JSON.parse(match[0]);
}

export async function decideAction({ pageContent, state }) {
  const response = await ollama.chat({
    model: "llama3",
    messages: [
      {
        role: "system",
        content: `
Kamu adalah AI Agent automation web.

ATURAN WAJIB (JANGAN DILANGGAR):
1. Jika username BELUM diisi lakukan fill_username
2. Jika username SUDAH diisi tapi password BELUM lakukan fill_password
3. Jika username & password SUDAH diisi click_login
4. Jika halaman Swag Labs muncul selesai

Balas HANYA 1 JSON.
Format:

{ "type": "fill_username" }
{ "type": "fill_password" }
{ "type": "click_login" }
{ "type": "done" }
`
      },
      {
        role: "user",
        content: `
STATE SAAT INI:
usernameFilled: ${state.usernameFilled}
passwordFilled: ${state.passwordFilled}

ISI HALAMAN:
${pageContent}
`
      }
    ]
  });

  return extractJSON(response.message.content);
}
