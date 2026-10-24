import { profile } from "./portfolio.js";
export function getMetadata(project, notFound = false) {
  return {
    title: notFound
      ? "Page not found | Ayushi Baidya"
      : project
        ? `${project.name} | Ayushi Baidya — Software Engineer`
        : "Ayushi Baidya | Software Engineer · MS CS ’27",
    description: project
      ? project.description
      : `Ayushi Baidya is an MS Computer Science student at Northeastern University, graduating May 2027. Explore backend, full-stack, and systems projects. Boston, MA. ${profile.availability}`,
    url: `${profile.site}${project ? `/projects/${project.slug}/` : "/"}`,
  };
}
