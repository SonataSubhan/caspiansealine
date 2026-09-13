/**
 * The single integration point for every form on the site.
 *
 * There is no back end yet, so this deliberately fails loudly rather than
 * pretending a submission succeeded — a contact form that silently swallows an
 * enquiry is worse than no form at all.
 *
 * TODO(build): point `ENDPOINT` at the real handler (a Next.js Route Handler,
 * a CRM webhook, or a transactional-mail service) and delete the guard. The
 * form components do not change.
 */

const ENDPOINT = process.env.NEXT_PUBLIC_FORM_ENDPOINT || null;

export const FORM_STATUS = {
  idle: "idle",
  submitting: "submitting",
  success: "success",
  error: "error",
  unconfigured: "unconfigured",
};

export async function submitForm(kind, payload) {
  if (!ENDPOINT) {
    return { status: FORM_STATUS.unconfigured };
  }

  try {
    const response = await fetch(ENDPOINT, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ kind, ...payload }),
    });

    if (!response.ok) return { status: FORM_STATUS.error };
    return { status: FORM_STATUS.success };
  } catch {
    return { status: FORM_STATUS.error };
  }
}
