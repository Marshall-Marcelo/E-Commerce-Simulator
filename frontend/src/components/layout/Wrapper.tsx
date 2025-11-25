import React from "react";
import merge from "@/lib/merge";

export const PageWrapper = ({ children, className }: { children: React.ReactNode; className?: string }) => {
  return <div className={merge("grid place-items-center m-0 h-dvh", className)}>{children}</div>;
};

export const ContentWrapper = ({ children, className }: { children: React.ReactNode; className?: string }) => {
  return <div className={merge("p-4 flex flex-col gap-2", className)}>{children}</div>;
};
