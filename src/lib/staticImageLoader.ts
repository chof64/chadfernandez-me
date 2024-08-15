"use client";

export const staticImageLoader = ({
  src,
  width,
  quality,
}: {
  src: string;
  width: number;
  quality?: number;
}) => {
  return `/api/image/static/${width}q${quality ?? 80}${src}`;
};
