import { ComponentProps } from "react";

import { Links } from "@/lib/links";
import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/button";

import { Icons } from "../icons";

export const Footer = ({ className, ...props }: ComponentProps<"div">) => {
    return (
        <div
            {...props}
            className={cn(
                "flex h-(--footer-height) flex-wrap items-center justify-between max-sm:justify-center",
                className,
            )}>
            <p className="max-sm:text-center max-sm:text-sm">
                Built by{" "}
                <a
                    className="hover:text-primary font-medium hover:underline"
                    href={Links.external.twitterPersonal}
                    target="_blank">
                    Denish
                </a>{" "}
                at{" "}
                <a
                    className="hover:text-primary font-medium hover:underline"
                    href={Links.external.organization}
                    target="_blank">
                    PaceKit
                </a>
            </p>
            <div className="flex items-center gap-0.5">
                <Button
                    variant={"ghost"}
                    size="icon"
                    nativeButton={false}
                    render={
                        <a href={Links.external.github} target="_blank">
                            <Icons.gitHub className="size-4.5" />
                        </a>
                    }
                    aria-label="Github"
                />

                <Button
                    variant={"ghost"}
                    size="icon"
                    nativeButton={false}
                    render={
                        <a href={Links.external.twitter} target="_blank">
                            <Icons.twitter className="size-4" />
                        </a>
                    }
                    aria-label="Github"
                />
                <Button
                    variant={"ghost"}
                    size="icon"
                    nativeButton={false}
                    aria-label="Discord"
                    render={
                        <a href={Links.external.discord} target="_blank">
                            <Icons.discord className="size-4.5" />
                        </a>
                    }
                />
            </div>
        </div>
    );
};
