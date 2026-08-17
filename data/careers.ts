export type CareerStatus = "open" | "closed";

export type CareerRole = {
  slug: string;
  title: string;
  department: string;
  location: string;
  locationType: string;
  type: string;
  compensation: string;
  status: CareerStatus;
  summary: string;
};

export const careerRoles: CareerRole[] = [
  {
    slug: "commercial-cofounder",
    title: "Commercial Co-founder",
    department: "Commercial",
    location: "Flexible",
    locationType: "Remote",
    type: "Co-founder",
    compensation: "Initially equity-only",
    status: "open",
    summary:
      "Take ownership of bringing AIGO-OS into relevant organisations and help build the commercial side of the company from an early stage.",
  },
];

export const openCareerRoles = careerRoles.filter(
  (role) => role.status === "open"
);

export function getCareerRole(slug: string) {
  return careerRoles.find((role) => role.slug === slug);
}
