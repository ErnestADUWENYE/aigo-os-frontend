import Link from "next/link";

import {
  ArrowRight,
  GitBranch,
  Layers3,
  Network,
  Radar,
  ShieldCheck,
  Target,
  UserRoundCheck,
} from "lucide-react";

import { PublicContainer } from "@/components/public/public-container";
import { StructuredData } from "@/components/public/structured-data";

import { createPageMetadata } from "@/lib/seo/metadata";
import { breadcrumbSchema } from "@/lib/seo/schema";

import styles from "./page.module.css";


export const metadata = createPageMetadata({
  title: "Enterprise AI Governance Solutions",
  description:
    "Explore the enterprise AI governance problems AIGO-OS is designed to address, from control applicability and accountability to dependencies, incidents and change impact.",
  path: "/solutions",
  keywords: [
    "AI governance solutions",
    "enterprise AI governance solutions",
    "AI governance controls",
    "AI accountability",
    "AI dependency intelligence",
    "AI business impact",
  ],
});


const governSolutions = [
  {
    icon: ShieldCheck,
    title: "Disconnected policies and controls",
    text:
      "Connect policy, requirement and control relationships so governance does not depend on repeatedly reconstructing fragmented records.",
    href: "/solutions/disconnected-policies-controls",
  },
  {
    icon: Target,
    title: "Unclear control applicability",
    text:
      "Understand which controls matter based on the actual business, technology, data and governance context surrounding AI activity.",
    href: "/solutions/unclear-control-applicability",
  },
  {
    icon: Layers3,
    title: "Unclear control coverage",
    text:
      "See where applicable requirements are covered and where missing, stale or incomplete governance coverage needs attention.",
    href: "/solutions/unclear-control-coverage",
  },
  {
    icon: UserRoundCheck,
    title: "Unclear ownership and accountability",
    text:
      "Connect AI activity to the people, responsibilities and business structures that remain accountable for outcomes.",
    href: "/solutions/unclear-ownership-accountability",
  },
  {
    icon: Radar,
    title: "Unknown governance change impact",
    text:
      "Understand how governance changes may affect controls, responsibilities, AI activity and the wider enterprise environment.",
    href: "/solutions/unknown-governance-change-impact",
  },
];


const impactSolutions = [
  {
    icon: Network,
    title: "Hidden dependencies",
    text:
      "Reveal relationships between AI, systems, services and enterprise dependencies that are difficult to understand in isolation.",
    href: "/solutions/hidden-dependencies",
  },
  {
    icon: GitBranch,
    title: "Unclear critical service dependencies",
    text:
      "Trace technology and AI relationships into critical services so important operational dependencies become visible.",
    href: "/solutions/unclear-critical-service-dependencies",
  },
  {
    icon: Radar,
    title: "Unclear incident business impact",
    text:
      "Connect incidents to services, dependencies and business context so management can understand potential significance.",
    href: "/solutions/unclear-incident-business-impact",
  },
  {
    icon: GitBranch,
    title: "Unknown change impact",
    text:
      "Follow change through connected relationships to understand what may be affected before decisions are made.",
    href: "/solutions/unknown-change-impact",
  },
];


export default function SolutionsPage() {
  return (
    <main>
      <StructuredData
        data={breadcrumbSchema([
          {
            name: "Home",
            path: "/",
          },
          {
            name: "Solutions",
            path: "/solutions",
          },
        ])}
      />


      <section className={styles.hero}>
        <PublicContainer>
          <div className={styles.heroGrid}>
            <div className={styles.heroCopy}>
              <p className={styles.eyebrow}>
                Solutions
              </p>

              <h1>
                Start with the governance problem.
              </h1>

              <p className={styles.lead}>
                Enterprise AI governance becomes difficult when the information
                needed to understand accountability, controls, dependencies and
                business impact is fragmented across the organisation.
              </p>
            </div>

            <aside className={styles.heroAside}>
              <span>
                AIGO-OS
              </span>

              <strong>
                Govern what AI means in the context of the enterprise.
              </strong>

              <p>
                AIGO-OS connects existing enterprise context so governance
                questions can be understood without treating AI as an isolated
                technical event.
              </p>
            </aside>
          </div>
        </PublicContainer>
      </section>


      <section className={styles.solutionsSection}>
        <PublicContainer>
          <div className={styles.sectionHeader}>
            <p className={styles.sectionLabel}>
              Govern
            </p>

            <div>
              <h2>
                Make governance state easier to understand.
              </h2>

              <p>
                Connect policies, controls, accountability and governance change
                to the enterprise context that determines what they mean.
              </p>
            </div>
          </div>

          <div className={styles.solutionGrid}>
            {governSolutions.map((solution) => {
              const Icon = solution.icon;

              return (
                <Link
                  key={solution.href}
                  href={solution.href}
                  className={styles.solutionCard}
                >
                  <div className={styles.iconWrap}>
                    <Icon
                      size={20}
                      strokeWidth={1.7}
                      aria-hidden="true"
                    />
                  </div>

                  <div className={styles.cardCopy}>
                    <h3>
                      {solution.title}
                    </h3>

                    <p>
                      {solution.text}
                    </p>
                  </div>

                  <span className={styles.cardAction}>
                    Explore solution

                    <ArrowRight
                      size={15}
                      strokeWidth={1.8}
                      aria-hidden="true"
                    />
                  </span>
                </Link>
              );
            })}
          </div>
        </PublicContainer>
      </section>


      <section className={styles.impactSection}>
        <PublicContainer>
          <div className={styles.sectionHeader}>
            <p className={styles.sectionLabel}>
              Impact
            </p>

            <div>
              <h2>
                Understand what AI activity may mean to the business.
              </h2>

              <p>
                Follow relationships across systems, services and dependencies
                so incidents and changes can be interpreted in business context.
              </p>
            </div>
          </div>

          <div className={styles.solutionGrid}>
            {impactSolutions.map((solution) => {
              const Icon = solution.icon;

              return (
                <Link
                  key={solution.href}
                  href={solution.href}
                  className={styles.solutionCard}
                >
                  <div className={styles.iconWrap}>
                    <Icon
                      size={20}
                      strokeWidth={1.7}
                      aria-hidden="true"
                    />
                  </div>

                  <div className={styles.cardCopy}>
                    <h3>
                      {solution.title}
                    </h3>

                    <p>
                      {solution.text}
                    </p>
                  </div>

                  <span className={styles.cardAction}>
                    Explore solution

                    <ArrowRight
                      size={15}
                      strokeWidth={1.8}
                      aria-hidden="true"
                    />
                  </span>
                </Link>
              );
            })}
          </div>
        </PublicContainer>
      </section>


      <section className={styles.finalSection}>
        <PublicContainer>
          <div className={styles.finalPanel}>
            <div>
              <p className={styles.sectionLabel}>
                Your environment
              </p>

              <h2>
                Have a governance problem that does not fit neatly into one category?
              </h2>
            </div>

            <div className={styles.finalCopy}>
              <p>
                Start with the question your organisation needs to answer.
                AIGO-OS is designed around connected enterprise context rather
                than isolated product categories.
              </p>

              <Link
                href="/talk-to-an-expert"
                className={styles.primaryAction}
              >
                Talk to an Expert

                <ArrowRight
                  size={16}
                  strokeWidth={1.8}
                  aria-hidden="true"
                />
              </Link>
            </div>
          </div>
        </PublicContainer>
      </section>
    </main>
  );
}
