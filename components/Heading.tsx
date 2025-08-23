import React from "react";

type HeadingProps = {
  children: React.ReactNode;
  className?: string;
};

export default function Heading({ children, className }: HeadingProps) {
  return <h1 className={`text-2xl font-bold pb-3 ${className}`}>{children}</h1>;
}
