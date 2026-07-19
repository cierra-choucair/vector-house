"use client";

import { useId } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

/**
 * Form field primitives with consistent labels, hints and inline errors.
 * Errors are announced to assistive technology via aria-describedby.
 */

const inputClasses =
  "w-full border border-edge bg-card px-4 py-3 text-sm text-paper placeholder:text-fog/60 transition-colors focus:border-signal focus:outline-none aria-[invalid=true]:border-red-400/70";

type CommonProps = {
  label: string;
  name: string;
  error?: string;
  hint?: string;
  required?: boolean;
  className?: string;
};

function FieldShell({
  label,
  error,
  hint,
  required,
  className,
  htmlFor,
  errorId,
  children,
}: CommonProps & {
  htmlFor: string;
  errorId: string;
  children: React.ReactNode;
}) {
  return (
    <div className={cn("flex flex-col gap-2", className)}>
      <label
        htmlFor={htmlFor}
        className="font-mono text-[0.7rem] uppercase tracking-eyebrow text-fog"
      >
        {label}
        {required && (
          <span aria-hidden="true" className="ml-1 text-signal">
            *
          </span>
        )}
      </label>
      {children}
      {hint && !error && <p className="text-xs text-fog/80">{hint}</p>}
      {error && (
        <p id={errorId} role="alert" className="text-xs text-red-300">
          {error}
        </p>
      )}
    </div>
  );
}

export function TextField({
  label,
  name,
  error,
  hint,
  required,
  className,
  type = "text",
  ...props
}: CommonProps & React.InputHTMLAttributes<HTMLInputElement>) {
  const id = useId();
  const errorId = `${id}-error`;
  return (
    <FieldShell
      label={label}
      name={name}
      error={error}
      hint={hint}
      required={required}
      className={className}
      htmlFor={id}
      errorId={errorId}
    >
      <input
        id={id}
        name={name}
        type={type}
        required={required}
        aria-invalid={error ? true : undefined}
        aria-describedby={error ? errorId : undefined}
        className={inputClasses}
        {...props}
      />
    </FieldShell>
  );
}

export function TextAreaField({
  label,
  name,
  error,
  hint,
  required,
  className,
  ...props
}: CommonProps & React.TextareaHTMLAttributes<HTMLTextAreaElement>) {
  const id = useId();
  const errorId = `${id}-error`;
  return (
    <FieldShell
      label={label}
      name={name}
      error={error}
      hint={hint}
      required={required}
      className={className}
      htmlFor={id}
      errorId={errorId}
    >
      <textarea
        id={id}
        name={name}
        required={required}
        aria-invalid={error ? true : undefined}
        aria-describedby={error ? errorId : undefined}
        className={cn(inputClasses, "min-h-36 resize-y")}
        {...props}
      />
    </FieldShell>
  );
}

export function SelectField({
  label,
  name,
  error,
  hint,
  required,
  className,
  options,
  placeholder = "Select an option",
  ...props
}: CommonProps &
  React.SelectHTMLAttributes<HTMLSelectElement> & {
    options: readonly string[];
    placeholder?: string;
  }) {
  const id = useId();
  const errorId = `${id}-error`;
  return (
    <FieldShell
      label={label}
      name={name}
      error={error}
      hint={hint}
      required={required}
      className={className}
      htmlFor={id}
      errorId={errorId}
    >
      <div className="relative">
        <select
          id={id}
          name={name}
          required={required}
          aria-invalid={error ? true : undefined}
          aria-describedby={error ? errorId : undefined}
          defaultValue=""
          className={cn(inputClasses, "appearance-none pr-10")}
          {...props}
        >
          <option value="" disabled>
            {placeholder}
          </option>
          {options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
        <ChevronDown
          aria-hidden="true"
          className="pointer-events-none absolute top-1/2 right-3 h-4 w-4 -translate-y-1/2 text-fog"
        />
      </div>
    </FieldShell>
  );
}
