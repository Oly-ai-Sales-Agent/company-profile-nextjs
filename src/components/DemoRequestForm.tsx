"use client";

import { useForm } from "react-hook-form";
import { demoFormFields, demoFormSubmitLabel } from "@/content/landing";

type DemoFormValues = Record<(typeof demoFormFields)[number]["name"], string>;

export function DemoRequestForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitSuccessful },
  } = useForm<DemoFormValues>();

  const onSubmit = handleSubmit(() => {
    reset();
  });

  return (
    <form onSubmit={onSubmit} className="mt-8 grid gap-6 sm:grid-cols-2">
      {demoFormFields.map((field) => (
        <div key={field.name} className="flex flex-col gap-2">
          <label htmlFor={field.name} className="text-sm font-medium text-slate-700">
            {field.label}
          </label>
          <input
            id={field.name}
            type={field.type}
            className="rounded-xl border border-zinc-200 bg-zinc-50 px-4 py-3 text-sm text-slate-900 outline-none transition duration-200 ease-out focus:border-slate-400"
            {...register(field.name, { required: true })}
          />
          {errors[field.name] && <p className="text-sm text-red-600">{field.label} is required.</p>}
        </div>
      ))}

      <div className="sm:col-span-2">
        <button
          type="submit"
          className="inline-flex rounded-full bg-slate-900 px-7 py-3 text-sm font-semibold text-white transition duration-200 ease-out hover:bg-slate-800"
        >
          {demoFormSubmitLabel}
        </button>
        {isSubmitSuccessful && <p className="mt-4 text-sm text-slate-600">Thanks! We’ll be in touch soon.</p>}
      </div>
    </form>
  );
}
