import { ImageResponse } from "next/og";

export const alt = "Pourik: marketplace growth partner. Pour into what grows.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "#f8f8f6",
          color: "#0e1522",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "24px" }}>
          <svg width="120" height="80" viewBox="0 0 120 80" fill="none">
            <circle cx="38" cy="42" r="24" stroke="#c79a2b" strokeWidth="11" />
            <circle cx="78" cy="42" r="24" stroke="#aab1bb" strokeWidth="11" />
            <path
              d="M70 26 L104 10 M104 10 L92 12 M104 10 L102 22"
              stroke="#c79a2b"
              strokeWidth="8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <div style={{ fontSize: 72, fontWeight: 700, letterSpacing: -1 }}>POURIK</div>
        </div>
        <div style={{ marginTop: 48, fontSize: 64, fontWeight: 700, letterSpacing: -1 }}>
          Pour into what grows.
        </div>
        <div style={{ marginTop: 20, fontSize: 30, color: "#5b6270" }}>
          Marketplace growth for brands on Amazon, Walmart and TikTok Shop
        </div>
        <div
          style={{
            marginTop: 48,
            fontSize: 22,
            fontWeight: 600,
            letterSpacing: 4,
            color: "#c79a2b",
          }}
        >
          PEOPLE · IDEAS · BUSINESSES · BEYOND
        </div>
      </div>
    ),
    size
  );
}
