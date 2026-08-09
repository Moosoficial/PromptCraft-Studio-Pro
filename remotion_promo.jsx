import { Composition, registerRoot, interpolate, useCurrentFrame, useVideoConfig, spring, Sequence } from "remotion";
import React from "react";

// Scene 1: Disruptive Hook (Frames 0-90)
const SceneHook = () => {
  const frame = useCurrentFrame();
  const opacity = interpolate(frame, [0, 15], [0, 1], { extrapolateRight: "clamp" });
  const scale = interpolate(frame, [0, 20], [0.85, 1], { extrapolateRight: "clamp" });

  return (
    <div
      style={{
        flex: 1,
        backgroundColor: "#0a0d14",
        color: "#ffffff",
        fontFamily: "'Outfit', 'Plus Jakarta Sans', sans-serif",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: 40,
        opacity,
        transform: `scale(${scale})`,
        width: "100%",
        height: "100%",
      }}
    >
      <div
        style={{
          background: "rgba(245, 158, 11, 0.15)",
          border: "1px solid rgba(245, 158, 11, 0.4)",
          borderRadius: 30,
          padding: "10px 24px",
          color: "#f59e0b",
          fontSize: 22,
          fontWeight: 700,
          marginBottom: 25,
          letterSpacing: "0.05em",
        }}
      >
        🔥 EL SECRETO DE LA PRODUCTIVIDAD CON IA
      </div>
      <h1
        style={{
          fontSize: 58,
          fontWeight: 800,
          textAlign: "center",
          color: "#ffffff",
          margin: 0,
          lineHeight: 1.2,
        }}
      >
        ❌ Deja de escribir <span style={{ color: "#ef4444" }}>Prompts Malos</span>
      </h1>
      <p style={{ color: "#a5b4fc", fontSize: 28, marginTop: 20, fontWeight: 500 }}>
        PromptCraft Studio PRO genera respuestas impecables en segundos
      </p>
    </div>
  );
};

// Scene 2: Feature Showcase (Frames 90-210)
const SceneFeatures = () => {
  const frame = useCurrentFrame();
  const opacity = interpolate(frame, [0, 15], [0, 1], { extrapolateRight: "clamp" });

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
        width: "100%",
        height: "100%",
      }}
    >
      <h2 style={{ fontSize: 44, fontWeight: 800, color: "#6366f1", marginBottom: 30 }}>
        ⚡ Todo en una Suite Interactiva
      </h2>
      <div style={{ display: "flex", gap: 20 }}>
        <div
          style={{
            background: "rgba(18, 24, 38, 0.9)",
            border: "1px solid rgba(99, 102, 241, 0.4)",
            borderRadius: 16,
            padding: 30,
            width: 320,
          }}
        >
          <div style={{ fontSize: 32, marginBottom: 10 }}>🎛️</div>
          <h3 style={{ fontSize: 22, color: "#fff" }}>Creador Maestro</h3>
          <p style={{ color: "#9ca3af", fontSize: 16, marginTop: 8 }}>
            Ajusta Rol, Tarea, Contexto y Tono en 2 clics.
          </p>
        </div>

        <div
          style={{
            background: "rgba(18, 24, 38, 0.9)",
            border: "1px solid rgba(139, 92, 246, 0.4)",
            borderRadius: 16,
            padding: 30,
            width: 320,
          }}
        >
          <div style={{ fontSize: 32, marginBottom: 10 }}>🚀</div>
          <h3 style={{ fontSize: 22, color: "#fff" }}>120+ Prompts PRO</h3>
          <p style={{ color: "#9ca3af", fontSize: 16, marginTop: 8 }}>
            Código Dev, VSL Scripts, Cold Emails & Hilos Virales.
          </p>
        </div>

        <div
          style={{
            background: "rgba(18, 24, 38, 0.9)",
            border: "1px solid rgba(16, 185, 129, 0.4)",
            borderRadius: 16,
            padding: 30,
            width: 320,
          }}
        >
          <div style={{ fontSize: 32, marginBottom: 10 }}>💾</div>
          <h3 style={{ fontSize: 22, color: "#fff" }}>Exportación 1-Clic</h3>
          <p style={{ color: "#9ca3af", fontSize: 16, marginTop: 8 }}>
            Descarga en Markdown (.md) y JSON al instante.
          </p>
        </div>
      </div>
    </div>
  );
};

// Scene 3: Call to Action & Pricing (Frames 210-300)
const SceneCTA = () => {
  const frame = useCurrentFrame();
  const opacity = interpolate(frame, [0, 15], [0, 1], { extrapolateRight: "clamp" });
  const pulse = interpolate(frame % 20, [0, 10, 20], [1, 1.05, 1]);

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
        width: "100%",
        height: "100%",
      }}
    >
      <div style={{ fontSize: 24, fontWeight: 700, color: "#10b981", marginBottom: 15 }}>
        🎉 LICENCIA DE POR VIDA DISPONIBLE
      </div>
      <h2 style={{ fontSize: 48, fontWeight: 800, margin: 0 }}>
        PromptCraft Studio PRO
      </h2>
      
      <div style={{ display: "flex", gap: 30, marginTop: 30 }}>
        <div style={{ background: "#1e253c", border: "1px solid #6366f1", borderRadius: 12, padding: "15px 30px" }}>
          <span style={{ fontSize: 18, color: "#a5b4fc" }}>Licencia PRO</span>
          <div style={{ fontSize: 36, fontWeight: 800, color: "#fff" }}>$29 USD</div>
        </div>
        <div style={{ background: "#1e253c", border: "2px solid #10b981", borderRadius: 12, padding: "15px 30px" }}>
          <span style={{ fontSize: 18, color: "#10b981" }}>Licencia AGENCY</span>
          <div style={{ fontSize: 36, fontWeight: 800, color: "#fff" }}>$49 USD</div>
        </div>
      </div>

      <div
        style={{
          marginTop: 40,
          padding: "18px 40px",
          borderRadius: 14,
          background: "linear-gradient(135deg, #6366f1, #8b5cf6)",
          color: "#fff",
          fontSize: 24,
          fontWeight: 800,
          transform: `scale(${pulse})`,
          boxShadow: "0 0 30px rgba(99, 102, 241, 0.5)",
        }}
      >
        🌐 Live Demo: prompt-craft-studio-pro.vercel.app
      </div>
    </div>
  );
};

export const PromoVideoComponent = () => {
  return (
    <div style={{ flex: 1, backgroundColor: "#0a0d14" }}>
      <Sequence from={0} durationInFrames={90}>
        <SceneHook />
      </Sequence>
      <Sequence from={90} durationInFrames={120}>
        <SceneFeatures />
      </Sequence>
      <Sequence from={210} durationInFrames={90}>
        <SceneCTA />
      </Sequence>
    </div>
  );
};

export const RemotionRoot = () => {
  return (
    <>
      <Composition
        id="PromptCraftPromoHD"
        component={PromoVideoComponent}
        durationInFrames={300}
        fps={30}
        width={1280}
        height={720}
      />
    </>
  );
};

registerRoot(RemotionRoot);
