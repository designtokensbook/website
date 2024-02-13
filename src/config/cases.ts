import type { CasesConfig } from "@/types"

export const casesConfig: CasesConfig = {
  mainNav: [
    {
      title: "Cases",
      href: "/cases/thales/",
    },
    {
      title: "Ateliers",
      href: "/workshops",
    },
  ],
  sidebarNav: [
    {
      title: "Cases",
      items: [
        {
          title: "Thales",
          href: "/cases/thales/",
        },
      ],
    },
    // {
    //   title: "Documentation",
    //   items: [
    //     {
    //       title: "Introduction",
    //       href: "/docs/documentation",
    //     },
    //     {
    //       title: "Contentlayer",
    //       href: "/docs/in-progress",
    //       disabled: true,
    //     },
    //     {
    //       title: "Components",
    //       href: "/docs/documentation/components",
    //     },
    //     {
    //       title: "Code Blocks",
    //       href: "/docs/documentation/code-blocks",
    //     },
    //     {
    //       title: "Style Guide",
    //       href: "/docs/documentation/style-guide",
    //     },
    //   ],
    // },
  ],
}