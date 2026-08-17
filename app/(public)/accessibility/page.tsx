import { PublicContainer } from "@/components/public/public-container";

export default function Page() {
  return (
    <section
      style={{
        padding: "120px 0",
        background: "#f4f0e8",
      }}
    >
      <PublicContainer>
        <div
          style={{
            maxWidth: "760px",
          }}
        >
          <p
            style={{
              margin: "0 0 14px",
              color: "#365b7d",
              fontSize: "11px",
              fontWeight: 800,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
            }}
          >
            AIGO-OS
          </p>

          <h1
            style={{
              margin: 0,
              color: "#07111f",
              fontSize: "clamp(46px, 5vw, 72px)",
              lineHeight: 1,
              letterSpacing: "-0.05em",
            }}
          >
            Accessibility
          </h1>

          <p
            style={{
              margin: "24px 0 0",
              color: "#3f4a5a",
              fontSize: "17px",
              lineHeight: 1.65,
            }}
          >
            This page is reserved for the official AIGO-OS Accessibility content.
          </p>
        </div>
      </PublicContainer>
    </section>
  );
}

