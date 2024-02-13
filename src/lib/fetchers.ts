import { getCollection } from "astro:content";

export async function getCategories() {
  return [
    ...new Set([].concat.apply((await getCollection("links")).map((post) => post.data.category))),
  ];
}

export async function getLinks() {
  return getCollection("links");
}

export async function getLinksByCategory(category: string) {
  return (await getLinks()).filter((post) => post.data.category === category);
}

export async function getWorkshops() {
  return (await getCollection("workshops")).filter((guide) => guide.data.published);
}
