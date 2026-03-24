import { ArrowUpRightIcon } from "lucide-react";

import { FillableButton } from "@/components/gsap/fillable-button";

export const Demo = () => {
    return (
        <div className="flex flex-wrap items-center justify-center gap-4">
            <div className="flex items-center gap-1">
                <FillableButton size="xs">Extra Small</FillableButton>
                <FillableButton size="icon-xs">
                    <ArrowUpRightIcon />
                </FillableButton>
            </div>
            <div className="flex items-center gap-1">
                <FillableButton size="sm">Small</FillableButton>
                <FillableButton size="icon-sm">
                    <ArrowUpRightIcon />
                </FillableButton>
            </div>
            <div className="flex items-center gap-1">
                <FillableButton size="default">Default</FillableButton>
                <FillableButton size="icon">
                    <ArrowUpRightIcon />
                </FillableButton>
            </div>
            <div className="flex items-center gap-1">
                <FillableButton size="lg">Large</FillableButton>
                <FillableButton size="icon-lg">
                    <ArrowUpRightIcon />
                </FillableButton>
            </div>
        </div>
    );
};
