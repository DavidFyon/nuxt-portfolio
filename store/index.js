import { v4 as uuidv4 } from "uuid"

export const state = () => ({
  projects: [
    {
      id: uuidv4(),
      title: "NGTV Expérience",
      slug: "ngtv-app",
      logo: "ngtv.svg",
      image: "login.jpg",
      types: ["ALL", "APP"],
      tags: ["ALL", "UI", "UX"],
      date: "2021-2022",
    },
    {
      id: uuidv4(),
      title: "NGTV Expérience",
      slug: "ngtv-console",
      logo: "ngtv.svg",
      image: "home.jpg",
      types: ["ALL", "APP"],
      tags: ["ALL", "UI", "UX", "DEV"],
      date: "2021-2022",
    },
    {
      id: uuidv4(),
      title: "NGTV Expérience",
      slug: "ngtv-web",
      logo: "ngtv.svg",
      image: "sportcenters.jpg",
      types: ["ALL", "WEB"],
      tags: ["ALL", "UI", "UX", "DEV"],
      date: "2021",
    },
    {
      id: uuidv4(),
      title: "Wattsense",
      slug: "wattsense-web",
      logo: "wattsense.svg",
      image: "home-illustration.jpg",
      types: ["ALL", "WEB"],
      tags: ["ALL", "UI", "UX", "DEV"],
      date: "2021",
    },
    {
      id: uuidv4(),
      title: "Wattsense",
      slug: "wattsense-console",
      logo: "wattsense.svg",
      image: "home.jpg",
      types: ["ALL", "APP"],
      tags: ["ALL", "UI", "UX", "DEV"],
      date: "2021",
    },
  ],
});

export const getters = {
  getProjectById: (state) => (id) => {
    return state.projects.find((project) => project.slug == id)
  }
}
