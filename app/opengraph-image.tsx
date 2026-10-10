import { ImageResponse } from "next/og";

export const alt = "Shubhankar Mishra: Podcast, Interviews & Stories";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 72,
          background: "linear-gradient(135deg, #1b1818 0%, #0C0B0B 60%)",
          color: "#F1ECE3",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16, fontSize: 28, color: "#C8102E" }}>
          <div style={{ width: 56, height: 2, background: "#C8102E" }} />
          Podcast · Interviews · Stories
        </div>
        <div style={{ display: "flex", flexDirection: "column", fontSize: 150, lineHeight: 0.95, fontWeight: 800, letterSpacing: -4 }}>
          <div style={{ display: "flex" }}>SHUBHANKAR</div>
          <div style={{ display: "flex", color: "#C8102E" }}>MISHRA</div>
        </div>
        <div style={{ display: "flex", fontSize: 32, color: "#cfc8bb" }}>Conversations that outlast the scroll.</div>
      </div>
    ),
    { ...size }
  );
}
