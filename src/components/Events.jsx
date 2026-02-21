import { C } from '../constants/colors';
import { F } from '../constants/fonts';
import { EVENTS } from '../constants/events';
import BrickTexture from './decorative/BrickTexture';

export default function Events() {
  return (
    <section id="events" style={{ padding: "80px 24px", background: C.charcoal, position: "relative" }}>
      <BrickTexture opacity={0.03} />
      <div style={{ position: "relative", zIndex: 2, maxWidth: 900, margin: "0 auto" }}>
        <h2 style={{ fontFamily: F.heading, fontSize: "clamp(36px, 6vw, 56px)", color: C.cream,
          letterSpacing: 4, textTransform: "uppercase", marginBottom: 8 }}>
          Upcoming Events
        </h2>
        <div style={{ width: 60, height: 3, background: C.brick, marginBottom: 48 }} />

        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          {EVENTS.map((e, i) => (
            <div key={i} style={{
              display: "flex", alignItems: "stretch",
              background: e.status === "next" ? `${C.brick}12` : C.warmBlack,
              border: e.status === "next" ? `2px solid ${C.brick}88` : `1px solid ${C.brick}22`,
              overflow: "hidden",
            }}>
              <div style={{
                minWidth: 85, padding: "18px 14px",
                background: e.status === "next" ? C.brick : `${C.brick}33`,
                display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
              }}>
                <span style={{ fontFamily: F.mono, fontSize: 10, letterSpacing: 2,
                  color: e.status === "next" ? `${C.cream}CC` : C.steel }}>{e.month}</span>
                <span style={{ fontFamily: F.heading, fontSize: 34,
                  color: e.status === "next" ? C.cream : C.brickLight, lineHeight: 1 }}>{e.day}</span>
              </div>

              <div style={{ flex: 1, padding: "18px 22px", display: "flex", flexDirection: "column", justifyContent: "center" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                  <h3 style={{ fontFamily: F.heading, fontSize: 20, color: C.cream,
                    letterSpacing: 3, textTransform: "uppercase", margin: 0 }}>{e.title}</h3>
                  {e.status === "next" && (
                    <span style={{ fontFamily: F.mono, fontSize: 8, letterSpacing: 2, padding: "3px 8px",
                      background: C.amber, color: C.warmBlack, textTransform: "uppercase", fontWeight: 700 }}>NEXT</span>
                  )}
                </div>
                <p style={{ fontFamily: F.body, fontSize: 13, color: `${C.cream}77`, margin: "5px 0 0" }}>{e.desc}</p>
              </div>

              {e.status === "next" && (
                <div style={{ display: "flex", alignItems: "center", padding: "0 20px" }}>
                  <button style={{
                    fontFamily: F.heading, fontSize: 15, letterSpacing: 3, textTransform: "uppercase",
                    padding: "11px 24px", background: C.amber, color: C.warmBlack,
                    border: "none", cursor: "pointer", whiteSpace: "nowrap",
                  }}>RSVP →</button>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Venue */}
        <div style={{
          marginTop: 28, padding: "22px 26px", background: C.warmBlack,
          borderLeft: `4px solid ${C.amber}`, display: "flex", alignItems: "flex-start", gap: 14,
        }}>
          <span style={{ fontSize: 22 }}>📍</span>
          <div>
            <p style={{ fontFamily: F.body, fontSize: 15, color: C.cream, margin: "0 0 4px", fontWeight: 600 }}>
              Milwaukee Public Library — Central Branch
            </p>
            <p style={{ fontFamily: F.mono, fontSize: 12, color: C.steel, margin: 0 }}>
              814 W Wisconsin Ave · 6:00 PM – 8:30 PM · Free parking after 6pm
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
