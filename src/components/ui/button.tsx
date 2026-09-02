import { cva, type VariantProps } from "class-variance-authority";
import { Slot } from "@radix-ui/react-slot";
import * as React from "react";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap font-ui text-sm font-medium transition-[opacity,transform,background-color,color,border-color] duration-[var(--motion-quick)] ease-[var(--ease-out)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent disabled:pointer-events-none disabled:opacity-40 active:scale-[0.98]",
  {
    variants: {
      variant: {
        solid:
          "bg-accent text-accent-fg hover:opacity-90",
        ghost:
          "bg-transparent text-chrome-fg hover:bg-chrome-elevated",
        outline:
          "border border-chrome-border bg-transparent text-chrome-fg hover:bg-chrome-elevated",
        paper:
          "bg-paper text-ink hover:bg-paper-shadow",
      },
      size: {
        sm: "h-9 px-3 rounded-[var(--radius-sm)]",
        md: "h-10 px-4 rounded-[var(--radius-md)]",
        icon: "size-10 rounded-[var(--radius-md)]",
      },
    },
    defaultVariants: { variant: "ghost", size: "md" },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size }), className)}
        ref={ref}
        {...props}
      />
    );
  },
);
Button.displayName = "Button";
