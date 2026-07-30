import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

/** Apple touch icon rendered from the tesseract mark. */
export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#0a0a10",
        }}
      >
        <svg width="120" height="120" viewBox="0 0 32 32">
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
      </div>
    ),
    size,
  );
}
