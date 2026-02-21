import { C } from '../constants/colors';
import { F } from '../constants/fonts';
import { MEDIUMS } from '../constants/mediums';
import BrickTexture from './decorative/BrickTexture';

export default function About() {
  return (
    <section style={{ position: "relative", padding: "80px 24px", background: C.charcoal }}>
      <BrickTexture opacity={0.04} />
      <div style={{ position: "relative", zIndex: 2, maxWidth: 900, margin: "0 auto" }}>
        <h2 style={{ fontFamily: F.heading, fontSize: "clamp(36px, 6vw, 56px)", color: C.cream,
          letterSpacing: 4, textTransform: "uppercase", marginBottom: 8 }}>
          What is this?
        </h2>
        <div style={{ width: 60, height: 3, background: C.brick, marginBottom: 32 }} />

        <p style={{ fontFamily: F.body, fontSize: 18, lineHeight: 1.8, color: `${C.cream}CC`, marginBottom: 28 }}>
          In February 2025, Andrej Karpathy coined <strong style={{ color: C.amber }}>"vibe coding"</strong> —
          describe what you want, let AI build it, iterate by feel. We took that idea and expanded it to <em>everything</em>.
        </p>

        <div style={{
          padding: "28px 32px", background: C.warmBlack, border: `1px solid ${C.brick}33`,
          borderLeft: `4px solid ${C.brick}`, marginBottom: 48,
        }}>
          <p style={{ fontFamily: F.body, fontSize: 17, lineHeight: 1.8, color: `${C.cream}BB`, margin: 0 }}>
            You don't need to be a developer, musician, designer, or filmmaker. You just need
            an idea and two hours. AI handles the craft — you bring the taste, the judgment,
            and the vision. We meet monthly, pick a medium, and everyone ships something by the end of the night.
          </p>
        </div>


        {/* Mediums grid */}
        <div style={{
          display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 12,
        }}>
          {MEDIUMS.map((m) => (
            <div key={m.label} style={{
              padding: "22px 20px", background: C.warmBlack, border: `1px solid ${C.brick}18`,
              transition: "border-color 0.3s",
            }}>
              <div style={{ fontSize: 24, marginBottom: 6 }}>{m.emoji}</div>
              <h3 style={{
                fontFamily: F.heading, fontSize: 22, color: C.cream, letterSpacing: 3,
                textTransform: "uppercase", margin: "0 0 6px",
              }}>
                Vibe {m.label}
              </h3>
              <p style={{ fontFamily: F.mono, fontSize: 11, color: C.steel, letterSpacing: 1, margin: 0 }}>
                {m.tools}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
