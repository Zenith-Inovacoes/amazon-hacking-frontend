'use server'

import { postVote } from "@/services/apis/post-vote";

export async function voteSolution(id: string, formData: FormData) {
  const tokenTurnstile = formData.get('cf-turnstile-response');
  const sessionToken = formData.get('session_token');

  try {
    await postVote({ captcha: tokenTurnstile as string, projectId: id, cookies: `session_token=${String(sessionToken)}` });
  } catch (error) {
    throw new Error("Error");
  }
}