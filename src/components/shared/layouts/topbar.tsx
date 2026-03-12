import { Link } from "@tanstack/react-router";

import { useSearchContext } from "@fumadocs/base-ui/contexts/search";
import { CommandIcon, SearchIcon } from "lucide-react";

import { Links } from "@/lib/links";

import { Button } from "@/components/ui/button";

import { Icons } from "../icons";
import { LayoutWidthManager } from "./layout-width-manager";
import { Logo } from "./logo";
import { MobileNav } from "./mobile-nav";
import { ThemeManager } from "./theme-manager";

export const Topbar = () => {
    const { setOpenSearch } = useSearchContext();

    return (
        <header className="bg-background/90 sticky top-0 z-49 w-full backdrop-blur-xs">
            <div className="flex h-(--header-height) items-center gap-1 px-2 xl:px-4">
                <div className="md:hidden">
                    <MobileNav />
                </div>
                <Link to="/">
                    <Logo />
                    <span className="sr-only">PaceKit</span>
                </Link>
                <div className="ms-4">
                    <Button
                        variant="outline"
                        size="sm"
                        className="w-48 justify-between max-md:hidden"
                        onClick={() => setOpenSearch(true)}>
                        <span className="font-normal">Search...</span>

                        <div className="flex items-center gap-1">
                            <kbd className="bg-background flex size-5 items-center justify-center rounded-lg border leading-none">
                                <CommandIcon className="size-2.5" />
                            </kbd>
                            <kbd className="bg-background flex size-5 items-center justify-center rounded-lg border">
                                <span className="pt-px text-[0.625rem] leading-none">K</span>
                            </kbd>
                        </div>
                    </Button>
                    <Button
                        variant="ghost"
                        size="icon-sm"
                        className="md:hidden"
                        onClick={() => setOpenSearch(true)}
                        aria-label="Search">
                        <SearchIcon className="size-4.5" />
                    </Button>
                </div>
                <div className="ml-auto flex items-center gap-0 md:flex-1 md:justify-end">
                    <div className="flex items-center gap-1">
                        <Button
                            variant="ghost"
                            size="icon-sm"
                            nativeButton={false}
                            aria-label="GitHub"
                            render={
                                <a href={Links.external.github} target="_blank">
                                    <Icons.gitHub className="text-foreground/80 size-4.5" />
                                </a>
                            }></Button>
                        <Button
                            variant="ghost"
                            size="icon-sm"
                            nativeButton={false}
                            aria-label="Twitter"
                            render={
                                <a href={Links.external.twitter} target="_blank">
                                    <Icons.twitter className="text-foreground/80 size-4" />
                                </a>
                            }
                        />

                        <Button
                            variant="ghost"
                            size="icon-sm"
                            nativeButton={false}
                            aria-label="Discord"
                            render={
                                <a href={Links.external.discord} target="_blank">
                                    <Icons.discord className="text-foreground/80 size-4.5" />
                                </a>
                            }
                        />
                    </div>
                    <div className="bg-border mx-2 h-6.5 w-px"></div>
                    <div className="flex items-center gap-0">
                        <LayoutWidthManager />
                        <ThemeManager />
                    </div>
                </div>
            </div>
        </header>
    );
};
