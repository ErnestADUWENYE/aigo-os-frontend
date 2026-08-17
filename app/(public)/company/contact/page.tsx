import Link from "next/link";

import { PublicContainer } from "@/components/public/public-container";

import styles from "./page.module.css";

const conversations = [
  {
    label: "Explore AIGO-OS",
    title: "Talk to an Expert",
    text:
      "Discuss your AI environment, governance requirements or business-impact questions.",
    href: "/talk-to-an-expert",
  },
  {
    label: "Evaluate the product",
    title: "Request a Demo",
    text:
      "See AIGO-OS Govern or AIGO-OS Impact around a specific enterprise use case.",
    href: "/request-demo",
  },
  {
    label: "Commercial",
    title: "Contact Sales",
    text:
      "Discuss licensing, procurement, deployment and enterprise commercial requirements.",
    href: "/contact-sales",
  },
  {
    label: "Product guidance",
    title: "Help Center",
    text:
      "Access product guidance and support when the AIGO-OS knowledge base is connected.",
    href: "/help",
  },
];

export default function ContactPage() {
  return (
    <>
      <section className={styles.hero}>
        <PublicContainer>

          <p className={styles.eyebrow}>
            Contact
          </p>

          <h1>
            Find the right conversation.
          </h1>

          <p className={styles.intro}>
            Product evaluation, commercial questions and product support
            have different paths so enquiries can reach the right place.
          </p>

        </PublicContainer>
      </section>


      <section className={styles.routes}>
        <PublicContainer>

          <div className={styles.routeList}>

            {conversations.map((conversation) => (
              <Link
                key={conversation.title}
                href={conversation.href}
              >
                <span>
                  {conversation.label}
                </span>

                <strong>
                  {conversation.title}
                </strong>

                <p>
                  {conversation.text}
                </p>
              </Link>
            ))}

          </div>

        </PublicContainer>
      </section>


      <section className={styles.socialSection}>
        <PublicContainer>

          <div className={styles.socialHeader}>
            <p className={styles.sectionLabel}>
              Follow AIGO-OS
            </p>

            <h2>
              Follow company updates and public AIGO-OS content.
            </h2>
          </div>


          <div className={styles.socialGrid}>

            <Link href="/company/linkedin">
              <span>
                Corporate
              </span>

              <strong>
                LinkedIn
              </strong>

              <p>
                Company updates, perspectives, announcements and future hiring.
              </p>
            </Link>


            <Link href="/company/youtube">
              <span>
                Video
              </span>

              <strong>
                YouTube
              </strong>

              <p>
                Product demonstrations, briefings, discussions and recorded sessions.
              </p>
            </Link>

          </div>

        </PublicContainer>
      </section>
    </>
  );
}
