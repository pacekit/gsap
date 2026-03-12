import { createServerFn } from "@tanstack/react-start";

import type { Folder } from "fumadocs-core/page-tree";

import { source } from "./source";

let singletonTree: Folder | null = null;

function sanitizePageTree(node: any): any {
    if (!node || typeof node !== "object") {
        return node;
    }

    if (Array.isArray(node)) {
        return node.map(sanitizePageTree);
    }

    const newNode: any = {};
    for (const [key, value] of Object.entries(node)) {
        if (key === "icon") {
            continue;
        }
        newNode[key] = sanitizePageTree(value);
    }

    return newNode;
}

const loader = createServerFn({
    method: "GET",
}).handler(() => {
    const cleanTree = sanitizePageTree(source.pageTree);

    return {
        tree: cleanTree as object,
    };
});

export const getPageTree = async (): Promise<Folder> => {
    if (!singletonTree) {
        const data = await loader();
        singletonTree = data.tree as Folder;
    }
    return singletonTree;
};
