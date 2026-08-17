import type { Metadata } from "next";
import Link from "next/link";

import {
  ArrowRight,
  Building2,
  Handshake,
  Landmark,
  Users,
} from "lucide-react";

import { PublicContainer } from "@/components/public/public-container";
import { openCareerRoles } from "@/data/careers";

import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Careers | AIGO-OS",
  description:
    "Explore open opportunities at AIGO-OS and other ways to work with us as an early customer, design partner, strategic partner or investor.",
};

const pathways = [
  {
    icon: Building2,
    label: "EARLY CUSTOMERS",
    title: "Explore AIGO-OS in your organisation",
    text:
      "For organisations with a real enterprise AI governance need and an interest in evaluating where AIGO-OS could fit.",
    href: "/contact?intent=early-customer",
    action: "Talk to us",
  },
  {
    icon: Users,
    label: "DESIGN PARTNERS",
    title: "Help shape AIGO-OS around real governance needs",
    text:
      "Work closely with us around a genuine enterprise use case, provide practical feedback and help validate AIGO-OS in real operating environments.",
    href: "/contact?intent=design-partner",
    action: "Become a design partner",
  },
  {
    icon: Handshake,
    label: "STRATEGIC PARTNERS",
    title: "Explore a meaningful partnership",
    text:
      "For organisations where integration, advisory, implementation, distribution or another ecosystem relationship could create mutual value.",
    href: "/contact?intent=strategic-partner",
    action: "Discuss a partnership",
  },
  {
    icon: Landmark,
    label: "INVESTORS",
    title: "Talk to us about the company we are building",
    text:
      "We welcome conversations with angel and early-stage investors who understand enterprise software, AI or governance and are interested in AIGO-OS.",
    href: "/contact?intent=investor",
    action: "Start a conversation",
  },
];

export default function CareersPage() {
  return (
    <>
      <section className={styles.hero}>
        <PublicContainer>
          <div className={styles.heroInner}>
            <p className={styles.eyebrow}>
              Careers at AIGO-OS
            </p>

            <h1>
              Build AIGO-OS with us.
            </h1>

            <p className={styles.heroIntro}>
              We are building an early-stage company around a governance
              operating layer for enterprise AI. Our open opportunities reflect
              what the company genuinely needs as it grows.
            </p>

            <a
              href="#open-opportunities"
              className={styles.heroButton}
            >
              View open opportunities
              <ArrowRight size={16} strokeWidth={1.8} />
            </a>
          </div>
        </PublicContainer>
      </section>

      <section
        className={styles.jobsSection}
        id="open-opportunities"
      >
        <PublicContainer>
          <div className={styles.jobsHeader}>
            <div>
              <p className={styles.sectionLabel}>
                Open opportunities
              </p>

              <h2>
                {openCareerRoles.length === 1
                  ? "1 open opportunity"
                  : `${openCareerRoles.length} open opportunities`}
              </h2>
            </div>

            <p>
              We only publish roles we are actively interested in filling.
              New opportunities will appear here as AIGO-OS grows.
            </p>
          </div>

          {openCareerRoles.length > 0 ? (
            <div className={styles.jobsDirectory}>
              {openCareerRoles.map((role) => (
                <Link
                  href={`/company/careers/${role.slug}`}
                  className={styles.jobRow}
                  key={role.slug}
                >
                  <div className={styles.jobPrimary}>
                    <span>
                      {role.department}
                    </span>

                    <h3>
                      {role.title}
                    </h3>

                    <p>
                      {role.summary}
                    </p>
                  </div>

                  <div className={styles.jobMeta}>
                    <div>
                      <span>LOCATION</span>
                      <strong>
                        {role.locationType}
                      </strong>
                    </div>

                    <div>
                      <span>TYPE</span>
                      <strong>
                        {role.type}
                      </strong>
                    </div>

                    <div>
                      <span>COMPENSATION</span>
                      <strong>
                        {role.compensation}
                      </strong>
                    </div>
                  </div>

                  <div className={styles.jobArrow}>
                    <ArrowRight size={18} strokeWidth={1.7} />
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className={styles.noRoles}>
              <h3>
                No open roles right now.
              </h3>

              <p>
                We will publish new opportunities here when they become
                available.
              </p>
            </div>
          )}
        </PublicContainer>
      </section>

      <section className={styles.workSection}>
        <PublicContainer>
          <div className={styles.workHeader}>
            <p className={styles.sectionLabelLight}>
              Work with AIGO-OS
            </p>

            <div>
              <h2>
                Joining the company is only one way to build with us.
              </h2>

              <p>
                We are also interested in serious conversations with
                organisations, design partners, strategic partners and
                investors where there is a clear reason to work together.
              </p>
            </div>
          </div>

          <div className={styles.pathwayGrid}>
            {pathways.map((pathway) => {
              const Icon = pathway.icon;

              return (
                <article
                  className={styles.pathway}
                  key={pathway.label}
                >
                  <div className={styles.pathwayTop}>
                    <div className={styles.pathwayIcon}>
                      <Icon size={19} strokeWidth={1.7} />
                    </div>

                    <span>
                      {pathway.label}
                    </span>
                  </div>

                  <div className={styles.pathwayContent}>
                    <h3>
                      {pathway.title}
                    </h3>

                    <p>
                      {pathway.text}
                    </p>

                    <Link href={pathway.href}>
                      {pathway.action}
                      <ArrowRight size={14} strokeWidth={1.8} />
                    </Link>
                  </div>
                </article>
              );
            })}
          </div>
        </PublicContainer>
      </section>

      <section className={styles.closing}>
        <PublicContainer>
          <div className={styles.closingLayout}>
            <p className={styles.sectionLabel}>
              AIGO-OS
            </p>

            <div>
              <h2>
                The right relationship matters more than the label.
              </h2>

              <p>
                Whether you are considering joining the company, evaluating
                AIGO-OS for your organisation, exploring a partnership or
                investing at an early stage, we are interested in serious
                conversations where there is a clear fit.
              </p>
            </div>
          </div>
        </PublicContainer>
      </section>
    </>
  );
}
