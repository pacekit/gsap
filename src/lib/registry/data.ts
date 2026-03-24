import { DataRegistry } from "@/lib/registry/types";

export const registries: DataRegistry[] = [
    {
        name: "ai-suggestions",
        title: "AI Suggestions",
        description: "Get smart, real-time AI recommendations to refine and improve your work",
        type: "registry:ui",
        demoPath: "demo/gsap/ai-suggestions/default.tsx",
        dependencies: ["gsap", "@gsap/react"],
        files: [
            {
                path: "components/gsap/ai-suggestions.tsx",
                type: "registry:ui",
                target: "~/components/gsap/ai-suggestions.tsx",
            },
        ],
    },
    {
        name: "ai-modal-selector",
        title: "Modal Selector",
        description: "AI-focused model selector with preview, tooltips, and capability indicators built-in",
        type: "registry:ui",
        demoPath: "demo/gsap/ai-modal-selector/default.tsx",
        dependencies: ["gsap", "@gsap/react"],
        registryDependencies: ["@pacekit/swap", "button"],
        files: [
            {
                path: "components/gsap/ai-modal-selector.tsx",
                type: "registry:ui",
                target: "~/components/gsap/ai-modal-selector.tsx",
            },
        ],
    },
    {
        name: "ai-modal-ability-selector",
        title: "Modal Ability Selector",
        description: "Compact selector for toggling abilities with icons and custom styles",
        type: "registry:ui",
        demoPath: "demo/gsap/ai-modal-ability-selector/default.tsx",
        dependencies: ["gsap", "@gsap/react"],
        registryDependencies: ["@pacekit-gsap/swap", "button", "dropdown-menu", "tooltip"],
        files: [
            {
                path: "components/gsap/ai-modal-ability-selector.tsx",
                type: "registry:ui",
                target: "~/components/gsap/ai-modal-ability-selector.tsx",
            },
        ],
    },
    {
        name: "ai-response-writer",
        title: "Response Writer",
        description: "An auto-scrolling text display that smoothly keeps the latest response always visible",
        type: "registry:ui",
        demoPath: "demo/gsap/ai-response-writer/default.tsx",
        dependencies: ["gsap", "@gsap/react"],
        files: [
            {
                path: "components/gsap/ai-response-writer.tsx",
                type: "registry:ui",
                target: "~/components/gsap/ai-response-writer.tsx",
            },
            {
                path: "hooks/gsap/use-writer.ts",
                type: "registry:hook",
                target: "~/hooks/gsap/use-writer.ts",
            },
        ],
    },
    {
        name: "ai-token-counter",
        title: "Modal Ability Selector",
        description: "Compact selector for toggling abilities with icons and custom styles",
        type: "registry:ui",
        demoPath: "demo/gsap/ai-token-counter/default.tsx",
        dependencies: ["gsap", "@gsap/react"],
        files: [
            {
                path: "components/gsap/ai-token-counter.tsx",
                type: "registry:ui",
                target: "~/components/gsap/ai-token-counter.tsx",
            },
        ],
    },
    {
        name: "reveal-text",
        title: "Reveal Text",
        description: "A smooth text reveals animation where each heading reveals related content on interaction.",
        type: "registry:ui",
        demoPath: "demo/gsap/reveal-text/default.tsx",
        dependencies: ["gsap", "@gsap/react"],
        files: [
            {
                path: "components/gsap/reveal-text.tsx",
                type: "registry:ui",
                target: "~/components/gsap/reveal-text.tsx",
            },
        ],
    },
    {
        name: "scramble-text",
        title: "Scramble Text",
        description: "A hover-triggered text effect that scrambles and restores characters with smooth motion",
        type: "registry:ui",
        demoPath: "demo/gsap/scramble-text/default.tsx",
        dependencies: ["gsap", "@gsap/react"],
        files: [
            {
                path: "components/gsap/scramble-text.tsx",
                type: "registry:ui",
                target: "~/components/gsap/scramble-text.tsx",
            },
        ],
    },
    {
        name: "squash-text",
        title: "Squash Text",
        description: "Characters bounce and squash into place with playful, dynamic energy.",
        type: "registry:ui",
        demoPath: "demo/gsap/squash-text/default.tsx",
        dependencies: ["gsap", "@gsap/react"],
        files: [
            {
                path: "components/gsap/squash-text.tsx",
                type: "registry:ui",
                target: "~/components/gsap/squash-text.tsx",
            },
        ],
    },
    {
        name: "bouncing-text",
        title: "Bouncing Text",
        description: "A playful animation where characters bounce in sequence across the text.",
        type: "registry:ui",
        demoPath: "demo/gsap/bouncing-text/default.tsx",
        dependencies: ["gsap", "@gsap/react"],
        files: [
            {
                path: "components/gsap/bouncing-text.tsx",
                type: "registry:ui",
                target: "~/components/gsap/bouncing-text.tsx",
            },
        ],
    },
    {
        name: "draw-line-text",
        title: "Draw Line Text",
        description:
            "A smooth text effect that draws characters as strokes and fills them in—perfect for headers and highlights.",
        type: "registry:ui",
        demoPath: "demo/gsap/draw-line-text/default.tsx",
        dependencies: ["gsap", "@gsap/react"],
        files: [
            {
                path: "components/gsap/draw-line-text.tsx",
                type: "registry:ui",
                target: "~/components/gsap/draw-line-text.tsx",
            },
        ],
    },
    {
        name: "mouse-wave-text",
        title: "Mouse Wave Text",
        description: "Creates a wave-like bounce effect on text as the mouse moves across",
        type: "registry:ui",
        demoPath: "demo/gsap/mouse-wave-text/default.tsx",
        dependencies: ["gsap", "@gsap/react"],
        files: [
            {
                path: "components/gsap/mouse-wave-text.tsx",
                type: "registry:ui",
                target: "~/components/gsap/mouse-wave-text.tsx",
            },
        ],
    },
    {
        name: "text-fall-button",
        title: "Text Fall Button",
        description:
            "A button with dynamic text that falls into place with a smooth, elastic motion on hover or click.",
        type: "registry:ui",
        demoPath: "demo/gsap/text-fall-button/default.tsx",
        dependencies: ["gsap", "@gsap/react"],
        files: [
            {
                path: "components/gsap/text-fall-button.tsx",
                type: "registry:ui",
                target: "~/components/gsap/text-fall-button.tsx",
            },
        ],
    },
    {
        name: "spring-button",
        title: "Spring Button",
        description: "A button that shrinks on press and springs back with bounce.",
        type: "registry:ui",
        demoPath: "demo/gsap/spring-button/default.tsx",
        dependencies: ["gsap", "@gsap/react"],
        files: [
            {
                path: "components/gsap/spring-button.tsx",
                type: "registry:ui",
                target: "~/components/gsap/spring-button.tsx",
            },
        ],
    },
    {
        name: "fillable-button",
        title: "Fillable Button",
        description: "A button that fills with color on hover.",
        type: "registry:ui",
        demoPath: "demo/gsap/fillable-button/default.tsx",
        dependencies: ["gsap", "@gsap/react"],
        files: [
            {
                path: "components/gsap/fillable-button.tsx",
                type: "registry:ui",
                target: "~/components/gsap/fillable-button.tsx",
            },
        ],
    },
    {
        name: "swap",
        title: "Swap",
        description:
            "A flexible swap component that animates content changes with smooth customizable transition effects.",
        type: "registry:ui",
        demoPath: "demo/gsap/swap/default.tsx",
        dependencies: ["gsap", "@gsap/react"],
        files: [
            {
                path: "components/gsap/swap.tsx",
                type: "registry:ui",
                target: "~/components/gsap/swap.tsx",
            },
        ],
    },
    {
        name: "animated-stack",
        title: "Animated Stack",
        description: "A smooth stacked card component that expands on hover and collapses with animation.",
        type: "registry:ui",
        demoPath: "demo/gsap/animated-stack/default.tsx",
        dependencies: ["gsap", "@gsap/react"],
        files: [
            {
                path: "components/gsap/animated-stack.tsx",
                type: "registry:ui",
                target: "~/components/gsap/animated-stack.tsx",
            },
        ],
    },
    {
        name: "layered-stack",
        title: "Layered Stack",
        description:
            "An interactive component that dynamically layers elements, creating a visually engaging stacked animation effect.",
        type: "registry:ui",
        demoPath: "demo/gsap/layered-stack/default.tsx",
        dependencies: ["gsap", "@gsap/react"],
        files: [
            {
                path: "components/gsap/layered-stack.tsx",
                type: "registry:ui",
                target: "~/components/gsap/layered-stack.tsx",
            },
        ],
    },
    {
        name: "gradient-shadow",
        title: "Gradient Shadow",
        description: "Smooth horizontal gradient flow, creating a subtle glowing hover shadow effect.",
        type: "registry:ui",
        demoPath: "demo/gsap/gradient-shadow/default.tsx",
        dependencies: ["gsap", "@gsap/react"],
        files: [
            {
                path: "components/gsap/gradient-shadow.tsx",
                type: "registry:ui",
                target: "~/components/gsap/gradient-shadow.tsx",
            },
        ],
    },
    {
        name: "github-star-counter",
        title: "GitHub Star Counter",
        description: "Display live GitHub star count for any public repository",
        type: "registry:ui",
        demoPath: "demo/gsap/github-star-counter/default.tsx",
        registryDependencies: ["@pacekit-gsap/rolling-number"],
        files: [
            {
                path: "components/gsap/github-star-counter.tsx",
                type: "registry:ui",
                target: "~/components/gsap/github-star-counter.tsx",
            },
        ],
    },
    {
        name: "profile-peek",
        title: "Profile Peek",
        description: "Hover to peek profile with smooth reveal, right from the image.",
        type: "registry:ui",
        demoPath: "demo/gsap/profile-peek/default.tsx",
        dependencies: ["gsap", "@gsap/react"],
        files: [
            {
                path: "components/gsap/profile-peek.tsx",
                type: "registry:ui",
                target: "~/components/gsap/profile-peek.tsx",
            },
        ],
    },
    {
        name: "flip-reveal",
        title: "Flip Reveal",
        description: "Animated container that reveals or hides items using GSAP Flip transitions and keys.",
        type: "registry:ui",
        demoPath: "demo/gsap/flip-reveal/default.tsx",
        dependencies: ["gsap", "@gsap/react"],
        files: [
            {
                path: "components/gsap/flip-reveal.tsx",
                type: "registry:ui",
                target: "~/components/gsap/flip-reveal.tsx",
            },
        ],
    },
    {
        name: "reveal-on-scroll",
        title: "Reveal On Scroll",
        description: "Animate content into view on scroll with effects like fade, slide, zoom, and blur.",
        type: "registry:ui",
        demoPath: "demo/gsap/reveal-on-scroll/default.tsx",
        dependencies: ["gsap", "@gsap/react"],
        files: [
            {
                path: "components/gsap/reveal-on-scroll.tsx",
                type: "registry:ui",
                target: "~/components/gsap/reveal-on-scroll.tsx",
            },
        ],
    },
    {
        name: "stagger-on-scroll",
        title: "Stagger on Scroll",
        description: "Stagger elements into view with scroll-triggered fade, slide, zoom, or blur effects.",
        type: "registry:ui",
        demoPath: "demo/gsap/stagger-on-scroll/default.tsx",
        dependencies: ["gsap", "@gsap/react"],
        files: [
            {
                path: "components/gsap/stagger-on-scroll.tsx",
                type: "registry:ui",
                target: "~/components/gsap/stagger-on-scroll.tsx",
            },
        ],
    },
    {
        name: "liquid-cursor",
        title: "Liquid Cursor",
        description: "A smooth, fluid cursor that follows your mouse with gentle stretch and bounce effects.",
        type: "registry:ui",
        demoPath: "demo/gsap/liquid-cursor/default.tsx",
        dependencies: ["gsap", "@gsap/react"],
        files: [
            {
                path: "components/gsap/liquid-cursor.tsx",
                type: "registry:ui",
                target: "~/components/gsap/liquid-cursor.tsx",
            },
        ],
    },
    {
        name: "liquid-glass",
        title: "Liquid Glass",
        description: "A smooth glass effect with subtle blur, ideal for UI highlights and overlays.",
        type: "registry:ui",
        demoPath: "demo/gsap/liquid-glass/default.tsx",
        dependencies: ["gsap", "@gsap/react"],
        files: [
            {
                path: "components/gsap/liquid-glass.tsx",
                type: "registry:ui",
                target: "~/components/gsap/liquid-glass.tsx",
            },
        ],
    },
    {
        name: "tilt-card",
        title: "Tilt Card",
        description: "Interactive 3D tilt card that responds to cursor, adds depth and motion",
        type: "registry:ui",
        demoPath: "demo/gsap/tilt-card/default.tsx",
        dependencies: ["gsap", "@gsap/react"],
        files: [
            {
                path: "components/gsap/tilt-card.tsx",
                type: "registry:ui",
                target: "~/components/gsap/tilt-card.tsx",
            },
        ],
    },
    {
        name: "dot-loader",
        title: "Dot Loader",
        description:
            "A compact 7x7 dot grid loader with smooth animation to visualize frame sequences or loading states in your app.",
        type: "registry:ui",
        demoPath: "demo/gsap/dot-loader/default.tsx",
        files: [
            {
                path: "components/gsap/dot-loader.tsx",
                type: "registry:ui",
                target: "~/components/gsap/dot-loader.tsx",
            },
        ],
    },
    {
        name: "dot-flow",
        title: "Dot Flow",
        description: "Visually expressive status updates with animated dots and smooth sliding text transitions.",
        type: "registry:ui",
        demoPath: "demo/gsap/dot-flow/default.tsx",
        dependencies: ["gsap", "@gsap/react"],
        registryDependencies: ["@pacekit-gsap/dot-loader"],

        files: [
            {
                path: "components/gsap/dot-flow.tsx",
                type: "registry:ui",
                target: "~/components/gsap/dot-flow.tsx",
            },
        ],
    },
];
