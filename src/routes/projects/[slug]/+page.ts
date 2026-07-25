import { error } from '@sveltejs/kit';
import data from '$lib/data/projects.json';
import { projectDetails, defaultMermaid } from '$lib/data/project-details';
import type { ProjectsData } from '$lib/types';

export const prerender = true;

export function load({ params }: { params: { slug: string } }) {
  const { projects } = data as ProjectsData;
  const project = projects.find((p) => p.slug === params.slug);
  if (!project) error(404, 'Project not found');

  const detail = projectDetails[params.slug];
  const mermaid = detail?.mermaid ?? defaultMermaid(project.name, project.highlights);
  const parent = detail?.parent ? projects.find((p) => p.slug === detail.parent) : undefined;
  const children = (detail?.children ?? [])
    .map((slug) => projects.find((p) => p.slug === slug))
    .filter((p): p is (typeof projects)[number] => Boolean(p));

  return { project, mermaid, seo: detail?.seo, parent, children };
}
