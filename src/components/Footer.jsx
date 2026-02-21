import { C } from '../constants/colors';
import { F } from '../constants/fonts';
import MilwaukeeSkyline from './decorative/MilwaukeeSkyline';

function Footer() {
  return (
    <footer style={{
      padding: "50px 24px 36px", background: C.warmBlack, borderTop: `3px solid ${C.brick}`,
      position: "relative",
    }}>
      {/* Subtle skyline in footer */}
      <div style={{ position: "absolute", top: -1, left: 0, right: 0, opacity: 0.05, transform: "scaleY(-1)" }}>
        <MilwaukeeSkyline color={C.cream} opacity={1} height={80} />
      </div>

      <div style={{ maxWidth: 900, margin: "0 auto", position: "relative", zIndex: 1 }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: 32, marginBottom: 40 }}>
          <div>
            <h3 style={{ fontFamily: F.heading, fontSize: 32, color: C.cream, letterSpacing: 4, margin: "0 0 6px" }}>VIBE MKE</h3>
            <p style={{ fontFamily: F.mono, fontSize: 11, color: C.steel, letterSpacing: 1 }}>Milwaukee's AI Creation Community</p>
          </div>
        </div>

        <div style={{ borderTop: `1px solid ${C.brick}33`, paddingTop: 20,
          display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 10 }}>
          <p style={{ fontFamily: F.body, fontSize: 12, color: `${C.cream}44`, margin: 0 }}>
            Built with 🧱 in Milwaukee · Cream City forever
          </p>
          <p style={{ fontFamily: F.mono, fontSize: 10, color: `${C.cream}33`, margin: 0 }}>© 2026 Vibe MKE</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
