"use client";
import { useState, useEffect } from "react";
import { C } from '../constants/colors';
import { F } from '../constants/fonts';
import { MKE_IMAGES } from '../constants/images';
import MilwaukeeSkyline from './decorative/MilwaukeeSkyline';
import BrickTexture from './decorative/BrickTexture';

export default function Hero() {
  const [show, setShow] = useState(false);
  useEffect(() => { setTimeout(() => setShow(true), 100); }, []);

  return (
    <section style={{
      minHeight: "100vh", position: "relative", display: "flex", flexDirection: "column",
      justifyContent: "center", alignItems: "center", padding: "60px 24px 120px",
      overflow: "hidden",
      background: C.warmBlack,
    }}>
      {/* Real MKE skyline as hero background */}
      <div style={{
        position: "absolute", inset: 0,
        backgroundImage: `url(${MKE_IMAGES.skyline})`,
        backgroundSize: "cover", backgroundPosition: "center top",
        filter: "brightness(0.2) saturate(0.5)",
      }} />
      <BrickTexture opacity={0.05} />

      {/* Milwaukee skyline at bottom */}
      <MilwaukeeSkyline color={C.brick} opacity={0.12} height={220} />

      {/* Gradient fade over skyline */}
      <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: 100,
        background: `linear-gradient(0deg, ${C.warmBlack} 0%, transparent 100%)`, zIndex: 1 }} />

      {/* Main content */}
      <div style={{
        position: "relative", zIndex: 2, textAlign: "center", maxWidth: 1100,
        opacity: show ? 1 : 0, transform: show ? "translateY(0)" : "translateY(30px)",
        transition: "all 1s ease-out",
      }}>
        {/* Location badge */}
        <div style={{
          display: "inline-flex", alignItems: "center", gap: 8,
          padding: "8px 20px", border: `1px solid ${C.brick}66`,
          marginBottom: 32, background: `${C.brick}12`,
        }}>
          <span style={{ fontSize: 10, letterSpacing: 3, textTransform: "uppercase", fontFamily: F.mono, color: C.brickLight }}>
            📍 Milwaukee, Wisconsin
          </span>
        </div>

        {/* Title */}
        <h1 style={{
          fontFamily: F.heading, fontSize: "clamp(100px, 20vw, 220px)", lineHeight: 0.85,
          color: C.cream, margin: 0, letterSpacing: 4, textTransform: "uppercase",
        }}>
          VIBE <span style={{ color: C.brick }}>MKE</span>
        </h1>

        {/* Tagline */}
        <p style={{
          fontFamily: F.mono, fontSize: 17, letterSpacing: 8, textTransform: "uppercase",
          color: C.amber, margin: "28px 0 16px",
        }}>
          Describe it · Build it · Ship it
        </p>

        <p style={{
          fontFamily: F.body, fontSize: 22, lineHeight: 1.7, color: `${C.cream}BB`,
          maxWidth: 680, margin: "0 auto 20px",
        }}>
          Every month, we gather in Milwaukee to create with AI.
          No experience needed. Just show up and vibe.
        </p>

        {/* Mediums */}
        <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap", gap: 4, margin: "24px 0 40px" }}>
          {["Code", "Video", "Design", "Apps"].map((m, i) => (
            <span key={m} style={{ fontFamily: F.mono, fontSize: 15, letterSpacing: 3, color: C.steel, padding: "4px 0" }}>
              {m}{i < 3 && <span style={{ color: C.brick, margin: "0 6px" }}>·</span>}
            </span>
          ))}
        </div>

        {/* CTA */}
        <a href="#events" style={{
          display: "inline-flex", alignItems: "center", gap: 10, padding: "16px 40px",
          background: C.brick, color: C.cream, fontFamily: F.heading, fontSize: 26,
          letterSpacing: 3, textTransform: "uppercase", textDecoration: "none",
          border: "none", cursor: "pointer", boxShadow: `0 4px 20px ${C.brick}44`,
        }}>
          Next Event → March 6
        </a>

        <p style={{ fontFamily: F.mono, fontSize: 11, color: C.steel, marginTop: 16, letterSpacing: 1 }}>
          Free · Open to everyone · Bring a laptop & an idea
        </p>
      </div>
    </section>
  );
}
