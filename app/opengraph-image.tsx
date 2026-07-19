import { ogSize, renderOgImage } from "@/lib/og";

export const alt =
  "Vector House — Strategic intelligence for frontier technology";
export const size = ogSize;
export const contentType = "image/png";

export default function OpengraphImage() {
  return renderOgImage({
    eyebrow: "Strategic intelligence for frontier technology",
    title: "Technical advantage is only the beginning.",
  });
}
