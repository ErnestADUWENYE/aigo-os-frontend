"use client";

import Link from "next/link";

import {
  ArrowLeft,
  ArrowRight,
} from "lucide-react";

import {
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";

import styles from "./capability-carousel.module.css";

const capabilities = [
  {
    title: "Enterprise Context",
    href: "/platform/enterprise-context",
    description:
      "Understand the business environment surrounding AI activity.",
    label: "Business context",
  },
  {
    title: "AI Business Mapping",
    href: "/platform/relationship-dependency-intelligence",
    description:
      "Relate AI to the business processes, systems and dependencies around it.",
    label: "Business relationships",
  },
  {
    title: "Activity & Event Correlation",
    href: "/platform/continuous-intelligence",
    description:
      "Connect AI signals with relevant operational and enterprise events.",
    label: "Signal correlation",
  },
  {
    title: "Contextual Intelligence",
    href: "/platform/contextual-reasoning",
    description:
      "Interpret AI activity together with existing enterprise context.",
    label: "Connected understanding",
  },
  {
    title: "Management Intelligence",
    href: "/platform",
    description:
      "Present connected context in a form management teams can use.",
    label: "Management view",
  },
  {
    title: "Governance Intelligence",
    href: "/products/aigo-os-govern",
    description:
      "Bring business context into governance assessment and prioritisation.",
    label: "Governance",
  },
  {
    title: "Business Impact Intelligence",
    href: "/products/aigo-os-impact",
    description:
      "Understand what business processes and dependencies may be affected by AI activity or change.",
    label: "Business impact",
  },
];

export function CapabilityCarousel() {
  const viewportRef = useRef<HTMLDivElement>(null);
  const activeRef = useRef(0);

  const [active, setActive] = useState(0);

  const moveTo = useCallback((index: number) => {
    const viewport = viewportRef.current;

    if (!viewport) {
      return;
    }

    const cards =
      viewport.querySelectorAll<HTMLElement>(
        "[data-capability-card]"
      );

    const nextIndex =
      (index + capabilities.length) %
      capabilities.length;

    const target = cards[nextIndex];

    if (!target) {
      return;
    }

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    viewport.scrollTo({
      left:
        target.offsetLeft -
        viewport.offsetLeft,
      behavior:
        reduceMotion
          ? "auto"
          : "smooth",
    });

    activeRef.current = nextIndex;
    setActive(nextIndex);
  }, []);

  useEffect(() => {
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (reduceMotion) {
      return;
    }

    const timer = window.setInterval(() => {
      moveTo(activeRef.current + 1);
    }, 2000);

    return () => {
      window.clearInterval(timer);
    };
  }, [moveTo]);

  return (
    <div className={styles.carousel}>
      <div className={styles.controls}>
        <div
          className={styles.progress}
          aria-label="Capability carousel"
        >
          {capabilities.map(
            (capability, index) => (
              <button
                key={capability.title}
                type="button"
                aria-label={`Show ${capability.title}`}
                aria-pressed={index === active}
                className={
                  index === active
                    ? styles.progressActive
                    : styles.progressDot
                }
                onClick={() => moveTo(index)}
              />
            )
          )}
        </div>

        <div className={styles.arrows}>
          <button
            type="button"
            aria-label="Previous capability"
            onClick={() =>
              moveTo(activeRef.current - 1)
            }
          >
            <ArrowLeft
              size={17}
              strokeWidth={1.8}
            />
          </button>

          <button
            type="button"
            aria-label="Next capability"
            onClick={() =>
              moveTo(activeRef.current + 1)
            }
          >
            <ArrowRight
              size={17}
              strokeWidth={1.8}
            />
          </button>
        </div>
      </div>

      <div
        ref={viewportRef}
        className={styles.viewport}
      >
        {capabilities.map((capability) => (
          <Link
            data-capability-card
            key={capability.href}
            href={capability.href}
            className={styles.card}
          >
            <span className={styles.cardLabel}>
              {capability.label}
            </span>

            <div className={styles.cardCopy}>
              <h3>
                {capability.title}
              </h3>

              <p>
                {capability.description}
              </p>
            </div>

            <span className={styles.cardAction}>
              Explore

              <ArrowRight
                size={14}
                strokeWidth={1.8}
              />
            </span>
          </Link>
        ))}

        <div
          className={styles.endSpacer}
          aria-hidden="true"
        />
      </div>
    </div>
  );
}


