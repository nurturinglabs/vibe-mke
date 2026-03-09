import { C } from '../constants/colors';
import { F } from '../constants/fonts';
import { MEDIUMS } from '../constants/mediums';
import BrickTexture from './decorative/BrickTexture';

export default function About() {
  return (
    <section id="about" style={{ position: "relative", padding: "80px 24px", background: C.charcoal }}>
      <BrickTexture opacity={0.04} />
      <div style={{ position: "relative", zIndex: 2, maxWidth: 900, margin: "0 auto" }}>

        {/* Header */}
        <h2 style={{ fontFamily: F.heading, fontSize: "clamp(36px, 6vw, 56px)", color: C.cream,
          letterSpacing: 4, textTransform: "uppercase", marginBottom: 8 }}>
          What is this?
        </h2>
        <div style={{ width: 60, height: 3, background: C.brick, marginBottom: 40 }} />

        {/* Two-column: Origin story + Bold statement */}
        <div className="about-grid" style={{
          display: "grid", gridTemplateColumns: "1fr 1fr", gap: 32,
          marginBottom: 56,
        }}>
          {/* Left: Origin */}
          <div>
            <p style={{
              fontFamily: F.mono, fontSize: 10, letterSpacing: 3, textTransform: "uppercase",
              color: C.brick, marginBottom: 12,
            }}>
              THE ORIGIN
            </p>
            <p style={{ fontFamily: F.body, fontSize: 17, lineHeight: 1.8, color: `${C.cream}BB`, margin: 0 }}>
              In February 2025, Andrej Karpathy coined{" "}
              <strong style={{ color: C.amber }}>&quot;vibe coding&quot;</strong> —
              describe what you want, let AI build it, iterate by feel.
            </p>
            <p style={{ fontFamily: F.body, fontSize: 17, lineHeight: 1.8, color: `${C.cream}88`, marginTop: 16 }}>
              We took that idea and expanded it to{" "}
              <em style={{ color: C.cream, fontStyle: "normal", borderBottom: `2px solid ${C.brick}` }}>everything</em>.
            </p>
          </div>

          {/* Right: The pitch */}
          <div style={{
            padding: "28px 28px", background: C.warmBlack,
            borderLeft: `3px solid ${C.amber}`,
          }}>
            <p style={{
              fontFamily: F.body, fontSize: 16, lineHeight: 1.8,
              color: `${C.cream}CC`, margin: 0,
            }}>
              You don&apos;t need to be a developer, musician, designer, or filmmaker. You just need
              an <strong style={{ color: C.cream }}>idea</strong> and{" "}
              <strong style={{ color: C.cream }}>two hours</strong>.
            </p>
            <p style={{
              fontFamily: F.body, fontSize: 16, lineHeight: 1.8,
              color: `${C.cream}99`, margin: "14px 0 0",
            }}>
              AI handles the craft — you bring the taste, the judgment, and the vision.
            </p>
          </div>
        </div>

        {/* Mediums label */}
        <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 20 }}>
          <p style={{
            fontFamily: F.mono, fontSize: 10, letterSpacing: 3, textTransform: "uppercase",
            color: C.brick, margin: 0, whiteSpace: "nowrap",
          }}>
            PICK YOUR MEDIUM
          </p>
          <div style={{ flex: 1, height: 1, background: `${C.brick}33` }} />
        </div>

        {/* Mediums grid */}
        <div className="mediums-grid" style={{
          display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 0,
          border: `1px solid ${C.brick}22`,
          overflow: "hidden",
        }}>
          {MEDIUMS.map((m, i) => (
            <div key={m.label} style={{
              padding: "28px 22px",
              background: C.warmBlack,
              borderRight: i < MEDIUMS.length - 1 ? `1px solid ${C.brick}22` : "none",
              textAlign: "center",
            }}>
              <div style={{
                width: 48, height: 48, margin: "0 auto 14px",
                background: `${C.brick}15`,
                borderRadius: "50%",
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: 22,
              }}>
                {m.emoji}
              </div>
              <h3 style={{
                fontFamily: F.heading, fontSize: 20, color: C.cream, letterSpacing: 3,
                textTransform: "uppercase", margin: "0 0 8px",
              }}>
                {m.label}
              </h3>
              <p style={{
                fontFamily: F.mono, fontSize: 10, color: C.steel, letterSpacing: 0.5,
                margin: 0, lineHeight: 1.6,
              }}>
                {m.tools}
              </p>
            </div>
          ))}
        </div>

        {/* Responsive styles */}
        <style>{`
          @media (max-width: 700px) {
            .about-grid { grid-template-columns: 1fr !important; }
            .mediums-grid { grid-template-columns: repeat(2, 1fr) !important; }
            .mediums-grid > div:nth-child(2) { border-right: none !important; }
            .mediums-grid > div:nth-child(1),
            .mediums-grid > div:nth-child(2) { border-bottom: 1px solid ${C.brick}22 !important; }
          }
        `}</style>

      </div>
    </section>
  );
}
