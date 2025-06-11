import * as z from "zod";

export const BasicDetailSchema = z.object({
  name: z.string().min(3, { message: "Name must be at least 3 characters" }),
  agent_type: z.string().min(3, { message: "Type must be at least 3 characters" }),
  system_instructions: z.string().min(20, { message: "Instruction must be at least 20 characters" }),
  model_name: z.string().min(3, { message: "Model must be at least 3 characters" }),
  is_active: z.boolean(),
  is_deleted: z.boolean(),
})


const ALLOWED = [
  "application/pdf",
  "text/plain",
  "text/csv",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
];

export const UploadFileSchema = z.object({
  agent_id: z.string().optional(),
  files: z
    .array(z.instanceof(File)
      .refine(f => ALLOWED.includes(f.type), {
        message: "Allowed types: PDF, TXT, CSV, DOCX"
      })
      .refine(f => f.size <= 200_000_000, {
        message: "Each file must be under 200MB"
      })
    )
    .min(1, { message: "At least one file is required" }),
});


export const ElevenLabsAPIsSchema = z.object({
  agent_id: z.string().optional(),
  api_key: z.string().min(11, { message: "Type must be at least 11 characters" }),
})