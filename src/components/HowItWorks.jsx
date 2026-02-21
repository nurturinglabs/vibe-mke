import { C } from '../constants/colors';
import { F } from '../constants/fonts';

export default function HowItWorks() {
  const steps = [
    { num: "01", title: "SHOW UP", desc: "First Thursday of the month. 6pm. Bring a laptop and an idea (or grab one from the idea jar)." },
    { num: "02", title: "PICK YOUR VIBE", desc: "Code night? Audio night? Open vibe? Each month has a theme — or go rogue." },
    { num: "03", title: "BUILD", desc: "2 hours. AI tools. Free credits from sponsors. Help from the person next to you." },
    { num: "04", title: "SHIP & SHARE", desc: "8pm demo time. 2 minutes each. Show what you made. Cheer for everyone." },
  ];

  return (
    <section style={{ padding: "80px 24px", background: C.warmBlack, position: "relative" }}>
      <div style={{ maxWidth: 900, margin: "0 auto" }}>
        <h2 style={{ fontFamily: F.heading, fontSize: "clamp(36px, 6vw, 56px)", color: C.cream,
          letterSpacing: 4, textTransform: "uppercase", marginBottom: 8 }}>
          How it works
        </h2>
        <div style={{ width: 60, height: 3, background: C.brick, marginBottom: 48 }} />

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 20 }}>
          {steps.map((s) => (
            <div key={s.num} style={{
              padding: "28px 22px", borderTop: `3px solid ${C.brick}`, background: `${C.charcoal}88`,
            }}>
              <span style={{ fontFamily: F.heading, fontSize: 48, color: `${C.brick}33`, lineHeight: 1 }}>{s.num}</span>
              <h3 style={{ fontFamily: F.heading, fontSize: 22, color: C.amber, letterSpacing: 4, margin: "10px 0 8px" }}>{s.title}</h3>
              <p style={{ fontFamily: F.body, fontSize: 14, lineHeight: 1.7, color: `${C.cream}99`, margin: 0 }}>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
