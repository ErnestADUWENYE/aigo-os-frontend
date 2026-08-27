"use client";

import {
  useEffect,
  useState,
} from "react";

import Link from "next/link";

import {
  Check,
  Settings2,
  ShieldCheck,
  X,
} from "lucide-react";

import styles from "./cookie-consent.module.css";


const CONSENT_KEY = "aigo-os-cookie-consent";
const CONSENT_VERSION = 1;


type ConsentPreferences = {
  version: number;
  necessary: true;
  analytics: boolean;
  updatedAt: string;
};


type View =
  | "hidden"
  | "banner"
  | "preferences";


function saveConsent(
  analytics: boolean
) {
  const consent: ConsentPreferences = {
    version: CONSENT_VERSION,
    necessary: true,
    analytics,
    updatedAt: new Date().toISOString(),
  };

  window.localStorage.setItem(
    CONSENT_KEY,
    JSON.stringify(consent)
  );

  window.dispatchEvent(
    new CustomEvent(
      "aigo-consent-changed",
      {
        detail: consent,
      }
    )
  );

  return consent;
}


function getStoredConsent():
  ConsentPreferences | null {
  try {
    const raw =
      window.localStorage.getItem(
        CONSENT_KEY
      );

    if (!raw) {
      return null;
    }

    const parsed =
      JSON.parse(raw) as
        Partial<ConsentPreferences>;

    if (
      parsed.version !== CONSENT_VERSION ||
      parsed.necessary !== true ||
      typeof parsed.analytics !== "boolean"
    ) {
      return null;
    }

    return parsed as ConsentPreferences;
  }
  catch {
    return null;
  }
}


export function CookieConsent() {
  const [view, setView] =
    useState<View>("hidden");

  const [analytics, setAnalytics] =
    useState(false);


  useEffect(() => {
    const timer = window.setTimeout(() => {
      const stored = getStoredConsent();

      if (!stored) {
        setView("banner");
        return;
      }

      setAnalytics(stored.analytics);
    }, 0);

    return () => {
      window.clearTimeout(timer);
    };
  }, []);


  useEffect(() => {
    function openPreferences() {
      const stored = getStoredConsent();

      setAnalytics(
        stored?.analytics ?? false
      );

      setView("preferences");
    }

    window.addEventListener(
      "aigo-open-cookie-settings",
      openPreferences
    );

    return () => {
      window.removeEventListener(
        "aigo-open-cookie-settings",
        openPreferences
      );
    };
  }, []);


  function acceptAll() {
    saveConsent(true);
    setAnalytics(true);
    setView("hidden");
  }


  function rejectOptional() {
    saveConsent(false);
    setAnalytics(false);
    setView("hidden");
  }


  function savePreferences() {
    saveConsent(analytics);
    setView("hidden");
  }


  return (
    <>
      {view === "banner" ? (
        <section
          className={styles.banner}
          aria-label="Cookie preferences"
        >
          <div className={styles.bannerInner}>
            <div className={styles.bannerIcon}>
              <ShieldCheck
                size={22}
                strokeWidth={1.7}
                aria-hidden="true"
              />
            </div>

            <div className={styles.bannerCopy}>
              <h2>
                Your privacy choices
              </h2>

              <p>
                AIGO-OS uses necessary technologies
                to operate this website. With your
                permission, we may also use optional
                analytics technologies to understand
                how the website is used and improve
                the experience.
              </p>

              <p className={styles.policyLinks}>
                Learn more in our{" "}
                <Link href="/privacy">
                  Privacy Policy
                </Link>
                {" "}and{" "}
                <Link href="/cookies">
                  Cookie Policy
                </Link>.
              </p>
            </div>

            <div className={styles.bannerActions}>
              <button
                type="button"
                className={styles.secondaryButton}
                onClick={rejectOptional}
              >
                Reject non-essential
              </button>

              <button
                type="button"
                className={styles.secondaryButton}
                onClick={() =>
                  setView("preferences")
                }
              >
                <Settings2
                  size={16}
                  strokeWidth={1.8}
                  aria-hidden="true"
                />

                Manage preferences
              </button>

              <button
                type="button"
                className={styles.primaryButton}
                onClick={acceptAll}
              >
                Accept all
              </button>
            </div>
          </div>
        </section>
      ) : null}


      {view === "preferences" ? (
        <div
          className={styles.overlay}
          role="presentation"
        >
          <section
            className={styles.dialog}
            role="dialog"
            aria-modal="true"
            aria-labelledby="cookie-preferences-title"
          >
            <div className={styles.dialogHeader}>
              <div>
                <span className={styles.dialogEyebrow}>
                  Privacy controls
                </span>

                <h2 id="cookie-preferences-title">
                  Cookie preferences
                </h2>
              </div>

              <button
                type="button"
                className={styles.closeButton}
                onClick={() => {
                  const stored =
                    getStoredConsent();

                  setView(
                    stored
                      ? "hidden"
                      : "banner"
                  );
                }}
                aria-label="Close cookie preferences"
              >
                <X
                  size={20}
                  aria-hidden="true"
                />
              </button>
            </div>


            <p className={styles.dialogIntro}>
              Choose which optional technologies
              AIGO-OS may use. Necessary technologies
              cannot be disabled because they are
              required for core website functionality
              and security.
            </p>


            <div className={styles.preferenceList}>
              <div className={styles.preference}>
                <div className={styles.preferenceCopy}>
                  <div className={styles.preferenceTitle}>
                    <h3>
                      Necessary
                    </h3>

                    <span className={styles.alwaysOn}>
                      <Check
                        size={13}
                        aria-hidden="true"
                      />

                      Always on
                    </span>
                  </div>

                  <p>
                    Required for essential website
                    functionality, security and the
                    operation of services you request.
                  </p>
                </div>
              </div>


              <div className={styles.preference}>
                <div className={styles.preferenceCopy}>
                  <div className={styles.preferenceTitle}>
                    <h3>
                      Analytics
                    </h3>

                    <label
                      className={styles.switch}
                      aria-label="Allow analytics"
                    >
                      <input
                        type="checkbox"
                        checked={analytics}
                        onChange={(event) =>
                          setAnalytics(
                            event.target.checked
                          )
                        }
                      />

                      <span
                        className={styles.slider}
                        aria-hidden="true"
                      />
                    </label>
                  </div>

                  <p>
                    Allows optional analytics
                    technologies that help us understand
                    website usage and improve AIGO-OS.
                    These remain disabled unless you
                    choose to allow them.
                  </p>
                </div>
              </div>
            </div>


            <div className={styles.dialogPolicies}>
              <Link href="/privacy">
                Privacy Policy
              </Link>

              <Link href="/cookies">
                Cookie Policy
              </Link>
            </div>


            <div className={styles.dialogActions}>
              <button
                type="button"
                className={styles.secondaryButton}
                onClick={rejectOptional}
              >
                Reject non-essential
              </button>

              <button
                type="button"
                className={styles.primaryButton}
                onClick={savePreferences}
              >
                Save preferences
              </button>
            </div>
          </section>
        </div>
      ) : null}
    </>
  );
}


export function openCookieSettings() {
  if (typeof window === "undefined") {
    return;
  }

  window.dispatchEvent(
    new Event(
      "aigo-open-cookie-settings"
    )
  );
}


