import Link from "next/link";

import {
  ArrowUpRight,
  BriefcaseBusiness,
  Building2,
  Mail,
  ShieldCheck,
} from "lucide-react";

import styles from "./company-menu.module.css";

type Props = {
  onNavigate?: () => void;
};

/* ==========================================================
   BRAND ICONS

   Kept locally as SVGs because the installed lucide-react
   version does not expose LinkedIn / YouTube brand icons.
========================================================== */

function LinkedInIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      width="19"
      height="19"
      aria-hidden="true"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect
        x="3"
        y="3"
        width="18"
        height="18"
        rx="3"
      />

      <path d="M8 10v7" />

      <path d="M8 7.5v.01" />

      <path d="M12 17v-4a3 3 0 0 1 6 0v4" />

      <path d="M12 10v7" />
    </svg>
  );
}

function YouTubeIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      width="20"
      height="20"
      aria-hidden="true"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path
        d="
          M21 12
          c0 2.4-.25 4-.55 4.8
          a2.6 2.6 0 0 1-1.6 1.6
          C17.4 19 12 19 12 19
          s-5.4 0-6.85-.6
          a2.6 2.6 0 0 1-1.6-1.6
          C3.25 16 3 14.4 3 12
          s.25-4 .55-4.8
          a2.6 2.6 0 0 1 1.6-1.6
          C6.6 5 12 5 12 5
          s5.4 0 6.85.6
          a2.6 2.6 0 0 1 1.6 1.6
          C20.75 8 21 9.6 21 12Z
        "
      />

      <path d="m10 9 5 3-5 3Z" />
    </svg>
  );
}


/* ==========================================================
   COMPANY LINKS
========================================================== */

const companyLinks = [
  {
    icon: Building2,
    title: "About AIGO-OS",
    description: "What we are building and why.",
    href: "/company/about",
  },

  {
    icon: ShieldCheck,
    title: "Our Principles",
    description: "How we think about enterprise AI.",
    href: "/company/principles",
  },

  {
    icon: BriefcaseBusiness,
    title: "Careers",
    description: "Building the AIGO-OS team.",
    href: "/company/careers",
  },

  {
    icon: Mail,
    title: "Contact",
    description: "Find the right conversation.",
    href: "/company/contact",
  },
];


/* ==========================================================
   COMPANY MENU
========================================================== */

export function CompanyMenu({
  onNavigate,
}: Props) {
  return (
    <div className={styles.menu}>

      {/* =====================================================
          TOP BAR
      ===================================================== */}

      <div className={styles.topBar}>
        <span>
          Company
        </span>

        <span>
          Follow AIGO-OS
        </span>
      </div>


      {/* =====================================================
          CONTENT
      ===================================================== */}

      <div className={styles.menuBody}>

        {/* ===================================================
            COMPANY
        =================================================== */}

        <section className={styles.companySection}>

          <div className={styles.sectionLabel}>
            Company
          </div>

          <div className={styles.companyGrid}>

            {companyLinks.map((item) => {
              const Icon = item.icon;

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={onNavigate}
                  className={styles.companyCard}
                >
                  <div className={styles.iconWrap}>
                    <Icon
                      size={19}
                      strokeWidth={1.7}
                      aria-hidden="true"
                    />
                  </div>

                  <div className={styles.cardCopy}>
                    <strong>
                      {item.title}
                    </strong>

                    <span>
                      {item.description}
                    </span>
                  </div>

                  <ArrowUpRight
                    className={styles.cardArrow}
                    size={15}
                    strokeWidth={1.8}
                    aria-hidden="true"
                  />
                </Link>
              );
            })}

          </div>
        </section>


        {/* ===================================================
            SOCIAL
        =================================================== */}

        <section className={styles.socialSection}>

          <div className={styles.sectionLabel}>
            Follow AIGO-OS
          </div>

          <div className={styles.socialGrid}>

            {/* LinkedIn */}

            <Link
              href="/company/linkedin"
              onClick={onNavigate}
              className={styles.socialCard}
            >
              <div
                className={`${styles.socialIcon} ${styles.linkedinIcon}`}
              >
                <LinkedInIcon />
              </div>

              <div className={styles.cardCopy}>
                <strong>
                  LinkedIn
                </strong>

                <span>
                  Company updates and perspectives.
                </span>
              </div>

              <ArrowUpRight
                className={styles.cardArrow}
                size={15}
                strokeWidth={1.8}
                aria-hidden="true"
              />
            </Link>


            {/* YouTube */}

            <Link
              href="/company/youtube"
              onClick={onNavigate}
              className={styles.socialCard}
            >
              <div
                className={`${styles.socialIcon} ${styles.youtubeIcon}`}
              >
                <YouTubeIcon />
              </div>

              <div className={styles.cardCopy}>
                <strong>
                  YouTube
                </strong>

                <span>
                  Demos, briefings and conversations.
                </span>
              </div>

              <ArrowUpRight
                className={styles.cardArrow}
                size={15}
                strokeWidth={1.8}
                aria-hidden="true"
              />
            </Link>

          </div>


          {/* =================================================
              OFFICIAL CHANNELS
          ================================================= */}

          <div className={styles.channelNote}>
            <span>
              Official channels
            </span>

            <p>
              Corporate and product communication from AIGO-OS.
            </p>
          </div>

        </section>

      </div>
    </div>
  );
}