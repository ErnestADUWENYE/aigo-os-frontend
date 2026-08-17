"use client";

import Link from "next/link";
import { useState } from "react";

import styles from "./company-nav-item.module.css";

type Props = {
  onOpen?: () => void;
  onNavigate?: () => void;
};

export function CompanyNavItem({
  onOpen,
  onNavigate,
}: Props) {
  const [open, setOpen] = useState(false);

  function openMenu() {
    onOpen?.();
    setOpen(true);
  }

  function closeMenu() {
    setOpen(false);
  }

  function handleNavigate() {
    setOpen(false);
    onNavigate?.();
  }

  return (
    <div
      className={styles.root}
      onMouseEnter={openMenu}
      onMouseLeave={closeMenu}
      onFocus={openMenu}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) {
          closeMenu();
        }
      }}
    >
      <button
        type="button"
        className={`${styles.trigger} ${
          open ? styles.triggerOpen : ""
        }`}
        aria-haspopup="true"
        aria-expanded={open}
        onClick={() => {
          onOpen?.();
          setOpen((current) => !current);
        }}
      >
        Company

        <span
          className={`${styles.chevron} ${
            open ? styles.chevronOpen : ""
          }`}
          aria-hidden="true"
        />
      </button>


      <div
        className={`${styles.popover} ${
          open ? styles.popoverOpen : ""
        }`}
      >
        <div className={styles.panel}>

          <section className={styles.companyColumn}>
            <p className={styles.columnLabel}>
              Company
            </p>

            <Link
              href="/company/about"
              className={styles.companyLink}
              onClick={handleNavigate}
            >
              <strong>
                About AIGO-OS
              </strong>

              <span>
                What we are building and why.
              </span>
            </Link>

            <Link
              href="/company/principles"
              className={styles.companyLink}
              onClick={handleNavigate}
            >
              <strong>
                Our Principles
              </strong>

              <span>
                How we think about enterprise AI.
              </span>
            </Link>

            <Link
              href="/company/careers"
              className={styles.companyLink}
              onClick={handleNavigate}
            >
              <strong>
                Careers
              </strong>

              <span>
                Building the AIGO-OS team.
              </span>
            </Link>

            <Link
              href="/company/contact"
              className={styles.companyLink}
              onClick={handleNavigate}
            >
              <strong>
                Contact
              </strong>

              <span>
                Find the right conversation.
              </span>
            </Link>
          </section>


          <section className={styles.socialColumn}>
            <p className={styles.columnLabel}>
              Follow AIGO-OS
            </p>

            <Link
              href="/company/linkedin"
              className={styles.socialLink}
              onClick={handleNavigate}
            >
              <strong>
                LinkedIn
              </strong>

              <span>
                Company updates and perspectives
              </span>
            </Link>

            <Link
              href="/company/youtube"
              className={styles.socialLink}
              onClick={handleNavigate}
            >
              <strong>
                YouTube
              </strong>

              <span>
                Demos, briefings and conversations
              </span>
            </Link>

            <div className={styles.socialNote}>
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
    </div>
  );
}
