"use client";

import { C } from "../constants/colors";
import { F } from "../constants/fonts";
import { PERSONAS } from "../constants/personas";
import BrickTexture from "./decorative/BrickTexture";

export default function WhoShowsUp() {
  return (
    <section
      id="who"
      style={{
        padding: "80px 24px",
        background: C.charcoal,
        position: "relative",
        overflow: "hidden",
      }}
    >
      <BrickTexture opacity={0.04} />
      <div style={{ maxWidth: 1100, margin: "0 auto", position: "relative", zIndex: 1 }}>
        <div style={{ textAlign: "center", marginBottom: 48 }}>
          <span
            style={{
              fontFamily: F.mono,
              fontSize: 10,
              letterSpacing: 3,
              color: C.steel,
              textTransform: "uppercase",
            }}
          >
            The Community
          </span>
          <h2
            style={{
              fontFamily: F.heading,
              fontSize: "clamp(36px, 5vw, 52px)",
              color: C.cream,
              letterSpacing: 4,
              margin: "8px 0 0",
              textTransform: "uppercase",
            }}
          >
            WHO SHOWS UP
          </h2>
          <div
            style={{
              width: 60,
              height: 3,
              background: C.brick,
              margin: "16px auto 0",
            }}
          />
          <p
            style={{
              fontFamily: F.body,
              fontSize: 17,
              color: C.steel,
              marginTop: 16,
              maxWidth: 500,
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            Vibe MKE isn't a developer meetup. It's a creator meetup.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: 20,
          }}
        >
          {PERSONAS.map((p, i) => (
            <div
              key={i}
              style={{
                background: C.warmBlack,
                padding: "28px 24px",
                border: `1px solid ${C.charcoal}`,
                transition: "border-color 0.3s, transform 0.3s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = C.brick;
                e.currentTarget.style.transform = "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = C.charcoal;
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              <div style={{ fontSize: 32, marginBottom: 12 }}>{p.emoji}</div>
              <h3
                style={{
                  fontFamily: F.heading,
                  fontSize: 22,
                  color: C.cream,
                  letterSpacing: 2,
                  textTransform: "uppercase",
                  margin: "0 0 8px",
                }}
              >
                {p.title}
              </h3>
              <p
                style={{
                  fontFamily: F.body,
                  fontSize: 15,
                  color: C.cream,
                  margin: "0 0 12px",
                  lineHeight: 1.5,
                }}
              >
                {p.description}
              </p>
              <p
                style={{
                  fontFamily: F.mono,
                  fontSize: 11,
                  color: C.steel,
                  letterSpacing: 1,
                  textTransform: "uppercase",
                  margin: 0,
                }}
              >
                They build: {p.builds}
              </p>
            </div>
          ))}
        </div>

        <p
          style={{
            fontFamily: F.body,
            fontSize: 16,
            color: C.amber,
            textAlign: "center",
            marginTop: 40,
            fontStyle: "italic",
          }}
        >
          The only requirement is curiosity.
        </p>
      </div>
    </section>
  );
}
