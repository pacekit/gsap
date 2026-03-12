import type { RegistryItem } from "shadcn/schema";

export type ShadcnRegistryItem = RegistryItem & {
    title: string;
    description: string;
};

export type DataRegistry = ShadcnRegistryItem & {
    demoPath: string;
};
