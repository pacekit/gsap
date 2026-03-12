import { useMemo } from "react";

import { registries } from "@/lib/registry/data";
import { cn } from "@/lib/utils";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { CodeViewer } from "./code-viewer";
import { ComponentViewer } from "./component-viewer";
import { InstallationViewer } from "./installation-viewer";

type Props = {
    name?: string;
    demoPath?: string;
    filePaths?: string[];
    full?: boolean;
    installationCommand?: string;
};

const ExampleViewer = ({ demoPath, filePaths = [], full = false, installationCommand }: Props) => {
    const files = [demoPath, ...filePaths].filter((p) => p !== undefined).map((path) => ({ path }));

    return (
        <Tabs defaultValue="preview" className="gap-4">
            <TabsList>
                {demoPath && <TabsTrigger value="preview">Preview</TabsTrigger>}
                <TabsTrigger value="code">Code</TabsTrigger>
                {installationCommand && <TabsTrigger value="install">Install</TabsTrigger>}
            </TabsList>
            {demoPath && (
                <TabsContent value="preview">
                    <div
                        className={cn(
                            "bg-muted/40 not-prose relative flex items-center justify-center overflow-hidden rounded-2xl p-2 md:p-3",
                            {
                                "w-full": full,
                                "p-2 sm:p-4 md:p-6 lg:p-8 xl:p-16": !full,
                            },
                        )}>
                        <ComponentViewer path={demoPath} />
                    </div>
                </TabsContent>
            )}
            <TabsContent value="code" className="py-0">
                <CodeViewer files={files} />
            </TabsContent>
            {installationCommand && (
                <TabsContent value="install">
                    <InstallationViewer command={installationCommand} />
                </TabsContent>
            )}
        </Tabs>
    );
};

export const DemoPreview = ({ name, ...props }: Props) => {
    const { demoPath, filePaths, installationCommand } = useMemo(() => {
        const generatedContent = registries.find((item) => item.name === name);

        if (!generatedContent) return {};

        return {
            demoPath: generatedContent?.demoPath,
            filePaths: generatedContent?.files?.map((file) => file.path) ?? [],
            installationCommand: `npx shadcn@latest add @pacekit/${generatedContent.name}`,
        };
    }, [name]);

    return (
        <ExampleViewer
            {...props}
            demoPath={demoPath ?? props.demoPath}
            filePaths={filePaths ?? props.filePaths}
            installationCommand={installationCommand ?? props.installationCommand}
        />
    );
};
