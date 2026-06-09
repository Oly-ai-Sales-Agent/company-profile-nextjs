"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import {
  demoFormFields,
  demoFormSubmitLabel,
} from "@/content/landing";

type DemoFormValues = Record<
  (typeof demoFormFields)[number]["name"],
  string
>;

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

      const response = await fetch("/api/request-demo", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Failed to submit request");
      }

      reset();
    } catch (error) {
      console.error(error);
      setSubmitError(
        "Something went wrong. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  });

  return (
    <form
      onSubmit={onSubmit}
      className="grid gap-5 sm:grid-cols-2"
    >
      {demoFormFields.map((field) => (
        <div
          key={field.name}
          className="flex flex-col gap-2"
        >
          <label
            htmlFor={field.name}
            className="text-sm font-medium text-slate-700"
          >
            {field.label}
          </label>

          <input
            id={field.name}
            type={field.type}
            className="rounded-xl border border-zinc-200 bg-zinc-50 px-4 py-3 text-sm text-slate-900 outline-none transition duration-200 ease-out focus:border-slate-400"
            {...register(field.name, {
              required: true,
            })}
          />

          {errors[field.name] && (
            <p className="text-sm text-red-600">
              {field.label} is required.
            </p>
          )}
        </div>
      ))}

      <div className="sm:col-span-2">
        <button
          type="submit"
          disabled={isSubmitting}
          className="inline-flex rounded-full bg-slate-900 px-7 py-3 text-sm font-semibold text-white transition duration-200 ease-out hover:bg-slate-800 disabled:opacity-50"
        >
          {isSubmitting
            ? "Submitting..."
            : demoFormSubmitLabel}
        </button>

        {isSubmitSuccessful && !submitError && (
          <p className="mt-4 text-sm text-green-600">
            Thanks! We'll be in touch soon.
          </p>
        )}

        {submitError && (
          <p className="mt-4 text-sm text-red-600">
            {submitError}
          </p>
        )}
      </div>
    </form>
  );
}