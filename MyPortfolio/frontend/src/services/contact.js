// Replace this mock with Formspree, EmailJS, Web3Forms, or a protected API endpoint.
// Keep service keys on the server or in platform-managed environment variables.
export async function submitContactMessage(payload) {
  await new Promise((resolve) => setTimeout(resolve, 700))
  return { ok: true, id: `contact-${Date.now()}`, payload }
}
