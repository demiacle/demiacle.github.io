import type { Project } from '../types';

// Load every project file in this directory (Vite replacement for require.context).
const modules = import.meta.glob<Project>(['./*.ts', '!./index.ts'], {
  eager: true,
  import: 'default',
});

const projects = Object.values(modules).sort((a, b) => a.sort_order - b.sort_order);

export default projects;
