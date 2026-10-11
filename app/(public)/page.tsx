import Link from "next/link";

import { PublicContainer } from "@/components/public/public-container";
import styles from "./page.module.css";

const products = [
  {
    number: "01",
    name: "Govern",
    title: "Understand your governance.",
    description:
      "Understand what requirements apply, how controls relate to them, and who is accountable.",
    href: "/products/aigo-os-govern",
  },
  {
    number: "02",
    name: "Impact",
    title: "Understand the impact of change.",
    description:
      "Explore enterprise dependencies and identify what could be affected when something changes.",
    href: "/products/aigo-os-impact",
  },
  {
    number: "03",
    name: "Assurance",
    title: "Understand what supports your assurance.",
    description:
      "Trace assurance claims to supporting evidence and identify when changes may require reassessment.",
    href: "/products",
  },
] as const;

const systemCategories = [
  "GRC",
  "ITSM",
  "CMDB",
  "Cloud",
  "Observability",
  "Enterprise Architecture",
  "AI Platforms",
] as const;

const contextItems = [
  "Processes",
  "Services",
  "Applications",
  "Infrastructure",
  "Suppliers",
  "Policies",
  "Controls",
  "Ownership",
] as const;

const integrationNodes = [
  "GRC",
  "ITSM",
  "CMDB",
  "Observability",
  "Architecture",
  "AI Platforms",
] as const;

const enterprisePlatforms = [
  { name: "ServiceNow", logo: null },
  { name: "SAP", logo: "/images/platforms/sap.svg" },
  { name: "Salesforce", logo: null },
  { name: "Microsoft", logo: null },
  { name: "AWS", logo: null },
  { name: "Google Cloud", logo: "/images/platforms/googlecloud.svg" },
  { name: "Oracle", logo: null },
  { name: "Workday", logo: null },
  { name: "Atlassian", logo: "/images/platforms/atlassian.svg" },
  { name: "Snowflake", logo: "/images/platforms/snowflake.svg" },
  { name: "Databricks", logo: "/images/platforms/databricks.svg" },
  { name: "Okta", logo: "/images/platforms/okta.svg" },
  { name: "GitHub", logo: "/images/platforms/github.svg" },
  { name: "Splunk", logo: "/images/platforms/splunk.svg" },
  { name: "Dynatrace", logo: "/images/platforms/dynatrace.svg" },
  { name: "Kubernetes", logo: "/images/platforms/kubernetes.svg" },
] as const;

export default function HomePage() {
  return (
    <main className={styles.home}>
      {/* HERO */}
      <section className={styles.hero}>
        <PublicContainer>
          <div className={styles.heroContent}>
            <p className={styles.eyebrow}>
              Connected Enterprise Intelligence
            </p>

            <h1 className={styles.heroTitle}>
              Understand Your Enterprise.
              <span>Decide with Confidence.</span>
            </h1>

            <p className={styles.heroDescription}>
              AIGO-OS connects information across enterprise
              systems to help organizations understand governance,
              dependencies, the impact of change and assurance.
            </p>

            <div className={styles.heroActions}>
              <Link
                href="/platform"
                className={styles.primaryButton}
              >
                Explore the Platform
              </Link>

              <Link
                href="/products"
                className={styles.secondaryButton}
              >
                Explore Products
              </Link>
            </div>
          </div>
        </PublicContainer>
      </section>
      <section id="enterprise-preview" className={styles.enterprisePreview}>
        <div className={styles.enterprisePreviewIntro}>
          <p className={styles.enterprisePreviewEyebrow}>
            THE AIGO-OS EXPERIENCE
          </p>
          <h2>See your enterprise in context.</h2>
          <p>
            Explore how enterprise changes, connected information and
            dependencies come together in one workspace.
          </p>
        </div>

        <div className={styles.enterprisePreviewFrame}>
          <img
            src="/images/aigo-os-enterprise-home.png"
            alt="Illustrative AIGO-OS Enterprise Home dashboard showing recent enterprise changes, connected context and dependencies."
            className={styles.enterprisePreviewImage}
            width="1536"
            height="1024"
            loading="lazy"
          />
        </div>

        <p className={styles.enterprisePreviewCaption}>
          Illustrative product experience
        </p>
      </section>

      {/* Original Connected Intelligence animation */}
      <section className={styles.foundationSection}>
        <PublicContainer>

          <div className={styles.foundationGrid}>

            <div className={styles.foundationCopy}>
              <p className={styles.sectionLabelLight}>
                Designed for the existing enterprise
              </p>

              <h2>
                Add intelligence without replacing the systems
                that already run the organization.
              </h2>

              <p>
                AIGO-OS works with selected information from existing
                enterprise systems and AI platforms, relating records
                and signals through shared business context rather than
                requiring another operational system of record.
              </p>

              <div className={styles.foundationActions}>
                <Link href="/platform">
                  Explore the Platform
                  <span aria-hidden="true">→</span>
                </Link>

                <Link href="/integrations">
                  View Integrations
                </Link>
              </div>
            </div>


            <div className={styles.integrationSystem}>

              <div
                className={styles.integrationOrbitTwo}
                aria-hidden="true"
              />


              {/* Animated connections from enterprise systems into AIGO-OS */}
              <svg
                className={styles.orbitConnectionLayer}
                viewBox="0 0 420 420"
                preserveAspectRatio="none"
                aria-hidden="true"
              >
                <line
                  className={styles.orbitSpoke1}
                  x1="210"
                  y1="210"
                  x2="210"
                  y2="45"
                />

                <line
                  className={styles.orbitSpoke2}
                  x1="210"
                  y1="210"
                  x2="353"
                  y2="127"
                />

                <line
                  className={styles.orbitSpoke3}
                  x1="210"
                  y1="210"
                  x2="353"
                  y2="293"
                />

                <line
                  className={styles.orbitSpoke4}
                  x1="210"
                  y1="210"
                  x2="210"
                  y2="375"
                />

                <line
                  className={styles.orbitSpoke5}
                  x1="210"
                  y1="210"
                  x2="67"
                  y2="293"
                />

                <line
                  className={styles.orbitSpoke6}
                  x1="210"
                  y1="210"
                  x2="67"
                  y2="127"
                />


                {/* Signals travelling from enterprise systems into AIGO-OS */}

                <circle
                  r="4"
                  className={`${styles.orbitInboundSignal} ${styles.orbitInboundSignal1}`}
                >
                  <animateMotion
                    dur="4.8s"
                    begin="0s"
                    repeatCount="indefinite"
                    path="M 210 45 L 210 210"
                  />
                </circle>


                <circle
                  r="4"
                  className={`${styles.orbitInboundSignal} ${styles.orbitInboundSignal2}`}
                >
                  <animateMotion
                    dur="4.8s"
                    begin="-0.8s"
                    repeatCount="indefinite"
                    path="M 353 127 L 210 210"
                  />
                </circle>


                <circle
                  r="4"
                  className={`${styles.orbitInboundSignal} ${styles.orbitInboundSignal3}`}
                >
                  <animateMotion
                    dur="4.8s"
                    begin="-1.6s"
                    repeatCount="indefinite"
                    path="M 353 293 L 210 210"
                  />
                </circle>


                <circle
                  r="4"
                  className={`${styles.orbitInboundSignal} ${styles.orbitInboundSignal4}`}
                >
                  <animateMotion
                    dur="4.8s"
                    begin="-2.4s"
                    repeatCount="indefinite"
                    path="M 210 375 L 210 210"
                  />
                </circle>


                <circle
                  r="4"
                  className={`${styles.orbitInboundSignal} ${styles.orbitInboundSignal5}`}
                >
                  <animateMotion
                    dur="4.8s"
                    begin="-3.2s"
                    repeatCount="indefinite"
                    path="M 67 293 L 210 210"
                  />
                </circle>


                <circle
                  r="4"
                  className={`${styles.orbitInboundSignal} ${styles.orbitInboundSignal6}`}
                >
                  <animateMotion
                    dur="4.8s"
                    begin="-4s"
                    repeatCount="indefinite"
                    path="M 67 127 L 210 210"
                  />
                </circle>
              </svg>


              {/* Primary travelling enterprise signal */}
              <div
                className={`${styles.orbitMotionLayer} ${styles.orbitMotionPrimary}`}
                aria-hidden="true"
              >
                <span />
              </div>


              {/* Secondary signal, offset around the same orbit */}


              <svg
                className={styles.integrationConnections}
                viewBox="0 0 600 600"
                preserveAspectRatio="none"
                aria-hidden="true"
              >
                <line x1="300" y1="300" x2="300" y2="58" />
                <line x1="300" y1="300" x2="508" y2="178" />
                <line x1="300" y1="300" x2="508" y2="422" />
                <line x1="300" y1="300" x2="300" y2="542" />
                <line x1="300" y1="300" x2="92" y2="422" />
                <line x1="300" y1="300" x2="92" y2="178" />
              </svg>


              <div
                className={`${styles.integrationSignalOrbit} ${styles.integrationSignalOrbitOne}`}
                aria-hidden="true"
              >
                <span />
              </div>

              <div
                className={`${styles.integrationSignalOrbit} ${styles.integrationSignalOrbitTwo}`}
                aria-hidden="true"
              >
                <span />
              </div>

              <div
                className={`${styles.integrationSignalOrbit} ${styles.integrationSignalOrbitThree}`}
                aria-hidden="true"
              >
                <span />
              </div>


              <div className={styles.integrationCore}>
                <span>
                  AIGO-OS
                </span>

                <strong>
                  Connected
                  <br />
                  Intelligence
                </strong>
              </div>


              {integrationNodes.map((node, index) => (
                <div
                  key={node}
                  className={`${styles.integrationNode} ${styles[`integrationNode${index + 1}`]}`}
                >
                  <span />
                  {node}
                </div>
              ))}

            </div>

          </div>

        </PublicContainer>
      </section>



      {/* ENTERPRISE SYSTEM LANDSCAPE */}
      <section
        className={styles.systemsSection}
        aria-label="Examples of enterprise software platforms"
      >
        <PublicContainer>
          <p className={styles.systemsLabel}>
            Examples of enterprise platforms
          </p>

          <div className={styles.systemsViewport}>
            <div className={styles.systemsTrack}>
              {[0, 1].map((copy) => (
                <div
                  className={styles.systemsGroup}
                  key={copy}
                  aria-hidden={copy === 1}
                >
                  {enterprisePlatforms.map((platform) => (
                    <span
                      className={styles.systemName}
                      key={platform.name}
                    >
                      {platform.logo && (
                        <img
                          src={platform.logo}
                          alt=""
                          width={22}
                          height={22}
                          loading="lazy"
                        />
                      )}
                      <span>{platform.name}</span>
                    </span>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </PublicContainer>
      </section>

      {/* WHY AIGO-OS */}
      <section className={styles.contextSection}>
        <PublicContainer>
          <div className={styles.sectionHeading}>
            <p className={styles.eyebrow}>
              Why AIGO-OS
            </p>

            <h2>
              Your enterprise is connected.
              <span>Its information is fragmented.</span>
            </h2>

            <p>
              Important information lives across different
              systems. AIGO-OS brings relevant information
              and relationships into a shared context so
              teams can understand how things connect.
            </p>
          </div>

          <div className={styles.contextVisual}>
            <div className={styles.contextArchitectureHeader}>
              <div>
                <span className={styles.contextArchitectureKicker}>
                  CONNECTED ENTERPRISE MODEL
                </span>
                <h3>See the relationships behind every decision.</h3>
              </div>

              <span className={styles.contextArchitectureStatus}>
                SHARED ENTERPRISE CONTEXT
              </span>
            </div>

            <div className={styles.contextModel}>
              <div className={styles.contextModelRow}>
                <div className={styles.contextModelNode}>
                  <span className={styles.contextModelIndex}>01 / BUSINESS</span>
                  <strong>Processes</strong>
                  <small>Customer onboarding</small>
                </div>

                <div className={styles.contextModelNode}>
                  <span className={styles.contextModelIndex}>02 / SERVICE</span>
                  <strong>Services</strong>
                  <small>Identity verification</small>
                </div>

                <div className={styles.contextModelNode}>
                  <span className={styles.contextModelIndex}>03 / APPLICATION</span>
                  <strong>Applications</strong>
                  <small>Core business platform</small>
                </div>

                <div className={styles.contextModelNode}>
                  <span className={styles.contextModelIndex}>04 / TECHNOLOGY</span>
                  <strong>Infrastructure</strong>
                  <small>Cloud environment</small>
                </div>
              </div>

              <div
                className={styles.contextModelConnections}
                aria-hidden="true"
              >
                <span />
                <span />
                <span />
                <span />
              </div>

              <div className={styles.contextModelRelationships}>
                <div>
                  <span className={styles.contextRelationshipDot} />
                  <strong>Suppliers</strong>
                  <small>Provide technology</small>
                </div>

                <div>
                  <span className={styles.contextRelationshipDot} />
                  <strong>Policies</strong>
                  <small>Define requirements</small>
                </div>

                <div>
                  <span className={styles.contextRelationshipDot} />
                  <strong>Controls</strong>
                  <small>Address obligations</small>
                </div>

                <div>
                  <span className={styles.contextRelationshipDot} />
                  <strong>Ownership</strong>
                  <small>Establishes accountability</small>
                </div>
              </div>

              <div className={styles.contextIntelligence}>
                <div className={styles.contextIntelligenceIdentity}>
                  <span className={styles.contextIntelligenceLight} />
                  <div>
                    <span>AIGO-OS</span>
                    <strong>Connected Intelligence</strong>
                  </div>
                </div>

                <p>
                  Trace dependencies. Understand change.
                  Examine governance and evidence.
                </p>
              </div>
            </div>

            <p className={styles.contextModelNote}>
              Illustrative enterprise relationships — actual context
              reflects the information available from connected systems.
            </p>
          </div>
        </PublicContainer>
      </section>

      {/* INITIAL PRODUCTS */}
      <section className={styles.productsSection}>
        <PublicContainer>
          <div className={styles.sectionHeading}>
            <p className={styles.eyebrow}>
              AIGO-OS Products
            </p>

            <h2>
              What do you need
              <span>to understand?</span>
            </h2>

            <p>
              Start with governance, change impact or
              assurance. Three initial products built
              on a shared enterprise context.
            </p>
          </div>

          <div className={styles.productsGrid}>
            {products.map((product) => (
              <Link
                href={product.href}
                className={styles.productCard}
                key={product.name}
              >
                <div className={styles.productTop}>
                  <span
                    className={`${styles.productDot} ${
                      product.name === "Govern"
                        ? styles.productDotGovern
                        : product.name === "Impact"
                          ? styles.productDotImpact
                          : styles.productDotAssurance
                    }`}
                    aria-hidden="true"
                  />

                  <span className={styles.productNumber}>
                    {product.number}
                  </span>
                </div>

                <p className={styles.productName}>
                  AIGO-OS {product.name}
                </p>

                <h3>
                  {product.title}
                </h3>

                <p className={styles.productDescription}>
                  {product.description}
                </p>
              </Link>
            ))}
          </div>

          <div className={styles.productsFooter}>
            <Link
              href="/products"
              className={styles.textLink}
            >
              Explore all products
            </Link>
          </div>
        </PublicContainer>
      </section>

      {/* HOW THE PLATFORM WORKS */}
      <section className={styles.platformSection}>
        <PublicContainer>
          <div className={styles.platformLayout}>
            <div className={styles.platformCopy}>
              <p className={styles.eyebrow}>
                One shared foundation
              </p>

              <h2>
                Understand more than
                isolated records.
              </h2>

              <p>
                AIGO-OS works with information from
                existing enterprise systems and
                connects relevant entities, relationships
                and supporting evidence.
              </p>

              <p>
                This shared context helps teams examine
                governance questions, trace dependencies
                and understand when changes may affect
                existing decisions or assurance.
              </p>

              <Link
                href="/platform"
                className={styles.textLink}
              >
                How the platform works
              </Link>
            </div>

            <div className={styles.platformVisual}>
              <div className={styles.platformStep}>
                <span>01</span>
                <strong>Connect</strong>
                <p>
                  Relevant information from
                  enterprise systems
                </p>
              </div>

              <div className={styles.platformStep}>
                <span>02</span>
                <strong>Relate</strong>
                <p>
                  Entities, dependencies,
                  ownership and evidence
                </p>
              </div>

              <div className={styles.platformStep}>
                <span>03</span>
                <strong>Understand</strong>
                <p>
                  Governance, change impact
                  and assurance in context
                </p>
              </div>
            </div>
          </div>
        </PublicContainer>
      </section>

      {/* CLOSING CTA */}
      <section className={styles.ctaSection}>
        <PublicContainer>
          <div className={styles.ctaContent}>
            <p className={styles.eyebrow}>
              Start with your enterprise
            </p>

            <h2>
              What do you need
              to understand?
            </h2>

            <p>
              Explore how AIGO-OS can help your
              organization work with connected
              enterprise context.
            </p>

            <div className={styles.ctaActions}>
              <Link
                href="/talk-to-an-expert"
                className={styles.primaryButton}
              >
                Talk to an Expert
              </Link>

              <Link
                href="/solutions"
                className={styles.secondaryButton}
              >
                Explore Solutions
              </Link>
            </div>
          </div>
        </PublicContainer>
      </section>
    </main>
  );
}






