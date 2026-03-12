"use client";

import { useEffect, useState } from "react";

import { FlipReveal, FlipRevealItem } from "@/components/gsap/flip-reveal";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

const categories = ["shirt", "goggles", "shoes"];

export const FlipRevealDemo = () => {
    const [key, setKey] = useState(["shirt"]);
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            if (index == -1) {
                clearInterval(interval);
            } else {
                setKey([categories[(index + 1) % 3]]);
                setIndex(index + 1);
            }
        }, 3000);
        return () => clearInterval(interval);
    }, [index]);

    const onValueChange = (e: string[]) => {
        if (e.length > 0) {
            setIndex(-1);
            setKey(e);
        }
    };

    return (
        <div className="space-y-8">
            <ToggleGroup value={key} onValueChange={onValueChange}>
                <ToggleGroupItem value="shirt" className="w-full cursor-pointer sm:px-4">
                    Shirt
                </ToggleGroupItem>
                <ToggleGroupItem value="goggles" className="w-full cursor-pointer sm:px-4">
                    Goggles
                </ToggleGroupItem>
                <ToggleGroupItem value="shoes" className="w-full cursor-pointer sm:px-4">
                    Shoes
                </ToggleGroupItem>
            </ToggleGroup>
            <FlipReveal className="grid grid-cols-3 gap-4 sm:gap-6" keys={key} showClass="flex" hideClass="hidden">
                <FlipRevealItem flipKey="shirt">
                    <img
                        src="https://images.unsplash.com/photo-1696086152504-4843b2106ab4?q=80&w=300"
                        alt="Shirt"
                        className="size-16 rounded-md sm:size-24 xl:size-36"
                    />
                </FlipRevealItem>
                <FlipRevealItem flipKey="goggles" className="hidden">
                    <img
                        src="https://images.unsplash.com/photo-1648688135643-2716ec8f4b24?q=80&w=300"
                        alt="Goggles"
                        className="size-16 rounded-md sm:size-24 xl:size-36"
                    />
                </FlipRevealItem>
                <FlipRevealItem flipKey="shoes" className="hidden">
                    <img
                        src="https://images.unsplash.com/photo-1631984564919-1f6b2313a71c?q=80&w=300"
                        alt="Shoes"
                        className="size-16 rounded-md sm:size-24 xl:size-36"
                    />
                </FlipRevealItem>
                <FlipRevealItem flipKey="goggles" className="hidden">
                    <img
                        src="https://images.unsplash.com/photo-1632168844625-b22d7b1053c0?q=80&w=300"
                        alt="Goggles"
                        className="size-16 rounded-md sm:size-24 xl:size-36"
                    />
                </FlipRevealItem>
                <FlipRevealItem flipKey="shirt">
                    <img
                        src="https://images.unsplash.com/photo-1583656346517-4716a62e27b7?q=80&w=300"
                        alt="Shirt"
                        className="size-16 rounded-md sm:size-24 xl:size-36"
                    />
                </FlipRevealItem>
                <FlipRevealItem flipKey="shoes" className="hidden">
                    <img
                        src="https://images.unsplash.com/photo-1596480370804-cff0eed14888?q=80&w=300"
                        alt="Shoes"
                        className="size-16 rounded-md sm:size-24 xl:size-36"
                    />
                </FlipRevealItem>
                <FlipRevealItem flipKey="shirt">
                    <img
                        src="https://images.unsplash.com/photo-1740711152088-88a009e877bb?q=80&w=300"
                        alt="Goggles"
                        className="size-16 rounded-md sm:size-24 xl:size-36"
                    />
                </FlipRevealItem>{" "}
                <FlipRevealItem flipKey="shoes" className="hidden">
                    <img
                        src="https://images.unsplash.com/photo-1696086152508-1711cc7bcc9d?q=80&w=300"
                        alt="Shoes"
                        className="size-16 rounded-md sm:size-24 xl:size-36"
                    />
                </FlipRevealItem>
                <FlipRevealItem flipKey="goggles" className="hidden">
                    <img
                        src="https://images.unsplash.com/photo-1684790369514-f292d2dffc11?q=80&w=300"
                        alt="Goggles"
                        className="size-16 rounded-md sm:size-24 xl:size-36"
                    />
                </FlipRevealItem>
            </FlipReveal>
        </div>
    );
};
