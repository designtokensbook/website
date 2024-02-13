import type { NavMenuConfig } from "@/types";

export const navMenuConfig: NavMenuConfig = {
  infosNav: [
    {
      title: "Le livre",
      items: [
        {
          title: "Téléchargez le livre numérique",
          href: "https://frontguys.fr",
          description: "Téléchargez gratuitement le livre au format PDF.",
          external: true,
        },
        {
          title: "Achetez le livre imprimé",
          href: "https://amazon.fr",
          description: "Impression couleur premium, format 16x24 cm",
          external: true,
        },
        {
          title: "Table de matières",
          href: "/#plan",
          description: "Découvrir la structure du livre.",
        },
      ],
    },
  ],
  examplesNav: [
    {
      title: "Les ressources",
      items: [
        {
          title: "Liens",
          href: "/links",
          description: "Retrouvez les liens vers les ressources citées dans le livre.",
        },
        {
          title: "Ateliers",
          href: "/workshops",
          description:
            "Des ateliers pour mettre en place les tokens dans votre organisation.",
          
        },
        {
          title: "Interventions",
          href: "/workshops",
          description:
            "Les retours d'experience de plusieurs équipes Design et Développement.",
          disabled: true
        },
        {
          title: "Verbatims",
          href: "/verbatims",
          description:
            "Des experts répondent à nos questions sur les Design Tokens",
          disabled: true
        },
      ],
    },
  ],
  links: [
    // {
    //   title: "Glossaire",
    //   href: "/docs/getting-started",
    //   disabled: true
    // },
    {
      title: "Les auteurs",
      href: "/authors",
    },
  ],
};
