import Link from "next/link";

import {
  ArrowLeft,  BriefcaseBusiness,
  Check,
  CircleDollarSign,
  Globe2,
  Handshake,} from "lucide-react";

import { PublicContainer } from "@/components/public/public-container";
import { createPageMetadata } from "@/lib/seo/metadata";

import styles from "./page.module.css";

export const metadata = createPageMetadata({
  title: "Commercial Co-founder",
  description:
    "Join AIGO-OS as Commercial Co-founder and help build the commercial side of an early-stage enterprise AI governance company.",
  path: "/company/careers/commercial-cofounder",
  keywords: [
    "AIGO-OS Commercial Co-founder",
    "AI governance co-founder",
    "enterprise AI startup careers",
  ],
});

const responsibilities = [
  "Develop relationships with organisations evaluating or governing enterprise AI.",
  "Create early customer, design partner and commercial opportunities.",
  "Lead enterprise conversations from initial outreach through evaluation and commercial engagement.",
  "Help establish positioning, pricing, packaging and the early commercial model through real market conversations.",
  "Build and manage the early commercial pipeline.",
  "Support fundraising and investor conversations where appropriate.",
  "Help build the wider commercial function as AIGO-OS grows.",
];

const profile = [
  "Experience taking enterprise technology into organisations or developing enterprise customers.",
  "Ability to engage senior decision-makers and navigate complex enterprise buying processes.",
  "Strong commercial judgement and the ability to turn technical capability into a clear business proposition.",
  "Comfort working at an early stage where the commercial playbook is still being established.",
  "Willingness to work directly on outreach, customer development and commercial execution.",
  "Genuine interest in enterprise AI and the governance challenges developing around it.",
  "Founder-level ownership, persistence and comfort operating with uncertainty.",
];

const process = [
  {
    number: "01",
    title: "Application",
    text:
      "Tell us about your background, what you would bring and why this opportunity interests you.",
  },
  {
    number: "02",
    title: "Founder conversation",
    text:
      "A direct conversation about AIGO-OS, the company stage, expectations and mutual fit.",
  },
  {
    number: "03",
    title: "Working session",
    text:
      "A practical discussion about enterprise adoption, commercial development and how you would approach the role.",
  },
  {
    number: "04",
    title: "Founder alignment",
    text:
      "Discuss responsibilities, commitment, equity, vesting and how we would work together.",
  },
];

export default function CommercialCofounderPage() {
  return (
    <>
      <section className={styles.hero}>
        <PublicContainer>
          <Link
            href="/company/careers"
            className={styles.backLink}
          >
            <ArrowLeft size={15} strokeWidth={1.8} />
            Back to careers
          </Link>

          <div className={styles.heroLayout}>
            <div>
              <p className={styles.eyebrow}>
                Open opportunity
              </p>

              <h1>
                Commercial <span className={styles.noBreak}>Co-founder</span>
              </h1>

              <p className={styles.heroIntro}>
                Help take AIGO-OS into the enterprise and build the commercial
                side of the company from an early stage.
              </p>
            </div>

            <div className={styles.metaCard}>
              <div>
                <BriefcaseBusiness size={17} strokeWidth={1.7} />
                <span>TYPE</span>
                <strong>Co-founder</strong>
              </div>

              <div>
                <Globe2 size={17} strokeWidth={1.7} />
                <span>LOCATION</span>
                <strong>Flexible / Remote</strong>
              </div>

              <div>
                <CircleDollarSign size={17} strokeWidth={1.7} />
                <span>COMPENSATION</span>
                <strong>Initially equity-only</strong>
              </div>
            </div>
          </div>
        </PublicContainer>
      </section>

      <section className={styles.opportunitySection}>
        <PublicContainer>
          <div className={styles.twoColumn}>
            <div className={styles.stickyIntro}>
              <p className={styles.sectionLabel}>
                The opportunity
              </p>

              <h2>
                Take ownership of bringing AIGO-OS into the enterprise.
              </h2>

              <p>
                We are looking for a Commercial Co-founder to build the
                commercial side of AIGO-OS alongside the founder.
              </p>

              <p>
                This is not a conventional sales role. The immediate priority
                is to establish relationships with relevant organisations,
                create opportunities for them to evaluate AIGO-OS, develop
                early customer engagements and help turn adoption into a
                repeatable commercial business.
              </p>
            </div>

            <div className={styles.detailStack}>
              <div className={styles.detailBlock}>
                <span>WHAT YOU WOULD OWN</span>

                <ul>
                  {responsibilities.map((item) => (
                    <li key={item}>
                      <Check size={14} strokeWidth={2} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className={styles.detailBlock}>
                <span>WHO WE ARE LOOKING FOR</span>

                <ul>
                  {profile.map((item) => (
                    <li key={item}>
                      <Check size={14} strokeWidth={2} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className={styles.relevantBlock}>
                <span>ESPECIALLY RELEVANT</span>

                <p>
                  Experience in AI, enterprise software, governance, risk,
                  security, GRC, identity, observability, consulting or an
                  adjacent enterprise market would be valuable. Existing
                  relationships with enterprise technology, risk or AI
                  decision-makers would also be relevant.
                </p>
              </div>
            </div>
          </div>
        </PublicContainer>
      </section>

      <section className={styles.compensationSection}>
        <PublicContainer>
          <div className={styles.compensationPanel}>
            <div>
              <p className={styles.sectionLabelLight}>
                Compensation and commitment
              </p>

              <h2>
                This is initially an equity-only co-founder opportunity.
              </h2>
            </div>

            <div>
              <p>
                AIGO-OS does not currently offer a salary for this role. The
                successful person would join with meaningful equity and take
                genuine ownership of building the commercial side of the
                company.
              </p>

              <p>
                Equity, responsibilities, commitment and vesting terms would
                be agreed before joining. Salaried compensation may become
                possible as the company reaches an appropriate funding or
                revenue stage, but it is not currently guaranteed.
              </p>

              <p>
                We are open to discussing how the relationship begins,
                including an initial part-time commitment where appropriate,
                provided there is a serious intention and ability to take
                long-term ownership if there is a strong mutual fit.
              </p>
            </div>
          </div>
        </PublicContainer>
      </section>

      <section className={styles.processSection}>
        <PublicContainer>
          <div className={styles.processHeader}>
            <p className={styles.sectionLabel}>
              The process
            </p>

            <h2>
              A simple founder-level selection process.
            </h2>
          </div>

          <div className={styles.processGrid}>
            {process.map((item) => (
              <article key={item.number}>
                <span>{item.number}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </PublicContainer>
      </section>

      <section className={styles.applicationSection}>
        <PublicContainer>
          <div className={styles.applicationLayout}>
            <div className={styles.applicationIntro}>
              <p className={styles.sectionLabel}>
                Apply
              </p>

              <h2>
                Tell us what you would bring to AIGO-OS.
              </h2>

              <p>
                We are more interested in your experience, judgement,
                relationships and ability to build than in a perfectly formatted
                CV.
              </p>

              <div className={styles.applicationNote}>
                <Handshake size={18} strokeWidth={1.7} />

                <p>
                  Please apply only if you are comfortable exploring an
                  initially equity-only co-founder opportunity.
                </p>
              </div>
            </div>

            <form
  className={styles.applicationForm}
  action="/api/careers/commercial-cofounder"
  method="post"
>
  <div className={styles.formGrid}>
    <label>
      <span>Full name</span>

      <input
        type="text"
        name="name"
        autoComplete="name"
        placeholder="Your name"
        required
      />
    </label>

    <label>
      <span>Email</span>

      <input
        type="email"
        name="email"
        autoComplete="email"
        placeholder="you@example.com"
        required
      />
    </label>

    <label>
      <span>LinkedIn profile</span>

      <input
        type="url"
        name="linkedin"
        placeholder="https://www.linkedin.com/in/..."
      />
    </label>

    <label>
      <span>Location</span>

      <input
        type="text"
        name="location"
        placeholder="City / Country"
        required
      />
    </label>

    <label className={styles.fullWidth}>
      <span>
        Current role or company
      </span>

      <input
        type="text"
        name="currentRole"
        placeholder="Current role, company or relevant context"
        required
      />
    </label>

    <label className={styles.fullWidth}>
      <span>
        Why are you interested in building AIGO-OS as a Commercial Co-founder?
      </span>

      <textarea
        name="interest"
        rows={6}
        placeholder="Tell us why this opportunity is relevant to you."
        required
      />
    </label>

    <label className={styles.fullWidth}>
      <span>
        Tell us about your experience taking enterprise technology into organisations.
      </span>

      <textarea
        name="enterpriseExperience"
        rows={6}
        placeholder="Share relevant enterprise sales, commercial development, partnerships or customer-building experience."
        required
      />
    </label>

    <label className={styles.fullWidth}>
      <span>
        What relationships, market experience or capabilities would you bring?
      </span>

      <textarea
        name="contribution"
        rows={6}
        placeholder="Tell us what you could contribute to AIGO-OS."
        required
      />
    </label>

    <label>
      <span>
        Current commitment
      </span>

      <select
        name="commitment"
        defaultValue=""
        required
      >
        <option
          value=""
          disabled
        >
          Select one
        </option>

        <option value="full-time">
          Full-time
        </option>

        <option value="part-time">
          Part-time
        </option>

        <option value="flexible">
          Flexible
        </option>

        <option value="other">
          Other
        </option>
      </select>
    </label>

    <label>
      <span>
        I understand this is currently an equity-only opportunity
      </span>

      <select
        name="equityOnly"
        defaultValue=""
        required
      >
        <option
          value=""
          disabled
        >
          Select one
        </option>

        <option value="yes">
          Yes, I understand
        </option>

        <option value="no">
          No
        </option>
      </select>
    </label>
  </div>

  <div className={styles.formFooter}>
    <div>
      <p>
        Your application will be sent directly to AIGO-OS for review.
        Please do not include confidential or sensitive information.
      </p>
    </div>

    <button
      type="submit"
      className={styles.submitButton}
    >
      Submit application
    </button>
  </div>
</form>
          </div>
        </PublicContainer>
      </section>
    </>
  );
}




