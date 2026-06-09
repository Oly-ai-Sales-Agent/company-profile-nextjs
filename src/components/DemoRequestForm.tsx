"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { demoFormFields, demoFormSubmitLabel } from "@/content/landing";

type DemoFormValues = Record<(typeof demoFormFields)[number]["name"], string>;

export function DemoRequestForm() {
  const [submitError, setSubmitError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitSuccessful },
  } = useForm<DemoFormValues>();

  const onSubmit = handleSubmit(async (data) => {
    try {
      setSubmitError("");
      setIsSubmitting(true);
      const res = await fetch("/api/request-demo", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Failed to submit request");
      reset();
    } catch (e) {
      console.error(e);
      setSubmitError("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  });

  return (
    <form onSubmit={onSubmit} className="grid gap-4 sm:grid-cols-2">
      {demoFormFields.map((field) => (
        <div
          key={field.name}
          className={`flex flex-col gap-1.5 ${
            field.name === "emailAddress" ? "sm:col-span-2" : ""
          }`}
        >
          <label
            htmlFor={field.name}
            className="text-[11px] font-medium uppercase tracking-[0.18em] text-[var(--ink-soft)]"
          >
            {field.label}
          </label>
          <input
            id={field.name}
            type={field.type}
            placeholder={field.label}
            className="rounded-2xl border-0 bg-[var(--background)] px-5 py-4 text-[15px] text-[var(--ink)] outline-none ring-1 ring-black/5 transition placeholder:text-[var(--ink-soft)]/60 focus:ring-2 focus:ring-[var(--ink)]"
            {...register(field.name, { required: true })}
          />
          {errors[field.name] && (
            <p className="text-xs text-red-600">{field.label} is required.</p>
          )}
        </div>
      ))}

      <div className="sm:col-span-2 mt-2 flex flex-wrap items-center gap-4">
        <button
          type="submit"
          disabled={isSubmitting}
          className="inline-flex items-center gap-2 rounded-full bg-[var(--ink)] px-6 py-3.5 text-sm font-medium text-white transition hover:bg-black disabled:opacity-50"
        >
          {isSubmitting ? "Submitting…" : demoFormSubmitLabel}
          <span aria-hidden>→</span>
        </button>
        {isSubmitSuccessful && !submitError && (
          <p className="text-sm text-emerald-700">Thanks — we&apos;ll be in touch soon.</p>
        )}
        {submitError && <p className="text-sm text-red-600">{submitError}</p>}
      </div>
    </form>
  );
}