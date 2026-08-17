import Link from "next/link";

import { PublicContainer } from "@/components/public/public-container";

import styles from "./page.module.css";

const events = [
  {
    time: "09:42",
    type: "AI activity",
    title: "Agent activity observed",
    context: "Customer Operations",
  },
  {
    time: "09:47",
    type: "Enterprise event",
    title: "Process change recorded",
    context: "Customer Support",
  },
  {
    time: "09:51",
    type: "AI activity",
    title: "Authority-sensitive action",
    context: "Mapped business process",
  },
  {
    time: "09:55",
    type: "Operational event",
    title: "Review opened",
    context: "Digital Operations",
  },
];

export default function ActivityEventCorrelationPage() {
  return (
    <>
      <section className={styles.hero}>
        <PublicContainer>
          <div className={styles.heroIntro}>
            <div>
              <p className={styles.eyebrow}>
                Platform Capability 03
              </p>

              <h1>
                See AI activity in the sequence of events around it.
              </h1>
            </div>

            <div className={styles.heroSide}>
              <p>
                Activity & Event Correlation brings AI activity and
                relevant enterprise events into the same operational
                timeline so timing, sequence and business context can
                be understood together.
              </p>

              <div className={styles.heroActions}>
                <Link href="/talk-to-an-expert" className={styles.primaryButton}>
                  Talk to an Expert
                </Link>

                <Link href="/platform" className={styles.secondaryButton}>
                  Platform Overview
                </Link>
              </div>
            </div>
          </div>


          <div className={styles.timelineScene}>
            <div className={styles.timelineHeader}>
              <div>
                <span>Operational timeline</span>
                <strong>09:40 — 10:00</strong>
              </div>

              <span className={styles.timelineState}>
                Context retained
              </span>
            </div>


            <div className={styles.timelineTrack}>
              <div className={styles.timeScale}>
                <span>09:40</span>
                <span>09:45</span>
                <span>09:50</span>
                <span>09:55</span>
                <span>10:00</span>
              </div>

              <div className={styles.trackLine} />

              <div className={styles.timelineEvents}>
                {events.map((event, index) => (
                  <div
                    key={`${event.time}-${event.title}`}
                    className={styles.timelineEvent}
                    style={{
                      left: `${8 + index * 27}%`,
                    }}
                  >
                    <span className={styles.eventMarker} />

                    <div className={styles.eventCard}>
                      <span className={styles.eventTime}>
                        {event.time}
                      </span>

                      <span className={styles.eventType}>
                        {event.type}
                      </span>

                      <strong>
                        {event.title}
                      </strong>

                      <small>
                        {event.context}
                      </small>
                    </div>
                  </div>
                ))}
              </div>
            </div>


            <div className={styles.timelineFooter}>
              <span>AI activity</span>
              <span>Enterprise events</span>
              <span>Business context</span>
              <span>Operational sequence</span>
            </div>
          </div>
        </PublicContainer>
      </section>


      <section className={styles.sequenceSection}>
        <PublicContainer>
          <div className={styles.sequenceHeader}>
            <p className={styles.sectionLabel}>
              Sequence matters
            </p>

            <h2>
              The order of events can change how activity is understood.
            </h2>
          </div>

          <div className={styles.sequenceLayout}>
            <div className={styles.sequenceNarrative}>
              <span>09:42</span>

              <h3>
                Activity appears.
              </h3>

              <p>
                An AI event is observed inside a mapped business
                environment.
              </p>
            </div>

            <div className={styles.sequenceNarrative}>
              <span>09:47</span>

              <h3>
                The operating context changes.
              </h3>

              <p>
                A related process event occurs in the same business
                area.
              </p>
            </div>

            <div className={styles.sequenceNarrativeEmphasis}>
              <span>09:51</span>

              <h3>
                The next AI action now has more meaning.
              </h3>

              <p>
                Its timing and business relationship can be interpreted
                with the preceding event still visible.
              </p>
            </div>
          </div>
        </PublicContainer>
      </section>


      <section className={styles.lanesSection}>
        <PublicContainer>
          <div className={styles.lanesGrid}>
            <div className={styles.lanesCopy}>
              <p className={styles.sectionLabelLight}>
                Correlation lanes
              </p>

              <h2>
                Different operational signals can share the same business window.
              </h2>

              <p>
                Correlation does not require everything to be treated as
                the same event. AIGO-OS can preserve distinct activity
                and event types while presenting them in the same
                operational frame.
              </p>
            </div>


            <div className={styles.laneBoard}>
              <div className={styles.lane}>
                <span className={styles.laneName}>
                  AI activity
                </span>

                <div className={styles.laneContent}>
                  <span className={styles.laneBlock}>
                    Agent activity
                  </span>

                  <span className={styles.laneBlockStrong}>
                    Authority-sensitive action
                  </span>
                </div>
              </div>

              <div className={styles.lane}>
                <span className={styles.laneName}>
                  Enterprise events
                </span>

                <div className={styles.laneContent}>
                  <span className={styles.laneBlockOffset}>
                    Process change
                  </span>

                  <span className={styles.laneBlock}>
                    Operational review
                  </span>
                </div>
              </div>

              <div className={styles.lane}>
                <span className={styles.laneName}>
                  Business context
                </span>

                <div className={styles.contextBand}>
                  Customer Operations / Customer Support
                </div>
              </div>
            </div>
          </div>
        </PublicContainer>
      </section>


      <section className={styles.windowSection}>
        <PublicContainer>
          <div className={styles.windowHeader}>
            <div>
              <p className={styles.sectionLabel}>
                Operational windows
              </p>

              <h2>
                Correlation helps separate coincidence from useful context.
              </h2>
            </div>

            <p>
              Timing alone is not enough. AIGO-OS keeps business
              relationships visible so the operational window can be
              interpreted with greater discipline.
            </p>
          </div>


          <div className={styles.windowGrid}>
            <div className={styles.windowCard}>
              <span className={styles.windowTime}>
                09:40 — 09:45
              </span>

              <strong>
                Initial AI activity
              </strong>

              <p>
                Activity observed before the relevant process change.
              </p>
            </div>

            <div className={styles.windowCardActive}>
              <span className={styles.windowTime}>
                09:45 — 09:55
              </span>

              <strong>
                Correlated operating window
              </strong>

              <p>
                Process change, AI activity and operational review all
                occur inside the same mapped business context.
              </p>
            </div>

            <div className={styles.windowCard}>
              <span className={styles.windowTime}>
                09:55 — 10:00
              </span>

              <strong>
                Review period
              </strong>

              <p>
                Management attention follows the preceding sequence.
              </p>
            </div>
          </div>
        </PublicContainer>
      </section>


      <section className={styles.comparisonSection}>
        <PublicContainer>
          <div className={styles.comparisonGrid}>
            <div className={styles.comparisonCopy}>
              <p className={styles.sectionLabelLight}>
                Isolated vs correlated
              </p>

              <h2>
                A single record tells you what happened. Correlation helps explain what happened around it.
              </h2>
            </div>


            <div className={styles.comparisonViews}>
              <div className={styles.isolatedView}>
                <span>Isolated record</span>

                <strong>
                  Authority-sensitive action
                </strong>

                <p>
                  09:51
                </p>
              </div>

              <div className={styles.correlatedView}>
                <span>Correlated view</span>

                <div>
                  <small>09:47</small>
                  <strong>Process change</strong>
                </div>

                <div className={styles.correlatedFocus}>
                  <small>09:51</small>
                  <strong>Authority-sensitive action</strong>
                </div>

                <div>
                  <small>09:55</small>
                  <strong>Operational review</strong>
                </div>
              </div>
            </div>
          </div>
        </PublicContainer>
      </section>


      <section className={styles.handoffSection}>
        <PublicContainer>
          <div className={styles.handoff}>
            <div>
              <p className={styles.sectionLabelLight}>
                Next capability
              </p>

              <h2>
                Contextual Intelligence
              </h2>

              <p>
                Once activity and events are connected, AIGO-OS can
                interpret them with the surrounding business context
                intact.
              </p>
            </div>

            <Link
              href="/platform/contextual-intelligence"
              className={styles.nextLink}
            >
              Continue to capability 04
            </Link>
          </div>
        </PublicContainer>
      </section>
    </>
  );
}



