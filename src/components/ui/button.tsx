import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap font-mono text-sm uppercase tracking-wider transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 rounded-none",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground hover:bg-primary/90 shadow-[0_0_15px_hsl(350_100%_50%/0.6),0_0_30px_hsl(350_100%_50%/0.4)] hover:shadow-[0_0_20px_hsl(350_100%_50%/0.8),0_0_40px_hsl(350_100%_50%/0.5)]",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:
          "border-2 border-foreground bg-transparent text-foreground hover:border-primary hover:text-primary hover:shadow-[0_0_20px_hsl(350_100%_50%/0.3)]",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        brutal:
          "bg-primary text-primary-foreground border-2 border-foreground shadow-[4px_4px_0_hsl(0_0%_100%)] hover:shadow-[8px_8px_0_hsl(350_100%_50%)] hover:translate-x-[-4px] hover:translate-y-[-4px] active:shadow-none active:translate-x-0 active:translate-y-0",
        chrome:
          "bg-gradient-to-b from-chrome to-chrome-dark text-background border border-chrome hover:from-foreground hover:to-chrome",
        neon:
          "bg-primary text-primary-foreground shadow-[0_0_15px_hsl(350_100%_50%/0.6),0_0_30px_hsl(350_100%_50%/0.4),0_0_45px_hsl(350_100%_50%/0.2)] hover:shadow-[0_0_20px_hsl(350_100%_50%/0.8),0_0_40px_hsl(350_100%_50%/0.6),0_0_60px_hsl(350_100%_50%/0.3)]",
      },
      size: {
        default: "h-12 px-6 py-3",
        sm: "h-10 px-4 py-2",
        lg: "h-14 px-8 py-4 text-base",
        xl: "h-16 px-10 py-5 text-lg",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
