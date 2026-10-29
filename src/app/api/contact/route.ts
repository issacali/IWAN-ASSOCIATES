import { NextResponse } from "next/server";
import { z } from "zod";

const contactSchema = z.object({
  fullName: z
    .string()
    .min(2, "Full name must be at least 2 characters")
    .max(100, "Full name must be under 100 characters"),
  phone: z
    .string()
    .min(10, "Please enter a valid phone number (at least 10 digits)")
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
    .min(15, "Please provide a brief outline of your enquiry (minimum 15 characters)")
    .max(2000, "Enquiry must not exceed 2000 characters"),
  privacyAccepted: z.literal(true, {
    errorMap: () => ({
      message: "You must accept the confidentiality and privacy acknowledgement to proceed",
    }),
  }),
  honeypot: z.string().optional(),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();

    // Anti-spam honeypot detection
    if (body.honeypot && body.honeypot.trim().length > 0) {
      return NextResponse.json(
        { success: false, message: "Spam detected." },
        { status: 400 }
      );
    }

    const validation = contactSchema.safeParse(body);

    if (!validation.success) {
      const errors = validation.error.flatten().fieldErrors;
      return NextResponse.json(
        {
          success: false,
          message: "Please correct the errors in the form.",
          errors,
        },
        { status: 422 }
      );
    }

    const data = validation.data;

    // Log enquiry securely on server console (without leaking secrets)
    console.log("[IWAN ASSOCIATES] Received Legal Consultation Enquiry:", {
      timestamp: new Date().toISOString(),
      fullName: data.fullName,
      phone: data.phone,
      practiceArea: data.practiceArea,
      preferredContact: data.preferredContact || "Not specified",
      enquiryLength: data.briefEnquiry.length,
    });

    // In a live production environment with SMTP/Resend configured,
    // dispatch email notifications to the advocates here.

    return NextResponse.json(
      {
        success: true,
        message:
          "Your enquiry has been received. Our legal team will review the details and contact you during consultation hours (10:00 AM – 08:00 PM).",
        referenceId: `IA-${Date.now().toString(36).toUpperCase()}`,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("[IWAN ASSOCIATES] Contact API Error:", error);
    return NextResponse.json(
      {
        success: false,
        message: "An unexpected server error occurred. Please call our office directly.",
      },
      { status: 500 }
    );
  }
}
