import type { NavMenuConfig } from "@/types";

export const navMenuConfig: NavMenuConfig = {
  infosNav: [
    {
      title: "Le livre",
      items: [
        {
          title: "Téléchargez le livre numérique",
          href: "https://frontguys.fr/the-design-tokens-book/",
          description: "Téléchargez gratuitement le livre au format PDF sur Fronguys.fr",
          external: true,
        },
        {
          title: "Achetez le livre imprimé",
          href: "https://link.designtokensbook.com/buy",
          description: "Impression couleur premium, format 16x24 cm sur Amazon.fr",
          external: true
        },
        {
          title: "Assistez aux meetups",
          href: "https://www.meetup.com/fr-FR/designops-meetup/",
          description: "Découvrez les meetups DesignOps associés au livre.",
          external: true,
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
            disabled: true
        },
        {
          title: "Retours d'experience",
          href: "/cases",
          description:
            "Les retours d'experience de plusieurs équipes Design et Développement.",
          disabled: true
        },
        {
          title: "Points de vue",
          href: "/verbatims",
          description:
            "Des experts livrent leurs reflexions sur les Design Tokens.",
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
