"use client";

import { useId, useState, type ChangeEvent, type FormEvent, type ReactNode } from "react";
import { Button } from "@/components/ui/Button";
import { profile } from "@/content/profile";

type FormState = {
  name: string;
  email: string;
  company: string;
  project: string;
  message: string;
};

type Errors = Partial<Record<keyof FormState, string>>;

const initialState: FormState = { name: "", email: "", company: "", project: "", message: "" };

function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function validate(values: FormState): Errors {
  const errors: Errors = {};
  if (!values.name.trim()) errors.name = "Name is required.";
  if (!values.email.trim()) errors.email = "Email is required.";
  else if (!isValidEmail(values.email)) errors.email = "Enter a valid email address.";
  if (!values.message.trim()) errors.message = "Message is required.";
  return errors;
}

// No email-sending backend is configured yet, so submitting hands the
// message off to the visitor's own email client via a mailto: link — no
// API keys or credentials are needed or exposed client-side. Swap this for
// a real server-side handler (e.g. a Next.js route + email provider) once
// one is set up.
export function ContactForm() {
  const [values, setValues] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<Errors>({});
  const [submitted, setSubmitted] = useState(false);

  function handleChange(field: keyof FormState) {
    return (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setValues((prev) => ({ ...prev, [field]: event.target.value }));
    };
  }

  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    const nextErrors = validate(values);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) {
      setSubmitted(false);
      return;
    }

    const subject = encodeURIComponent(`Portfolio inquiry from ${values.name}`);
    const bodyLines = [
      values.company && `Company: ${values.company}`,
      values.project && `Project / Opportunity: ${values.project}`,
      "",
      values.message,
    ].filter(Boolean);
    const body = encodeURIComponent(bodyLines.join("\n"));

    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
    setSubmitted(true);
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <FormField label="Name" error={errors.name}>
          {(id, describedBy) => (
            <input
              id={id}
              type="text"
              autoComplete="name"
              value={values.name}
              onChange={handleChange("name")}
              aria-invalid={Boolean(errors.name)}
              aria-describedby={describedBy}
              className={inputClasses(Boolean(errors.name))}
            />
          )}
        </FormField>

        <FormField label="Email" error={errors.email}>
          {(id, describedBy) => (
            <input
              id={id}
              type="email"
              autoComplete="email"
              value={values.email}
              onChange={handleChange("email")}
              aria-invalid={Boolean(errors.email)}
              aria-describedby={describedBy}
              className={inputClasses(Boolean(errors.email))}
            />
          )}
        </FormField>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <FormField label="Company (optional)">
          {(id) => (
            <input
              id={id}
              type="text"
              autoComplete="organization"
              value={values.company}
              onChange={handleChange("company")}
              className={inputClasses(false)}
            />
          )}
        </FormField>

        <FormField label="Project / Opportunity (optional)">
          {(id) => (
            <input
              id={id}
              type="text"
              value={values.project}
              onChange={handleChange("project")}
              className={inputClasses(false)}
            />
          )}
        </FormField>
      </div>

      <FormField label="Message" error={errors.message}>
        {(id, describedBy) => (
          <textarea
            id={id}
            rows={5}
            value={values.message}
            onChange={handleChange("message")}
            aria-invalid={Boolean(errors.message)}
            aria-describedby={describedBy}
            className={inputClasses(Boolean(errors.message))}
          />
        )}
      </FormField>

      <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
        <Button type="submit" variant="primary" arrow={false}>
          Send Message
        </Button>
        {submitted && (
          <p role="status" className="text-sm text-status-open">
            Opening your email client to send this to {profile.email}.
          </p>
        )}
      </div>
    </form>
  );
}

function inputClasses(hasError: boolean) {
  return `w-full rounded-lg border bg-bg-secondary px-4 py-2.5 text-sm text-text-primary placeholder:text-text-secondary focus-visible:outline-2 focus-visible:outline-accent-violet ${
    hasError ? "border-red-500/60" : "border-border focus:border-accent-violet/50"
  }`;
}

function FormField({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: (id: string, describedBy?: string) => ReactNode;
}) {
  const id = useId();
  const errorId = error ? `${id}-error` : undefined;

  return (
    <div>
      <label htmlFor={id} className="text-xs font-medium text-text-secondary">
        {label}
      </label>
      <div className="mt-1.5">{children(id, errorId)}</div>
      {error && (
        <p id={errorId} className="mt-1.5 text-xs text-red-400">
          {error}
        </p>
      )}
    </div>
  );
}
