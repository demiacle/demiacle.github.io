import type { Project } from '../types';
// Required fields are title and img_poster (see src/types.ts)
// DUMMY DATA: replace before publishing.
const data: Project = {
  title: 'Rapid-GIS',
  featured: true,
  about: 'A tool suite for org management and aircraft site survey data collection and visualization',
  features: 'Geo-spatial data visualization in 3d using Mapbox · Organizational RBAC · Compliant form PDF generation',
  stack: 'React · Node · Express · MongoDB',
  img_poster: 'rapid_gis.jpg',
  url_link: 'https://specialtacticssolutions.com/rapid-gis/',
  sort_order: -1,
};

export default data;
