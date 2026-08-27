import type { Metadata } from "next";

import Link from "next/link";

import {
  Accessibility,
  Eye,
  Keyboard,
  MessageSquareText,
  MousePointer2,
  MonitorSmartphone,
  Volume2,
} from "lucide-react";

import { PublicContainer } from "@/components/public/public-container";

import styles from "./page.module.css";


export const metadata: Metadata = {
  title: "Accessibility",

  description:
    "Learn about the AIGO-OS approach to website accessibility, keyboard access, readable content, responsive design, assistive technology support and accessibility feedback.",

  alternates: {
    canonical: "/accessibility",
  },

  robots: {
    index: true,
    follow: true,
  },
};


const accessibilityAreas = [
  {
    icon: Keyboard,
    title: "Keyboard access",
    text:
      "Interactive elements should be usable without requiring a mouse, with visible focus and a logical navigation order.",
  },

  {
    icon: Eye,
    title: "Readable content",
    text:
      "We aim for sufficient contrast, clear hierarchy, readable typography and content that remains understandable when users zoom or adjust display settings.",
  },

  {
    icon: MonitorSmartphone,
    title: "Responsive layouts",
    text:
      "Public pages are designed to adapt across desktop, tablet and mobile layouts without requiring unnecessary horizontal scrolling.",
  },

  {
    icon: MousePointer2,
    title: "Clear interaction",
    text:
      "Controls should have understandable labels, useful states and interaction patterns that do not depend only on colour or pointer position.",
  },

  {
    icon: Volume2,
    title: "Assistive technology",
    text:
      "We use semantic HTML and accessibility attributes where appropriate so screen readers and other assistive technologies can better interpret the interface.",
  },
];


export default function AccessibilityPage() {
  return (
    <main>
      <section className={styles.hero}>
        <PublicContainer>
          <div className={styles.heroLayout}>
            <div className={styles.heroCopy}>
              <p className={styles.eyebrow}>
                Trust &amp; Legal
              </p>

              <h1>
                Accessibility
              </h1>

              <p className={styles.lead}>
                AIGO-OS is being built so people can understand and use the
                public website across different devices, input methods and
                assistive technologies.
              </p>

              <p className={styles.updated}>
                Last updated: 27 August 2026
              </p>
            </div>


            <aside className={styles.heroAside}>
              <div className={styles.asideIcon}>
                <Accessibility
                  size={23}
                  strokeWidth={1.7}
                  aria-hidden="true"
                />
              </div>

              <span>
                Accessibility objective
              </span>

              <strong>
                We are working toward WCAG 2.2 Level AA.
              </strong>

              <p>
                Accessibility is treated as part of the website design and
                engineering process, not as a separate visual layer.
              </p>
            </aside>
          </div>
        </PublicContainer>
      </section>


      <section className={styles.contentSection}>
        <PublicContainer>
          <div className={styles.contentLayout}>
            <aside className={styles.pageNav}>
              <p>
                On this page
              </p>

              <nav aria-label="Accessibility sections">
                <a href="#commitment">
                  Our commitment
                </a>

                <a href="#standard">
                  Standard we are working toward
                </a>

                <a href="#practices">
                  Accessibility practices
                </a>

                <a href="#testing">
                  Testing and improvement
                </a>

                <a href="#limitations">
                  Known limitations
                </a>

                <a href="#feedback">
                  Accessibility feedback
                </a>
              </nav>
            </aside>


            <div className={styles.content}>
              <section
                id="commitment"
                className={styles.block}
              >
                <p className={styles.sectionLabel}>
                  Commitment
                </p>

                <h2>
                  Accessibility is part of how the website should work.
                </h2>

                <p>
                  AIGO-OS aims to make its public website usable by people
                  with a wide range of abilities, technologies and access
                  needs.
                </p>

                <p>
                  We consider accessibility in areas such as page structure,
                  keyboard interaction, contrast, responsive behaviour,
                  form labelling, focus visibility and support for
                  assistive technologies.
                </p>
              </section>


              <section
                id="standard"
                className={styles.block}
              >
                <p className={styles.sectionLabel}>
                  Standard
                </p>

                <h2>
                  We are working toward WCAG 2.2 Level AA.
                </h2>

                <p>
                  The Web Content Accessibility Guidelines provide a
                  recognised framework for making web content more
                  accessible to people with disabilities.
                </p>

                <p>
                  AIGO-OS uses WCAG 2.2 Level AA as the target for the
                  public website as it continues to develop.
                </p>

                <div className={styles.note}>
                  <strong>
                    This is an accessibility target, not a certification claim.
                  </strong>

                  <p>
                    The website is still being developed and reviewed.
                    Individual issues may exist and will be addressed as
                    they are identified.
                  </p>
                </div>
              </section>


              <section
                id="practices"
                className={styles.block}
              >
                <p className={styles.sectionLabel}>
                  Practices
                </p>

                <h2>
                  Accessibility considerations built into the website.
                </h2>

                <div className={styles.practiceGrid}>
                  {accessibilityAreas.map((item) => {
                    const Icon = item.icon;

                    return (
                      <article
                        key={item.title}
                        className={styles.practiceCard}
                      >
                        <div className={styles.cardIcon}>
                          <Icon
                            size={20}
                            strokeWidth={1.7}
                            aria-hidden="true"
                          />
                        </div>

                        <strong>
                          {item.title}
                        </strong>

                        <p>
                          {item.text}
                        </p>
                      </article>
                    );
                  })}
                </div>
              </section>


              <section
                id="testing"
                className={styles.block}
              >
                <p className={styles.sectionLabel}>
                  Testing and improvement
                </p>

                <h2>
                  Accessibility requires ongoing review.
                </h2>

                <p>
                  AIGO-OS uses a combination of design review, semantic
                  implementation, automated accessibility checks and
                  manual interaction testing as the website develops.
                </p>

                <p>
                  Automated tools can identify some accessibility issues,
                  but they cannot replace manual review, keyboard testing,
                  screen reader consideration and feedback from people
                  using the website in different ways.
                </p>

                <p>
                  Accessibility will continue to be reviewed as new pages,
                  components and interactions are introduced.
                </p>
              </section>


              <section
                id="limitations"
                className={styles.block}
              >
                <p className={styles.sectionLabel}>
                  Limitations
                </p>

                <h2>
                  Some accessibility issues may still exist.
                </h2>

                <p>
                  AIGO-OS is an evolving website and interface. Despite
                  accessibility work, some pages or interactions may not
                  yet perform equally well with every assistive technology,
                  browser, device or user configuration.
                </p>

                <p>
                  If we identify a material accessibility problem, we aim
                  to assess and address it as part of the ongoing website
                  development process.
                </p>
              </section>


              <section
                id="feedback"
                className={styles.block}
              >
                <div className={styles.blockHeading}>
                  <MessageSquareText
                    size={22}
                    strokeWidth={1.7}
                    aria-hidden="true"
                  />

                  <div>
                    <p className={styles.sectionLabel}>
                      Feedback
                    </p>

                    <h2>
                      Tell us if something is difficult to access or use.
                    </h2>
                  </div>
                </div>

                <p>
                  If you experience an accessibility problem on the
                  AIGO-OS website, please contact us and describe the page,
                  feature or interaction involved.
                </p>

                <p>
                  Where possible, include enough information for us to
                  understand the issue, such as the page address, browser,
                  device or assistive technology being used.
                </p>

                <Link
                  href="/company/contact"
                  className={styles.contactButton}
                >
                  Report an accessibility issue
                </Link>
              </section>
            </div>
          </div>
        </PublicContainer>
      </section>
    </main>
  );
}
