import { FillableButton } from "@/components/gsap/fillable-button";

export const Demo = () => {
    return (
        <div className="flex flex-wrap items-center justify-center gap-4">
            <FillableButton>Default</FillableButton>
            <FillableButton variant="outline">Outline</FillableButton>
            <FillableButton variant="destructive">Destructive</FillableButton>
            <FillableButton variant="secondary">Secondary</FillableButton>
            <FillableButton variant="ghost">Ghost</FillableButton>
        </div>
    );
};
