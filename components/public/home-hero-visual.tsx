"use client";

import { useEffect, useState } from "react";

import {
  ArrowDown,
  Bot,
  Boxes,
  Building2,
  CircleCheck,
  Network,
} from "lucide-react";

import styles from "./home-hero-visual.module.css";

const scenarios = [
  {
    source: "Customer support agent",
    signal: "Model version changed",
    context: [
      ["Business process", "Customer complaint handling"],
      ["Connected system", "CRM"],
      ["Business dependency", "Customer communications"],
    ],
    governance: "Customer-facing AI changed",
    impact: "Complaint handling may be affected",
  },
  {
    source: "Finance automation",
    signal: "Approval logic changed",
    context: [
      ["Business process", "Invoice approval"],
      ["Connected system", "ERP"],
      ["Business dependency", "Payment operations"],
    ],
    governance: "Approval authority changed",
    impact: "Payment workflow may be affected",
  },
  {
    source: "Internal AI assistant",
    signal: "Tool access changed",
    context: [
      ["Business process", "Software delivery"],
      ["Connected system", "Source control"],
      ["Business dependency", "Engineering workflow"],
    ],
    governance: "Access scope changed",
    impact: "Delivery activity may be affected",
  },
];

export function HomeHeroVisual() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (reduceMotion || paused) {
      return;
    }

    const timer = window.setInterval(() => {
      setActive((current) => (current + 1) % scenarios.length);
    }, 7000);

    return () => window.clearInterval(timer);
  }, [paused]);

  const scenario = scenarios[active];

  return (
    <div
      className={styles.visual}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={() => setPaused(false)}
    >
      <div className={styles.topline}>
        <span>Example signal flow</span>

        <div className={styles.dots} aria-label="Example selector">
          {scenarios.map((item, index) => (
            <button
              key={item.source}
              type="button"
              aria-label={`Show example ${index + 1}`}
              aria-pressed={index === active}
              className={
                index === active
                  ? styles.dotActive
                  : styles.dot
              }
              onClick={() => setActive(index)}
            />
          ))}
        </div>
      </div>

      <div className={styles.signal}>
        <div className={styles.icon}>
          <Bot size={18} strokeWidth={1.7} />
        </div>

        <div>
          <span>Signal from AI-enabled platform</span>
          <strong>{scenario.source}</strong>
          <p>{scenario.signal}</p>
        </div>
      </div>

      <div className={styles.flow}>
        <span />
        <ArrowDown size={16} strokeWidth={1.7} />
      </div>

      <div className={styles.aigo}>
        <div className={styles.aigoIcon}>
          <Network size={18} strokeWidth={1.7} />
        </div>

        <div>
          <span>AIGO-OS</span>
          <strong>Relates signal to enterprise context</strong>
        </div>
      </div>

      <div className={styles.contextGrid}>
        {scenario.context.map(([label, value], index) => (
          <div
            className={styles.contextItem}
            key={label}
            style={{ animationDelay: `${index * 120}ms` }}
          >
            <span>{label}</span>
            <strong>{value}</strong>
          </div>
        ))}
      </div>

      <div className={styles.outputs}>
        <div>
          <div className={styles.outputIcon}>
            <CircleCheck size={16} strokeWidth={1.8} />
          </div>

          <span>Governance relevance</span>
          <strong>{scenario.governance}</strong>
        </div>

        <div>
          <div className={styles.outputIcon}>
            <Building2 size={16} strokeWidth={1.8} />
          </div>

          <span>Potential business impact</span>
          <strong>{scenario.impact}</strong>
        </div>
      </div>

      <div className={styles.caption}>
        <Boxes size={14} strokeWidth={1.7} />
        Existing enterprise context remains in existing systems.
      </div>
    </div>
  );
}
