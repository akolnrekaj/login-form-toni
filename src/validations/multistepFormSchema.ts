import z from "zod";

export const multistepFormSchema = z.object({
  fName: z
    .string()
    .min(2, "First name must be at least 2 charachters long")
    .max(20, "First name can be up to 20 charachters long"),
  lName: z
    .string()
    .min(2, "Last name must be at least 2 charachters long")
    .max(20, "Last name can be up to 20 characters long"),
  dateOfBirth: z.string(),
  gender: z.string(),
  oib: z.string().optional(),
  citizenship: z.string(),
  placeOfResidance: z.string(),
  address: z.string(),
  idNumber: z.string(),
  issueDate: z.string(),
  expiryDate: z.string(),
  issuingBody: z.string(),
  issuedBy: z.string().optional(),
});

export type MultistepFormSchema = z.infer<typeof multistepFormSchema>;
