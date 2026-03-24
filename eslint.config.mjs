import { tanstackConfig } from "@tanstack/eslint-config";

import { defineConfig, globalIgnores } from "eslint/config";

const eslintConfig = defineConfig([
    ...tanstackConfig,
    globalIgnores(["out/**", "build/**", "next-env.d.ts", ".source/**", ".output/**", "scripts/**", ".vercel/**"]),
    {
        rules: {
            "@typescript-eslint/array-type": "off",
            "@typescript-eslint/no-unnecessary-condition": "off",
            "@typescript-eslint/consistent-type-imports": "off",
            "import/order": "off",
            "@typescript-eslint/naming-convention": "off",
            "import/consistent-type-specifier-style": "off",
            "@typescript-eslint/require-await": "off",
            "@typescript-eslint/no-non-null-asserted-optional-chain": "off",
            "no-shadow": "off",
            "@typescript-eslint/ban-ts-comment": "off",
            "no-restricted-syntax": "off",
            "@typescript-eslint/no-unnecessary-type-assertion": "off",
        },
    },
    {
        files: ["**/*.{ts,tsx,js,jsx}"],
        ignores: ["src/lib/env.ts"],
        rules: {
            "no-restricted-syntax": [
                "error",
                {
                    selector: "MemberExpression[object.name='process'][property.name='env']",
                    message: "Use @/lib/env instead of process.env",
                },
            ],
        },
    },
]);

export default eslintConfig;
