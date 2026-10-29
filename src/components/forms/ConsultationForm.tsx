"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Send, CheckCircle2, AlertCircle, Loader2, Lock, ShieldCheck } from "lucide-react";

const formSchema = z.object({
  fullName: z
    .string()
    .min(2, "Full name must be at least 2 characters")
    .max(100, "Full name is too long"),
  phone: z
    .string()
    .min(10, "Please enter a valid phone number (min. 10 digits)")
    .max(16, "Phone number is too long")
    .regex(/^[0-9+\-\s()]+$/, "Phone number contains invalid characters"),
  email: z
    .string()
    .email("Please provide a valid email address")
    .optional()
    .or(z.literal("")),
  practiceArea: z.enum(
    [
      "Criminal Defense",
      "White-Collar Crime / CBI / ED / PMLA",
      "Family and Matrimonial Law",
      "Tribunal Matters",
      "Other Legal Enquiry",
    ],
    {
      errorMap: () => ({ message: "Please select an area of legal assistance" }),
    }
  ),
  preferredContact: z.enum(["Phone Call", "WhatsApp", "Email"]).optional(),
  briefEnquiry: z
    .string()
    .min(15, "Please describe your matter briefly (minimum 15 characters)")
    .max(2000, "Brief enquiry must not exceed 2000 characters"),
  privacyAccepted: z.literal(true, {
    errorMap: () => ({
      message: "Please acknowledge the privacy & confidentiality terms to proceed",
    }),
  }),
  honeypot: z.string().optional(),
});

type FormValues = z.infer<typeof formSchema>;

export const ConsultationForm: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState<string | null>(null);
  const [referenceNumber, setReferenceNumber] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      phone: "",
      email: "",
      practiceArea: undefined,
      preferredContact: "Phone Call",
      briefEnquiry: "",
      privacyAccepted: undefined,
      honeypot: "",
    },
  });

  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);
    setErrorMessage(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setSubmitSuccess(result.message);
        setReferenceNumber(result.referenceId || "IA-CONFIRMED");
        reset();
      } else {
        setErrorMessage(
          result.message ||
            "Unable to submit enquiry at this moment. Please call our office directly."
        );
      }
    } catch {
      setErrorMessage(
        "Network connection issue. Please telephone our office directly at +91 87440904546."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitSuccess) {
    return (
      <div className="bg-white p-8 sm:p-10 border-2 border-gold/40 shadow-xl text-center space-y-6">
        <div className="w-16 h-16 mx-auto rounded-full bg-gold/15 border border-gold flex items-center justify-center text-gold">
          <CheckCircle2 className="w-9 h-9" />
        </div>
        <div className="space-y-2">
          <h3 className="font-serif text-2xl text-navy-deep font-semibold">
            Enquiry Successfully Submitted
          </h3>
          <p className="text-sm font-mono text-gold-dark font-medium">
            Reference ID: {referenceNumber}
          </p>
          <p className="text-sm text-charcoal/80 max-w-md mx-auto leading-relaxed pt-2">
            {submitSuccess}
          </p>
        </div>

        <div className="p-4 bg-ivory border border-lightBorder text-xs text-charcoal/70 max-w-md mx-auto text-left flex items-start gap-3">
          <ShieldCheck className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
          <p>
            Your details are handled strictly under professional advocate-client confidentiality standards. For immediate urgent matters, you may call +91 87440904546.
          </p>
        </div>

        <button
          type="button"
          onClick={() => {
            setSubmitSuccess(null);
            setReferenceNumber(null);
          }}
          className="inline-flex items-center justify-center px-6 py-2.5 text-xs font-semibold uppercase tracking-widest text-navy-deep bg-gold hover:bg-gold-light transition-colors"
        >
          Submit Another Enquiry
        </button>
      </div>
    );
  }

  return (
    <div className="bg-white p-6 sm:p-10 border border-lightBorder shadow-xl relative">
      {/* Top Gold Bar */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-navy-deep via-gold to-navy-deep" />

      <div className="mb-8">
        <h3 className="font-serif text-2xl text-navy-deep font-medium tracking-tight">
          Consultation Request Form
        </h3>
        <p className="text-xs sm:text-sm text-charcoal/70 mt-1 font-light">
          Please fill out the form below. We will review your enquiry and get back to you during consultation hours.
        </p>
      </div>

      {errorMessage && (
        <div
          className="mb-6 p-4 bg-red-50 border border-red-200 text-red-700 text-xs sm:text-sm flex items-start gap-3 rounded"
          role="alert"
        >
          <AlertCircle className="w-5 h-5 flex-shrink-0 mt-0.5 text-red-600" />
          <div>
            <p className="font-medium">Submission Notice</p>
            <p>{errorMessage}</p>
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" noValidate>
        {/* Anti-spam Honeypot (hidden from real users) */}
        <div className="hidden" aria-hidden="true">
          <label htmlFor="website-url">Leave this empty</label>
          <input
            id="website-url"
            type="text"
            tabIndex={-1}
            autoComplete="off"
            {...register("honeypot")}
          />
        </div>

        {/* Full Name & Phone Number */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label
              htmlFor="fullName"
              className="block text-xs font-semibold uppercase tracking-wider text-navy-deep mb-1.5"
            >
              Full Name <span className="text-red-500">*</span>
            </label>
            <input
              id="fullName"
              type="text"
              autoComplete="name"
              placeholder="e.g. Rajesh Sharma"
              className={`w-full px-3.5 py-2.5 text-sm bg-ivory border ${
                errors.fullName ? "border-red-400 focus:border-red-500" : "border-lightBorder focus:border-gold"
              } focus:outline-none focus:bg-white transition-colors`}
              {...register("fullName")}
              aria-invalid={errors.fullName ? "true" : "false"}
            />
            {errors.fullName && (
              <p className="mt-1 text-xs text-red-600">{errors.fullName.message}</p>
            )}
          </div>

          <div>
            <label
              htmlFor="phone"
              className="block text-xs font-semibold uppercase tracking-wider text-navy-deep mb-1.5"
            >
              Phone Number <span className="text-red-500">*</span>
            </label>
            <input
              id="phone"
              type="tel"
              autoComplete="tel"
              placeholder="+91 98765 43210"
              className={`w-full px-3.5 py-2.5 text-sm bg-ivory border ${
                errors.phone ? "border-red-400 focus:border-red-500" : "border-lightBorder focus:border-gold"
              } focus:outline-none focus:bg-white transition-colors`}
              {...register("phone")}
              aria-invalid={errors.phone ? "true" : "false"}
            />
            {errors.phone && (
              <p className="mt-1 text-xs text-red-600">{errors.phone.message}</p>
            )}
          </div>
        </div>

        {/* Email Address & Practice Area Dropdown */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label
              htmlFor="email"
              className="block text-xs font-semibold uppercase tracking-wider text-navy-deep mb-1.5"
            >
              Email Address <span className="text-xs text-mutedGrey lowercase font-normal">(optional)</span>
            </label>
            <input
              id="email"
              type="email"
              autoComplete="email"
              placeholder="name@example.com"
              className={`w-full px-3.5 py-2.5 text-sm bg-ivory border ${
                errors.email ? "border-red-400 focus:border-red-500" : "border-lightBorder focus:border-gold"
              } focus:outline-none focus:bg-white transition-colors`}
              {...register("email")}
            />
            {errors.email && (
              <p className="mt-1 text-xs text-red-600">{errors.email.message}</p>
            )}
          </div>

          <div>
            <label
              htmlFor="practiceArea"
              className="block text-xs font-semibold uppercase tracking-wider text-navy-deep mb-1.5"
            >
              Area of Legal Assistance <span className="text-red-500">*</span>
            </label>
            <select
              id="practiceArea"
              defaultValue=""
              className={`w-full px-3.5 py-2.5 text-sm bg-ivory border ${
                errors.practiceArea ? "border-red-400 focus:border-red-500" : "border-lightBorder focus:border-gold"
              } focus:outline-none focus:bg-white transition-colors`}
              {...register("practiceArea")}
              aria-invalid={errors.practiceArea ? "true" : "false"}
            >
              <option value="" disabled>
                -- Select Area of Law --
              </option>
              <option value="Criminal Defense">Criminal Defense</option>
              <option value="White-Collar Crime / CBI / ED / PMLA">
                White-Collar Crime / CBI / ED / PMLA
              </option>
              <option value="Family and Matrimonial Law">
                Family and Matrimonial Law
              </option>
              <option value="Tribunal Matters">Tribunal Matters</option>
              <option value="Other Legal Enquiry">Other Legal Enquiry</option>
            </select>
            {errors.practiceArea && (
              <p className="mt-1 text-xs text-red-600">{errors.practiceArea.message}</p>
            )}
          </div>
        </div>

        {/* Preferred Contact Method */}
        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-navy-deep mb-2">
            Preferred Contact Method <span className="text-xs text-mutedGrey lowercase font-normal">(optional)</span>
          </label>
          <div className="grid grid-cols-3 gap-3">
            {["Phone Call", "WhatsApp", "Email"].map((method) => (
              <label
                key={method}
                className="flex items-center gap-2 p-2.5 border border-lightBorder bg-ivory/50 cursor-pointer hover:bg-white text-xs font-medium text-charcoal"
              >
                <input
                  type="radio"
                  value={method}
                  {...register("preferredContact")}
                  className="accent-gold"
                />
                <span>{method}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Brief Enquiry */}
        <div>
          <div className="flex justify-between items-baseline mb-1.5">
            <label
              htmlFor="briefEnquiry"
              className="block text-xs font-semibold uppercase tracking-wider text-navy-deep"
            >
              Brief Enquiry <span className="text-red-500">*</span>
            </label>
            <span className="text-[11px] text-mutedGrey">
              Do not include confidential evidence
            </span>
          </div>
          <textarea
            id="briefEnquiry"
            rows={4}
            placeholder="Please outline the nature of your legal question, procedural stage (trial, appeal, tribunal), and relief sought..."
            className={`w-full px-3.5 py-2.5 text-sm bg-ivory border ${
              errors.briefEnquiry ? "border-red-400 focus:border-red-500" : "border-lightBorder focus:border-gold"
            } focus:outline-none focus:bg-white transition-colors`}
            {...register("briefEnquiry")}
            aria-invalid={errors.briefEnquiry ? "true" : "false"}
          />
          {errors.briefEnquiry && (
            <p className="mt-1 text-xs text-red-600">{errors.briefEnquiry.message}</p>
          )}
        </div>

        {/* Privacy Acknowledgement Checkbox */}
        <div className="pt-2">
          <label className="flex items-start gap-3 cursor-pointer">
            <input
              type="checkbox"
              className="mt-1 accent-gold w-4 h-4 rounded border-lightBorder text-gold"
              {...register("privacyAccepted")}
            />
            <span className="text-xs text-charcoal/80 leading-relaxed font-light">
              I acknowledge that sending an enquiry does not create an advocate-client relationship. Information submitted is handled with confidentiality for the purpose of assessing the enquiry. <span className="text-red-500">*</span>
            </span>
          </label>
          {errors.privacyAccepted && (
            <p className="mt-1 text-xs text-red-600 pl-7">
              {errors.privacyAccepted.message}
            </p>
          )}
        </div>

        {/* Submit Button */}
        <div className="pt-3">
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full inline-flex items-center justify-center px-8 py-3.5 text-xs sm:text-sm font-semibold uppercase tracking-widest text-navy-deep bg-gradient-to-r from-gold via-gold-light to-gold hover:from-gold-light hover:to-gold transition-all duration-300 shadow-gold disabled:opacity-70 disabled:cursor-not-allowed group"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                <span>Verifying &amp; Submitting...</span>
              </>
            ) : (
              <>
                <Send className="w-4 h-4 mr-2 transition-transform group-hover:translate-x-0.5" />
                <span>Submit Consultation Enquiry</span>
              </>
            )}
          </button>
        </div>

        {/* Privacy Assurance Footer */}
        <div className="flex items-center justify-center gap-2 text-[11px] text-mutedGrey pt-2">
          <Lock className="w-3 h-3 text-gold" />
          <span>SSL Encrypted • Strict Professional Confidentiality Standards</span>
        </div>
      </form>
    </div>
  );
};
