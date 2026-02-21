"use client";

import { useState } from "react";
import { C } from "../constants/colors";
import { F } from "../constants/fonts";
import { FAQ_ITEMS } from "../constants/faq";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section
      id="faq"
      style={{
        padding: "80px 24px",
        background: C.warmBlack,
        position: "relative",
      }}
    >
      <div style={{ maxWidth: 800, margin: "0 auto" }}>
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
            Common Questions
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
            QUESTIONS
          </h2>
          <div
            style={{
              width: 60,
              height: 3,
              background: C.brick,
              margin: "16px auto 0",
            }}
          />
        </div>

        <div>
          {FAQ_ITEMS.map((item, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={i}
                style={{
                  borderBottom: `1px solid ${C.charcoal}`,
                }}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  style={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    padding: "24px 0",
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    textAlign: "left",
                  }}
                >
                  <span
                    style={{
                      fontFamily: F.body,
                      fontSize: 17,
                      fontWeight: 600,
                      color: isOpen ? C.amber : C.cream,
                      transition: "color 0.2s",
                      paddingRight: 16,
                    }}
                  >
                    {item.question}
                  </span>
                  <span
                    style={{
                      fontFamily: F.mono,
                      fontSize: 20,
                      color: C.steel,
                      transform: isOpen ? "rotate(45deg)" : "rotate(0deg)",
                      transition: "transform 0.2s",
                      flexShrink: 0,
                    }}
                  >
                    +
                  </span>
                </button>
                <div
                  style={{
                    maxHeight: isOpen ? 200 : 0,
                    overflow: "hidden",
                    transition: "max-height 0.3s ease",
                  }}
                >
                  <p
                    style={{
                      fontFamily: F.body,
                      fontSize: 15,
                      color: C.steel,
                      lineHeight: 1.7,
                      margin: 0,
                      paddingBottom: 24,
                    }}
                  >
                    {item.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
