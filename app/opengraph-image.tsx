import { ogSize, renderOgImage } from "@/lib/og";

export const alt =
  "Fourth Axis — The missing dimension between vision and execution";
export const size = ogSize;
export const contentType = "image/png";

export default function OpengraphImage() {
  return renderOgImage({
    eyebrow: "For consequential technology",
    title: "Consequential technology needs more than visibility. It needs direction.",
  });
}
