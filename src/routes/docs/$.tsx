import { Link, createFileRoute, notFound } from "@tanstack/react-router";
import { createServerFn } from "@tanstack/react-start";
import { Suspense } from "react";

import { findNeighbour } from "fumadocs-core/page-tree";
import { useFumadocsLoader } from "fumadocs-core/source/client";
import browserCollections from "fumadocs-mdx:collections/browser";
import { ArrowLeftIcon, ArrowRightIcon, HomeIcon } from "lucide-react";

import { source } from "@/features/docs/source";
import { getHeadMeta } from "@/features/seo/meta";

import { TOCAds } from "@/components/shared/docs/TOCAds";
import { getMDXComponents } from "@/components/shared/docs/mdx";
import { DocsTableOfContents } from "@/components/shared/docs/toc";
import { Footer } from "@/components/shared/layouts/footer";
import { Sidebar } from "@/components/shared/layouts/sidebar";
import { Topbar } from "@/components/shared/layouts/topbar";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/docs/$")({
    component: Page,
    loader: async ({ params }) => {
        const slugs = params._splat?.split("/") ?? [];
        const data = await serverLoader({ data: slugs });
        await clientLoader.preload(data.path);
        return data;
    },
    head: ({ loaderData }) => {
        return getHeadMeta({
            title: loaderData?.title,
            description: loaderData?.description,
        });
    },
});

type DocsPageData = {
    path: string;
    pageTree: any;
    title: string;
    description?: string;
    neighbours: {
        previous?: any;
        next?: any;
    };
};

const serverLoader = createServerFn({
    method: "GET",
})
    .inputValidator((slugs: string[]) => slugs)
    .handler(async ({ data }): Promise<DocsPageData> => {
        const page = source.getPage(data);
        if (!page) throw notFound();
        const pageTree = await source.serializePageTree(source.getPageTree());
        const path = page.path;

        const neighbours = findNeighbour(source.pageTree, page.url);

        return {
            path,
            title: page.data.title,
            description: page.data.description,
            pageTree,
            neighbours,
        };
    });

const clientLoader = browserCollections.docs.createClientLoader({
    component({ toc, frontmatter, default: MDX }) {
        const doc = frontmatter;
        const { neighbours } = Route.useLoaderData();

        return (
            <div
                data-slot="docs"
                className="flex scroll-mt-24 items-stretch gap-4 text-[1.05rem] sm:text-[15px] xl:w-full 2xl:gap-5">
                <div className="flex min-w-0 grow flex-col">
                    <div className="mx-auto w-full max-w-240 min-w-0 px-4 pt-6 md:px-0 lg:pt-8">
                        <div className="flex items-start justify-between">
                            <h1 className="scroll-m-24 text-2xl font-semibold tracking-tight md:text-3xl xl:text-4xl">
                                {doc.title}
                            </h1>
                            <div className="docs-nav bg-background/80 border-border/50 fixed inset-x-0 bottom-0 isolate z-50 flex items-center gap-2 border-t px-6 py-4 backdrop-blur-sm sm:static sm:z-0 sm:border-t-0 sm:bg-transparent sm:px-0 sm:py-1.5 sm:backdrop-blur-none">
                                <div className="ml-auto flex gap-2">
                                    {neighbours.previous ? (
                                        <Button
                                            variant="secondary"
                                            size="icon"
                                            nativeButton={false}
                                            className="extend-touch-target size-8 shadow-none md:size-7"
                                            render={
                                                <Link to={neighbours.previous?.url}>
                                                    <ArrowLeftIcon />
                                                    <span className="sr-only">Previous</span>
                                                </Link>
                                            }></Button>
                                    ) : (
                                        <Button
                                            variant="secondary"
                                            size="icon"
                                            nativeButton={false}
                                            className="extend-touch-target size-8 shadow-none md:size-7"
                                            render={
                                                <Link to="/">
                                                    <HomeIcon />
                                                    <span className="sr-only">Home</span>
                                                </Link>
                                            }></Button>
                                    )}
                                    <Button
                                        variant="secondary"
                                        size="icon"
                                        nativeButton={false}
                                        disabled={!neighbours.next}
                                        className="extend-touch-target size-8 shadow-none data-disabled:opacity-40 md:size-7"
                                        render={
                                            <Link to={neighbours.next?.url}>
                                                <span className="sr-only">Next</span>
                                                <ArrowRightIcon />
                                            </Link>
                                        }></Button>
                                </div>
                            </div>
                        </div>
                        {doc.description && <p className="text-muted-foreground md:max-w-[90%]">{doc.description}</p>}
                        <div className="prose mt-12 w-full flex-1 pb-16 sm:pb-0">
                            <MDX components={getMDXComponents()} />
                        </div>
                        <div className="mt-6 hidden w-full items-center gap-2 sm:flex xl:mt-12">
                            {neighbours.previous && (
                                <Button
                                    variant="secondary"
                                    size="sm"
                                    nativeButton={false}
                                    className="shadow-none"
                                    render={
                                        <Link to={neighbours.previous.url}>
                                            <ArrowLeftIcon /> {neighbours.previous.name}
                                        </Link>
                                    }></Button>
                            )}
                            {neighbours.next && (
                                <Button
                                    variant="secondary"
                                    size="sm"
                                    nativeButton={false}
                                    className="ml-auto shadow-none"
                                    render={
                                        <Link to={neighbours.next.url}>
                                            {neighbours.next.name} <ArrowRightIcon />
                                        </Link>
                                    }></Button>
                            )}
                        </div>
                        <Footer className="my-4 xl:my-8" />
                    </div>
                </div>
                <div className="sticky top-[calc(var(--header-height)+1px)] z-30 ml-auto hidden h-[90svh] w-44 flex-col gap-4 overflow-hidden overscroll-none pb-8 lg:flex 2xl:w-52">
                    <div className="h-(--top-spacing) shrink-0"></div>
                    <div className="no-scrollbar flex flex-col gap-8 overflow-y-auto">
                        <DocsTableOfContents toc={toc} />
                    </div>
                    <div className="mt-2 xl:pt-4">
                        <TOCAds />
                    </div>
                </div>
            </div>
        );
    },
});

function Page() {
    const data = useFumadocsLoader(Route.useLoaderData());

    return (
        <div className="container-wrapper flex min-h-svh w-full flex-col [--footer-height:calc(var(--spacing)*14)] [--header-height:calc(var(--spacing)*14)] [--sidebar-min-width:12rem] [--sidebar-width:14rem]">
            <Topbar />

            <div className="flex gap-4 2xl:gap-5">
                <Sidebar
                    tree={data.pageTree}
                    className="sticky top-(--header-height) h-[calc(100svh-3rem)] w-(--sidebar-width) min-w-(--sidebar-min-width) max-md:hidden"
                />
                <div className="min-w-0 grow">
                    <Suspense>{clientLoader.useContent(data.path)}</Suspense>
                </div>
            </div>
        </div>
    );
}
