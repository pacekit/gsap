import { Link } from "@tanstack/react-router";

import { ArrowRightIcon, BlocksIcon, BookOpenTextIcon, ChevronRightIcon, ShapesIcon } from "lucide-react";

import { Links } from "@/lib/links";

import { GithubStarCounter } from "@/components/gsap/github-star-counter";
import { RevealText } from "@/components/gsap/reveal-text";
import { SpringButton } from "@/components/gsap/spring-button";
import { TiltCard } from "@/components/gsap/tilt-card";
import { Button } from "@/components/ui/button";

import { ProductDemo } from "./demos/product-demo";
import { RevealTextDemo } from "./demos/reveal-text-demo";

export const Hero = () => {
    return (
        <div className="relative mt-4 flex justify-center md:pt-8 lg:pt-16 xl:pt-16 2xl:pt-20">
            <div className="flex max-w-3xl flex-col items-center text-center">
                <a
                    href={Links.external.ui}
                    className="flex items-center gap-2 rounded-full border py-1 ps-2.5 pe-3 text-sm hover:shadow">
                    <BlocksIcon className="text-primary size-4" />
                    <p className="font-medium">Building Blocks</p>
                </a>
                <h1 className="mt-6 text-2xl leading-[1.15] font-[580] tracking-tight sm:text-4xl md:text-5xl 2xl:text-6xl">
                    <p>
                        Interactive{" "}
                        <span className="text-primary-foreground group relative inline">
                            animations
                            <span className="from-primary via-primary/90 to-primary animate-title-shape-morph absolute -inset-x-2 -inset-y-1 -z-1 skew-0 bg-linear-to-r"></span>
                        </span>
                    </p>
                    <p>shaping every experience</p>
                </h1>
                <RevealText
                    type="lines"
                    gsapVars={{ stagger: 0.35 }}
                    splitTextVars={{ mask: "lines" }}
                    className="mt-4 sm:mt-6 lg:mt-8">
                    <h2 className="text-foreground/90 text-sm tracking-tight text-balance sm:text-lg md:text-xl">
                        Animated <span className="font-semibold">GSAP components</span> crafted for smooth interaction
                        and rich detail. Copy, customise, and create without the extra setup.
                    </h2>
                </RevealText>
                <div className="mt-6 flex flex-wrap justify-center gap-4 max-sm:items-center sm:mt-8 xl:mt-12 xl:gap-6 2xl:mt-16">
                    <Button
                        size="lg"
                        nativeButton={false}
                        render={
                            <Link to={"/docs/components/ai-modal-selector" as string}>
                                <ShapesIcon className="size-5" />
                                Components
                                <ChevronRightIcon />
                            </Link>
                        }
                        className="shadow-primary/20 h-11 gap-2.5 px-6 shadow-xl"></Button>
                    <Button
                        size="lg"
                        variant="ghost"
                        nativeButton={false}
                        render={
                            <Link to={"/docs" as string}>
                                <BookOpenTextIcon className="size-5" />
                                Documentation
                            </Link>
                        }
                        className="h-11 gap-2.5 px-6"></Button>
                </div>
            </div>

            <div className="absolute -inset-s-4 top-28 flex flex-col items-center gap-4 max-2xl:hidden">
                <div className="flex items-center justify-center gap-5">
                    <SpringButton
                        className="bg-foreground text-background cursor-pointer rounded px-4 py-2 font-medium"
                        scale={0.6}>
                        Pop & Press
                    </SpringButton>
                    <hr className="h-6 border-s border-dashed" />
                    <GithubStarCounter repo="paceui/kit" defaultStar="000" />
                </div>
                <hr className="border-t border-dashed px-24" />
                <ProductDemo />
            </div>
            <div className="absolute -inset-e-4 top-28 flex flex-col items-center gap-4 max-2xl:hidden">
                <div className="relative">
                    <TiltCard
                        className="bg-card w-56 rounded border p-4 sm:w-64"
                        highlightClassName="bg-white/15 dark:bg-white/2">
                        <p className="text-muted-foreground font-mono text-xs">New Update</p>
                        <p className="mt-1 text-lg/none font-medium">Blocks</p>
                        <img
                            className="mt-3 h-32 w-full overflow-hidden rounded-md object-cover object-left dark:invert"
                            src="/images/docs/landing-block-hero.png"
                            alt="Image"
                        />
                        <p className="mt-1 text-sm leading-tight">Beautiful, interactive, and ready to use sections</p>
                        <div className="mt-2 flex justify-end">
                            <Button
                                variant="outline"
                                size="sm"
                                nativeButton={false}
                                className="cursor-pointer shadow-none"
                                render={
                                    <a href={Links.external.ui} target="_blank">
                                        <span>Explore Blocks</span>
                                        <ArrowRightIcon className="size-3!" />
                                    </a>
                                }></Button>
                        </div>
                    </TiltCard>
                    <div className="absolute -end-18 top-8">
                        <svg className="fill-foreground/50 h-16 -rotate-30" viewBox="0 0 511 464">
                            <path d="M483.438 197.118C487.34 228.965 466.778 259.114 443.695 278.934C418.138 300.978 386.514 314.879 353.207 320.38C285.833 331.851 218.728 310.303 158.478 281.734C120.963 263.965 85.3952 242.55 51.5793 218.308C48.4395 216.049 48.7277 210.28 51.0453 207.802C53.9668 204.604 58.4111 205.01 61.5509 207.269C90.2183 227.694 120.287 245.858 151.758 261.76C180.558 276.162 210.155 289.025 241.134 297.89C301.394 314.57 368.951 314.17 421.883 277C446.78 259.557 472.351 230.165 468.234 197.402C467.881 193.426 471.718 190.013 475.441 189.815C480.236 189.655 483.084 193.142 483.438 197.118Z" />
                            <path d="M66.8645 331.562C60.385 293.266 53.9054 254.97 47.4259 216.674C46.0557 208.781 42.8711 198.511 50.5076 192.756C54.2478 189.751 59.0426 189.592 63.8964 190.095C68.7501 190.598 73.3506 191.258 78.3604 192.014C97.6783 194.437 116.899 197.268 136.217 199.691C157.991 202.696 179.609 205.448 201.383 208.454C205.321 209.172 207.722 213.634 206.847 217.318C205.876 221.412 201.921 223.501 197.983 222.782C162.563 218.052 127.144 213.322 92.1336 208.689C83.0887 207.623 74.141 206.149 65.0962 205.083C64.0241 205.045 61.3735 205.281 60.2425 204.58C59.2676 204.132 60.1453 204.989 60.3397 204.171C60.6104 201.208 61.0995 203.702 61.0995 203.702C61.2556 203.955 61.6093 207.931 61.7654 208.185C62.2545 210.679 62.5875 212.921 63.0766 215.415C66.091 232.78 68.852 250.301 72.0225 267.919C75.5259 287.778 78.776 307.794 82.2795 327.653C83.0426 331.726 81.2522 335.626 77.0819 336.798C72.5993 337.464 67.4715 335.382 66.8645 331.562Z" />
                        </svg>
                    </div>
                    <div className="absolute -inset-e-24 top-6">
                        <p className="text-muted-foreground text-sm font-medium">Hover Me</p>
                    </div>
                </div>
                <hr className="border-t border-dashed px-20" />
                <RevealTextDemo />
            </div>
        </div>
    );
};
