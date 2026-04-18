import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

export function SectionWrapper({
  children,
  className,
  id,
}: {
  children: ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <section
      id={id}
      className={twMerge(
        "w-full px-4 sm:px-6 lg:px-8 py-20 lg:py-28",
        className
      )}
    >
      <div className="max-w-7xl mx-auto">{children}</div>
    </section>
  );
}
