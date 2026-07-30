import { ImageResponse } from "next/og";

/**
 * Reusable Open Graph image template.
 * Used by the root opengraph-image and per-article variants so every
 * share card carries the same visual system: night background, the
 * tesseract, the wordmark and a large headline.
 */

export const ogSize = { width: 1200, height: 630 };

export function renderOgImage({
  eyebrow,
  title,
  footer = "fourthaxis.com",
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
          backgroundColor: "#0a0a10",
          color: "#eae7e0",
          fontFamily: "sans-serif",
        }}
      >
        {/* Tesseract, anchored right */}
        <svg
          width="1200"
          height="630"
          viewBox="0 0 1200 630"
          style={{ position: "absolute", top: 0, left: 0 }}
        >
          <rect
            x="850"
            y="120"
            width="270"
            height="270"
            fill="none"
            stroke="#eae7e0"
            strokeOpacity="0.2"
            strokeWidth="1.5"
          />
          <path
            d="M850 120 938 208M1120 120 1032 208M850 390 938 302M1120 390 1032 302"
            fill="none"
            stroke="#a878c8"
            strokeOpacity="0.45"
            strokeWidth="1.5"
          />
          <rect
            x="938"
            y="208"
            width="94"
            height="94"
            fill="none"
            stroke="#7d8bf3"
            strokeOpacity="0.9"
            strokeWidth="2"
          />
          <path
            d="M-40 560 C 300 500, 560 480, 800 340 S 1120 140, 1260 80"
            fill="none"
            stroke="#7d8bf3"
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
          }}
        >
          <svg width="34" height="34" viewBox="0 0 32 32">
            <rect
              x="4.5"
              y="4.5"
              width="23"
              height="23"
              fill="none"
              stroke="#eae7e0"
              strokeOpacity="0.5"
              strokeWidth="1.5"
            />
            <path
              d="M4.5 4.5 12 12M27.5 4.5 20 12M4.5 27.5 12 20M27.5 27.5 20 20"
              fill="none"
              stroke="#a878c8"
              strokeOpacity="0.6"
              strokeWidth="1.2"
            />
            <rect
              x="12"
              y="12"
              width="8"
              height="8"
              fill="none"
              stroke="#7d8bf3"
              strokeWidth="1.8"
            />
          </svg>
          <div
            style={{
              display: "flex",
              fontSize: 26,
              letterSpacing: "0.24em",
              color: "#eae7e0",
            }}
          >
            FOURTH AXIS
          </div>
        </div>

        {/* Main block */}
        <div style={{ display: "flex", flexDirection: "column", gap: "28px" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "16px",
              fontSize: 21,
              letterSpacing: "0.18em",
              color: "#9498a6",
              textTransform: "uppercase",
            }}
          >
            <div style={{ width: 40, height: 2, backgroundColor: "#7d8bf3" }} />
            {eyebrow}
          </div>
          <div
            style={{
              display: "flex",
              fontSize: title.length > 60 ? 52 : 64,
              lineHeight: 1.12,
              maxWidth: 900,
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
            fontSize: 20,
            color: "#9498a6",
          }}
        >
          <div style={{ display: "flex" }}>
            The missing dimension between vision and execution.
          </div>
          <div style={{ display: "flex" }}>{footer}</div>
        </div>
      </div>
    ),
    ogSize,
  );
}
