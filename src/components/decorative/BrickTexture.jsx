import { C } from '../../constants/colors';

function BrickTexture({ opacity = 0.06 }) {
  return (
    <div style={{
      position: "absolute", inset: 0, opacity, pointerEvents: "none",
      backgroundImage: `
        repeating-linear-gradient(0deg, transparent, transparent 24px, ${C.brickDark}33 24px, ${C.brickDark}33 26px),
        repeating-linear-gradient(90deg, transparent, transparent 60px, ${C.brickDark}22 60px, ${C.brickDark}22 62px)
      `,
    }} />
  );
}

export default BrickTexture;
