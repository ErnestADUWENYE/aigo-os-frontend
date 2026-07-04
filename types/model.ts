export type ModelProvider =
  | "openai"
  | "anthropic"
  | "google"
  | "mistral"
  | "meta"
  | "cohere"
  | "custom";

export type ModelRiskLevel = "low" | "medium" | "high" | "critical";

export type Model = {
  id: string;
  organization_id: string;
  workspace_id: string;
  name: string;
  provider: ModelProvider | string;
  version?: string;
  purpose?: string;
  modality: "text" | "image" | "audio" | "video" | "multimodal";
  risk_level: ModelRiskLevel;
  evaluation_status?: "not_evaluated" | "passed" | "failed" | "needs_review";
  last_evaluated_at?: string;
  known_limitations?: string[];
  created_at: string;
  updated_at?: string;
};