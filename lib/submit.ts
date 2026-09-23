import { site } from "@/lib/site";

export type SubmitState = "idle" | "sending" | "sent" | "error";

// Sends a form to the Pourik inbox through FormSubmit.
// Returns true when the message was accepted.
export async function submitForm(
  subject: string,
  fields: Record<string, string>
): Promise<boolean> {
  try {
    const res = await fetch(site.formEndpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify({
        _subject: subject,
        _template: "table",
        _captcha: "false",
        ...fields,
      }),
    });
    if (!res.ok) return false;
    const data = (await res.json().catch(() => ({}))) as { success?: string | boolean };
    return data.success === true || data.success === "true";
  } catch {
    return false;
  }
}
