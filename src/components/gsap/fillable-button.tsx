"use client";

import * as React from "react";

import { type VariantProps, cva } from "class-variance-authority";
import gsap from "gsap";

import { cn } from "@/lib/utils";

const overlayVariants = cva(
    "pointer-events-none absolute left-0 top-0 block aspect-square w-[170%] -translate-x-1/2 -translate-y-1/2 rounded-full",
    {
        variants: {
            variant: {
                default: "bg-black dark:bg-white",
                outline: "bg-zinc-300 dark:bg-zinc-600",
                destructive: "bg-destructive",
                secondary: "bg-secondary-foreground",
                ghost: "bg-muted",
                link: "",
            },
        },
        defaultVariants: {
            variant: "default",
        },
    },
);

const buttonVariants = cva(
    "cursor-pointer inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-colors",
    {
        variants: {
            variant: {
                default:
                    "relative bg-primary text-primary-foreground dark:hover:text-black overflow-hidden rounded-full! px-6 py-3.5 tracking-tight after:absolute after:inset-0 after:rounded-full after:pointer-events-none after:content-[''] ",
                outline:
                    "relative overflow-hidden rounded-full bg-transparent text-foreground px-6 py-3.5 tracking-tight after:absolute after:inset-0 after:rounded-full after:border-2 after:border-zinc-300 dark:after:border-zinc-600 after:pointer-events-none after:content-[''] ",
                destructive:
                    "relative bg-destructive/10 dark:bg-destructive/20 text-destructive hover:text-background overflow-hidden rounded-full! px-6 py-3.5 tracking-tight",
                secondary:
                    "relative bg-secondary text-secondary-foreground hover:text-background overflow-hidden rounded-full! px-6 py-3.5 tracking-tight",
                ghost: "relative bg-transparent text-foreground hover:text-accent-foreground overflow-hidden rounded-full! px-6 py-3.5 tracking-tight",
                link: "relative text-primary",
            },
            size: {
                default: "h-9 px-4 py-2 has-[>svg]:px-3",
                xs: "h-6 gap-1 rounded-md px-2 text-xs has-[>svg]:px-1.5 [&_svg:not([class*='size-'])]:size-3",
                sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
                lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
                icon: "size-9 p-0",
                "icon-xs": "size-6 rounded-md p-0 [&_svg:not([class*='size-'])]:size-3",
                "icon-sm": "size-8 p-0",
                "icon-lg": "size-10 p-0",
            },
        },
        defaultVariants: {
            variant: "default",
            size: "default",
        },
    },
);

function FillableButton({
    className,
    variant = "default",
    size = "default",
    children,
    overlayClassname,
    ...props
}: React.ComponentProps<"button"> &
    VariantProps<typeof buttonVariants> & {
        overlayClassname?: string;
    }) {
    const buttonRef = React.useRef<HTMLButtonElement>(null);
    const flairRef = React.useRef<HTMLSpanElement>(null);
    const underlineRef = React.useRef<HTMLSpanElement>(null);

    React.useEffect(() => {
        const button = buttonRef.current;
        if (!button) return;

        if (variant === "link") {
            const underline = underlineRef.current;
            if (!underline) return;

            const getXPercent = (e: MouseEvent) => {
                const { left, width } = button!.getBoundingClientRect();
                return gsap.utils.clamp(0, 100, ((e.clientX - left) / width) * 100);
            };

            const handleEnter = (e: MouseEvent) => {
                const xPercent = getXPercent(e);
                gsap.killTweensOf(underline);
                gsap.fromTo(
                    underline,
                    { scaleX: 0, transformOrigin: `${xPercent}% center` },
                    { scaleX: 1, duration: 0.3, ease: "power2.out" },
                );
            };

            const handleLeave = (e: MouseEvent) => {
                const xPercent = getXPercent(e);
                gsap.killTweensOf(underline);
                gsap.to(underline, {
                    scaleX: 0,
                    transformOrigin: `${xPercent}% center`,
                    duration: 0.25,
                    ease: "power2.in",
                });
            };

            button.addEventListener("mouseenter", handleEnter);
            button.addEventListener("mouseleave", handleLeave);

            return () => {
                button.removeEventListener("mouseenter", handleEnter);
                button.removeEventListener("mouseleave", handleLeave);
                gsap.killTweensOf(underline);
            };
        }

        const flair = flairRef.current;
        if (!flair) return;

        const xSet = gsap.quickSetter(flair, "xPercent");
        const ySet = gsap.quickSetter(flair, "yPercent");

        function getXY(e: MouseEvent) {
            if (!button) return;
            const { left, top, width, height } = button.getBoundingClientRect();

            const xTransformer = gsap.utils.pipe(gsap.utils.mapRange(0, width, 0, 100), gsap.utils.clamp(0, 100));

            const yTransformer = gsap.utils.pipe(gsap.utils.mapRange(0, height, 0, 100), gsap.utils.clamp(0, 100));

            return {
                x: xTransformer(e.clientX - left),
                y: yTransformer(e.clientY - top),
            };
        }

        function onMouseEnter(e: MouseEvent) {
            const pos = getXY(e);
            if (!pos) return;
            const { x, y } = pos;
            xSet(x);
            ySet(y);

            gsap.to(flair, {
                scale: 1,
                duration: 0.4,
                ease: "power2.out",
            });
        }

        function onMouseLeave(e: MouseEvent) {
            const pos = getXY(e);
            if (!pos) return;
            const { x, y } = pos;

            gsap.killTweensOf(flair);

            gsap.to(flair, {
                xPercent: x > 90 ? x + 20 : x < 10 ? x - 20 : x,
                yPercent: y > 90 ? y + 20 : y < 10 ? y - 20 : y,
                scale: 0,
                duration: 0.3,
                ease: "power2.out",
            });
        }

        function onMouseMove(e: MouseEvent) {
            const pos = getXY(e);
            if (!pos) return;
            const { x, y } = pos;

            gsap.to(flair, {
                xPercent: x,
                yPercent: y,
                duration: 0.4,
                ease: "power2",
            });
        }

        button.addEventListener("mouseenter", onMouseEnter);
        button.addEventListener("mouseleave", onMouseLeave);
        button.addEventListener("mousemove", onMouseMove);

        return () => {
            button.removeEventListener("mouseenter", onMouseEnter);
            button.removeEventListener("mouseleave", onMouseLeave);
            button.removeEventListener("mousemove", onMouseMove);
            gsap.killTweensOf(flair);
        };
    }, [variant]);

    return (
        <button
            ref={buttonRef}
            data-slot="button"
            data-variant={variant}
            data-size={size}
            className={cn(buttonVariants({ variant, size, className }))}
            {...props}>
            {variant !== "link" && (
                <span
                    ref={flairRef}
                    className="pointer-events-none absolute inset-0 origin-top-left scale-0 will-change-transform">
                    <span className={cn(overlayVariants({ variant }), overlayClassname)} />
                </span>
            )}
            <span className="relative z-10 flex items-center gap-2">
                {children}
                {variant === "link" && (
                    <span
                        ref={underlineRef}
                        className="absolute bottom-0 left-0 h-[1.5px] w-full scale-x-0 bg-current"
                    />
                )}
            </span>
        </button>
    );
}

export { FillableButton, buttonVariants };
