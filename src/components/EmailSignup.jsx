"use client";

import { useState } from "react";
import { C } from "../constants/colors";
import { F } from "../constants/fonts";
import BrickTexture from "./decorative/BrickTexture";

export default function EmailSignup() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }
    // MVP: just set success state. Replace with API call to Buttondown/Google Form later.
    setSubmitted(true);
  };

  return (
    <section
      id="signup"
      style={{
        padding: "80px 24px",
        background: C.warmBlack,
        position: "relative",
        overflow: "hidden",
      }}
    >
      <BrickTexture opacity={0.04} />
      <div style={{ maxWidth: 600, margin: "0 auto", position: "relative", zIndex: 1 }}>
        <div style={{ textAlign: "center", marginBottom: 40 }}>
          <span
            style={{
              fontFamily: F.mono,
              fontSize: 10,
              letterSpacing: 3,
              color: C.steel,
              textTransform: "uppercase",
            }}
          >
            Don't Miss Out
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
            STAY IN THE LOOP
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
              fontSize: 16,
              color: C.steel,
              marginTop: 16,
            }}
          >
            Get notified about events, sponsor announcements, and what people build.
          </p>
        </div>

        {submitted ? (
          <div
            style={{
              background: C.charcoal,
              borderLeft: `4px solid ${C.amber}`,
              padding: "24px 28px",
              textAlign: "center",
            }}
          >
            <p
              style={{
                fontFamily: F.heading,
                fontSize: 22,
                color: C.amber,
                letterSpacing: 2,
                textTransform: "uppercase",
                margin: "0 0 8px",
              }}
            >
              YOU'RE IN!
            </p>
            <p
              style={{
                fontFamily: F.body,
                fontSize: 15,
                color: C.cream,
                margin: 0,
              }}
            >
              We'll let you know when the next event drops.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <div
              style={{
                display: "flex",
                gap: 0,
                flexWrap: "wrap",
              }}
            >
              <input
                type="email"
                placeholder="you@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                style={{
                  flex: "1 1 280px",
                  padding: "16px 20px",
                  background: C.charcoal,
                  border: `1px solid ${C.steel}33`,
                  color: C.cream,
                  fontFamily: F.body,
                  fontSize: 16,
                  outline: "none",
                  minWidth: 0,
                }}
              />
              <button
                type="submit"
                style={{
                  padding: "16px 32px",
                  background: C.amber,
                  color: C.warmBlack,
                  fontFamily: F.heading,
                  fontSize: 18,
                  letterSpacing: 3,
                  textTransform: "uppercase",
                  border: "none",
                  cursor: "pointer",
                  whiteSpace: "nowrap",
                }}
              >
                JOIN →
              </button>
            </div>
            {error && (
              <p
                style={{
                  fontFamily: F.body,
                  fontSize: 13,
                  color: C.brick,
                  marginTop: 8,
                }}
              >
                {error}
              </p>
            )}
            <p
              style={{
                fontFamily: F.mono,
                fontSize: 11,
                color: C.steel,
                letterSpacing: 1,
                marginTop: 16,
                textAlign: "center",
              }}
            >
              No spam. Unsubscribe anytime. We respect your inbox.
            </p>
          </form>
        )}
      </div>
    </section>
  );
}
