import fs from "node:fs/promises";
import path from "node:path";
import { RegistryItem } from "shadcn/schema";

import { registries } from "./data";

const REGISTRY_PATH = path.join(process.cwd(), "public/r/");

const SOURCE_PATH = path.join(process.cwd(), "/src/");

const buildMCP = async (registries: RegistryItem[]) => {
    const mcp = {
        $schema: "https://ui.shadcn.com/schema/registry.json",
        name: "PaceKit GSAP",
        homepage: "https://gsap.pacekit.dev",
        items: [
            {
                name: "index",
                type: "registry:style",
                dependencies: ["tw-animate-css", "class-variance-authority", "lucide-react"],
                registryDependencies: ["utils"],
                cssVars: {},
                files: [],
            },
            ...registries,
        ],
    };
    await fs.writeFile(REGISTRY_PATH + "mcp.json", JSON.stringify(mcp), {
        encoding: "utf8",
    });
    await fs.writeFile(REGISTRY_PATH + "registry.json", JSON.stringify(mcp), {
        encoding: "utf8",
    });
};

const buildRegistry = async (path: string, registries: RegistryItem[]) => {
    try {
        await fs.mkdir(path, { recursive: true });
    } catch (e) {
        console.info(e);
    }

    for (const registry of registries) {
        const DEST = path + registry.name + ".json";
        const newFiles = [];
        for (const file of registry.files ?? []) {
            let filePath = SOURCE_PATH + file.path;
            if (file.type == "registry:hook") {
                filePath = SOURCE_PATH + file.path;
            }
            const content = await fs.readFile(filePath, { encoding: "utf8" });
            newFiles.push({
                ...file,
                content,
            });
        }
        await fs.writeFile(DEST, JSON.stringify({ ...registry, files: newFiles }), {
            encoding: "utf8",
        });
    }
};

const init = async () => {
    const _registries = registries.map(({ demoPath, ...registry }) => registry);
    await buildRegistry(REGISTRY_PATH, _registries);
    await buildMCP(_registries);
};

init().then(() => {
    console.log("✅ Done!");
});
