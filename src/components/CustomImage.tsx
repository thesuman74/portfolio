"use client";
import Image from "next/image";
import { useState } from "react";

interface FallbackImageProps {
  src: string;
  alt: string;
  fallbackSrc?: string;
  width?: number; // Optional width
  height?: number; // Optional height
  layout?: "fixed" | "intrinsic" | "responsive" | "fill"; // Optional layout
  [key: string]: any; // Additional props
}

const CustomImage: React.FC<FallbackImageProps> = ({
  src,
  alt,
  fallbackSrc,
  width,
  height,
  layout = "responsive", // Default layout
  ...props
}) => {
  const [imgSrc, setImgSrc] = useState<string>(src);

  const handleError = () => {
    setImgSrc(fallbackSrc || "https://picsum.photos/500"); // Set to fallback image on error
  };

  return (
    <Image
      src={imgSrc}
      alt={alt}
      onError={handleError}
      width={width}
      height={height}
      {...props} // Pass additional props
    />
  );
};

export default CustomImage;
