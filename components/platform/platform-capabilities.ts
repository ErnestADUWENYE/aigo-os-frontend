export const platformCapabilities = [
  {
    number: "01",
    slug: "enterprise-connectivity",
    name: "Enterprise Connectivity",
    short:
      "Connect the enterprise systems where governance, technology, AI and business information already lives.",
    question:
      "Where does the information come from?",
  },

  {
    number: "02",
    slug: "enterprise-context",
    name: "Enterprise Context",
    short:
      "Give connected information a consistent organisational and business meaning.",
    question:
      "What is this, and what does it mean here?",
  },

  {
    number: "03",
    slug: "relationship-dependency-intelligence",
    name: "Relationship & Dependency Intelligence",
    short:
      "Understand how governance, technology, AI and business entities relate to and depend on one another.",
    question:
      "How is everything connected?",
  },

  {
    number: "04",
    slug: "continuous-intelligence",
    name: "Continuous Intelligence",
    short:
      "Keep enterprise context and relationships current as systems, conditions and dependencies change.",
    question:
      "What changed, and what does that change affect?",
  },

  {
    number: "05",
    slug: "contextual-reasoning",
    name: "Contextual Reasoning",
    short:
      "Reason across connected enterprise context to answer governance and business-impact questions.",
    question:
      "What does the connected context mean?",
  },

  {
    number: "06",
    slug: "explainability-traceability",
    name: "Explainability & Traceability",
    short:
      "Show the sources, relationships, context and current conditions behind material AIGO-OS conclusions.",
    question:
      "Why did AIGO-OS reach this conclusion?",
  },
] as const;


export type PlatformCapability =
  (typeof platformCapabilities)[number];
