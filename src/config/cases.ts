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
      title: "Retours d’experiences",
      items: [
        {
          title: "Thales",
          href: "/cases/thales/",
        },
        {
          title: "OpenClassrooms",
          href: "/cases/openclassrooms/",
        },
        {
          title: "Decathlon",
          href: "/cases/decathlon/",
        },
      ],
    },
  ],
}