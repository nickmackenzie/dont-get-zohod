import nextra from "nextra";

const withNextra = nextra({
    theme: "nextra-theme-docs",
    themeConfig: "./theme.config.tsx",
    staticImage: true,
    latex: true,
    defaultShowCopyCode: true,
});

export default withNextra({
    reactStrictMode: true,
    eslint: { ignoreDuringBuilds: true },
    i18n: {
        locales: ["en"], // List all locales you want to support
        defaultLocale: "en", // Set your default locale
    },
});
