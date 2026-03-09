import { C } from '../constants/colors';
import { F } from '../constants/fonts';

export default function Gallery() {
  return (
    <section style={{ padding: "80px 24px", background: C.warmBlack, position: "relative" }}>
      <div style={{ maxWidth: 900, margin: "0 auto", textAlign: "center" }}>
        <h2 style={{ fontFamily: F.heading, fontSize: "clamp(36px, 6vw, 56px)", color: C.cream,
          letterSpacing: 4, textTransform: "uppercase", marginBottom: 8 }}>
          What people build
        </h2>
        <div style={{ width: 60, height: 3, background: C.brick, margin: "0 auto 48px" }} />

        <div style={{
          border: `1px dashed ${C.brick}44`,
          padding: "60px 40px",
          display: "flex", flexDirection: "column", alignItems: "center", gap: 16,
        }}>
          <span style={{ fontFamily: F.heading, fontSize: 14, letterSpacing: 6, textTransform: "uppercase",
            padding: "8px 20px", background: `${C.brick}22`, color: C.brickLight }}>
            COMING SOON
          </span>
          <p style={{ fontFamily: F.body, fontSize: 15, color: `${C.cream}66`, maxWidth: 400, lineHeight: 1.6, margin: 0 }}>
            Gallery populates after our first event on March 26th. Show up, build something, and get featured here.
          </p>
        </div>
      </div>
    </section>
  );
}
