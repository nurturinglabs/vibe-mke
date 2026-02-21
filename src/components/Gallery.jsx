import { C } from '../constants/colors';
import { F } from '../constants/fonts';
import BrickTexture from './decorative/BrickTexture';
import { MEDIUMS } from '../constants/mediums';

export default function Gallery() {
  const builds = [
    { title: "Restaurant Voice AI", builder: "Team Nurturing", medium: "Code" },
    { title: "Lakefront Timelapse", builder: "Marcus", medium: "Video" },
    { title: "Third Ward Walking Guide", builder: "Team Oak Creek", medium: "Apps" },
    { title: "Summerfest Poster Generator", builder: "Priya", medium: "Design" },
    { title: "MKE Transit Tracker", builder: "Sarah K.", medium: "Code" },
    { title: "Cream City Brand Kit", builder: "Devon", medium: "Design" },
  ];

  return (
    <section style={{ padding: "80px 24px", background: C.warmBlack, position: "relative" }}>
      <div style={{ maxWidth: 900, margin: "0 auto" }}>
        <h2 style={{ fontFamily: F.heading, fontSize: "clamp(36px, 6vw, 56px)", color: C.cream,
          letterSpacing: 4, textTransform: "uppercase", marginBottom: 8 }}>
          What people build
        </h2>
        <div style={{ width: 60, height: 3, background: C.brick, marginBottom: 12 }} />
        <p style={{ fontFamily: F.mono, fontSize: 11, color: C.steel, letterSpacing: 1, marginBottom: 36 }}>
          Real projects from real Vibe MKE nights · Gallery populates after first event
        </p>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 12 }}>
          {builds.map((b, i) => (
            <div key={i} style={{ border: `1px solid ${C.brick}22`, overflow: "hidden", background: C.charcoal }}>
              <div style={{
                height: 130, background: `linear-gradient(135deg, ${C.brickDark}55, ${C.charcoal})`,
                display: "flex", alignItems: "center", justifyContent: "center",
                borderBottom: `1px solid ${C.brick}22`, position: "relative",
              }}>
                <span style={{ fontFamily: F.heading, fontSize: 40, color: `${C.brick}33` }}>
                  {MEDIUMS.find(m => m.label === b.medium)?.emoji || "🔧"}
                </span>
              </div>
              <div style={{ padding: "14px 18px" }}>
                <h3 style={{ fontFamily: F.heading, fontSize: 16, color: C.cream,
                  letterSpacing: 2, textTransform: "uppercase", margin: "0 0 8px" }}>{b.title}</h3>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <span style={{ fontFamily: F.body, fontSize: 12, color: `${C.cream}77` }}>by {b.builder}</span>
                  <span style={{ fontFamily: F.mono, fontSize: 9, letterSpacing: 1, padding: "2px 7px",
                    background: `${C.brick}22`, color: C.brickLight, textTransform: "uppercase" }}>{b.medium}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
