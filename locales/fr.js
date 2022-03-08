import fr from './general/fr.json'
import projectsFr from "./projects/projects-fr.json";
import metaFr from './meta/meta-fr.json'

export default {
  ...fr,
  projects: {
    ...projectsFr,
  },
  meta: {
    ...metaFr,
  },
};
