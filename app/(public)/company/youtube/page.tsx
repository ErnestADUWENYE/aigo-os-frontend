import Link from "next/link";

import { PublicContainer } from "@/components/public/public-container";

import { createPageMetadata } from "@/lib/seo/metadata";

import styles from "../social-placeholder.module.css";


export const metadata = createPageMetadata({
  title: "YouTube",
  description:
    "The official AIGO-OS YouTube channel is being prepared.",
  path: "/company/youtube",
  index: false,
});

export default function YouTubePage() {
  return (
    <main className={styles.page}>
      <PublicContainer>

        <div className={styles.content}>

          <p className={styles.eyebrow}>
            Follow AIGO-OS
          </p>

          <h1>
            YouTube
          </h1>

          <p>
            The AIGO-OS YouTube channel will host product demonstrations,
            enterprise AI briefings, discussions and recorded sessions.
          </p>

          <div className={styles.status}>
            <span>
              Status
            </span>

            <strong>
              Official channel is being prepared.
            </strong>
          </div>

          <Link href="/company/about">
            Back to AIGO-OS
          </Link>

        </div>

      </PublicContainer>
    </main>
  );
}

