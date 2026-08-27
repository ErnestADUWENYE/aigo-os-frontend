import Link from "next/link";

import styles from "./product-resources.module.css";


type ProductResourcesProps = {
  product: "Govern" | "Impact";
};


function IntegrationsIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <rect x="3.5" y="4" width="6.5" height="6.5" rx="2" />
      <rect x="14" y="13.5" width="6.5" height="6.5" rx="2" />
      <path d="M10 7.25h3.1a3.65 3.65 0 0 1 3.65 3.65v2.6" />
      <path d="m14.7 11.4 2.05 2.1 2.05-2.1" />
    </svg>
  );
}


function HelpIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M5 4.5h10.2A3.8 3.8 0 0 1 19 8.3V19H8.8A3.8 3.8 0 0 0 5 22V4.5Z" />
      <path d="M5 18.8A4.7 4.7 0 0 1 8.8 17H19" />
      <path d="M9 8h6M9 11.5h4.5" />
    </svg>
  );
}


function TrustIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 3 19 6v5.2c0 4.5-2.6 7.7-7 9.8-4.4-2.1-7-5.3-7-9.8V6l7-3Z" />
      <path d="m8.9 12 2 2 4.3-4.5" />
    </svg>
  );
}


function ArrowIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M5 12h13" />
      <path d="m14 7 5 5-5 5" />
    </svg>
  );
}


const productContent = {
  Govern: {
    intro:
      "Move from understanding AIGO-OS Govern to connecting it, operating it and validating the enterprise controls around its deployment.",

    integrations: {
      label: "Connect Govern",
      title: "Integrations",
      text:
        "Connect GRC platforms, IT service management, policy repositories, control libraries and enterprise inventories so Govern can interpret governance in connected business context.",
      action: "View Govern Integrations",
    },

    help: {
      label: "Operate Govern",
      title: "Help Center",
      text:
        "Guidance for governance interpretation, control applicability, coverage analysis, governance change impact, accountability, assurance intelligence and product administration.",
      action: "Visit Govern Help",
    },

    trust: {
      label: "Deploy Govern",
      title: "Privacy & Trust",
      text:
        "Review security, privacy, data protection, architecture and assurance information for deploying AIGO-OS Govern within the enterprise environment.",
      action: "View Trust Information",
    },
  },


  Impact: {
    intro:
      "Move from understanding AIGO-OS Impact to connecting the enterprise context it needs, operating its impact intelligence and validating deployment requirements.",

    integrations: {
      label: "Connect Impact",
      title: "Integrations",
      text:
        "Connect IT service management, CMDB, observability, enterprise architecture, application inventories, data platforms and other sources that describe enterprise dependencies.",
      action: "View Impact Integrations",
    },

    help: {
      label: "Operate Impact",
      title: "Help Center",
      text:
        "Guidance for dependency intelligence, critical service dependencies, incident business impact, change impact, business context and product administration.",
      action: "Visit Impact Help",
    },

    trust: {
      label: "Deploy Impact",
      title: "Privacy & Trust",
      text:
        "Review security, privacy, data protection, architecture and assurance information for deploying AIGO-OS Impact across connected enterprise systems.",
      action: "View Trust Information",
    },
  },
} as const;


export function ProductResources({
  product,
}: ProductResourcesProps) {
  const productName = `AIGO-OS ${product}`;
  const content = productContent[product];

  const resources = [
    {
      href: "/integrations",
      content: content.integrations,
      icon: <IntegrationsIcon />,
      tone: styles.integrationResource,
    },
    {
      href: "/help",
      content: content.help,
      icon: <HelpIcon />,
      tone: styles.helpResource,
    },
    {
      href: "/trust",
      content: content.trust,
      icon: <TrustIcon />,
      tone: styles.trustResource,
    },
  ];

  return (
    <section className={styles.section}>
      <div className={styles.ambientGlow} aria-hidden="true" />

      <div className={styles.heading}>
        <div className={styles.headingCopy}>
          <p className={styles.eyebrow}>
            Product Resources
          </p>

          <h2>
            Connect, operate and trust{" "}
            <span>{productName}.</span>
          </h2>
        </div>

        <p className={styles.intro}>
          {content.intro}
        </p>
      </div>


      <div className={styles.resources}>
        {resources.map((resource) => (
          <Link
            key={resource.href}
            href={resource.href}
            className={`${styles.resource} ${resource.tone}`}
          >
            <div className={styles.resourceTop}>
              <div className={styles.iconShell}>
                {resource.icon}
              </div>

              <div
                className={styles.arrowShell}
                aria-hidden="true"
              >
                <ArrowIcon />
              </div>
            </div>


            <div className={styles.resourceCopy}>
              <span className={styles.label}>
                {resource.content.label}
              </span>

              <strong>
                {resource.content.title}
              </strong>

              <p>
                {resource.content.text}
              </p>
            </div>


            <div className={styles.resourceAction}>
              <span>
                {resource.content.action}
              </span>

              <ArrowIcon />
            </div>
          </Link>
        ))}
      </div>


      <div className={styles.resourceContext}>
        <span className={styles.contextMark} aria-hidden="true">
          <span />
          <span />
          <span />
        </span>

        <p>
          Product resources support the complete operating journey from
          enterprise connection and day-to-day use to deployment assurance.
        </p>
      </div>
    </section>
  );
}
