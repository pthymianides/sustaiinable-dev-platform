import { Config } from "@measured/puck";
import Hero from "../components/home/Hero";
import ImpactMetrics from "../components/home/ImpactMetrics";
import ProjectsGrid from "../components/projects/ProjectsGrid";

export const config: Config = {
  components: {
    Hero: {
      render: Hero,
      defaultProps: {},
    },
    ImpactMetrics: {
      render: ImpactMetrics,
      defaultProps: {},
    },
    ProjectsGrid: {
      render: ProjectsGrid,
      defaultProps: {},
    },
  },
};