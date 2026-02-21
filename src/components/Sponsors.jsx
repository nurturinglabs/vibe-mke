import { C } from '../constants/colors';
import { F } from '../constants/fonts';
import BrickTexture from './decorative/BrickTexture';

function Sponsors() {
  return (
    <section style={{ padding: "80px 24px", background: C.charcoal, position: "relative" }}>
      <BrickTexture opacity={0.03} />
      <div style={{ position: "relative", zIndex: 2, maxWidth: 900, margin: "0 auto" }}>
        <h2 style={{ fontFamily: F.heading, fontSize: "clamp(36px, 6vw, 56px)", color: C.cream,
          letterSpacing: 4, textTransform: "uppercase", marginBottom: 8 }}>
          Sponsor Vibe MKE
        </h2>
        <div style={{ width: 60, height: 3, background: C.brick, marginBottom: 12 }} />

        <p style={{ fontFamily: F.body, fontSize: 17, lineHeight: 1.7, color: `${C.cream}BB`, marginBottom: 36, maxWidth: 650 }}>
          We're looking for companies that want to put their tools in the hands of Milwaukee's creators.
          Sponsor a night and your product gets used live by builders, designers, and makers.
        </p>

        {/* What sponsors get */}
        <div style={{
          display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 12,
          marginBottom: 40,
        }}>
          {[
            { icon: "🎟️", title: "YOUR TOOLS, LIVE", desc: "Free credits for attendees — they build with your product all night" },
            { icon: "📸", title: "CONTENT & REACH", desc: "Logo on site, social shoutouts, event photos featuring your tools" },
            { icon: "👥", title: "DIRECT ACCESS", desc: "A room full of builders and creators actively using AI tools" },
          ].map((b) => (
            <div key={b.title} style={{
              padding: "24px 20px", background: C.warmBlack,
              border: `1px solid ${C.brick}22`, borderTop: `3px solid ${C.brick}`,
            }}>
              <span style={{ fontSize: 24 }}>{b.icon}</span>
              <h3 style={{ fontFamily: F.heading, fontSize: 18, color: C.amber,
                letterSpacing: 3, margin: "10px 0 6px" }}>{b.title}</h3>
              <p style={{ fontFamily: F.body, fontSize: 13, color: `${C.cream}88`,
                lineHeight: 1.6, margin: 0 }}>{b.desc}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div style={{
          padding: "32px 36px", background: C.warmBlack,
          border: `2px solid ${C.brick}44`,
          display: "flex", alignItems: "center", justifyContent: "space-between",
          flexWrap: "wrap", gap: 20,
        }}>
          <div>
            <p style={{ fontFamily: F.heading, fontSize: 24, color: C.cream,
              letterSpacing: 3, margin: "0 0 4px" }}>WANT TO SPONSOR A NIGHT?</p>
            <p style={{ fontFamily: F.mono, fontSize: 12, color: C.steel, margin: 0 }}>
              AI tools · Dev platforms · Local Milwaukee businesses
            </p>
          </div>
          <button style={{
            fontFamily: F.heading, fontSize: 16, letterSpacing: 3, textTransform: "uppercase",
            padding: "12px 28px", background: C.amber, color: C.warmBlack,
            border: "none", cursor: "pointer",
          }}>LET'S TALK →</button>
        </div>
      </div>
    </section>
  );
}

export default Sponsors;
