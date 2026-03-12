import { cn } from "@/lib/utils";

export const Logo = ({ responsive = true }: { responsive?: boolean }) => {
    return (
        <>
            <img
                src="/images/brand/logo-dark.svg"
                alt="Logo"
                className={cn("h-7 dark:hidden", {
                    "max-md:hidden": responsive,
                })}
            />
            <img
                src="/images/brand/logo-light.svg"
                alt="Logo"
                className={cn("h-7 not-dark:hidden", { "max-md:hidden": responsive })}
            />

            <img
                src="/images/brand/logo-dark-icon.svg"
                alt="Logo"
                className={cn("h-6.5 dark:hidden", {
                    "md:hidden": responsive,
                    hidden: !responsive,
                })}
            />
            <img
                src="/images/brand/logo-light-icon.svg"
                alt="Logo"
                className={cn("h-6.5 not-dark:hidden", {
                    "md:hidden": responsive,
                    hidden: !responsive,
                })}
            />
        </>
    );
};
