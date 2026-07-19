import { ImageResponse } from "next/og";

/**
 * Reusable Open Graph image template.
 * Used by the root opengraph-image and per-article variants so every
 * share card carries the same visual system: night background, fine
 * grid, a rising vector, the wordmark and a large headline.
 */

export const ogSize = { width: 1200, height: 630 };

export function renderOgImage({
  eyebrow,
  title,
  footer = "vectorhouse.com",
}: {
  eyebrow: string;
  title: string;
  footer?: string;
}) {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          backgroundColor: "#0a0b0e",
          color: "#eae7e0",
          fontFamily: "sans-serif",
        }}
      >
        {/* Rising vector accent */}
        <svg
          width="1200"
          height="630"
          viewBox="0 0 1200 630"
          style={{ position: "absolute", top: 0, left: 0 }}
        >
          <path
            d="M-40 560 C 300 500, 560 480, 800 340 S 1120 140, 1260 80"
            fill="none"
            stroke="#6d8df6"
            strokeOpacity="0.45"
            strokeWidth="2"
          />
          <circle cx="800" cy="340" r="6" fill="#6d8df6" />
          <circle
            cx="800"
            cy="340"
            r="18"
            fill="none"
            stroke="#6d8df6"
            strokeOpacity="0.35"
            strokeWidth="2"
          />
        </svg>

        {/* Header row: wordmark */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "18px",
            fontFamily: "monospace",
          }}
        >
          <svg width="34" height="34" viewBox="0 0 32 32">
            <path
              d="M4 20v8h8"
              stroke="#eae7e0"
              strokeOpacity="0.5"
              strokeWidth="1.5"
              fill="none"
            />
            <path
              d="M28 12V4h-8"
              stroke="#eae7e0"
              strokeOpacity="0.5"
              strokeWidth="1.5"
              fill="none"
            />
            <path d="M7 25 23 9" stroke="#6d8df6" strokeWidth="2" fill="none" />
            <path
              d="M15.5 8.5H23.5V16.5"
              stroke="#6d8df6"
              strokeWidth="2"
              fill="none"
            />
            <circle cx="7" cy="25" r="2.2" fill="#6d8df6" />
          </svg>
          <div
            style={{
              display: "flex",
              fontSize: 26,
              letterSpacing: "0.24em",
              color: "#eae7e0",
            }}
          >
            VECTOR HOUSE
          </div>
        </div>

        {/* Main block */}
        <div style={{ display: "flex", flexDirection: "column", gap: "28px" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "16px",
              fontFamily: "monospace",
              fontSize: 22,
              letterSpacing: "0.2em",
              color: "#9298a4",
              textTransform: "uppercase",
            }}
          >
            <div style={{ width: 40, height: 2, backgroundColor: "#6d8df6" }} />
            {eyebrow}
          </div>
          <div
            style={{
              display: "flex",
              fontSize: title.length > 60 ? 54 : 66,
              lineHeight: 1.12,
              maxWidth: 980,
              color: "#eae7e0",
            }}
          >
            {title}
          </div>
        </div>

        {/* Footer */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            fontFamily: "monospace",
            fontSize: 20,
            color: "#9298a4",
          }}
        >
          <div style={{ display: "flex" }}>Ideas with direction.</div>
          <div style={{ display: "flex" }}>{footer}</div>
        </div>
      </div>
    ),
    ogSize,
  );
}
