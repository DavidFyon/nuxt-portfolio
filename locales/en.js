import en from './general/en.json'
import projectsEn from "./projects/projects-en.json";
import metaEn from './meta/meta-en.json'

export default {
  ...en,
  projects: {
    ...projectsEn,
  },
  meta: {
    ...metaEn,
  },
};
