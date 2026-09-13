"use client";

import { useId, useState } from "react";
import Link from "next/link";

import Button from "@/components/primitives/Button";
import Field from "@/components/primitives/Field";
import { submitForm, FORM_STATUS } from "@/lib/forms";
import { localeHref } from "@/content";

/**
 * The quote and contact forms.
 *
 * One component, two shapes: `variant="quote"` adds the cargo fields. Both
 * rely on native HTML validation first — required, type="email", minLength —
 * so the form still works and still validates without JavaScript.
 *
 * The honeypot field is a plain hidden input that a human never fills. It
 * catches most automated spam without a CAPTCHA, which costs real users time
 * and fails accessibility.
 */
export default function EnquiryForm({
  variant = "contact",
  locale,
  site,
  ui,
  cargoTypes = [],
  services = [],
  subjects = [],
}) {
  const { form } = ui;
  const uid = useId();
  const [status, setStatus] = useState(FORM_STATUS.idle);

  const isQuote = variant === "quote";

  async function handleSubmit(event) {
    event.preventDefault();
    const data = Object.fromEntries(new FormData(event.currentTarget).entries());

    // Honeypot: a real person cannot see or fill this field.
    if (data.website) return;

    setStatus(FORM_STATUS.submitting);
    const result = await submitForm(variant, data);
    setStatus(result.status);
  }

  return (
    <form onSubmit={handleSubmit} noValidate={false}>
      <div className="form-grid">
        <Field id={`${uid}-name`} label={form.name} required>
          {(props) => <input className="input" type="text" name="name" autoComplete="name" {...props} />}
        </Field>

        <Field id={`${uid}-company`} label={form.company} required>
          {(props) => <input className="input" type="text" name="company" autoComplete="organization" {...props} />}
        </Field>

        <Field id={`${uid}-email`} label={form.email} required>
          {(props) => <input className="input" type="email" name="email" autoComplete="email" {...props} />}
        </Field>

        <Field id={`${uid}-phone`} label={form.phone} hint={form.phoneHint}>
          {(props) => <input className="input" type="tel" name="phone" autoComplete="tel" {...props} />}
        </Field>

        {isQuote ? (
          <>
            <Field id={`${uid}-origin`} label={form.origin} hint={form.originHint} required>
              {(props) => <input className="input" type="text" name="origin" {...props} />}
            </Field>

            <Field id={`${uid}-destination`} label={form.destination} required>
              {(props) => <input className="input" type="text" name="destination" {...props} />}
            </Field>

            <Field id={`${uid}-cargo`} label={form.cargoType} required>
              {(props) => (
                <select className="select" name="cargoType" defaultValue="" {...props}>
                  <option value="" disabled>
                    Select…
                  </option>
                  {cargoTypes.map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
              )}
            </Field>

            <Field id={`${uid}-service`} label={form.scope} required>
              {(props) => (
                <select className="select" name="scope" defaultValue="" {...props}>
                  <option value="" disabled>
                    Select…
                  </option>
                  {services.map((service) => (
                    <option key={service} value={service}>
                      {service}
                    </option>
                  ))}
                </select>
              )}
            </Field>

            <Field
              id={`${uid}-details`}
              label={form.cargoDetails}
              hint={form.cargoDetailsHint}
            >
              {(props) => <input className="input" type="text" name="cargoDetails" {...props} />}
            </Field>

            <Field id={`${uid}-date`} label={form.deliveryDate}>
              {(props) => <input className="input" type="date" name="requiredDate" {...props} />}
            </Field>
          </>
        ) : (
          <Field id={`${uid}-subject`} label={form.subject} required>
            {(props) => (
              <select className="select" name="subject" defaultValue="" {...props}>
                <option value="" disabled>
                  {form.selectPlaceholder}
                </option>
                {subjects.map((subject) => (
                  <option key={subject} value={subject}>
                    {subject}
                  </option>
                ))}
              </select>
            )}
          </Field>
        )}

        <div className="is-full">
          <Field id={`${uid}-message`} label={form.message} required>
            {(props) => <textarea className="textarea" name="message" rows={6} minLength={10} {...props} />}
          </Field>
        </div>

        {/* Honeypot — hidden from people, irresistible to bots. */}
        <div className="visually-hidden" aria-hidden="true">
          <label htmlFor={`${uid}-website`}>{form.honeypot}</label>
          <input id={`${uid}-website`} name="website" type="text" tabIndex={-1} autoComplete="off" />
        </div>

        <div className="is-full">
          <p className="t-body-s t-muted">
            {form.privacyNote}{" "}
            <Link href={localeHref(locale, "/legal/privacy")}>{form.privacyLink}</Link>.
          </p>
        </div>

        <div className="is-full">
          <Button type="submit" size="lg" arrow disabled={status === FORM_STATUS.submitting}>
            {status === FORM_STATUS.submitting ? form.sending : isQuote ? form.submitQuote : form.submitMessage}
          </Button>
        </div>
      </div>

      <div role="status" aria-live="polite">
        {status === FORM_STATUS.success ? (
          <div className="notice" style={{ borderInlineStartColor: "var(--brand-green)", marginBlockStart: "var(--space-md)" }}>
            <p className="notice__title" style={{ color: "var(--brand-green)" }}>
              {form.successTitle}
            </p>
            <p>{form.success}</p>
          </div>
        ) : null}

        {status === FORM_STATUS.error ? (
          <div className="notice" style={{ marginBlockStart: "var(--space-md)" }}>
            <p className="notice__title">{form.failureTitle}</p>
            <p>
              {form.failureBody}{" "}
              <a href={`mailto:${site.contact.operationsEmail}`}>{site.contact.operationsEmail}</a> or call{" "}
              <a href={site.contact.phoneHref}>{site.contact.phone}</a>.
            </p>
          </div>
        ) : null}

        {status === FORM_STATUS.unconfigured ? (
          <div className="notice" style={{ marginBlockStart: "var(--space-md)" }}>
            <p className="notice__title">{form.unconfiguredTitle}</p>
            <p>
              {form.unconfiguredBody}{" "}
              <a href={`mailto:${site.contact.operationsEmail}`}>{site.contact.operationsEmail}</a>.
            </p>
          </div>
        ) : null}
      </div>
    </form>
  );
}
