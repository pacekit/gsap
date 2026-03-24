import { FillableButton } from "@/components/gsap/fillable-button";
import { Spinner } from "@/components/ui/spinner";

export const Demo = () => {
    return (
        <FillableButton disabled>
            <Spinner data-icon="inline-start" />
            Loading
        </FillableButton>
    );
};
