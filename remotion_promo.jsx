import { Composition, registerRoot, interpolate, useCurrentFrame, useVideoConfig } from "remotion";
import React from "react";

// Remotion Video Component for PromptCraft Studio PRO
export const PromoVideoComponent = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const opacity = interpolate(frame, [0, 20], [0, 1], {
    extrapolateRight: "clamp",
  });

  const scale = interpolate(frame, [0, 30], [0.8, 1], {
    extrapolateRight: "clamp",
  });

  return (
    <div
      style={{
        flex: 1,
        backgroundColor: "#0a0d14",
        color: "#ffffff",
        fontFamily: "sans-serif",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: 40,
        opacity,
        transform: `scale(${scale})`,
      }}
    >
      <div
        style={{
          background: "rgba(99, 102, 241, 0.2)",
          border: "1px solid #6366f1",
          borderRadius: 20,
          padding: "8px 24px",
          color: "#a5b4fc",
          fontSize: 20,
          fontWeight: "bold",
          marginBottom: 20,
        }}
      >
        NOVASTACK AI PRESENTATION
      </div>
      <h1
        style={{
          fontSize: 54,
          fontWeight: 800,
          textAlign: "center",
          background: "linear-gradient(135deg, #a5b4fc, #6366f1, #c084fc)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          margin: 0,
        }}
      >
        PromptCraft Studio PRO
      </h1>
      <p style={{ color: "#9ca3af", fontSize: 24, marginTop: 15 }}>
        Multiplica x10 tu Productividad con IA
      </p>
      <div
        style={{
          marginTop: 40,
          padding: "15px 30px",
          borderRadius: 12,
          background: "linear-gradient(135deg, #6366f1, #8b5cf6)",
          color: "#fff",
          fontSize: 22,
          fontWeight: "bold",
        }}
      >
        https://prompt-craft-studio-pro.vercel.app
      </div>
    </div>
  );
};

export const RemotionRoot = () => {
  return (
    <>
      <Composition
        id="PromptCraftPromo"
        component={PromoVideoComponent}
        durationInFrames={150}
        fps={30}
        width={1280}
        height={720}
      />
    </>
  );
};

registerRoot(RemotionRoot);
