import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

/** Apple touch icon rendered from the vector mark. */
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
          backgroundColor: "#0a0b0e",
        }}
      >
        <svg width="120" height="120" viewBox="0 0 32 32">
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
      </div>
    ),
    size,
  );
}
