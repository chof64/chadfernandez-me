import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function InlineTextLogo({
  children,
  image,
  href,
}: {
  children: React.ReactNode;
  image: string;
  href?: string;
}) {
  return (
    <Root
      className="inline-flex items-center rounded-md border bg-gray-100/50 px-1 py-0.5 align-middle text-sm font-medium"
      href={href}
    >
      <Image
        className="mr-0.5 align-middle"
        src={image}
        height={20}
        width={20}
        alt="inline logo, check the text"
      />
      {children}
    </Root>
  );
}

const Root = ({
  children,
  href,
  className,
}: {
  children: React.ReactNode;
  href?: string;
  className: string;
}) => {
  if (href) {
    return (
      <Link
        className={className}
        href={href}
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </Link>
    );
  }
  return <span className={className}>{children}</span>;
};
