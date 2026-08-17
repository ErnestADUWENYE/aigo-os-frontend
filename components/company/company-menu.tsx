import Link from "next/link";
import type { CSSProperties, ReactNode } from "react";

type Props = {
  onNavigate?: () => void;
};

type CompanyRowProps = {
  href: string;
  title: string;
  description: string;
  icon: ReactNode;
  onNavigate?: () => void;
};

type SocialRowProps = {
  href: string;
  title: string;
  description: string;
  icon: ReactNode;
  iconColor: string;
  onNavigate?: () => void;
};


/* ==========================================================
   MAIN PANEL
   ========================================================== */

const panelStyle: CSSProperties = {
  width: "780px",
  maxWidth: "calc(100vw - 56px)",

  display: "grid",

  gridTemplateColumns: "1fr 1fr",

  gridTemplateRows: "56px 294px",

  overflow: "hidden",

  border: "1px solid #c9d5de",
  borderRadius: "14px",

  background: "#ffffff",

  boxShadow:
    "0 18px 42px rgba(8, 25, 43, 0.17)",

  color: "#07111f",
};


/* ==========================================================
   DARK HEADER
   ========================================================== */

const headerStyle: CSSProperties = {
  gridColumn: "1 / -1",

  height: "56px",

  display: "grid",

  gridTemplateColumns: "1fr 1fr",

  alignItems: "center",

  background:
    "linear-gradient(100deg, #09223b 0%, #123b5b 100%)",

  borderBottom: "1px solid #294a66",
};

const headerCellStyle: CSSProperties = {
  height: "100%",

  padding: "0 28px",

  display: "flex",
  alignItems: "center",

  color: "#e5b33b",

  fontSize: "10px",
  fontWeight: 850,

  letterSpacing: "0.11em",

  textTransform: "uppercase",
};

const rightHeaderCellStyle: CSSProperties = {
  ...headerCellStyle,

  borderLeft: "1px solid rgba(255,255,255,0.16)",
};


/* ==========================================================
   COLUMNS
   ========================================================== */

const leftColumnStyle: CSSProperties = {
  minWidth: 0,

  height: "294px",

  display: "grid",

  gridTemplateRows: "repeat(4, 1fr)",

  background: "#ffffff",
};

const rightColumnStyle: CSSProperties = {
  minWidth: 0,

  height: "294px",

  display: "grid",

  gridTemplateRows: "repeat(2, 1fr)",

  borderLeft: "1px solid #d6e0e7",

  background:
    "linear-gradient(145deg, #f1f5f8 0%, #f7f4ef 100%)",
};


/* ==========================================================
   ICONS
   ========================================================== */

const iconBoxStyle: CSSProperties = {
  width: "42px",
  height: "42px",

  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  flex: "0 0 auto",

  borderRadius: "9px",

  background: "#edf3f7",

  color: "#315f82",
};

const socialIconStyle: CSSProperties = {
  width: "48px",
  height: "48px",

  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  flex: "0 0 auto",

  border: "1px solid #cfdbe3",
  borderRadius: "10px",

  background: "rgba(255,255,255,0.86)",
};

const svgStyle: CSSProperties = {
  width: "23px",
  height: "23px",

  fill: "none",

  stroke: "currentColor",
  strokeWidth: 1.65,

  strokeLinecap: "round",
  strokeLinejoin: "round",
};


/* ==========================================================
   TEXT
   ========================================================== */

const titleStyle: CSSProperties = {
  display: "block",

  color: "#07111f",

  fontSize: "14px",
  fontWeight: 750,

  lineHeight: 1.2,
};

const descriptionStyle: CSSProperties = {
  display: "block",

  marginTop: "4px",

  color: "#617587",

  fontSize: "10px",

  lineHeight: 1.35,
};


/* ==========================================================
   ICON COMPONENTS
   ========================================================== */

function BuildingIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      style={svgStyle}
    >
      <path d="M5 21V6l7-3 7 3v15" />
      <path d="M9 8h2M13 8h2M9 12h2M13 12h2M9 16h2M13 16h2" />
      <path d="M3 21h18" />
    </svg>
  );
}

function PrinciplesIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      style={svgStyle}
    >
      <path d="M12 3 19 6v5c0 4.7-2.8 8.3-7 10-4.2-1.7-7-5.3-7-10V6l7-3Z" />
      <path d="m9 12 2 2 4-5" />
    </svg>
  );
}

function CareersIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      style={svgStyle}
    >
      <circle cx="8.5" cy="8" r="3" />
      <circle cx="16.5" cy="9" r="2.5" />

      <path d="M3 20v-2.2c0-3 2.5-5.3 5.5-5.3S14 14.8 14 17.8V20" />

      <path d="M14 14.2c.8-.5 1.7-.7 2.6-.7 2.6 0 4.4 1.9 4.4 4.3V20" />
    </svg>
  );
}

function ContactIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      style={svgStyle}
    >
      <rect
        x="3"
        y="5"
        width="18"
        height="14"
        rx="2"
      />

      <path d="m4 7 8 6 8-6" />
    </svg>
  );
}

function LinkedinIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      style={svgStyle}
    >
      <rect
        x="4"
        y="4"
        width="16"
        height="16"
        rx="2.5"
      />

      <path d="M8 10v6M8 7.8v.2M11 16v-3.3c0-1.8.9-2.8 2.4-2.8 1.6 0 2.6 1 2.6 3V16" />
    </svg>
  );
}

function YoutubeIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      style={svgStyle}
    >
      <rect
        x="3"
        y="6"
        width="18"
        height="12"
        rx="4"
      />

      <path d="m10 9 5 3-5 3V9Z" />
    </svg>
  );
}


/* ==========================================================
   ROW COMPONENTS
   ========================================================== */

function CompanyRow({
  href,
  title,
  description,
  icon,
  onNavigate,
}: CompanyRowProps) {
  return (
    <Link
      href={href}
      onClick={onNavigate}
      style={{
        minHeight: 0,

        padding: "0 28px",

        display: "grid",

        gridTemplateColumns:
          "42px minmax(0, 1fr)",

        alignItems: "center",

        gap: "15px",

        borderBottom:
          "1px solid #d9e2e8",

        color: "inherit",

        textDecoration: "none",
      }}
    >
      <span style={iconBoxStyle}>
        {icon}
      </span>

      <span style={{ minWidth: 0 }}>
        <strong style={titleStyle}>
          {title}
        </strong>

        <small style={descriptionStyle}>
          {description}
        </small>
      </span>
    </Link>
  );
}


function SocialRow({
  href,
  title,
  description,
  icon,
  iconColor,
  onNavigate,
}: SocialRowProps) {
  return (
    <Link
      href={href}
      onClick={onNavigate}
      style={{
        minHeight: 0,

        padding: "0 28px",

        display: "flex",

        alignItems: "center",
        justifyContent: "space-between",

        gap: "22px",

        borderBottom:
          "1px solid #d5dfe6",

        color: "inherit",

        textDecoration: "none",
      }}
    >
      <span style={{ minWidth: 0 }}>
        <strong style={titleStyle}>
          {title}
        </strong>

        <small style={descriptionStyle}>
          {description}
        </small>
      </span>

      <span
        style={{
          ...socialIconStyle,
          color: iconColor,
        }}
      >
        {icon}
      </span>
    </Link>
  );
}


/* ==========================================================
   COMPANY MENU
   ========================================================== */

export function CompanyMenu({
  onNavigate,
}: Props) {
  return (
    <div style={panelStyle}>

      {/* DARK UNIFIED HEADER */}

      <div style={headerStyle}>
        <div style={headerCellStyle}>
          Company
        </div>

        <div style={rightHeaderCellStyle}>
          Follow AIGO-OS
        </div>
      </div>


      {/* LEFT HALF */}

      <section style={leftColumnStyle}>

        <CompanyRow
          href="/company/about"
          title="About AIGO-OS"
          description="What we are building and why."
          icon={<BuildingIcon />}
          onNavigate={onNavigate}
        />

        <CompanyRow
          href="/company/principles"
          title="Our Principles"
          description="How we think about enterprise AI."
          icon={<PrinciplesIcon />}
          onNavigate={onNavigate}
        />

        <CompanyRow
          href="/company/careers"
          title="Careers"
          description="Building the AIGO-OS team."
          icon={<CareersIcon />}
          onNavigate={onNavigate}
        />

        <CompanyRow
          href="/company/contact"
          title="Contact"
          description="Find the right conversation."
          icon={<ContactIcon />}
          onNavigate={onNavigate}
        />

      </section>


      {/* RIGHT HALF */}

      <section style={rightColumnStyle}>

        <SocialRow
          href="/company/linkedin"
          title="LinkedIn"
          description="Company updates and perspectives."
          icon={<LinkedinIcon />}
          iconColor="#0a66c2"
          onNavigate={onNavigate}
        />

        <SocialRow
          href="/company/youtube"
          title="YouTube"
          description="Demos, briefings and conversations."
          icon={<YoutubeIcon />}
          iconColor="#ff0000"
          onNavigate={onNavigate}
        />

      </section>

    </div>
  );
}
