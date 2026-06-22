export type Tier = 'A' | 'B' | 'C';

export interface Project {
  slug: string;
  name: string;
  tier: Tier;
  tagline: string;
  description: string;
  accent?: string;
  tech: string[];
  repo: string | null;
  homepage: string | null;
  lastCommit: string | null;
  metrics: { files: number; sizeMB: number };
  highlights: string[];
  featured: boolean;
}

export interface ProjectsData {
  generatedAt: string;
  projects: Project[];
}
