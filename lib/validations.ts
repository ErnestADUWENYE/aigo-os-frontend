import { z } from "zod";

export const requiredString = z.string().min(1, "This field is required.");

export const emailSchema = z.string().email("Enter a valid email address.");

export const agentSchema = z.object({
  name: requiredString,
  type: requiredString,
  autonomy_level: requiredString,
  risk_level: requiredString,
  owner: z.string().optional(),
  description: z.string().optional(),
});

export const policySchema = z.object({
  name: requiredString,
  category: requiredString,
  severity: requiredString,
  enforcement_mode: requiredString,
  description: z.string().optional(),
});

export const reviewDecisionSchema = z.object({
  decision: requiredString,
  decision_reason: z.string().optional(),
});

export const incidentSchema = z.object({
  title: requiredString,
  category: requiredString,
  severity: requiredString,
  description: z.string().optional(),
});

export const riskSchema = z.object({
  title: requiredString,
  category: requiredString,
  inherent_level: requiredString,
  residual_level: requiredString,
  mitigation_plan: z.string().optional(),
});