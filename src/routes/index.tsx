import { createFileRoute } from "@tanstack/react-router";

import { Demo } from "@/components/pages/home/demo";
import { Feature } from "@/components/pages/home/feature";
import { Hero } from "@/components/pages/home/hero";
import { Footer } from "@/components/shared/layouts/footer";
import { Topbar } from "@/components/shared/layouts/topbar";
import { Newsletter } from "@/components/shared/newsletter";

export const Route = createFileRoute("/")({
    component: RouteComponent,
});

function RouteComponent() {
    return (
        <div>
            <a
                href="https://ui.pacekit.dev"
                target="_blank"
                className="bg-muted group flex h-8 w-full items-center justify-center">
                <span className="max-md:hidden">
                    <span className="font-medium text-blue-500 group-hover:underline">Introducing PaceKit UI</span> -
                    Build faster with practical UI blocks for real apps
                </span>
                <span className="md:hidden">
                    <span className="font-medium text-blue-500 group-hover:underline">PaceKit UI</span> - Blocks for
                    real apps
                </span>
            </a>
            <div className="bg-background/90 sticky top-0 z-10 border-b border-dashed backdrop-blur-md">
                <div className="container">
                    <Topbar />
                </div>
            </div>
            <div className="overflow-hidden">
                <div className="container">
                    <Hero />
                    <Feature />
                    <Demo />

                    <div className="my-8 flex justify-center lg:my-12 2xl:my-20">
                        <div className="max-w-lg">
                            <Newsletter />
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-background/90 sticky top-0 z-10 mt-8 border-t border-dashed xl:mt-16">
                <Footer className="container" />
            </div>
        </div>
    );
}
