import { v4 as uuidv4 } from "uuid"

export const state = () => ({
  projects: [
    {
      id: uuidv4(),
      name: "Wattsense",
      slug: "wattsense",
      image: "console/home.jpg",
      link: "wattsense/web",
      tags: ["ALL", "UI", "UX"],
      app: true,
    },
    {
      id: uuidv4(),
      name: "Wattsense",
      slug: "wattsense",
      image: "console/home.jpg",
      link: "wattsense/web",
      tags: ["ALL", "UI"],
      app: true,
    },
    {
      id: uuidv4(),
      name: "Wattsense",
      slug: "wattsense",
      image: "console/home.jpg",
      link: "wattsense/web",
      tags: ["ALL", "UI", "UX"],
      app: true,
    },
  ],
});
