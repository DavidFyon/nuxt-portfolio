import { v4 as uuidv4 } from "uuid"

export const state = () => ({
  projects: [
    {
      id: uuidv4(),
      title: "Wattsense",
      slug: "wattsense",
      image: "console/home.jpg",
      tags: ["ALL", "UI", "UX"],
      app: true,
    }
  ]
})

export const getters = {
  getProjectById: (state) => (id) => {
    return state.projects.find((project) => project.slug == id)
  }
}
