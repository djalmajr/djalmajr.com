import type { UIStrings } from "../types";

export default {
  buttons: {
    backLink: "Volver a {{section}}",
    goBack: "Volver",
    nextPost: "Publicación siguiente",
    previousPost: "Publicación anterior",
    rss: "Feed RSS",
    sharePost: "Compartir:",
    shareVia: "Compartir vía {{platform}}",
    themeToggle: "Cambiar tema",
    view: "Ver",
    viewExternal: "Ver original",
  },
  footer: {
    allRights: "Todos los derechos reservados.",
    builtWith: "Hecho con",
    devSite: "Visita mi sitio de dev",
  },
  nav: {
    cv: "CV",
    dev: "Dev",
    home: "Inicio",
    posts: "Blog",
    projects: "Portafolio",
    tags: "Etiquetas",
  },
  notFound: {
    goHome: "Volver al inicio",
    message: "Página no encontrada",
    title: "404: Página no encontrada",
  },
  pages: {
    cvSubtitle: "Un poco de mi trayectoria.",
    cvTitle: "Currículum",
    education: "Formación",
    experience: "Experiencia profesional",
    homeSubtitle: "",
    homeTitle: "Inicio",
    postsSubtitle: "Notas personales, ideas y cosas que me interesan.",
    postsTitle: "Blog",
    projectsSubtitle: "Cosas que he construido.",
    projectsTitle: "Portafolio",
    skills: "Habilidades",
    tagsSubtitle: "Explora el contenido por tema.",
    tagsTitle: "Etiquetas",
  },
  pagination: {
    next: "Más antiguos",
    page: "Página {{current}} de {{total}}",
    prev: "Más recientes",
  },
  sidebar: {
    socialLinks: "Redes sociales",
  },
  tags: {
    label: "Etiquetas",
    taggedWith: 'Contenido con la etiqueta "{{tag}}"',
    uniqueTopics: "{{count}} temas únicos",
  },
} satisfies UIStrings;
