import { BorderAnimate } from "@/components/moving-border";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, BadgeCheck, ShoppingBag } from "lucide-react";
import Link from "next/link";
import { ImageResponse } from "next/og";

// Image metadata
export const alt = "Lakudisini";
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

// Image generation
export default async function Image() {
  // Font

  return new ImageResponse(
    (
      // ImageResponse JSX element
      <div className="items-center justify-center bg-blue-700 text-3xl font-black text-white ">
        LakuDisini
      </div>
    ),
    // ImageResponse options
    {
      // For convenience, we can re-use the exported opengraph-image
      // size config to also set the ImageResponse's width and height.
      ...size,
    },
  );
}
