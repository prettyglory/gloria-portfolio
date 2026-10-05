import type { ButtonHTMLAttributes, AnchorHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

type Props = { children: ReactNode; variant?: "primary" | "secondary" | "icon"; className?: string };
const styles = { primary: "button-primary", secondary: "button-secondary", icon: "button-icon" };

export function Button({ children, variant = "primary", className, ...props }: Props & ButtonHTMLAttributes<HTMLButtonElement>) {
  return <button className={cn(styles[variant], className)} {...props}>{children}</button>;
}

export function ButtonLink({ children, variant = "primary", className, ...props }: Props & AnchorHTMLAttributes<HTMLAnchorElement>) {
  return <a className={cn(styles[variant], className)} {...props}>{children}</a>;
}
